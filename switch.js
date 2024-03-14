//Exporto las funciones necesarias

const leer = require('prompt-sync')({ sigint: true });
const agregarTarea = require('./agregarTarea');
const arrTarea = require('./arrayTarea');
const buscar = require('./buscar');
const menu = require('./menu'); 
const menuVerTareas = require('./menuVerTareas');

//Funcion Switch para manejar el menu
function sw(){ 

    switch(menu()) {
        case '1': //MENU VER TAREAS
            console.clear();
            menuVerTareas(); 
            console.clear();
            sw();
            break;
        case '2': //BUSCAR TAREAS
            console.clear();
            buscar(arrTarea);
            console.clear();
            sw();
            break;
        case '3': //AGREGAR TAREAS
            console.clear();
            agregarTarea();
            leer("Presione una tecla para continuar.");
            console.clear();
            sw();
            break;
        case '0': //SALIR
            leer("\nGracias por utilizar el sistema.");
            console.clear();
            break;
        default:
            leer("\nOpción no válida, presione una tecla para continuar.");
            console.clear();
            sw();
            break;
    } 
} 

module.exports = sw;