'use strict';
// * Ejercicio 1
const object = document.querySelector('.object');

const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'Periodista'
}

object.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.profession} `

 // * Ejercicio 2

 // Parte 1

adalaber1.run = loguear => `Estoy corriendo`

console.log(adalaber1.run())

// Parte 2

adalaber1.runMarathon = distance => `Estoy corriendo una maratón de ${distance} kilómetros`

console.log(adalaber1.runMarathon('50'))