// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Obtener referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const botonAgregar = document.getElementById('botonAgregar');
const listaAmigos = document.getElementById('listaAmigos');
const resultadoLista = document.getElementById('resultado');
const botonSortear = document.querySelector('.button-draw');

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
  const nuevoAmigo = inputAmigo.value.trim();
  if (nuevoAmigo !== '') {
    amigos.push(nuevoAmigo);
    actualizarListaAmigos();
    inputAmigo.value = '';
  }
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
    resultadoLista.innerHTML = 'Se necesitan al menos 2 amigos para sortear.';
    return;
  }

  const amigosSorteados = [];
  const amigosCopia = [...amigos];

  while (amigosCopia.length > 0) {
    const indiceAmigoSorteado = Math.floor(Math.random() * amigosCopia.length);
    const amigoSorteado = amigosCopia[indiceAmigoSorteado];
    amigosSorteados.push(amigoSorteado);
    amigosCopia.splice(indiceAmigoSorteado, 1);
  }

  resultadoLista.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${amigos[i]} le tocó ${amigosSorteados[i]}`;
    resultadoLista.appendChild(li);
  }
}

// Agregar evento de clic al botón de agregar amigo
botonAgregar.addEventListener('click', agregarAmigo);

// Agregar evento de clic al botón de sortear amigo
botonSortear.addEventListener('click', sortearAmigo);