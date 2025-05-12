var secuencia = [];
var ronda = 0;
var intento = 0;

const botonInicio = document.getElementById("inicioBtn");
const botonVerifica = document.getElementById("verificarBtn");
const parrafoSecuencia = document.getElementById("secuencia");
const inputSecuencia = document.getElementById("inputSecuencia");
const parrafoMensaje = document.getElementById("mensaje");

function IniciarJuego() {
  secuencia = [];
  ronda = 0;
  intento = 0;

  parrafoMensaje.textContent = "";

  botonInicio.style.display = "none";
  botonVerifica.style.display = "inline";

  let numeroAleatorio = GenerarDigitoAleatorio();
  secuencia.push(numeroAleatorio);
  MostrarNumeroAleatorio();
}

function VerificarSecuencia() {
  // Leemos lo que el usuario escribio
  const secuenciaUsuario = inputSecuencia.value;
  const arregloUsuario = secuenciaUsuario.split("");
  //console.log(arregloUsuario);
  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] == arregloUsuario[i]) {
      console.log("Correcto");
    } else {
      console.log("Incorrecto");
      inputSecuencia.value = "";
      botonInicio.style.display = "inline";
      botonVerifica.style.display = "none";
      parrafoMensaje.textContent = "Te Equivocaste, va pa tras!";
      return;
    }
  }
  ronda = ronda + 1;
  let numeroAleatorio = GenerarDigitoAleatorio();
  secuencia.push(numeroAleatorio);
  MostrarNumeroAleatorio();
  inputSecuencia.value = "";

  // Separamos lo que el usuario tecleo, (secuenciaUsuario.splt())
  // Nos regresará la función split un arreglo.
  // Usaremos luego For desde i=0 hasta secuencia.length para ir comparando digito por digito
}

function MostrarNumeroAleatorio() {
  const ultimoNumeroAleatorio = secuencia[secuencia.length - 1];

  parrafoSecuencia.textContent =
    "Ronda " + ronda + ": " + ultimoNumeroAleatorio;
  OcultaSecuencia();
}

function OcultaSecuencia() {
  setTimeout(function () {
    parrafoSecuencia.textContent = "Ronda " + ronda + ": X";
  }, 1500);
}

function GenerarDigitoAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 10);
  return numeroAleatorio;
}
