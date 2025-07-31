// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo(nombre) {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();


    // validar que el campo no este vacio

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Validar que el amigo no esté ya en la lista
    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya está en la lista.');
        return;
    }

    //agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // limpiar el campo de entrada
    inputAmigo.Value = '';

    // actualizar la lista de amigos en html

    actualizarListaAmigos();
}   

//funcion actualizar la lista de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista actual

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//funcion para seleccionar un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para seleccionar.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    alert(`El amigo seleccionado es: ${amigoSeleccionado}`);
}