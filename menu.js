const leer = require('prompt-sync')({ sigint: true }); 

//Funcion que muestra el menu principal
function menu(){

    console.log("¡Hola Mauro!\n");
    console.log("¿Qué deseas hacer?\n");
    console.log("   [1] Ver Mis Tareas.");
    console.log("   [2] Buscar una Tarea.");
    console.log("   [3] Agregar una Tarea.");
    console.log("   [0] Salir.\n");
    
    let op = leer("> ");
    return op;

}

module.exports = menu;