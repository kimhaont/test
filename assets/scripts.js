const navMenu = document.querySelector(".menu");
const openMenu = document.getElementById("navToggle");
const menuIcon = document.querySelector("#navToggle i");

openMenu.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  if (navMenu.style.display === "flex") {
    menuIcon.classList.remove("fa-bars", "nav__burger");
    menuIcon.classList.add("fa-xmark", "nav__close");
  } else {
    menuIcon.classList.add("fa-bars", "nav__burger");
    menuIcon.classList.remove("fa-xmark", "nav__close");
  }
});
