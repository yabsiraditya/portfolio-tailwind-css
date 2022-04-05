// Navrbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}

// Humburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden')
});

// Toggle Dark Mode
const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');
const lightIcon = document.querySelector('#toggle-light');
const darkIcon = document.querySelector('#toggle-dark');

if (checkbox === true ) {
  lightIcon.classList.remove('hidden');
} else {
  lightIcon.classList.remove('hidden');
};

checkbox.addEventListener('click', function()
{
  checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
  lightIcon.classList.toggle('hidden');
  darkIcon.classList.toggle('hidden');
})


