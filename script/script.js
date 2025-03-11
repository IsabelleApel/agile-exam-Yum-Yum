
import { displayMenu, displayOrderConfirmation, displayFoodtruckList } from "./modules/displayUI.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/menu.html') {
    console.log('menu.html');
    displayMenu();

} else if(window.location.pathname === '/orderConfirmation.html'){
    console.log('hello');
    displayOrderConfirmation();
}else if(window.location.pathname === '/foodtrucks.html'){
    console.log('foodtruck');
    displayFoodtruckList();
    
}

