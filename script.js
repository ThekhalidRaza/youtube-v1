console.log("welcome");
const sidenav = document.querySelector(".side-navbar");
const menuIcon = document.querySelector(".menu-icon");
const banner = document.querySelector(".banner");
const mode = document.querySelector(".mode");

mode.addEventListener("click", () => {
  sidenav.classList.toggle("dark-mode");
  banner.classList.toggle("dark-mode");
});

menuIcon.addEventListener("click", () => {
  sidenav.classList.toggle("toggle");
  banner.classList.toggle("large-banner");
});
