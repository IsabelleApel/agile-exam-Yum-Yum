import { createReceipt } from "../Utils/domUtils.js";
document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("createReceipt.html")) {
    localStorage.getItem("cart");
    createReceipt();
  }
});
// Función asíncrona para guardar la orden en el perfil del usuario
async function saveOrderToProfile(receipt) {
  try {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("Du måste logga in för att spara kvittot.");
      return;
    }

    // Obtener recibos del usuario
    const userReceipts = JSON.parse(localStorage.getItem("userReceipts")) || {};
    userReceipts[currentUser.id] = userReceipts[currentUser.id] || [];
    userReceipts[currentUser.id].push(receipt);

    // Guardar en local storage
    localStorage.setItem("userReceipts", JSON.stringify(userReceipts));

    alert("Kvittot har sparats!");
  } catch (error) {
    console.error("Fel vid sparande av kvitto:", error);
  }
}
