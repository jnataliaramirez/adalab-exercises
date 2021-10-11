// ! Escribir ficheros 

// * importar libreria interna de node para manipular ficheros
// paso 0.
const fs = require('fs');

// * objeto a meter en el fichero nuevo
// paso 2. 
const myObject = {
  user: "Mari Carmen",
  email: "mari@apple.com",
  age: 29,
};

// * Funcion manejadora
// paso 3. 
const handleWrite = err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Ha sido guardado con éxito')
  }
}

// * parametros para utilizar ficheros
// paso 1. escribir nuevos ficheros
fs.writeFile('./newObject.txt', JSON.stringify(myObject), handleWrite)

console.log(JSON.stringify(myObject));
