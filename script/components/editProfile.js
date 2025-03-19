document.addEventListener("DOMContentLoaded", () => {
  let user = JSON.parse(localStorage.getItem("loggedIn"));
  console.log(user);
  let userName = document.querySelector("#username");
  userName.value = user.username;

  let email = document.querySelector("#email");
  email.value = user.email;

  let password = document.querySelector("#password");
  password.value = user.password;

  let saveBtn = document.querySelector(".profile__save-btn");
  saveBtn.addEventListener("click", function () {
    updateUser();
  });
});

function updateUser() {
  let email = document.querySelector("#email").value.trim();
  let password = document.querySelector("#password").value.trim();

  let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  let currentUser = JSON.parse(localStorage.getItem("loggedIn"));
  if (!currentUser) {
    return;
  }

  let userIndex = storedUsers.findIndex(
    (user) => user.username === currentUser.username
  );

  if (userIndex !== -1) {
    storedUsers[userIndex] = {
      email: email,
      password: password,
    };
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // Uppdatera användaren i localStorage
    let updatedUser = {
      ...currentUser,
      email: email,
      password: password,
    };
    localStorage.setItem("loggedIn", JSON.stringify(updatedUser));
  }
}
