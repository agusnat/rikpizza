'use strict';
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}
navToggleBtn.addEventListener('click', function () {

  navToggleFunc();

});
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}