import { createElement, addClass } from "../Utils/domUtils.js";

//wontonContainer
export function createMenu(product) {
    let menuCard = createElement('div');
    addClass(menuCard, 'menu-card'); 

    menuCard.innerHTML = `
    <div class="menu-card--firstrow">
        <h3 class="menu-card__name">${product.name.toUpperCase()}</h3>
        <h3 class="menu-card__price">${product.price} SEK</h3>
    </div>
    <p class="menu-card__ingredients">${product.ingredients ? product.ingredients.join(', ') : ''}</p>
    `;

    menuCard.addEventListener('click', () => {
        console.log(`Du klickade på kortet för: ${product.name}`);
        addToCart();
    });

    return menuCard;
}


//dipContainer
export function createDipMenu(dips) { 
    let menuCard = createElement('div');
    addClass(menuCard, 'menu-card');

    let dipNames = dips.map(dip => 
        `<button class="dip-button">${dip.name.toLowerCase()}</button>`).join('');
    let dipPrice = dips[0].price // Priset utgår från den första dippen i listan

    menuCard.innerHTML = `
        <div class="menu-card--firstrow">
            <h3 class="menu-card__category">DIPSÅS</h3>
            <h3 class="menu-card__price">${dipPrice} SEK</h3>
        </div>
        <p class="menu-card__dips">${dipNames}</p>
    `;

    // Väntar tills kortet lagts till i DOM innan knappar hämtas
    setTimeout(() => {
        let buttons = menuCard.querySelectorAll('.dip-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(`Du klickade på: ${button.textContent}`);
                addToCart();
            });
        });
    }, 0);

    return menuCard;
}


// drinkContainer
export function createDrinkMenu(drinks) { 
    let menuCard = createElement('div');
    addClass(menuCard, 'menu-card');

    let drinkNames = drinks.map(drink => 
        `<button class="drink-button">${drink.name.toLowerCase()}</button>`).join('');
    let drinkPrice = drinks[0].price // Priset utgår från den första drycken i listan

    menuCard.innerHTML = `
        <div class="menu-card--firstrow">
            <h3 class="menu-card__category">DRYCK</h3>
            <h3 class="menu-card__price">${drinkPrice} SEK</h3>
        </div>
        <div class="menu-card__drinks">${drinkNames}</div>
    `;

    // Väntar tills kortet lagts till i DOM innan knappar hämtas
    setTimeout(() => {
        let buttons = menuCard.querySelectorAll('.drink-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(`Du klickade på: ${button.textContent}`);
                addToCart();
            });
        });
    }, 0);

    return menuCard;
}