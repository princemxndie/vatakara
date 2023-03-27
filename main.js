const navMenu = document.querySelector(".navmenu");

const navToggleBtn = document.querySelector(".toggle-btn");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
closeIcon.style.display = "none";


navToggleBtn.addEventListener("click", openNavMenu);

  function openNavMenu(e) {
    
    if (navMenu.classList.contains("hidden-left")) {
      navMenu.classList.remove("hidden-left");
      navMenu.classList.add("slide-right");
      
      openIcon.style.display = "none";
      closeIcon.style.display = "block";
      
      navToggleBtn.removeEventListener("click", openNavMenu);
      navToggleBtn.addEventListener("click", closeNavMenu);
    } 
  }
  
  function closeNavMenu(e) {
    if (navMenu.classList.contains("slide-right")) {
      navMenu.classList.remove("slide-right");
      navMenu.classList.add("hidden-left");
      
      closeIcon.style.display = "none";
      openIcon.style.display = "block";
      
      navToggleBtn.removeEventListener("click", closeNavMenu);
      
      navToggleBtn.addEventListener("click", openNavMenu);
    }
  }