'use strict';

const ul = document.querySelector('.list');

// * Creación del nuevo elemento:
// const li = document.createElement('li');

// * Array para introducir datos 
const numbers = [1, 2, 3, 4, 'Nati'];

// * Recorrer el arreglo
for (let number of numbers) {
    // * Creación de los li 
    const li = document.createElement('li');
    // * Añadir contenido al nuevo elemento (li)
    let newContent = document.createTextNode(number);
    // * Añadir a cada elemento el nuevo contenido 
    li.appendChild(newContent);
    // * Añadir al ul los nuevos li 
    ul.appendChild(li)
}
