// FUNCIÓN DEL BOTÓN DE BIENVENIDA
function saludar() {
  alert("¡Estoy aprendiendo desarrollo web!");
  console.log("Estoy comprobando mi web");
}

// FORMULARIO DE CONTACTO
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const status = document.getElementById("formStatus");

  status.textContent = "¡Formulario validado correctamente! Esta es una demostración: no se ha enviado ningún mensaje.";

  contactForm.reset();
});