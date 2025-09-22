//El principal objetivo de este desafío es fortalecer tus habilidades
//en lógica de programación. Aquí deberás desarrollar la lógica
//para resolver el problema.

//Crear un array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
//Obtener el elemento de la lista
    let input = document.getElementById("amigo");
//trim() elimina espacios al inicio/final
    let nombre = input.value.trim(); 
// Validar que no esté vacío
    if (nombre !== "") {
//Agregar elementos a la lista
        amigos.push(nombre);
//Mostrar en consola los nombres de amigos
        console.log(amigos); 
//Mostrarlo también en la lista
    let li = document.createElement("li");
        li.textContent = nombre;
        document.getElementById("listaAmigos").appendChild(li);
//Limpiar el campo de entrada
        input.value = "";
    } else {
//Validar la entrada
         alert("Por favor, escribe un nombre");
    }
  }
  
function sortearAmigo() {
//Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("Por favor, escribe un nombre");
    } else {
        console.log("El array no es null y tiene datos");
//Generar un índice aleatorio
    let NumeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(NumeroAleatorio);
//Obtener el nombre sorteado
    let ganador = amigos[NumeroAleatorio];
//Mostrar el resultado:
    let resultado = document.getElementById("resultado");
        resultado.textContent = `🎉 El ganador es: ${ganador}🎉`;
}
         
}


