require("colors"); //Package of in three
const { guardarDB, leerData } = require("./helpers/guardarArc");
const { inquirerMenu, pausarMenu, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

//Como si fuera un clase
const main = async () => {
  let opt = "";

  //Instancia de la clase de tareas
  const tareas = new Tareas();

  const tareasDB = leerData();

  //Leer las tareas
  if (tareasDB) {
    //establecer tareas
    await tareas.cargarTareasFromArray(tareasDB)
  }

  //Ciclo dd while
  do {
    opt = await inquirerMenu(); //Muestra interface

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc); //Crear tarea
        break;
      case "2":
        console.log(tareas.listadoGetter); //listar
        break;
    }

    //  guardarDB(tareas.listadoGetter)

    await pausarMenu(); //Pausa
  } while (opt !== "0");
};

main();
