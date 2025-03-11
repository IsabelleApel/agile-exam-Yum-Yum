import { displayOrderConfirmation, displayFoodtruckList } from "./modules/displayUI.js";


if(window.location.pathname === '/orderConfirmation.html'){
    console.log('hello');
    displayOrderConfirmation();
}else if(window.location.pathname === '/foodtrucks.html'){
    console.log('foodtruck');
    displayFoodtruckList();
    
}
