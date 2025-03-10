import { createElement, addClass } from "../Utils/domUtils.js";

export function createFoodtruckCard(place){
    const cardRef = createElement('article');
    addClass(cardRef, 'foodtrucks__list-item');
    const cardTemp = `
        <div class="foodtrucks__list-item-left">
            <h3>${place.name}</h3>
            <p>${place.address}</p>
        </div>
        <div class="foodtrucks__list-item-right">
            <p>${place.day} </p>
            <p>kl. ${place.time}</p>
        </div>
        `;
    cardRef.innerHTML = cardTemp;
return cardRef;
}




