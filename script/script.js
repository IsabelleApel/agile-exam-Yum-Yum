

import { displayCart, displayTotalPrice } from "./modules/cart.js";
import { cartButton } from "./modules/eventHandlers.js";
import { displayOrderConfirmation, displayFoodtruckList, displayHeader, displayMenu } from "./modules/displayUI.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
} else if(window.location.pathname === '/menu.html') {
    console.log('menu.html');
    displayMenu();
    cartButton();
    displayHeader();

} else if(window.location.pathname === '/orderConfirmation.html'){
    console.log('hello');
    displayOrderConfirmation();
    displayHeader();
}else if(window.location.pathname === '/foodtrucks.html'){
    console.log('foodtruck');
    displayFoodtruckList();
    displayHeader();
    
} else if(window.location.pathname === '/cart.html') {
    displayCart();
    displayTotalPrice();
    cartButton();
    displayHeader();
    
} else if(window.location.pathname === '/aboutUs.html'){
    displayHeader();
}


