const leer = require('prompt-sync')({ sigint: true });
const editarTarea = require('./Tarea');

function irDetallesVolver(exitos) {

    console.log("\n¿Deseas ver los detalles de alguna?");
    console.log("Introduce el número para verla o 0 para volver.");
    let eleccion = leer("> ");

    switch (eleccion) {
        case '0': //Volver al menu anterior
            console.clear();
            break;
        default:
            let eleccionNumero = Number(eleccion);
            let eleccionValida = !isNaN(eleccionNumero) && eleccionNumero >= 1 && eleccionNumero <= exitos.length;

            eleccionValida 
                ? detallesTarea(eleccionNumero, exitos) //si es true vemos los detalles
                : leer("Opción no válida!, presione una tecla para continuar."); //si es false muestra mensaje de error

            break; 
    }
}
module.exports = irDetallesVolver;

//Funcion para mostrar los detalles de la tarea elegida
function detallesTarea(numTarea, exitos) {

    console.clear();
    console.log("Esta es la tarea que elegiste.\n");
    console.log(" " + exitos[numTarea - 1].titulo);
    console.log("\n " + exitos[numTarea - 1].descripcion);
    console.log("\n Estado:       " + exitos[numTarea - 1].estado);
    console.log(" Dificultad:   " + exitos[numTarea - 1].dificultad);
    console.log(" Creación:     " + exitos[numTarea - 1].fCreacion);
    menuEditar(numTarea, exitos);
}

//Funcion para manejar el menu de edicion de una tarea

function menuEditar(numTarea, exitos) {

    console.log("\nSi deseas editarla, presiona E, o presiona 0 para volver."); //falta hacer el Editar para agregarlo aca
    let eleccion = leer("> ").toUpperCase(); //controlar que sea valida la entrada del usuario

    switch (eleccion) {
        case '0': //Volver al menu anterior
            console.clear();
            break;
        case 'E':
            pedirAtributosNuevos(numTarea, exitos);
            break;
        default:
            leer("Opción no válida!, presione una tecla para continuar.");
            detallesTarea(numTarea, exitos);
            break;
    }

}

function pedirAtributosNuevos(numTarea, exitos) {

    console.log("Estás editando la tarea " + exitos[numTarea - 1].titulo + ".\n");
    console.log("- Si deseas mantener los valores de un atributo, simplemente dejalo en blanco.");
    console.log("- Si deseas dejar en blanco un atributo, escribe un espacio.");
    let nuevaDescripcion = leer("1. Ingresa la descripcion: ");
    let nuevoEstado = leer("2. Estado ([P]endiente / [E]n Curso / [T]erminada / [C]ancelada): ").toUpperCase();
    let nuevaDificultad = leer("3. Dificultad ([F]ácil | [M]edio | [D]ifícil): ").toUpperCase();

    exitos[numTarea - 1].editarTarea(nuevaDescripcion, nuevoEstado, nuevaDificultad);

    console.log("\n¡Datos guardados!\n");
    leer("Presiona cualquier tecla para continuar...");
}