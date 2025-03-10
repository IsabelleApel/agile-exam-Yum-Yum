document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
  
    
    menuIcon.addEventListener("click", function (e) {
      e.stopPropagation(); 
      menu.classList.toggle("open");
    });
  
    
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove("open");
      }
    });
  });
  