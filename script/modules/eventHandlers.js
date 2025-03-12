import { getElement, removeClass, addClass } from "../Utils/domUtils.js";

export function buttonClick(element, pathname){
    const btnRef = getElement(element);
    btnRef.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = pathname;
    })
}


document.addEventListener("DOMContentLoaded", () => {
    let filterSelect = document.getElementById("filterSelect");

    // Lyssnar efter en change (när man väljer nytt alternativ i dropdown)
    filterSelect.addEventListener("change", (event) => {
        let filterValue = event.target.value;

        // Hämta alla containers
        let wontonContainer = document.getElementById("wontonContainer");
        let dipContainer = document.getElementById("dipContainer");
        let drinkContainer = document.getElementById("drinkContainer");

        // Visa/dölj beroende på filtervärde (type)
        if (filterValue === "all") {
            removeClass(wontonContainer, 'd-none');
            removeClass(dipContainer, 'd-none');
            removeClass(drinkContainer, 'd-none');
        } else if (filterValue === "wonton") {
            removeClass(wontonContainer, 'd-none');
            addClass(dipContainer, 'd-none');
            addClass(drinkContainer, 'd-none');
        } else if (filterValue === "dip") {
            addClass(wontonContainer, 'd-none');
            removeClass(dipContainer, 'd-none');
            addClass(drinkContainer, 'd-none');
        } else if (filterValue === "drink") {
            addClass(wontonContainer, 'd-none');
            addClass(dipContainer, 'd-none');
            removeClass(drinkContainer, 'd-none');
        }
    });
});