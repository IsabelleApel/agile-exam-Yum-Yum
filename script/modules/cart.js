/* localStorage.clear(); */

import { getElement } from "../Utils/domUtils.js";
import { getOrderNum } from "./displayUI.js";

//lägga till i localstorage
export function addToCart(dish) {

    if(dish && dish.id) { 
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(dish);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount(cart.length);
    } else {
        console.log('försökte lägga till ett null-värde i kundvagnen:', dish);
    }
}

//notisen uppdateras när mat läggs till
export function updateCartCount(count) {
  const cartCountElement = document.querySelector(".cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}

export function initCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount(cart.length);
}

//displaya varukorgen
export function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.querySelector(".cart-items-container");

  updateCartCount(cart.length);

  cartItemsContainer.textContent = "";

  cart.forEach((dish) => {

    const showDish = document.createElement("div");
    showDish.classList.add("cart-item");

    const dishName = document.createElement("h2");
    showDish.textContent = dish.name;

    const showPrice = document.createElement("span");
    showPrice.textContent = `${dish.price} SEK`;

    const removeIcon = document.createElement("i");
    removeIcon.classList.add("fa-solid", "fa-xmark");

    removeIcon.addEventListener("click", (e) => {
      e.preventDefault();
      removeCartItem(dish.id);
      displayCart();
    });

    showDish.appendChild(dishName);
    showDish.appendChild(showPrice);
    showDish.appendChild(removeIcon);
    cartItemsContainer.appendChild(showDish);
  });
}

//ta bort från varukorgen
function removeCartItem(dishId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(dish => dish.id === dishId);

    if (index !== -1) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount(cart.length);
    displayTotalPrice();
}

//räknar ut totalt pris
function totalPriceItem() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalPrice = 0;

  cart.forEach((dish) => {
    totalPrice += dish.price;
  });
  return totalPrice;
}

//visa totalt pris
export function displayTotalPrice() {
  const totalPrice = totalPriceItem();
  const totalPriceElement = document.querySelector(".total-price .price");
  totalPriceElement.textContent = `${totalPrice} SEK`;
}

// eventlistener på betala-knappen
export function paymentButton() {
  getElement(".pay-button").addEventListener("click", (e) => {
    e.preventDefault();

    const orderNumber = getOrderNum();
    const totalPrice = totalPriceItem();
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Skapar orderobjekt
    const order = {
      id: orderNumber,
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    saveOrder(order);

    window.location.href = "http://127.0.0.1:5500/receipt.html"; //ÄNDRA URL SEN!!!
  });
}


function saveOrder(order) {
  let orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

  orderHistory.unshift(order); // Lägger den senaste ordern högst upp
  localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
}