"use strict";

/* Попробовал сделать изменение размера текста от его количеста, чтобы он помещался в блок.
По другому более-менее нормально не знаю как сделать, чтобы добалять пункты в список и при этом блок
не сильно расширялся вниз, как, например, в форме - при добавлении полей форма будет "расстягиваться".
Нужно обновить страницу при изменении ширины экрана, с resize странно работает */

function newFontSize() {
    const listBlock = document.querySelector('.article-content');
    const advantages = document.querySelector('.advantages');
    const items = advantages.getElementsByTagName('li');
    let fontSize = 40;

    let multiplier = (window.innerWidth > 800) ? 0.5 : (window.innerWidth > 600) ? 0.6 : 0.7;
    while ( (+advantages.scrollHeight > (+listBlock.clientHeight * multiplier)) && fontSize > 0) {
        fontSize--;
        for (let item of items) {
            item.style.fontSize = fontSize + 'px';
        }
    }
}

newFontSize();