'use strict';

function get100Numbers(numMax) {

    const numbers = [];

    for (let index = 1; index <= numMax; index++) {
        numbers.push(index);
    }

    numbers.reverse();
    
    return numbers

}

console.log(get100Numbers(100));


