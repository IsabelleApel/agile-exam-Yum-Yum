import { createMenu, createDipMenu, createDrinkMenu, createFoodtruckCard, createOrderHistory } from "../components/itemCard.js";
import { fetchMenu } from "./api.js";
import { randomNum, randomString } from "../Utils/utils.js";
import { getElement, removeClass, addClass } from "../Utils/domUtils.js";
import { buttonClick, menuToggle, cartButton, submitRegistration } from "./eventHandlers.js";
import { oData } from "../data/data.js";
import { loadHeader } from "../components/header.js";

// import { receipt } from "../components/receipt.js";

import { displayCart, displayTotalPrice, initCartCount, paymentButton } from "./cart.js";

export function displayLandingPage(){
    buttonClick('#menuBtn', '/menu.html');
    buttonClick('#foodTruckBtn', '/foodtrucks.html');
    //behöver veta namn på html-fil för login-sida
    buttonClick('#loginBtn', '/login.html');
    displayHeader().then(() => {
        isLoggedIn();
    })
}

export async function displayMenu() {
  try {
    let products = await fetchMenu();

    // Hittar rätt container
    let wontonContainer = document.getElementById("wontonContainer");
    let dipContainer = document.getElementById("dipContainer");
    let drinkContainer = document.getElementById("drinkContainer");

    // Rensa innehållet först
    wontonContainer.innerHTML = "";
    dipContainer.innerHTML = "";
    drinkContainer.innerHTML = "";

    // Filtrera produkter
    let wontons = products.filter((product) => product.type === "wonton");
    let dips = products.filter((product) => product.type === "dip");
    let drinks = products.filter((product) => product.type === "drink");

    // Lägg till wontons som individuella kort
    wontons.forEach((product) => {
      let menuCard = createMenu(product);
      wontonContainer.appendChild(menuCard);
    });

    // Lägg till dips (alla i ett kort)
    let dipMenuCard = createDipMenu(dips);
    if (dipMenuCard) {
      dipContainer.appendChild(dipMenuCard);
    }

    // Lägg till drycker (alla i ett kort)
    let drinkMenuCard = createDrinkMenu(drinks);
    if (drinkMenuCard) {
      drinkContainer.appendChild(drinkMenuCard);
    }
  } catch (error) {
    console.error("Fel vid hämtning av meny:", error);
  }
}


export function displayOrderConfirmation() {
  getETA();
  getOrderNum();
  buttonClick("#newOrder", "./menu.html");
  buttonClick("#receipt", "./receipt.html");
  displayHeader().then(() => {
    hideHeaderElement('.menu-icon');
    hideHeaderElement('.header-shopping-bag');
    isLoggedIn();
})
}

// export function displayReceipt(){
//   const orderId = randomString(11);
//   const totalPrice = orderItems.reduce((total, item) => total + item.price, 0);  
//   receipt(orderItems, totalPrice, orderId);
// }

export function displayFoodtruckList() {
  const listRef = getElement("#foodtrucksList");
  for (let place of oData.foodtruckStops) {
    let card = createFoodtruckCard(place);
    listRef.appendChild(card);
  }
}

export function displayRegistration(){
  displayHeader().then(() => {
    hideHeaderElement('.header-shopping-bag');
    isLoggedIn();
});
  submitRegistration();
}

export function displayCartPage(){
    displayCart();
    displayTotalPrice();
    displayHeader().then(() => {
        hideHeaderElement('.menu-icon');
        const shoppingIcon = getElement('#cartIcon');
        addClass(shoppingIcon, 'fa-bowl-food');
        removeClass(shoppingIcon, 'fa-basket-shopping');
        isLoggedIn();
    })
    buttonClick('.pay-button', './orderConfirmation.html'); 
    paymentButton();
}

export async function displayHeader(){
    const containerRef = getElement('#headerContainer');

    if(!containerRef){
        console.error('header container not found');
        return Promise.reject('header container not found');
    }

    return loadHeader().then(headerHTML => {
        containerRef.innerHTML = headerHTML;
        menuToggle();
        cartButton();
        initCartCount();
    });
  
}

// vet inte riktigt vart det är passande att ha getETA(), getOrderNum() och isLoggedIn(vilken script-fil)
function getETA(){
    let estimatedTime = randomNum(10, 20);
    let etaRef = getElement("#orderConfirmationETA");
    etaRef.textContent = `ETA ${estimatedTime} MIN`;
}

export function getOrderNum() {
  let orderNumber = randomString(11); 
  let orderNumRef = document.querySelector('#orderConfirmationNum'); 

  if (orderNumRef) { 
      orderNumRef.textContent = `#${orderNumber}`; 
  }

  return orderNumber; 
}


export function hideHeaderElement(element){
    const elemRef = getElement(element);
    addClass(elemRef, 'v-hidden');   
}


export function displayOrderHistory() {
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    let orderHistoryContainer = getElement('#orderHistoryContainer');

    orderHistoryContainer.innerHTML = "";

    orderHistory.forEach(order => {
      let orderCard = createOrderHistory(order);
      orderHistoryContainer.appendChild(orderCard);
    });
}

export function isLoggedIn(){
  const menuBtnProfileRef = getElement('.menu-btn--profile');
  const menuBtnLoginRef = getElement('.menu-btn--login');

  let loggedIn = localStorage.getItem('loggedIn') === 'true';
  console.log(loggedIn);

  if(loggedIn){
      removeClass(menuBtnProfileRef, 'd-none');
      addClass(menuBtnLoginRef, 'd-none');
  }else{
      addClass(menuBtnProfileRef, 'd-none');
      removeClass(menuBtnLoginRef, 'd-none');
  }
}

