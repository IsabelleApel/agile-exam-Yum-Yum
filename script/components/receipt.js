import { createReceipt } from "../Utils/domUtils.js";
document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("createReceipt.html")) {
    // Hämta kvittot från local storage
    const cart = JSON.parse(localStorage.getItem("cart"));

    const groupedCart = cart.reduce((acc, item) => {
      // Buscar si ya existe en el acumulador
      const existingItem = acc.find((i) => i.id === item.id);

      if (existingItem) {
        // Si ya existe, sumamos 1 a la cantidad
        existingItem.qty += 1;
        existingItem.totalPrice = existingItem.qty * existingItem.unitPrice;
      } else {
        // Si no existe, lo agregamos con qty inicial 1
        acc.push({
          ...item,
          qty: 1,
          unitPrice: item.price,
          totalPrice: item.price,
        });
      }

      return acc;
    }, []);
    const orderItems = cart;
    let totalPrice = orderItems.reduce((total, item) => total + item.price, 0);

    console.log(groupedCart);
    createReceipt(groupedCart, totalPrice, "111");
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
