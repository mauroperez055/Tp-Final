//Importo las funciones necesarias
const leer = require('prompt-sync')({ sigint: true }); 
const arrTarea = require('./arrayTarea');
const Tarea = require('./Tarea');

//Funcion para crear la tarea y guardarla en el arreglo
function agregarTarea() {

    arrTarea.push(pedirDatos());
    console.log("\nTarea creada con éxito!");

}

function pedirDatos() {

    let titulo = leer("Ingrese el título de la Tarea: ");

    let descripcion = leer("Ingrese una descripción: ");

    let estado = leer("Ingrese el estado de la Tarea -> [P]endiente | [E]n Curso : ");
    estado = estado.toUpperCase();

    let dificultad = leer("Ingrese una dificultad [F]ácil | [M]edio | [D]ifícil: ");
    dificultad = dificultad.toUpperCase();

    let task = new Tarea(titulo, descripcion, estado, dificultad);

    return task;
}

module.exports = agregarTarea;
