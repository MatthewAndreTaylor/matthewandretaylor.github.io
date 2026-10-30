from github import Github, Auth, RateLimitExceededException
from jinja2 import Template
import json
import os
from pathlib import Path
import re
import urllib.request
import yaml


IGNORED_REPOS = {"matthewandretaylor.github.io", "MatthewAndreTaylor"}
IGNORED_TOPICS = {"prototype"}
IGNORED_LANGUAGES = {"html", "css", "makefile"}

PROJECTS_TEMPLATE = Template(
    """{% for project in projects -%}
- title: {{ yaml_val(project.title) }}
{% if project.languages %}  languages:
{% for lang in project.languages %}    - {{ yaml_val(lang) }}
{% endfor %}{% else %}  languages: []
{% endif %}  github_url: {{ yaml_val(project.github_url) }}
  description: {{ yaml_val(project.description) }}
{% if not loop.last %}
{% endif %}{% endfor %}"""
)


def yaml_val(value: str) -> str:
    """Format a string safely as an inline YAML scalar."""
    if value is None or value == "":
        return '""'
    if "\n" not in value and "\r" not in value:
        try:
            parsed = yaml.safe_load(f"v: {value}")
            if isinstance(parsed, dict) and parsed.get("v") == value:
                return value
        except yaml.YAMLError:
            pass
    return json.dumps(value, ensure_ascii=False)


def normalize_url(url: str) -> str:
    return (url or "").strip().rstrip("/").lower()


def is_user_github_repo(url: str, username: str) -> bool:
    norm = normalize_url(url)
    user_lower = username.lower()
    return norm.startswith(f"https://github.com/{user_lower}/") or norm.startswith(
        f"http://github.com/{user_lower}/"
    )


def filter_languages(languages: list[str]) -> list[str]:
    return [lang for lang in languages if lang.lower() not in IGNORED_LANGUAGES]


def fetch_pinned_repo_names(username: str, token: str | None = None) -> list[str]:
    """Fetch pinned repository names in profile order via GraphQL API or public profile fallback."""
    if token:
        query = """
        query($login: String!) {
          user(login: $login) {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                }
              }
            }
          }
        }
        """
        payload = json.dumps(
            {"query": query, "variables": {"login": username}}
        ).encode("utf-8")
        req = urllib.request.Request(
            "https://api.github.com/graphql",
            data=payload,
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json",
                "User-Agent": "MatthewAndreTaylor-Portfolio-Sync",
            },
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                nodes = (
                    data.get("data", {})
                    .get("user", {})
                    .get("pinnedItems", {})
                    .get("nodes", [])
                )
                pinned = [node["name"] for node in nodes if node and node.get("name")]
                if pinned:
                    return pinned
        except Exception:
            pass

    req = urllib.request.Request(
        f"https://github.com/{username}",
        headers={"User-Agent": "MatthewAndreTaylor-Portfolio-Sync"},
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode("utf-8")

    pinned: list[str] = []
    pattern = re.compile(rf'href="/{re.escape(username)}/([^"/#?]+)"', re.IGNORECASE)
    for block in html.split("pinned-item-list-item")[1:]:
        match = pattern.search(block)
        if match and match.group(1) not in pinned:
            pinned.append(match.group(1))
    return pinned


def fetch_github_projects(
    gh: Github, username: str, existing_by_url: dict[str, dict] | None = None
) -> list[dict]:
    existing_by_url = existing_by_url or {}
    rate_limited = False

    try:
        user = gh.get_user(username)
        raw_repos = list(user.get_repos(type="owner"))
    except RateLimitExceededException:
        rate_limited = True
        raw_repos = list(gh.search_repositories(query=f"user:{username} fork:false"))

    ignored_repos_lower = {r.lower() for r in IGNORED_REPOS}
    repos = [
        repo
        for repo in raw_repos
        if not repo.private
        and not repo.fork
        and repo.name.lower() not in ignored_repos_lower
        and not ({t.lower() for t in (repo.topics or [])} & IGNORED_TOPICS)
    ]

    # Order projects by last edit/push date descending
    repos.sort(
        key=lambda r: (r.pushed_at or r.created_at, r.name.lower()), reverse=True
    )

    projects = []
    for repo in repos:
        norm_url = normalize_url(repo.html_url)
        sorted_languages: list[str] = []

        if not rate_limited and gh.rate_limiting[0] <= 1:
            rate_limited = True

        if not rate_limited:
            try:
                repo_languages = {
                    lang: count
                    for lang, count in repo.get_languages().items()
                    if isinstance(count, int)
                }
                sorted_languages = [
                    lang
                    for lang, _ in sorted(
                        repo_languages.items(), key=lambda item: item[1], reverse=True
                    )
                ]
            except RateLimitExceededException:
                rate_limited = True

        if rate_limited:
            if norm_url in existing_by_url and existing_by_url[norm_url].get("languages"):
                sorted_languages = list(existing_by_url[norm_url]["languages"])
            elif repo.language:
                sorted_languages = [repo.language]

        projects.append(
            {
                "title": repo.name,
                "languages": filter_languages(sorted_languages),
                "github_url": repo.html_url,
                "description": (repo.description or "").strip(),
            }
        )
    return projects


def merge_projects(
    existing_projects: list[dict],
    fetched_projects: list[dict],
    pinned_names: list[str],
    username: str,
) -> list[dict]:
    fetched_by_name = {proj["title"].lower(): proj for proj in fetched_projects}
    seen_urls: set[str] = set()

    # 1. Projects pinned on GitHub profile first (in pinned order)
    pinned_projects: list[dict] = []
    for name in pinned_names:
        proj = fetched_by_name.get(name.lower())
        if proj:
            norm_url = normalize_url(proj["github_url"])
            if norm_url not in seen_urls:
                pinned_projects.append(proj)
                seen_urls.add(norm_url)

    # 2. Manually added external/non-user-repo projects (e.g., MattBlog)
    manual_projects: list[dict] = []
    for entry in existing_projects:
        url = entry.get("github_url", "")
        if not is_user_github_repo(url, username):
            norm_url = normalize_url(url)
            if norm_url not in seen_urls:
                manual_projects.append(
                    {
                        "title": str(entry.get("title", "")),
                        "languages": filter_languages(
                            list(entry.get("languages") or [])
                        ),
                        "github_url": str(url),
                        "description": str(entry.get("description") or ""),
                    }
                )
                seen_urls.add(norm_url)

    # 3. Remaining GitHub projects ordered by last edit date
    remaining_projects: list[dict] = []
    for proj in fetched_projects:
        norm_url = normalize_url(proj["github_url"])
        if norm_url not in seen_urls:
            remaining_projects.append(proj)
            seen_urls.add(norm_url)

    return pinned_projects + manual_projects + remaining_projects


def main() -> None:
    token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
    username = os.environ.get("GITHUB_USERNAME", "MatthewAndreTaylor")
    repo_root = Path(__file__).resolve().parent.parent
    projects_path = Path(
        os.environ.get("PROJECTS_FILE", repo_root / "data" / "projects.yaml")
    )

    if token:
        auth = Auth.Token(token)
        gh = Github(auth=auth)
    else:
        gh = Github(retry=None)

    try:
        existing_projects = []
        if projects_path.exists():
            loaded = yaml.safe_load(projects_path.read_text(encoding="utf-8"))
            if isinstance(loaded, list):
                existing_projects = loaded

        existing_by_url = {
            normalize_url(entry.get("github_url", "")): entry
            for entry in existing_projects
            if isinstance(entry, dict) and entry.get("github_url")
        }

        pinned_names = fetch_pinned_repo_names(username, token)
        fetched_projects = fetch_github_projects(gh, username, existing_by_url)
        merged_projects = merge_projects(
            existing_projects, fetched_projects, pinned_names, username
        )

        rendered = PROJECTS_TEMPLATE.render(
            projects=merged_projects, yaml_val=yaml_val
        )
        if not rendered.endswith("\n"):
            rendered += "\n"

        projects_path.parent.mkdir(parents=True, exist_ok=True)
        projects_path.write_text(rendered, encoding="utf-8")
        print(f"Updated {projects_path} with {len(merged_projects)} projects.")
    finally:
        gh.close()


if __name__ == "__main__":
    main()
