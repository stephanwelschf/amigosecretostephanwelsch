// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Obtener referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const botonAgregar = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const resultadoLista = document.getElementById('resultado');
const botonSortear = document.querySelector('.button-draw');
const mensajeError = document.getElementById('mensajeError');

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
  const nuevoAmigo = inputAmigo.value.trim();
  if (nuevoAmigo === '') {
    mostrarMensajeError('Por favor, ingresa un nombre válido.');
    return;
  }
  if (amigos.includes(nuevoAmigo)) {
    mostrarMensajeError(`El nombre "${nuevoAmigo}" ya está en la lista.`);
    return;
  }
  amigos.push(nuevoAmigo);
  actualizarListaAmigos();
  inputAmigo.value = '';
  inputAmigo.focus();
  ocultarMensajeError();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
  listaAmigos.innerHTML = '';
  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
  if (amigos.length < 2) {
    mostrarMensajeError('Se necesitan al menos 2 amigos para sortear.');
    return;
  }

  const amigosSorteados = [...amigos];
  shuffleArray(amigosSorteados);

  resultadoLista.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i] === amigosSorteados[i]) {
      // Si el amigo sorteado es el mismo, intercambiamos con el siguiente
      [amigosSorteados[i], amigosSorteados[(i + 1) % amigos.length]] = [amigosSorteados[(i + 1) % amigos.length], amigosSorteados[i]];
    }
    const li = document.createElement('li');
    li.textContent = `${amigos[i]} le tocó ${amigosSorteados[i]}`;
    resultadoLista.appendChild(li);
  }
  ocultarMensajeError();
}

// Función para mezclar aleatoriamente un array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Función para mostrar un mensaje de error
function mostrarMensajeError(mensaje) {
  mensajeError.textContent = mensaje;
  mensajeError.style.display = 'block';
}

// Función para ocultar el mensaje de error
function ocultarMensajeError() {
  mensajeError.style.display = 'none';
}

// Agregar evento de clic al botón de agregar amigo
botonAgregar.addEventListener('click', agregarAmigo);

// Agregar evento de clic al botón de sortear amigo
botonSortear.addEventListener('click', sortearAmigo);
