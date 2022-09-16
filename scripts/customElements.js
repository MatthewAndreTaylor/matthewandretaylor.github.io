  class NavComponent extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.innerHTML = `
    <header>
      <div class="image-text">
          <span class="image">
              <img src="" alt="">
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
          <ul class="menu-links" id="menu-links">
              <li>
                  <a class="list-group-item-action" href="#list-item-1">
                      <i class='bx bx-home-alt icon'></i>
                      <span class="text nav-text">Dashboard</span>
                  </a>
              </li>
              <li>
                  <a class="list-group-item-action" href="#list-item-2">
                  <i class='bx bx-book icon'></i>
                      <span class="text nav-text">Projects</span>
                  </a>
              </li>
              <li>
                  <a class="list-group-item-action" href="#list-item-3">
                      <i class='bx bx-collection icon'></i>
                      <span class="text nav-text">More</span>
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
              <div class="float-right text-muted small">Sept. 2022</div>
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
            <div class="float-right text-muted small">Jul. 2022</div>
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

  class About extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.innerHTML = `<h1 class="text title" id="list-item-1">Matthew Taylor</h1>
      <div class="container my-5">
        <div class="card row flex-row">
          <img class="col-lg-4 card-img-start img-fluid p-0 portrait" src="" alt="Matthew Taylor Personal Photo"/>
          <div class="col-lg-8 card-body">
              <h1 class="card-title">Who is Matthew Taylor...</h1>
              <p class="card-text">...</p>
          </div>
        </div>
      </div>
      <div class="container my-5">
        <div class="card row flex-row-reverse">
        <a data-toggle="modal" data-target=".bd-example-modal-lg">
          <img class="col-lg-4 card-img-end img-fluid p-0 portrait" src="" alt="Matthew Taylor Resume"/>
        </a>
          <div class="col-lg-8 card-body">
              <h1 class="card-title">Resume</h1>
              <p class="card-text">...</p>
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
      this.innerHTML = `<h1 class="text title" id="list-item-2">My Projects</h1>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class= "col-md-6">
            <div class="card mb-4">
              <div class = "card-header rounded-bottom" style ="border-radius: 20px;">
                <img class="card-img-top" src="./images/unity.png" loading="lazy">
              </div>
              <div class="card-body text-center" style ="border-radius: 20px;">
                  <small class="card-title">Unity</small>
                  <p class="card-text">C# Scripting</p>
                  <a href="#" class="btn btn-primary">
                    <small>View on Github</small>
                  </a>
              </div>
            </div>
          </div>
          <div class= "col-md-6">
            <div class="card mb-4">
              <div class = "card-header rounded-bottom" style ="border-radius: 20px;">
                <img class="card-img-top" src="./images/HelloWorld.png" loading="lazy">
              </div>
              <div class="card-body text-center" style ="border-radius: 20px;">
                  <small class="card-title">Hello</small>
                  <p class="card-text">World</p>
                  <a href="#" class="btn btn-primary">
                    <small>View on Github</small>
                  </a>
              </div>
            </div>
          </div>
          <div class= "col-md-6">
            <div class="card mb-4">
              <div class = "card-header rounded-bottom" style ="border-radius: 20px;">
                <img class="card-img-top" src="" loading="lazy">
              </div>
              <div class="card-body text-center" style ="border-radius: 20px;">
                  <small class="card-title">Coming</small>
                  <p class="card-text">Soon</p>
                  <span class="d-inline-block" tabindex="0" rel="tooltip" data-placement="bottom" title="In Development">
                    <a href="#" target="_blank" class="btn btn-primary disabled">
                      <small>View on Github</small>
                    </a>
                  </span>
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
      this.innerHTML = `<h1 class="text title" id="list-item-3">More Stuff</h1>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class= "col-md-4">
            <div class="card mb-3">
              <div class = "card-header rounded-bottom" style ="border-radius: 20px;">
                <img class="card-img-top" src="./images/python.jpg" loading="lazy">
              </div>
              <div class="card-body text-center" style ="border-radius: 20px;">
                  <small class="card-title">Python</small>
                  <p class="card-text">Bots</p>
                  <a href="" target="_blank" class="btn btn-primary">
                    <small>View on Github</small>
                  </a>
              </div>
            </div>
          </div>
          <div class= "col-md-4">
            <div class="card mb-3">
              <div class = "card-header rounded-bottom" style ="border-radius: 20px;">
                <img class="card-img-top" src="./images/smartcontract.png" loading="lazy">
              </div>
              <div class="card-body text-center" style ="border-radius: 20px;">
                  <small class="card-title">Solidity</small>
                  <p class="card-text">Smart Contracts</p>
                  <a href="" target="_blank" class="btn btn-primary">
                    <small>View on Github</small>
                  </a>
                  <a href="#" class="btn btn-primary" id="fund" rel="tooltip" data-placement="bottom" title="Crypto Wallet Required">
                    <small>Interact</small>
                  </a>
              </div>
            </div>
          </div>
          <div class= "col-md-4">
            <div class="card mb-3">
              <div class = "card-header rounded-bottom" style ="border-radius: 20px;">
                <img class="card-img-top" src="./images/profile.gif" loading="lazy">
              </div>
              <div class="card-body text-center" style ="border-radius: 20px;">
                  <small class="card-title">Polygon</small>
                  <p class="card-text">Nfts</p>
                  <a href="https://opensea.io/collection/fuzziestpixels" target="_blank" class="btn btn-primary">
                    <small>View on Mainnet</small>
                  </a>
                  <a href="https://testnets.opensea.io/collection/fuzziest-pixels-test" target="_blank" class="btn btn-primary">
                    <small>View on Testnet</small>
                  </a>
              </div>
            </div>
          </div>
        </div>`;
    }
  }
  
  customElements.define('nav-component', NavComponent);
  customElements.define('roadmap-component', Timeline);
  customElements.define('about-component', About);
  customElements.define('projects-component', Projects);
  customElements.define('more-component', More);
  