'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

// * Números pares 
const lostNumbersEven = [];

//Recorrido para encontrar los números pares
for (let numberEven of lostNumbers) {
    if (numberEven%2 === 0) {
        lostNumbersEven.push(numberEven)
    }
}
console.log(lostNumbersEven)
console.log(`Este es el arreglo de números pares ${lostNumbersEven}`)

// * Multiplos 3
const lostNumbersMultiple3 = [];

//Recorrido para encontrar los números pares
for (let numberX3 of lostNumbers) {
    if (numberX3%3 === 0) {
        lostNumbersMultiple3.push(numberX3)
    }
}
console.log(lostNumbersMultiple3)
console.log(`Este es el arreglo de números múltiplos de 3 ${lostNumbersMultiple3}`)

// * Concatenación 
const concatenation = lostNumbersEven.concat(lostNumbersMultiple3)

console.log(concatenation)
console.log(`Esta es la concatenacion de los dos arrays anteriores ${concatenation}`)