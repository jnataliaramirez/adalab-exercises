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
// el callback sera la funcion anonima fileContent ...
readFile('./input-file.json', fileContent => {
  // este es un archivo tipo string (JSON)
  const newFileContent = fileContent;

  // para manipularlo toca convertirlo a objeto
  const fileObject = JSON.parse(newFileContent)
  // se cambia los datos de la usuaria
  fileObject.user = 'Natalia';
  fileObject.email = 'jnatalia@gmail.com';
  fileObject.age = 32;
  // se debe convertir de nuevo a texto para pasarlo a un nuevo archivo
  const fileString = JSON.stringify(fileObject) 
  
  // se ejecuta la funcion de escribir en el archivo
  writeFile('./output-file.json', fileString, () => {
    console.log('The file has been copied!');
  });
});