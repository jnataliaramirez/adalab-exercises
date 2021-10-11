// ! Leer y escribir archivos

// * importar libreria interna de node para manipular ficheros
const fs = require('fs');

// * funcion de lectura de fichero
const readFile = (fileName, callback) => {
  // * lectura de archivo
  // la funcion manejadora es = (err, data) ...
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback(data);
    }
  });
};

// * funcion de escritura de archivo
const writeFile = (fileName, fileContent, callback) => {
  // * escritura de archivo
  // la funcion manejadora es = err ...
  fs.writeFile(fileName, fileContent, err => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback();
    }
  });
};

// * ejecucion de las funciones, 1. se ejecuta readFile y dentro de ella con el callback se ejecuta 2. writeFile
// el callback sera la funcion anonima fileContent 
readFile('./input-file.json', fileContent => {
  const newFileContent = fileContent;

  writeFile('./input-file.json', newFileContent, () => {
    console.log('The file has been copied!');
  });
});