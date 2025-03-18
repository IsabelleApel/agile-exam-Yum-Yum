import { getElement, removeClass, addClass } from "../Utils/domUtils.js";
import { validateForm } from "./validation.js";

export function buttonClick(element, pathname) {
  const btnRef = getElement(element);
  btnRef.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = pathname;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/orderConfirmation.html") {
    buttonClick("#newOrder", "./menu.html");
    buttonClick("#receipt", "./receipt.html");
  }
  if (window.location.pathname === "/menu.html") {
    let filterSelect = document.getElementById("filterSelect");

    // Lyssnar efter en change (när man väljer nytt alternativ i dropdown)
    filterSelect.addEventListener("change", (event) => {
      let filterValue = event.target.value;

      // Hämta alla containers
      let wontonContainer = document.getElementById("wontonContainer");
      let dipContainer = document.getElementById("dipContainer");
      let drinkContainer = document.getElementById("drinkContainer");

      // Visa/dölj beroende på filtervärde (type)
      if (filterValue === "all") {
        removeClass(wontonContainer, "d-none");
        removeClass(dipContainer, "d-none");
        removeClass(drinkContainer, "d-none");
      } else if (filterValue === "wonton") {
        removeClass(wontonContainer, "d-none");
        addClass(dipContainer, "d-none");
        addClass(drinkContainer, "d-none");
      } else if (filterValue === "dip") {
        addClass(wontonContainer, "d-none");
        removeClass(dipContainer, "d-none");
        addClass(drinkContainer, "d-none");
      } else if (filterValue === "drink") {
        addClass(wontonContainer, "d-none");
        addClass(dipContainer, "d-none");
        removeClass(drinkContainer, "d-none");
      }
    });
  }
});

export function cartButton() {
  const shoppingIcon = document.querySelector("#cartIcon");
  console.log(shoppingIcon);
  shoppingIcon.addEventListener("click", (e) => {
    e.preventDefault();

    if (window.location.pathname === "/cart.html") {
      window.location.href = "/menu.html";
    } else {
      window.location.href = "/cart.html";
    }
  });
}

export function submitRegistration() {
  const formRef = getElement("#registrationForm");

  formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = "/menu.html";
    }
  });
}

export function menuToggle() {
  const menuIconRef = getElement(".menu-icon");
  const menuRef = getElement(".menu");

  menuIconRef.addEventListener("click", function (e) {
    e.stopPropagation();
    menuRef.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (!menuRef.contains(e.target) && !menuIconRef.contains(e.target)) {
      menuRef.classList.remove("open");
    }
  });
}

// const saveButton = getElement("#saveOrder");
// saveButton.addEventListener("click", async () => {
//   await saveOrderToProfile({ orderId, orderItems, totalPrice });
// });
