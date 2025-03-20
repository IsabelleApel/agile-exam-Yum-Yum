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
      window.location.href = "orderHistory.html";
    });
  }
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      logoutUser();
    });
  }
});

async function checkUserAuth() {
  if (localStorage.getItem("loggedIn") === "null") {
    window.location.href = "login.html";
    return;
  }
}
export async function logoutUser() {
  logOut();
  window.location.href = "login.html";
}



function displayProfilePicture() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));

  if (!loggedInUser || !loggedInUser.profile_image) {
    return;
  }

  const profilePicElement = document.querySelector("#profile-pic");

  if (profilePicElement) {
    profilePicElement.src = loggedInUser.profile_image;
  }  
}

displayProfilePicture();