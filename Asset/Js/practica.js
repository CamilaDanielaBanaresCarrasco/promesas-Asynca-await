let enviado = false;

async function enviarMensaje() {
  const mensajeInput = document.getElementById('mensajeInput');
  const destinatarioInput = document.getElementById('destinatarioInput');

  if (enviado) {
    alert('Ya has enviado un mensaje. No se puede enviar otro.');
    return;
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simular retardo de 2 segundos

    enviado = true;
    alert('El mensaje ha sido enviado con éxito.');

  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const enviarButton = document.querySelector('button');
  enviarButton.addEventListener('click', enviarMensaje);
});