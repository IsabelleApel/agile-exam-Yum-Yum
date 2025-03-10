import { getElement } from "../Utils/domUtils.js";

export function buttonClick(element, pathname){
    const btnRef = getElement(element);
    btnRef.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = pathname;
    })
}