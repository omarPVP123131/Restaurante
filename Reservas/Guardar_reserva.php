<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "Gamers123";
$dbname = "Reservas";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los datos enviados desde el formulario
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];
$guests = $_POST['guests'];

// Preparar la consulta SQL para insertar la reserva en la base de datos
$sql = "INSERT INTO reservas (nombre, email, telefono, fecha, hora, personas) VALUES ('$name', '$email', '$phone', '$date', '$time', $guests)";

if ($conn->query($sql) === TRUE) {
    // Redirigir al index
    header("Location: /index.html");
    exit();
} else {
    echo "Error al realizar la reserva: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>

