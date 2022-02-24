const fs = require("fs");
const archivo = "./db/data.json"; //Ruta del archivo

/**
 * @param data Es la informacion que estamos recibiendo por parte del usuario y que vamos a guardar.
 */

const guardarDB = (data) => {
  //JSON.stringify pasa un objeto a string
  fs.writeFileSync(archivo, JSON.stringify(data));
};

//Leer informacion
const leerData = () => {
  //Validar si el archivo exite
  if (!fs.existsSync(archivo)) {
    return null;
  }

  //Se le envia la data, utf-8 para poder entender la data generada
  const info = fs.readFileSync(archivo, { encoding: "utf-8" });
  //JSON.parse pasa un string a un objeto
  const data = JSON.parse(info);

  return data;
};

module.exports = { guardarDB, leerData };
