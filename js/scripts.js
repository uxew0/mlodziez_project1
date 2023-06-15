'use strict';

console.log('start');

// DOM
const hamburger = document.querySelector('.top .material-icons');

const closeBtn = document.querySelector('nav .material-icons');

const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    
    // nav.style.display = 'block';
    nav.classList.add('nav-display-block');
});

closeBtn.addEventListener('click', () => {
    
    // nav.style.display = 'none';
    nav.classList.remove('nav-display-block');
});

console.log('koniec');