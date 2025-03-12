import { getElement } from "../Utils/domUtils.js";

export function buttonClick(element, pathname){
    const btnRef = getElement(element);
    btnRef.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = pathname;
    })
}

export function cartButton() {
    const shoppingIcon = document.querySelector('.fa-cart-shopping');

    shoppingIcon.addEventListener('click', (e) => {
        e.preventDefault();

        if (window.location.pathname === '/cart.html') {
            window.location.href = '/menu.html';
        } else {
            window.location.href = '/cart.html';
        }
    });
}