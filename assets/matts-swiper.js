const swiper = document.getElementById("swiper");
const track = document.getElementById("swiper-track");
const slides = Array.from(track.children);
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentIndex = 0;
let isDragging = false;
let width = track.getBoundingClientRect().width || track.offsetWidth;
let lastMoveSignal = Date.now();

const swiperButtons = document.querySelectorAll(".swiper-button");

swiperButtons.forEach((button) => {
  button.addEventListener("click", () => {
    swiperButtons[currentIndex].classList.toggle("active");
    button.classList.toggle("active");
    slides[currentIndex].querySelector(".swiper-content").classList.toggle("active");
    currentIndex = parseInt(button.getAttribute("data-index"));
    slides[currentIndex].querySelector(".swiper-content").classList.toggle("active");
    updatePosition();
  });
});

swiper.addEventListener("mousedown", startSwipe);
swiper.addEventListener("touchstart", startSwipe);
swiper.addEventListener("mousemove", moveSwipe);
swiper.addEventListener("touchmove", moveSwipe);
swiper.addEventListener("mouseup", endSwipe);
swiper.addEventListener("mouseleave", endSwipe);
swiper.addEventListener("touchend", endSwipe);

function isMouse(event) {
  return /^mouse/.test(event.type);
}

function changeSlide(changeNumber) {
  swiperButtons[currentIndex].classList.toggle("active");
  slides[currentIndex].querySelector(".swiper-content").classList.toggle("active");
  lastMoveSignal = Date.now();
  currentIndex = (currentIndex + changeNumber) % slides.length;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  slides[currentIndex].querySelector(".swiper-content").classList.toggle("active");
  swiperButtons[currentIndex].classList.toggle("active");
}

function startSwipe(event) {
  event.preventDefault();
  lastMoveSignal = Date.now();

  if (isDragging) return;
  isDragging = true;
  if (isMouse(event)) {
    startX = event.clientX;
  } else {
    startX = event.touches[0].clientX;
  }
  prevTranslate = currentTranslate;
  track.style.transition = "none";
}

function moveSwipe(event) {
  if (!isDragging) return;
  lastMoveSignal = Date.now();

  let currentX;
  if (isMouse(event)) {
    currentX = event.clientX;
  } else {
    if (event.touches.length > 1 || (event.scale && event.scale !== 1)) {
      return;
    }
    currentX = event.touches[0].clientX;
  }

  const moveX = currentX - startX;
  currentTranslate = prevTranslate + moveX;
  track.style.transform = `translateX(${currentTranslate}px)`;
}

function endSwipe() {
  if (!isDragging) return;

  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -50 && currentIndex < slides.length - 1) {
    changeSlide(1);
  }
  if (movedBy > 50 && currentIndex > 0) {
    changeSlide(-1);
  }
  updatePosition();
  isDragging = false;
}

function updatePosition() {
  currentTranslate = currentIndex * -width;
  track.style.transition = "transform 0.3s ease-in-out";
  track.style.transform = `translateX(${currentTranslate}px)`;
}

function updateWidth() {
  width = track.getBoundingClientRect().width || track.offsetWidth;
  updatePosition();
}

function autoSlide() {
  if (Date.now() - lastMoveSignal >= 11000) {
    changeSlide(1);
    updatePosition();
  }
}

setInterval(autoSlide, 11000);
window.addEventListener("resize", updateWidth);

// Navbar toggle
const toggle = document.querySelector(".navbar-toggler");

toggle.addEventListener("click", () => {
  ariaExpanded = toggle.getAttribute("aria-expanded");
  toggle.setAttribute("aria-expanded", ariaExpanded === "true" ? "false" : "true");
  const target = document.querySelector(toggle.getAttribute("data-bs-target"));
  toggle.classList.toggle("collapsed");
  target.classList.toggle("show");
});