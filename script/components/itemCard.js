import { createElement, addClass } from "../Utils/domUtils.js";
import { addToCart } from "../modules/cart.js";

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
        addToCart(product);
    });

    return menuCard;
}


//dipContainer
export function createDipMenu(dips) { 
    let menuCard = createElement('div');
    addClass(menuCard, 'menu-card');

    let dipNames = dips.map((dip, index) => 
        `<button class="dip-button" data-index="${index}">${dip.name.toLowerCase()}</button>`).join('');
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
                const index = button.getAttribute('data-index');
                const selectedDip = dips[index];
                addToCart(selectedDip);
            });
        });
    }, 0);

    return menuCard;
}


// drinkContainer
export function createDrinkMenu(drinks) { 
    let menuCard = createElement('div');
    addClass(menuCard, 'menu-card');

    let drinkNames = drinks.map((drink, index) => 
        `<button class="drink-button" data-index="${index}">${drink.name.toLowerCase()}</button>`).join('');
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
                const index = button.getAttribute('data-index');
                const selectedDrink = drinks[index];
                addToCart(selectedDrink);
            });
        });
    }, 0);

    return menuCard;
}

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


// orderHistoryContainer
export function createOrderHistory(order) {
    let orderHistoryCard = createElement('div');
    addClass(orderHistoryCard, 'order-history-card');
    
    orderHistoryCard.innerHTML = `
    <div class="order-history-card--first-row">
        <h3 class="order-history-card__id">#${order.id}</h3>
        <h3 class="order-history-card__total">${order.total} SEK</h3>
    </div>
    <p class="order-history-card__items">${order.items.map(item => item.name).join(", ")}</p>
    <p class="order-history-card__date">${order.date}</p>
    `

    return orderHistoryCard;
}


// adminPageContainer
export function createAdminPage(order) {
    let adminPageCard = createElement('div');
    addClass(adminPageCard, 'admin-page-card');
    
    adminPageCard.innerHTML = `
    <div class="admin-page-card--first-row">
        <h3 class="admin-page-card__total">#${order.id}</h3>
        <h3 class="admin-page-card__total">${order.total} SEK</h3>
    </div>
    <h3 class="admin-page-card__user">Användare: ${order.user}</h3>
    <p class="admin-page-card__items">${order.items.map(item => item.name).join(", ")}</p>
    <p class="admin-page-card__date">${order.date}</p>
    `

    return adminPageCard;
}