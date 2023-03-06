let navMenu = document.querySelector("nav");

window.addEventListener("scroll", menuScrol);

function menuScrol() {
  if ((scrol = window.pageYOffset >= 30)) {
    navMenu.style.background = "black";
  } else {
    navMenu.style.background = "transparent";
  }
}

menuScrol();
