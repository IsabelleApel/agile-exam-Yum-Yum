import { createReceipt } from "../Utils/domUtils.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("receipt.html")) {
    //Hämtar cart från local storage
    const cart = JSON.parse(localStorage.getItem("cart"));
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
    createReceipt(groupedCart, totalPrice, "111");
  }
});
async function saveOrderToProfile(receipt) {
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("Du måste logga in för att spara kvittot.");
      return;
    }

    const userReceipts = JSON.parse(localStorage.getItem("userReceipts")) || {};
    userReceipts[currentUser.id] = userReceipts[currentUser.id] || [];
    userReceipts[currentUser.id].push(receipt);

    localStorage.setItem("userReceipts", JSON.stringify(userReceipts));

    alert("Kvittot har sparats!");
  } catch (error) {
    console.error("Fel vid sparande av kvitto:", error);
  }
}
