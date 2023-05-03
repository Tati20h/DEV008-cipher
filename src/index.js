import cipher from './cipher.js';

const iniciar = document.getElementById("inicio");
iniciar.addEventListener("click", function () {
  document.getElementById("principal").style.display = "none";
  document.getElementById("secundaria").style.display = "block";
});

//declaro variable donde voy a guardar el mensaje
let ms
let mensajeCifrado
const posicion = 33;
const desmensaje = document.getElementById("resmensaje1");
const btnCifrado = document.getElementById("btn2");
//caja de texto donde voy a ingresar mi mensaje
const mensaje = document.getElementById("mensaje");

//agrega un evento que busca dentro del mensaje el input y con el evento e trae la terjeta con el valor
mensaje.addEventListener("input", function (e) {
  ms = e.target.value
})
//traer el elemento donde voy a mostrar el cifrado
const elemento = document.getElementById("cifrado");

btnCifrado.addEventListener("click", function () {
  mensajeCifrado = cipher.encode(posicion,ms)
  desmensaje.value = mensajeCifrado
  elemento.textContent = mensajeCifrado;
  console.log(mensajeCifrado)
});

const desCifrado = document.getElementById("btn3");
//traer el elemento donde voy a mostrar el cifrado
const deselemento = document.getElementById("descifrado");

desCifrado.addEventListener("click", function () {
  const mensajedesCifrado = cipher.decode(posicion,mensajeCifrado)
  deselemento.textContent = mensajedesCifrado;
});
