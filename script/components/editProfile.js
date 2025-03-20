document.addEventListener("DOMContentLoaded", () => {
  let user = JSON.parse(localStorage.getItem("loggedIn"));
  console.log("Hämtad användare:", user);

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
  let profileImage = document.querySelector("#current-profile-pic").src;

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
      username: currentUser.username,
      email: email,
      password: password,
      profile_image: profileImage,
    };
    localStorage.setItem("users", JSON.stringify(storedUsers));

    let updatedUser = {
      username: currentUser.username,
      email: email,
      password: password,
      profile_image: profileImage,
    };
    localStorage.setItem("loggedIn", JSON.stringify(updatedUser));
  }
}

//kod för att uppdatera profilbilden
function currentProfilePicture() {

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));
  
  if (!loggedInUser) {
    console.error("Ingen användare är inloggad.");
    return;
  }
  
  const currentUser = users.find(user => user.username === loggedInUser.username);
  
  const currentPic = document.querySelector('#current-profile-pic');
  if (!currentPic) {
    console.error("Elementet #current-profile-pic hittades inte.");
    return;
  }

  if (currentUser && currentUser.profile_image) {
    currentPic.src = currentUser.profile_image;
  } else {
    console.error("Ingen profilbild hittades.");
  }
}

document.addEventListener("DOMContentLoaded", currentProfilePicture);


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
