/*Definicion del constructor Tarea*/

function Tarea(titulo, descripcion, estado, dificultad) {

        this.titulo = titulo;
        this.descripcion = descripcionVacia(descripcion);
        this.estado = validarEstado(estado);
        this.fCreacion = formatoFecha(new Date());
        this.dificultad = validarDificultad(dificultad);


        //metodos para validar el estado y la dificultad que ingreso el usuario
        function validarEstado(est) {

                switch (est) {
                        case ' ':
                        case " ":
                        case '':
                        case "":
                        case 'P':
                                return 'Pendiente';
                        case 'E':
                                return 'En Curso';
                        case 'T':
                                return 'Terminada';
                        case 'C':
                                return 'Cancelada';
                        default:
                                return 'Pendiente';
                }
        }

        function validarDificultad(dif) {

                switch (dif) {
                        case ' ':
                        case " ":
                        case '':
                        case "":
                        case 'F':
                                return 'Fácil';
                        case 'M':
                                return 'Medio';
                        case 'D':
                                return 'Difícil';
                        default:
                                return 'Fácil';
                }
        }

        function descripcionVacia(desc) {

                switch (desc) {
                        case '':
                        case ' ':
                        case "":
                        case " ":
                                return "Sin descripción.";
                        default:
                                return desc;
                }
        }

        //Metodo para darle formato dd/mm/aaaa a la fecha
        function formatoFecha(date) {

                let day = date.getDate().toString().padStart(2, '0');
                let month = (date.getMonth() + 1).toString().padStart(2, '0');
                let year = date.getFullYear().toString();

                return `${day}/${month}/${year}`;
        }

        //Metodo para validar y guardar las modificaciones hechas en la tarea
        this.editarTarea = function(nuevaDescripcion, nuevoEstado, nuevaDificultad) {

                this.descripcion = nuevaDescripcion.trim() !== '' ? nuevaDescripcion : this.descripcion;
                
                this.estado = nuevoEstado.trim() !== '' ? validarEstado(nuevoEstado) : this.estado;

                this.dificultad = nuevaDificultad.trim() !== '' ? validarDificultad(nuevaDificultad) : this.dificultad;
                
        }

}
module.exports = Tarea;