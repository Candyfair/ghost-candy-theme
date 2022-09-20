    // Get the menu + background
    const menuBg = document.querySelector('.menu-mobile');
    const menu = document.querySelector(".menu-mobile__container");
    
    // Open mobile menu
    const openMenu = () => {
      menuBg.classList.add("visible");
      menu.classList.add("visible");
    }
    document.querySelector(".menu-mobile-burger").addEventListener("click", openMenu);
    
    // Outside clic to close the menu
    document.addEventListener('click', event => {
      console.log('clic', event.target)
      if (event.target === menuBg) {
        menuBg.classList.remove("visible");
        menu.classList.remove("visible");
      }
    })