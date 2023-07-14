function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
  
    menuToggle.classList.toggle('open');
    menuItems.classList.toggle('open');
  }