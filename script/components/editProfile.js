import { validateForm } from "../modules/validation.js";

document.addEventListener("DOMContentLoaded", () => {
  let user = JSON.parse(localStorage.getItem("loggedIn"));
  let userName = document.querySelector("#username");
  console.log(user);
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

  let currentUser = localStorage.getItem("loggedIn");

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

    let updatedUser = {
      email: email,
      password: password,
    };
    localStorage.setItem("loggedIn", JSON.stringify(updatedUser));
  }
}

//kod för att uppdatera profilbilden
function currentProfilePicture() {
  const users = JSON.parse(localStorage.getItem("users"));
  const loggedInUser = localStorage.getItem("loggedInUser");

  const currentUser = users.find((user) => user.username === loggedInUser);
  if (currentUser) {
    const currentPic = document.querySelector("#current-profile-pic");
    currentPic.src = currentUser.profile_image;
  } else {
    console.error("Ingen användare hittades med det användarnamnet.");
  }

  /* const currentPic = document.querySelector('#current-profile-pic');

  
  currentPic.src = currentUser.profile_image; */
}

currentProfilePicture();

export function toggleImageOptions() {
  const imageOptions = document.querySelector("#choose-img");
  imageOptions.classList.toggle("d-none");
}

export function selectImage(imagePath) {
  console.log("Vald bild:", imagePath);
  const currentPic = document.querySelector("#current-profile-pic");
  currentPic.src = imagePath;
  toggleImageOptions();
}

export function changePictureButton() {
  const changePicture = document.querySelector("#current-profile-pic");
  changePicture.addEventListener("click", toggleImageOptions);
}

changePictureButton();

export function addPictureButton() {
  const images = document.querySelectorAll("#choose-img img");
  images.forEach((img) => {
    img.addEventListener("click", () => selectImage(img.src));
  });
}

addPictureButton();
