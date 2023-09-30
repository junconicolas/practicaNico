/*=============== SHOW MENU ===============*/
const menu = document.getElementById("nav-menu");
const toggleButtom = document.getElementById("nav-toggle");
const closeButtom = document.getElementById("nav-close");

if (toggleButtom) {
  toggleButtom.addEventListener("click", () => {
    menu.classList.add("show-menu");
  });
}

if (closeButtom) {
  closeButtom.addEventListener("]click", () => {
    menu.classList.remove(show - menu);
  });
}
/*=============== REMOVE MENU MOBILE ===============*/

/*=============== GSAP ANIMATION ===============*/
