'use strict';

function get100Numbers(numMax) {

    const numbers = [];

    for (let index = 1; index <= numMax; index++) {
        numbers.push(index);
    }
    
    return numbers

}

console.log(get100Numbers(40));

// * Esto funciona, fuera de la función --->

// const numbers = [];

// for (let index = 1; index <= 100; index++) {
//     numbers.push(index);
// }

// console.log(numbers);

