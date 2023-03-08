let navMenu = document.querySelector("nav");

window.addEventListener("scroll", menuScrol);

function menuScrol() {
  if ((scrol = window.pageYOffset >= 30)) {
    navMenu.style.background = "black";
    navMenu.style.height="70px"
  } else {
    navMenu.style.background = "transparent";
    navMenu.style.height="55px"
  }
}

menuScrol();
