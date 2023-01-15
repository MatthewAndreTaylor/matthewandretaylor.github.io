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
              <div class="float-right text-muted small">Dec. 20th 2022</div>
              <h2 class="card-title subtitle">Finished Second year first semester</h2>
              <p class="card-text">I started working on larger projects and collaborating on projects with my peers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

class Projects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<h1 class="text title" id="projects">Projects</h1>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class= "col-md-6">
            <div class="card mb-4">
              <div class = "card-header rounded-bottom" style ="border-radius: 20px;">
                <img class="card-img-top" src="./images/image.png?format=webp" alt="matching game grid tiles" loading="lazy">
              </div>
              <div class="card-body text-center" style ="border-radius: 20px;">
                  <small class="card-title">Matching Game</small>
                  <p>
                    <small class="card-text badge">JavaScript <i class='bx bxl-javascript'></i></small>
                    <small class="card-text badge">Real-time Databse <i class='bx bx-server'></i></small>
                    <small class="card-text badge">React Native <i class='bx bxl-react' ></i></small>
                  </p>
                  <a href="https://github.com/MatthewAndreTaylor/MatchingGame" target="_blank" class="btn btn-primary">
                    <small>View on Github</small>
                  </a>
              </div>
            </div>
          </div>
          <div class= "col-md-6">
            <div class="card mb-4">
              <div class = "card-header rounded-bottom" style ="border-radius: 20px;">
                <img class="card-img-top" src="./images/trees.png?format=webp" alt="top down perspective of trees from the sky" loading="lazy">
              </div>
              <div class="card-body text-center" style ="border-radius: 20px;">
                  <small class="card-title">3D Forest Visualization</small>
                  <p>
                    <small class="card-text badge">Java <i class='bx bxl-java'></i></small>
                    <small class="card-text badge">JavaFX </small>
                    <small class="card-text badge">Maven <i class='bx bx-package'></i></small>
                  </p>
                  <a href="https://github.com/MatthewAndreTaylor/207CourseProject" target="_blank" class="btn btn-primary">
                    <small>View on Github</small>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

class More extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<h1 class="text title" id="misc">Miscellaneous</h1>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-header rounded-bottom" style="border-radius: 20px;">
              <img class="card-img-top" src="./images/platformer.png?format=webp" alt="sample platformer level"
                loading="lazy">
            </div>
            <div class="card-body text-center" style="border-radius: 20px;">
              <small class="card-title">2d Platformer Builder</small>
              <p><small class="card-text badge">JavaScript <i class='bx bxl-javascript'></i></small></p>
              <a href="https://github.com/MatthewAndreTaylor/2D-Platformer-Playground" target="_blank"
                class="btn btn-primary">
                <small>View on Github</small>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-header rounded-bottom" style="border-radius: 20px;">
              <img class="card-img-top" src="./images/smartcontract.png?format=webp" alt="web3 page" loading="lazy">
            </div>
            <div class="card-body text-center" style="border-radius: 20px;">
              <small class="card-title">Web3 Component Template</small>
              <p><small class="card-text badge">JavaScript <i class='bx bxl-javascript'></i></small></p>
              <a href="https://github.com/MatthewAndreTaylor/Web3-Component-Template" target="_blank"
                class="btn btn-primary">
                <small>View on Github</small>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-header rounded-bottom" style="border-radius: 20px;">
              <img class="card-img-top" src="./images/profile.gif?format=webp" alt="generative art sample images"
                loading="lazy">
            </div>
            <div class="card-body text-center" style="border-radius: 20px;">
              <small class="card-title">Generative Art</small>
              <p><small class="card-text badge">Python</small><small class="card-text badge">Solidity</small></p>
              <div class="dropup">
                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  View
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a href="https://opensea.io/collection/fuzziestpixels" target="_blank"
                      class="dropdown-item"><small>Mainnet</small></a></li>
                  <li><a href="https://testnets.opensea.io/collection/fuzziest-pixels-test" target="_blank"
                      class="dropdown-item"><small>Testnet</small></a></li>
                  <li><a href="https://github.com/MatthewAndreTaylor/OpenSeaMintingBot" target="_blank"
                      class="dropdown-item"><small>Github</small></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("nav-component", NavComponent);
customElements.define("roadmap-component", Timeline);
customElements.define("projects-component", Projects);
customElements.define("more-component", More);
