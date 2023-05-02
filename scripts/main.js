// Page buttons
const toggle = body.querySelector(".toggle");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");

// Sidebar toggle
toggle.addEventListener("click", () => {
  if(localStorage.closed != "close" ){
    sidebar.classList.toggle("close", true);
    localStorage.closed = "close";
  }
  else{
    sidebar.classList.toggle("close", false);
    localStorage.closed = "open";
  }
})

// Toggle Dark Mode (part in html to not flash on page load)
if (localStorage.toggled != "dark" ){
  modeText.innerText = "Dark mode";
} else {
  modeText.innerText = "Light mode";
}

modeSwitch.addEventListener("click" , () => {
	// Localstorage values are always strings (no booleans!)  
	if (localStorage.toggled != "dark" ){
		body.classList.toggle("dark", false);
		localStorage.toggled = "dark";
		modeText.innerText = "Light mode";
	} else {
		body.classList.toggle("dark", false);
		localStorage.toggled = "light";
		modeText.innerText = "Dark mode";
	}
});

// Adjust sidebar for screensize (mobile)
window.addEventListener("resize", () => {
	if(window.innerWidth < 900){
	  localStorage.setItem('closed', 'close');
	  sidebar.classList.add('close');
	}
});

if(window.innerWidth < 900){
	localStorage.setItem('closed', 'close');
	sidebar.classList.add('close');
}