const swiper = document.getElementById("swiper");
const track = document.getElementById("swiper-track");
const swiperButtons = swiper.querySelectorAll(".swiper-button");
const slides = Array.from(track.children);
let queue = [...slides];
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentIndex = 0;
let isDragging = false;
let width = track.getBoundingClientRect().width || track.offsetWidth;
let lastMoveSignal = Date.now();

function updateQueueDisplay() {
  const len = queue.length;
  const prev2 = queue[(len - 2) % len];
  const prev1 = queue[(len - 1) % len];
  const current = queue[0];
  const next1 = queue[1 % len];
  const next2 = queue[2 % len];
  const displayOrder = [prev2, prev1, current, next1, next2];

  queue.forEach(slide => {
    slide.classList.remove("active");
    slide.style.order = len;
  });

  displayOrder.forEach((slide, idx) => {
    slide.style.order = idx;
  });

  current.classList.add("active");
  track.style.transition = "none";
  track.style.transform = `translateX(${-2 * width}px)`;
  currentTranslate = -2 * width;
  prevTranslate = -2 * width;
}

function rotateQueue(direction) {
  swiperButtons[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + queue.length) % queue.length;
  swiperButtons[currentIndex].classList.add("active");
  if (direction === 1) {
    queue.push(queue.shift());
  } else {
    queue.unshift(queue.pop());
  }

  track.style.transition = "transform 0.2s ease-in-out";
  track.style.transform = `translateX(${direction === 1 ? -3 * width : -1 * width}px)`;
  setTimeout(updateQueueDisplay, 200);
}

swiperButtons.forEach((button) => {
  button.addEventListener("click", () => {
    lastMoveSignal = Date.now();
    swiperButtons[currentIndex].classList.remove("active");
    button.classList.add("active");
    currentIndex = parseInt(button.getAttribute("data-index"));
    queue = [...slides.slice(currentIndex), ...slides.slice(0, currentIndex)];
    updateQueueDisplay();
  });
});

const passive = { passive: true };
swiper.addEventListener("mousedown", startSwipe, passive);
swiper.addEventListener("touchstart", startSwipe, passive);
swiper.addEventListener("mousemove", moveSwipe, passive);
swiper.addEventListener("touchmove", moveSwipe, passive);
swiper.addEventListener("mouseup", endSwipe);
swiper.addEventListener("mouseleave", endSwipe);
swiper.addEventListener("touchend", endSwipe);

function isMouse(event) {
  return /^mouse/.test(event.type);
}

function startSwipe(event) {
  if (isDragging) return;
  lastMoveSignal = Date.now();
  isDragging = true;
  startX = isMouse(event) ? event.clientX : event.touches[0].clientX;
  prevTranslate = currentTranslate;
  track.style.transition = "none";
}

function moveSwipe(event) {
  if (!isDragging) return;
  lastMoveSignal = Date.now();
  const currentX = isMouse(event) ? event.clientX : event.touches[0].clientX;
  const moveX = currentX - startX;
  currentTranslate = prevTranslate + moveX;
  track.style.transform = `translateX(${currentTranslate}px)`;
}

function endSwipe() {
  if (!isDragging) return;
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -90) {
    rotateQueue(1);
  } else if (movedBy > 90) {
    rotateQueue(-1);
  } else {
    track.style.transition = "transform 0.2s ease-in-out";
    track.style.transform = `translateX(${-2 * width}px)`;
    currentTranslate = -2 * width;
    prevTranslate = -2 * width;
  } 

  isDragging = false;
}

function autoSlide() {
  if (Date.now() - lastMoveSignal >= 10000) {
    rotateQueue(1);
  }
}

setInterval(autoSlide, 10000);

window.addEventListener("resize", () => {
  width = track.offsetWidth || track.getBoundingClientRect().width;
  updateQueueDisplay();
});

updateQueueDisplay();

// Navbar toggle
const toggle = document.querySelector(".navbar-toggler");
const target = document.getElementById("navContent");
toggle.addEventListener("click", () => {
  toggle.setAttribute("aria-expanded", toggle.getAttribute("aria-expanded") === "true" ? "false" : "true");
  toggle.classList.toggle("collapsed");
  target.classList.toggle("show");
});