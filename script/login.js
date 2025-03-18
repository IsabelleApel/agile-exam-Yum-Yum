document.addEventListener("DOMContentLoaded", function () {
  // Hämta startanvändare från JSON-fil
  fetch("https://santosnr6.github.io/Data/yumyumusers.json")
    .then((response) => response.json())
    .then((data) => {
      data.users.forEach((user) => {
        console.log(user);
        if (!localStorage.getItem(user.username)) {
          localStorage.setItem(user.username, JSON.stringify(user));
        }
      });
    })
    .catch((error) =>
      console.error("Fel vid hämtning av användardata:", error)
    );

  // Hamburgermeny-funktionalitet
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  if (menuIcon && menu) {
    menuIcon.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove("open");
      }
    });
  }

  // Inloggningsfunktionalitet
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const storedUser = localStorage.getItem(username);
      const user = storedUser ? JSON.parse(storedUser) : null;

      console.log(user.password);
      if (!user.password) {
        alert("användaren finns inte");
      } else if (user.password !== password) {
        alert("lösenordet stämmer inte");
      } else {
        alert("Inloggning lyckades!");
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        localStorage.setItem("loggedIn", "true");
        window.location.href = "profile.html";
      }
    });
  }
});
