require("colors");
const inquirer = require("inquirer");

//Sistema de control de menu
const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: `${'¿ Que deseas hacer ?'}`,
    choices: [
      {
        value: "1",
        name: `${'1'.green}. Crear tarea`,
      },
      {
        value: "2",
        name: `${'2'.green}. Listar tareas`,
      },
      {
        value: "3",
        name: `${'3'.green}. Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${'4'.green}. Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${'5'.green}. Completar tarea(s)`,
      },
      {
        value: "6",
        name:  `${'6'.green}. Borrar tarea`,
      },
      {
        value: "0",
        name: `${'6'.green}. Salir`,
      },
    ],
  },
];

//Menu
const inquirerMenu = async () => {
  console.clear(); //Limpiar la consola
  console.log("=========================".yellow);
  console.log(" Seleccione una opción  ".italic.white);
  console.log("=========================\n".red);

  //Desustructur the array
  const { opcion } = await inquirer.prompt(preguntas); //Desustructuramos y accedimos al name
  return opcion;
};

//Pausa
const pausarMenu = async () => {
  const question = [
    {
      type: "input",
      name: "pausa",
      message: `\nPresione ${"ENTER".green} para continuar\n`,
    },
  ];

  console.log("\n"); //Dar espacio
  await inquirer.prompt(question);
};

/**
 *
 * @param message  es una variable, el usuario registrara la informacion por hay
 * @param validate Validacion si nos ingresan informacion
 * @param question Nos regresa un objeto por eso lo desusructuramos
 */
const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return `${'-- Por favor ingrese un valor ---'.red}`;
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question); //Desustructuramos y accedimos al name
  return desc;
};

module.exports = { inquirerMenu, pausarMenu, leerInput };
