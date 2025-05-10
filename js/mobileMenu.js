"use strict";

const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.header-menu');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});