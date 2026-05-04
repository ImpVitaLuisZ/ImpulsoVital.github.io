function validar() {
  const nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    alert("Escribe tu nombre y haz clic en “Enviar” para un saludo especial.");
  } else {
    alert("Hola " + nombre + ", Bienvenid@ a Impulso Vital");
  }
}

document.getElementById("btnEnviar").addEventListener("click", validar);