function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    var menuToggle = document.querySelector('.menu-toggle');
    menuItems.classList.toggle('open');
    menuToggle.classList.toggle('open');
  }  

// Obtén una referencia al formulario de reserva
const reservationForm = document.querySelector('.reservation-form');

// Escucha el evento de envío del formulario
reservationForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtén los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  // Crea el contenido de la notificación
  const notificationOptions = {
    body: `Reserva realizada para ${name} el ${date} a las ${time}`,
    icon: '/Imagenes/orden.jpeg'
  };

  // Verifica si las notificaciones son compatibles con el navegador
  if ('Notification' in window && Notification.permission === 'granted') {
    // Crea y muestra la notificación
    new Notification('Reserva realizada', notificationOptions);
  } else if ('Notification' in window && Notification.permission !== 'denied') {
    // Solicita permiso para mostrar notificaciones si no se ha denegado
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        // Crea y muestra la notificación
        new Notification('Reserva realizada', notificationOptions);
      }
    });
  }
});
