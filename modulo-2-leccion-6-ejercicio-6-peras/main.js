'use strict';

const pears = {
    num_max : 5,
    num_min : 1,
    num_actual : 2,
    num_initial : 4
};

pears.add = function(num_actual) {
    num_actual = num_actual + 1;
    return num_actual;
};

pears.remove = function(num_actual) {
    num_actual = num_actual - 1;
    return num_actual;
};
pears.value_initial = function(num_initial) {
    num_initial = 1;
    return num_initial;
};

let pears_now = pears.add(pears.num_actual);
console.log(`Añadir 1 pera: ${pears_now} und`);
pears_now = pears.remove(pears.num_actual);
console.log(`Eliminar 1 pera: ${pears_now} und`);
pears_now = pears.value_initial(pears.num_actual, pears.num_initial);
console.log(`Reiniciar la cesta: ${pears_now}`);

pears.num_actual = pears.value_initial(pears.num_actual, pears.num_initial);
console.log(pears);