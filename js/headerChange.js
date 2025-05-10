"use strict";

let header = document.querySelector("header");

window.onscroll = function () {
    if (window.innerWidth > 800) {
        if (window.scrollY > 20) {
            header.style.background = "#111";
            header.style.width = "100%";
        } else {
            header.style.background = "#222";
            header.style.width = "60%";
        }
    } else {
        
    }
};