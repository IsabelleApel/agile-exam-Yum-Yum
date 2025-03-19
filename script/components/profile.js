import { logOut } from "../modules/displayUI.js";
document.addEventListener("DOMContentLoaded", () => {
  checkUserAuth();

  const viewInfoBtn = document.getElementById("view-info");
  const editInfoBtn = document.getElementById("edit-info");
  const viewOrdersBtn = document.getElementById("view-orders");
  const logoutBtn = document.getElementById("logout");

  if (viewInfoBtn) {
    viewInfoBtn.addEventListener("click", function () {
      window.location.href = "editProfile.html";
    });
  }
  if (editInfoBtn) {
    editInfoBtn.addEventListener("click", function () {
      window.location.href = "edit-info.html";
    });
  }
  if (viewOrdersBtn) {
    viewOrdersBtn.addEventListener("click", function () {
      window.location.href = "view-orders.html";
    });
  }
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      logoutUser();
    });
  }
});

async function checkUserAuth() {
  let loggedIn = localStorage.getItem("loggedIn");
  alert("loggedIn: " + loggedIn);
  if (localStorage.getItem("loggedIn") === "null") {
    alert("Du är inte inloggad");
    window.location.href = "login.html";
    return;
  }
}

async function logoutUser() {
  logOut();
  window.location.href = "login.html";
}
