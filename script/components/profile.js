document.addEventListener("DOMContentLoaded", () => {
  console.log("profile.js");
  checkUserAuth();
  loadUserInfo();

  const viewInfoBtn = document.getElementById("view-info");
  const editInfoBtn = document.getElementById("edit-info");
  const viewOrdersBtn = document.getElementById("view-orders");
  const logoutBtn = document.getElementById("logout");

  if (viewInfoBtn) viewInfoBtn.addEventListener("click", showUserInfo);
  if (editInfoBtn) editInfoBtn.addEventListener("click", showEditUserInfo);
  if (viewOrdersBtn) viewOrdersBtn.addEventListener("click", showUserOrders);
  if (logoutBtn) logoutBtn.addEventListener("click", logoutUser);
});

async function checkUserAuth() {
  const username = localStorage.getItem("userToken");
  if (!username) {
    window.location.href = "login.html";

    return;
  }
}

async function loadUserInfo() {
  const username = localStorage.getItem("userToken");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((u) => u.username === username);

  if (user) {
    document.querySelector(".profile__user-icon img").src =
      user.profile_image || "assets/avatar_user.png";
    document.getElementById("user-info").innerHTML = `
            <p><strong>Name:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `;
  } else {
    alert("User not found.");
    logoutUser();
  }
}

async function editUserInfo() {
  const newUsername = prompt("Enter your new username:");
  if (!newUsername) return;

  const username = localStorage.getItem("userToken");
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userIndex = users.findIndex((u) => u.username === username);

  if (userIndex !== -1) {
    users[userIndex].username = newUsername;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userToken", newUsername);
    alert("Username updated.");
    await loadUserInfo();
  } else {
    alert("Error: User not found.");
  }
}
async function showUserOrders() {
  const username = localStorage.getItem("userToken");
  if (!username) {
    alert("You are not authenticated.");
    return;
  }

  // Obtener pedidos del localStorage
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Filtrar pedidos del usuario autenticado
  const userOrders = orders.filter((order) => order.username === username);

  if (userOrders.length === 0) {
    alert("You have no previous orders.");
    return;
  }

  // Crear HTML con los pedidos del usuario
  let ordersHtml = `<h2>Your Orders</h2><ul>`;
  userOrders.forEach((order) => {
    ordersHtml += `
            <li>
                <strong>Orde ID:</strong> ${order.id} <br>
                <strong>Date:</strong> ${order.date} <br>
                <strong>Products:</strong> ${order.items.join(", ")}
            </li><hr>
        `;
  });
  ordersHtml += `</ul>`;

  // Mostrar en un modal o en la página
  document.getElementById("user-orders").innerHTML = ordersHtml;
}

async function logoutUser() {
  localStorage.removeItem("userToken");
  window.location.href = "login.html";
}
