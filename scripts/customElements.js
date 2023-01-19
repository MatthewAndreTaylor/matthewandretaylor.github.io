class NavComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <header>
      <div class="text">
        <span class="name">Navigation</span>
      </div>
      <i class='bx bx-chevron-right toggle'></i>
  </header>
  <div class="menu-bar">
      <div class="menu">
          <ul class="menu-links" id="menu-links">
              <li>
                  <a class="list-group-item-action" href="#about">
                      <i class='bx bx-user-pin icon'></i>
                      <span class="text nav-text">About</span>
                  </a>
              </li>
              <li>
                  <a class="list-group-item-action" href="#projects">
                  <i class='bx bx-book icon'></i>
                      <span class="text nav-text">Projects</span>
                  </a>
              </li>
              <li>
                  <a class="list-group-item-action" href="#misc">
                      <i class='bx bx-collection icon'></i>
                      <span class="text nav-text">Miscellaneous</span>
                  </a>
              </li>
              <li>
                  <a href="https://github.com/MatthewAndreTaylor">
                      <i class='bx bxl-github icon'></i>
                      <span class="text nav-text">Github</span>
                  </a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/matthew-taylor-93b113260">
                      <i class='bx bxl-linkedin icon'></i>
                      <span class="text nav-text">Linkedin</span>
                  </a>
              </li>
              <li>
                  <a href="https://discord.com/users/318497127238074379">
                      <i class='bx bxl-discord-alt icon'></i>
                      <span class="text nav-text">Discord</span>
                  </a>
              </li>
          </ul>
      </div>
      <div class="bottom-content">
          <ul>
            <li class="mode">
                <div class="sun-moon">
                    <i class='bx bx-moon icon moon'></i>
                    <i class='bx bx-sun icon sun'></i>
                </div>
                <span class="mode-text text"></span>

                <div class="toggle-switch">
                    <span class="switch"></span>
                </div>
            </li>  
          </ul>
      </div>
  </div>
      `;
  }
}

class Timeline extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div class="container py-2 mt-4 mb-4">
      <div class="row no-gutters">
        <div class="col-sm"></div>
        <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div class="row h-50">
            <div class="col">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
          <div class="m-2 pill">
            <span class="badge badge-pill bg-light border">&nbsp;</span>
          </div>
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
        </div>
        <div class="col-sm py-2">
          <div class="card">
            <div class="card-body">
              <div class="float-right text-muted small">Sept. 2022</div>
              <h2 class="card-title subtitle">Computer Science at the University of Toronto</h2>
              <p class="card-text">I entered university with knowledge of java as my first programming language. My first year courses for data structures and algorithms were written in python.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-sm py-2">
          <div class="card">
            <div class="card-body">
            <div class="float-right text-muted small">Jul. 2022</div>
              <h2 class="card-title subtitle">Accepted into Specialist program</h2>
              <p class="card-text">I am very exicted and interested to learn about machine learning and cryptography as a specialization.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
          <div class="m-2 pill">
            <span class="badge badge-pill bg-light border">&nbsp;</span>
          </div>
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
      <div class="row no-gutters">
        <div class="col-sm"></div>
        <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
          <div class="m-2 pill">
            <span class="badge badge-pill bg-light border">&nbsp;</span>
          </div>
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
        </div>
        <div class="col-sm py-2">
          <div class="card">
            <div class="card-body">
              <div class="float-right text-muted small">Dec. 2022</div>
              <h2 class="card-title subtitle">Finished Second year first semester</h2>
              <p class="card-text">I started working on larger projects and collaborating on projects with my peers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("nav-component", NavComponent);
customElements.define("roadmap-component", Timeline);