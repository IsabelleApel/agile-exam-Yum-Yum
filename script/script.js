
import { displayOrderConfirmation, displayFoodtruckList, displayHeader, displayMenu, displayCartPage, displayLandingPage, hideHeaderElement } from "./modules/displayUI.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    displayLandingPage();
} else if(window.location.pathname === '/menu.html') {
    displayMenu();
    displayHeader();
} else if(window.location.pathname === '/orderConfirmation.html'){
    displayOrderConfirmation();
}else if(window.location.pathname === '/foodtrucks.html'){
    displayFoodtruckList();
    displayHeader();
} else if(window.location.pathname === '/cart.html') {
    displayCartPage();
} else if(window.location.pathname === '/aboutUs.html'){
    displayHeader();
}


