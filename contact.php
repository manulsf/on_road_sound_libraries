<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Guardar el mensaje en un archivo de texto
    $archivo = "mensajes.txt";
    $mensajeCompleto = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje\n\n";
    file_put_contents($archivo, $mensajeCompleto, FILE_APPEND);

    // Enviar un correo electrónico con el mensaje
    $para = "tuemail@example.com";
    $asunto = "Nuevo mensaje de contacto";
    $cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";
    mail($para, $asunto, $cuerpo);

    // Redirigir al usuario a una página de agradecimiento
    header('Location: gracias.html');
    exit;
}
?>