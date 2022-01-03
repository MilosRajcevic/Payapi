const bttNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

bttNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
