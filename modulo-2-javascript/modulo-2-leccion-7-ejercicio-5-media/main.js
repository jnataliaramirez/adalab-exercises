'use strict';

const numbers = [3, 5, 7, 2, 4, 5, 2, 6];
numbers[5] = 9

let longitud = numbers.length;
let acumulador = 0;

// ! for of 
function average() {
    for (const number of numbers) {
        acumulador += number;
        let media = acumulador/longitud;
        console.log(`Numero inicial ${number}, ciclo ${acumulador} y su media es ${media} `);
    }
}

// ! for (let i=0; i<longitud; i++)
// function average() {
//     for (let i = 0; i<longitud ; i++) {
//     acumulador += numbers[i];
//     let media = acumulador/longitud;
//     console.log(`Numero inicial ${numbers[i]}, numero de ${i} ciclo ${acumulador} y su media es ${media} `);
//     }   
// };

average()