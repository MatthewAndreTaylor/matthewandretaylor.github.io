class NavComponent extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.innerHTML = `
    <header>
      <div class="image-text">
          <span class="image">
              <img src="./images/dog.jpg" alt="">
          </span>
          <div class="text logo-text">
              <span class="name">Welcome!</span>
              <span class="sub">Matt's Stuff</span>
          </div>
      </div>
      <i class='bx bx-chevron-right toggle'></i>
  </header>
  <div class="menu-bar">
      <div class="menu">
          <ul class="menu-links">
              <li>
                  <a href="index.html">
                      <i class='bx bx-home-alt icon' ></i>
                      <span class="text nav-text">Dashboard</span>
                  </a>
              </li>
              <li>
                  <a href="projects.html">
                      <i class='bx bx-store icon'></i>
                      <span class="text nav-text">Projects</span>
                  </a>
              </li>
              <li>
                  <a href="https://github.com/MatthewAndreTaylor">
                      <i class='bx bxl-github icon'></i>
                      <span class="text nav-text">Github</span>
                  </a>
              </li>
              <li>
                  <a href="#">
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
          <li>
              <a href="more.html">
                  <i class='bx bx-collection icon' ></i>
                  <span class="text nav-text">More</span>
              </a>
          </li>
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
          <h5 class="m-2">
            <span class="badge badge-pill bg-light border">&nbsp;</span>
          </h5>
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
        </div>
        <div class="col-sm py-2">
          <div class="card">
            <div class="card-body">
              <div class="float-right text-muted small">September 2022</div>
              <h4 class="card-title">Started Computer Science at the University of Toronto</h4>
              <p class="card-text">...</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-sm py-2">
          <div class="card">
            <div class="card-body">
            <div class="float-right text-muted small">July 2022</div>
              <h4 class="card-title">Accepted into Computer Science Specialist program</h4>
              <p class="card-text">...</p>
            </div>
          </div>
        </div>
        <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
          <h5 class="m-2">
            <span class="badge badge-pill bg-light border">&nbsp;</span>
          </h5>
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
          <h5 class="m-2">
            <span class="badge badge-pill bg-light border">&nbsp;</span>
          </h5>
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
        </div>
        <div class="col-sm py-2">
          <div class="card">
            <div class="card-body">
              <div class="float-right text-muted small">May 11th 2022</div>
              <h4 class="card-title">...</h4>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-sm py-2">
          <div class="card">
            <div class="card-body">
              <div class="float-right text-muted small">Jan 8th 2023</div>
              <h4 class="card-title">More applications</h4>
              <p>...</p>
            </div>
          </div>
        </div>
        <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div class="row h-50">
            <div class="col border-right">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
          <h5 class="m-2">
            <span class="badge badge-pill bg-light border">&nbsp;</span>
          </h5>
          <div class="row h-50">
            <div class="col">&nbsp;</div>
            <div class="col">&nbsp;</div>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>`;
    }
  }
  
  customElements.define('nav-component', NavComponent);
  customElements.define('roadmap-component', Timeline);
  