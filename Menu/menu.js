function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    var menuToggle = document.querySelector('.menu-toggle');
    menuItems.classList.toggle('open');
    menuToggle.classList.toggle('open');
  }  
  // Variable para almacenar los elementos seleccionados en el carrito
  let cartItems = [];
  let totalPrice = 0;
  
  function addToCart(itemName, price) {
    cartItems.push(itemName);
    totalPrice += price;
    updateCart();
  }
  
  function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const cartItemCount = document.getElementById('cart-item-count');
    const totalElement = document.getElementById('total-price');
    
    cartItemsList.innerHTML = '';
    cartItemCount.textContent = cartItems.length;
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      cartItemsList.appendChild(li);
    });
  }
  
  function toggleCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.classList.toggle('open');
  }

  function checkout() {
    if ('Notification' in window) {
      // Verificar si las notificaciones están permitidas
      if (Notification.permission === 'granted') {
        // Mostrar la notificación
        showNotification();
      } else if (Notification.permission !== 'denied') {
        // Solicitar permiso para mostrar notificaciones
        Notification.requestPermission().then(function (permission) {
          if (permission === 'granted') {
            // Mostrar la notificación si se otorga el permiso
            showNotification();
          }
        });
      }
    } else {
      // El navegador no admite la API de notificaciones
      alert('Tu navegador no admite notificaciones.');
    }
    // Guardar los datos del carrito en localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', totalPrice);

    // Resto de tu código para la funcionalidad del carrito de compras
    cartItems = [];
    totalPrice = 0;
    updateCart();
  }
  
  function showNotification() {
    // Crear una nueva notificación
    var notification = new Notification('¡Gracias por tu orden!', {
      body: `Has comprado ${cartItems.length} productos. Total: $${totalPrice.toFixed(2)}`, // Mensaje con la cantidad de productos y el total de la compra
      icon: '/Imagenes/Compra.jpeg' // Ruta a tu icono de notificación
    });
  
    // Opcionalmente, puedes agregar un evento al hacer clic en la notificación
    notification.onclick = function () {
      // Aquí puedes redirigir al usuario a una página relacionada con la orden
      window.location.href = '/Orden_generada/Orden_generada.html';
    };
  }
  
  // Resto de tu código para el carrito de compras
  cartItems = [];
  totalPrice = 0;
  updateCart();
  