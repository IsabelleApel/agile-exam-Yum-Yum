import { displayCart, displayTotalPrice, initCartCount } from "./modules/cart.js";
import { cartButton } from "./modules/eventHandlers.js";
import { displayLogin, isLoggedIn, displayRegistration, displayOrderConfirmation, displayFoodtruckList, displayHeader, displayMenu, displayCartPage, displayLandingPage, hideHeaderElement, displayOrderHistory } from "./modules/displayUI.js";
import { importUsers } from "./modules/validation.js";
import { addClass, getElement, removeClass } from "./Utils/domUtils.js";
import { initKarusell } from "./modules/karusell.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    displayLandingPage();
} else if(window.location.pathname === '/menu.html') {
    displayMenu();
    displayHeader().then(() => {
        isLoggedIn();
    })
} else if(window.location.pathname === '/orderConfirmation.html'){
    displayOrderConfirmation();
}else if(window.location.pathname === '/foodtrucks.html'){
    displayFoodtruckList();
    displayHeader().then(() => {
        isLoggedIn();
    })
} else if(window.location.pathname === '/cart.html') {
    displayCartPage();
} else if(window.location.pathname === '/aboutUs.html'){
    displayHeader().then(() => {
        isLoggedIn();
    })
    initKarusell();
    /* karusell(); */
    /* handleKarusellClick() */
} else if(window.location.pathname === '/receipt.html'){
    // displayReceipt();
    displayHeader().then(() => {
        hideHeaderElement('.menu-icon');
        hideHeaderElement('.header-shopping-bag');
        isLoggedIn();
    })
}else if(window.location.pathname === '/login.html'){
    importUsers();
    displayLogin();
}else if(window.location.pathname === '/registerNewUser.html'){
    console.log('register new user');
    importUsers();
    displayRegistration();
} else if(window.location.pathname === '/orderHistory.html'){
    displayHeader();
    displayOrderHistory();
}





