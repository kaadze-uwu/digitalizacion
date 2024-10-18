document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = "¡Gracias por tu mensaje, " + name + "! Me pondré en contacto contigo pronto.";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "Por favor, rellena todos los campos.";
        formMessage.style.color = "red";
    }

    // Aquí podrías agregar el código para enviar el formulario a un servidor o API.
});