const leer = require('prompt-sync')({ sigint: true });
const arrTarea = require('./arrayTarea');
const irDetallesVolver = require('./detallesEditar');


function menuVerTareas() {

    console.log("¿Qué tareas deseas ver?\n");
    console.log("   [1] Todas");
    console.log("   [2] Pendientes");
    console.log("   [3] En Curso");
    console.log("   [4] Terminadas");
    console.log("   [0] Volver\n");

    tareasPorEstado(leer("> "));

}
module.exports = menuVerTareas;

//Funcion para controlar la lista de tareas segun su estado
function tareasPorEstado(op) {

    let exitos = [];

    switch (op) {
        case '1': //TODAS
            console.clear();
            hayTareas(arrTarea);
            console.clear();
            menuVerTareas();
            break;
        case '2': //PENDIENTES
            console.clear();
            //utilizo filter para filtrar las tareas segun el estado y asi guardarlas en un nuevo arreglo "exito"
            exitos = arrTarea.filter(task => task.estado == 'Pendiente');
            hayTareas(exitos);
            console.clear();
            menuVerTareas();
            break;
        case '3': //EN CURSO
            console.clear();
            exitos = arrTarea.filter(task => task.estado == 'En Curso');
            hayTareas(exitos);
            console.clear();
            menuVerTareas();
            break;
        case '4': //TERMINADAS
            console.clear();
            exitos = arrTarea.filter(task => task.estado == 'Terminada');
            hayTareas(exitos);
            console.clear();
            menuVerTareas();
            break;
        case '0': //VOLVER
            console.clear();
            break;
        default:
            leer("\nOpción no válida, presione una tecla para continuar.");
            console.clear();
            menuVerTareas();
            break;
    }
}

//funcion para controlar si hay tareas agregadas
function hayTareas(exitos) {

    switch(exitos.length) {
        case 0:
            console.clear();
            console.log("No hay tareas.\n");
            leer("Presione una tecla para continuar.");
            break;
        default:
            console.clear();
            console.log("Estas son todas tus tareas.\n");

            //utilizo el metodo map para recorrer el arreglo e imprimir las tareas
            exitos.map((exito, i) => {
                console.log(" [" + (i + 1) + "] " + exitos[i].titulo);
            });
            
            irDetallesVolver(exitos);
    }
}