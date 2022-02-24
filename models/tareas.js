const Tarea = require("./tarea");
/**
 * @example listado = {'uuid-123456-1234: {id:12, desc:asd, completadoEn:56234}}
 */

class Tareas {
  _listado = {};

  //Getter method que parece una propiedad pero no lo es
  get listadoGetter() {
    const listado = []; //Areglo vacio que llenamos con la function del Object

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  //Extraer las tareas y enviarselo a la propiedad _listado
  cargarTareasFromArray(tareas = []) {
    //this._listado[tareas.id] = tareas
    // this._listado[Tarea.id] = tareas
  }

  //Nos Crea la tarea del usuario
  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
