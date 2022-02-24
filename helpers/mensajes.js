require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear(); //Limpiar la consola
    console.log("=========================".yellow);
    console.log(" Seleccione una opción  ".blue);
    console.log("=========================\n".red);

    //Menu de la aplicación
    console.log(`${"1.".green} Crear Tarea`);
    console.log(`${"2.".green} Listar Tareas`);
    console.log(`${"3.".green} Listar Tareas Completadas`);
    console.log(`${"4.".green} listar Tareas Pendientes`);
    console.log(`${"5.".green} Completar Tarea(s)`);
    console.log(`${"6.".green} Borrar Tarea`);
    console.log(`${"7.".green} Salir\n`);

    //Preparar the interface
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Selecciona una optión: ", (opt) => {
      resolve(opt);  //Respuesta del usuario
      readline.close(); //Mata el proceso
    });
  });
};

//Pausar la ejecucion
const pausa = () => {
  return new Promise((resolve) => {
    //Preparar the interface
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
      resolve(); //Resuelve la function
      readline.close(); //Mata el processo
    });
  });
};

module.exports = { mostrarMenu, pausa };
