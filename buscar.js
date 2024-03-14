const leer = require('prompt-sync')({ sigint: true });
const irDetallesVolver = require('./detallesEditar');

function buscar(arrTarea) {

    let busqueda
    switch (arrTarea.length) {
        case 0:
            console.log("No hay tareas.");
            break;
        default:
            console.log("Introduce el título de una Tarea para buscarla:");
            busqueda = leer("> ");
            busqueda = busqueda.toUpperCase();
            //Aca utilizo filter para filtrar las tareas por su titulo
            let exitos = arrTarea.filter(task => task.titulo.toUpperCase().includes(busqueda)); //filtro por titulo
            coincidencias(exitos);
    }

}

module.exports = buscar;

function coincidencias(exitos) {

    switch (exitos.length) {

        case 0:
            console.log("\nNo hay tareas relacionadas con la búsqueda.");
            break;
        default:
            console.log("\nEstas son las tareas relacionadas:\n");

            exitos.map((exito, i) => {
                console.log(" [" + (i + 1) + "] " + exitos[i].titulo);
            });
            
            irDetallesVolver(exitos);
            break;
    }
}