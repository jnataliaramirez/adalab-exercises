// ! Escribir ficheros 

// * importar modulo para manipular ficheros
// paso 0.
const fs = require('fs');

// * Funcion manejadora
// paso 2. 
const handleRead = (err, fileContents) => {
  if (err !== null) {
    console.log(err);
  } else {
    console.log(fileContents);
  }
}

// * parametros para utilizar ficheros
// paso 1. leer nuevos ficheros
fs.readFile('./input-file.json', 'utf-8', handleRead)
