import { getElement } from "../Utils/domUtils.js";

export function buttonClick(element, pathname){
    const btnRef = getElement(element);
    btnRef.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = pathname;
    })
}

export function menuToggle(){
    const menuIconRef = getElement('.menu-icon');
    const menuRef = getElement('.menu');

    menuIconRef.addEventListener("click", function (e) {
        e.stopPropagation(); 
        menuRef.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
        if (!menuRef.contains(e.target) && !menuIconRef.contains(e.target)) {
          menuRef.classList.remove("open");
        }
      });
}


