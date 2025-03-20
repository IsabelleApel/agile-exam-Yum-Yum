import { resetButtonClick } from "../modules/eventHandlers.js";
export function getElement(selector) {
  return document.querySelector(selector);
}

export function getElements(selector) {
  return document.querySelectorAll(selector);
}

export function createElement(tagname) {
  return document.createElement(tagname);
}

export function addClass(element, className) {
  return element.classList.add(className);
}

export function removeClass(element, className) {
  return element.classList.remove(className);
}

export async function createReceipt(orderItems, totalPrice) {
  //Hämtar html elementet där kvittot ska visas
  const receiptContainer = getElement("#receiptContainer");
  //Rensar innehållet först
  receiptContainer.innerHTML = "";
  //Skapar kvittot
  const receiptHTML = `
   <article class="cart-view__receipt">
        <img class="cart-view__logo" src="assets/logga_kvitto.png" alt="Yum Yum Gimmie Sum Logo" />
        <h2 class="receipt__title">KVITTO</h2>
        <p class="receipt__order-id">#${getOrderNumb()}</p>
        <ul class="receipt__items">
            ${orderItems
              .map(
                (item) => `
                <li class="receipt__item">
                    <section class="receipt__item-text">
                        <span class="receipt__item-name">${item.name}</span>
                        <em class="receipt__item-qty">${item.qty} stycken</em>
                    </section>
                    <span class="price-connector"></span>
                    <span class="receipt__item-price">${item.totalPrice} SEK</span>
                </li>
            `
              )
              .join("")}
        </ul>
        <article class="receipt__total">
            <span class="receipt__total-label">TOTALT</span>
            <strong class="receipt__total-amount">${totalPrice} SEK</strong>
            <small class="receipt__total-tax">inkl 20% moms</small>
        </article>
        </article>
        <button  id="newOrder" class="receipt__new-order" >GÖR EN NY BESTÄLLNING</button> 
 
    `;

  receiptContainer.innerHTML = receiptHTML;
  resetButtonClick("#newOrder", "./menu.html");
}

function getOrderNumb(){
  let ordersRef = JSON.parse(localStorage.getItem("orderHistory"));
  let orderNumRef = ordersRef[0].id

   return orderNumRef
}
