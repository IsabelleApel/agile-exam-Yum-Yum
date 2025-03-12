
import { displayCart, displayTotalPrice } from "./modules/cart.js";
import { displayMenu, displayOrderConfirmation, displayFoodtruckList } from "./modules/displayUI.js";
import { cartButton } from "./modules/eventHandlers.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/menu.html') {
    console.log('menu.html');
    displayMenu();
    cartButton();

} else if(window.location.pathname === '/orderConfirmation.html'){
    console.log('hello');
    displayOrderConfirmation();
}else if(window.location.pathname === '/foodtrucks.html'){
    console.log('foodtruck');
    displayFoodtruckList();
    
} else if(window.location.pathname === '/cart.html') {
    displayCart();
    displayTotalPrice();
    cartButton();
} 

