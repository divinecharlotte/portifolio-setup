const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');
const hideMenu = document.getElementById('closeIcon');
const closeMenu = document.getElementById('navItems');

burger.onclick = function burger() {
  navLinks.style.right = '0';
};
hideMenu.onclick = function hideMenu() {
  navLinks.style.right = '-100%';
};

closeMenu.onclick = function hideMenu() {
  navLinks.style.right = '-100%';
};
