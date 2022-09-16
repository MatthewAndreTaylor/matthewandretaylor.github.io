/* Attributes handled locally */

// Page buttons
const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

// Sidebar toggle
toggle.addEventListener("click", () =>{
  if(localStorage.closed != "close" ){
    sidebar.classList.toggle("close", true);
    localStorage.closed = "close"
  }
  else{
    sidebar.classList.toggle("close", false);
    localStorage.closed = "open"
  }
})

// Toggle Dark Mode (part in html to not flash on page load)
if (localStorage.toggled != "dark" ){
  modeText.innerText = "Dark mode";
} else {
  modeText.innerText = "Light mode";
}
modeSwitch.addEventListener("click",function(){
   //localstorage values are always strings (no booleans!)  
   if (localStorage.toggled != "dark" ){
      $('body').toggleClass("dark", true );
      localStorage.toggled = "dark";
      modeText.innerText = "Light mode";
   } else {
      $('body').toggleClass("dark", false );
      localStorage.toggled = "light";
      modeText.innerText = "Dark mode";
   }
});

// Adjust sidebar for screensize (mobile)
$(window).resize(function(){
	if($(window).width()<850){
	  localStorage.setItem('closed', 'close');
	  $('.sidebar').addClass('close');
	}
});

if($(window).width()<850){
	localStorage.setItem('closed', 'close');
	$('.sidebar').addClass('close');
}

$(function () {
  $("[rel='tooltip']").tooltip();
});