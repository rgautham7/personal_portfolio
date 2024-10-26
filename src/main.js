import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/work.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/utils.css";

import './theme.js';

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.header_bars');
const mobileNav = document.querySelector('.mobile-nav');
const mobileCloseBtn = document.querySelector('.mobile-nav__close-btn');
const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

mobileCloseBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});
