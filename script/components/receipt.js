import { createReceipt } from "../Utils/domUtils.js";
import { resetButtonClick } from "../modules/eventHandlers.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("receipt.html")) {
    //Hämtar cart från local storage
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      console.error("No items in the cart.");
      // Manejar el caso cuando el cart está vacío o no existe
      document.getElementById("headerContainer").innerText =
        "No items in the cart.";
      return;
    }

    //Skapar en grupperad cart, där samma artikel läggs ihop
    const groupedCart = cart.reduce((articles, item) => {
      const existingItem = articles.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.totalPrice = existingItem.qty * existingItem.unitPrice;
      } else {
        articles.push({
          ...item,
          qty: 1,
          unitPrice: item.price,
          totalPrice: item.price,
        });
      }

      return articles;
    }, []);
    //Räknar ut totalpriset
    let totalPrice = cart.reduce((total, item) => total + item.price, 0);
    //Skapar kvitto
    createReceipt(groupedCart, totalPrice);
  }
});
