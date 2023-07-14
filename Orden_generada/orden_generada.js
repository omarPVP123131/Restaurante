document.addEventListener('DOMContentLoaded', function() {
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
  
    // Obtener los datos de la orden del localStorage
    const storedCartItems = localStorage.getItem('cartItems');
    const storedTotalPrice = localStorage.getItem('totalPrice');
  
    if (storedCartItems && storedTotalPrice) {
      // Convertir los datos de la orden de JSON a objetos JavaScript
      const cartItems = JSON.parse(storedCartItems);
      const totalPrice = parseFloat(storedTotalPrice);
  
      // Mostrar los detalles de la orden en el HTML
      orderItems.innerHTML = generateOrderItemsHTML(cartItems);
      orderTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
    } else {
      // No hay datos de la orden almacenados en el localStorage
      orderItems.innerHTML = '<p>No se encontraron detalles de la orden.</p>';
      orderTotal.textContent = '';
    }
  });
  
  function generateOrderItemsHTML(items) {
    let html = '<ul>';
  
    items.forEach(item => {
      html += `<li>${item}</li>`;
    });
  
    html += '</ul>';
  
    return html;
  }
// Obtener referencia a los elementos del DOM
const btnComplete = document.getElementById('btn-complete');
const btnIncomplete = document.getElementById('btn-incomplete');

// Evento clic para el botón "Compra Finalizada"
btnComplete.addEventListener('click', function() {
  alert('¡Gracias por tu compra! Tu pedido ha sido completado.');
  // Aquí puedes realizar cualquier acción adicional necesaria
});

// Evento clic para el botón "Faltó Algo"
btnIncomplete.addEventListener('click', function() {
  alert('Si algo faltó en tu orden, por favor contacta a nuestro equipo de soporte.');
  // Aquí puedes realizar cualquier acción adicional necesaria
});

// Evento clic para el botón "Compra Finalizada"
btnComplete.addEventListener('click', function() {
  // Mostrar el menú desplegable
  document.getElementById("menu-dropdown").style.display = "block";
});
