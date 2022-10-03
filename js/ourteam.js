var openMenu = document.querySelector(".headnav__menu-btn");
var closeMenu = document.querySelector(".headnav__btn-close");
openMenu.onclick = function () {
  var sideBar = document.querySelector(".headnav__side-bar");
  sideBar.classList.add("active-menu");
  openMenu.style.visibility = 'hidden';
};
closeMenu.onclick = function () {
    var sideBar = document.querySelector(".headnav__side-bar");
    sideBar.classList.remove("active-menu");
    openMenu.style.visibility = 'visible';
  };
