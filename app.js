// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];

function obtenerAmigos() {
    let amigoObtenido=document.getElementById('amigo').value;
    if (amigoObtenido === "") {
        alert("Por favor, inserte un nombre.");  // Mostrar el alert si está vacío
        return;  // Salir de la función si está vacío
    }

    // Si no está vacío, agregar al array
    arrayAmigos.push(amigoObtenido);
    console.log(arrayAmigos);

    // Limpiar el campo de texto
    document.getElementById('amigo').value = '';

    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Iterar sobre el arreglo de amigos y agregar un <li> por cada uno
    for (let i = 0; i < arrayAmigos.length; i++) {
        // Crear un nuevo elemento de lista
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = arrayAmigos[i];  // Asignar el nombre del amigo
        lista.appendChild(nuevoElemento);  // Agregar el nuevo <li> a la lista
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que el arreglo no esté vacío
    if (arrayAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");  // Mostrar un mensaje si no hay amigos
        return;  // Salir de la función si el arreglo está vacío
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);

    // Obtener el nombre sorteado utilizando el índice aleatorio
    let amigoSorteado = arrayAmigos[indiceAleatorio];

    // Mostrar el amigo sorteado en el elemento de resultado
    document.getElementById('resultado').innerHTML = "El amigo sorteado es: " + amigoSorteado;
}

