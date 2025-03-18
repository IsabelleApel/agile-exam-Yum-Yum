document.addEventListener("DOMContentLoaded", function () {
  // Hämta startanvändare från JSON-fil
  fetch('https://santosnr6.github.io/Data/yumyumusers.json')
    .then(response => response.json())
    .then(data => {
      data.users.forEach(user => {
        if (!localStorage.getItem(user.username)) {
          localStorage.setItem(user.username, user.password);
        }
      });
    })
    .catch(error => console.error('Fel vid hämtning av användardata:', error));

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
      const storedPassword = localStorage.getItem(username);
      if (!storedPassword) {
        alert("användaren finns inte");
      } else if (storedPassword !== password) {
        alert("lösenordet stämmer inte");
      } else {
        alert("Inloggning lyckades!");
      }
    });
  }
});
