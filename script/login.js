document.addEventListener("DOMContentLoaded", function () {
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
  