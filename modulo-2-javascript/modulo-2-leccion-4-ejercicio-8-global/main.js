'use strict';
// hacer funciones flecha a lo loco 

'use strict';

//ejercicio 1
const multiplicacion = (a,b) => a*b;

// console.log(multiplicacion(4,5))

//ejercicio 2
const media = (a,b,c,d) => (a+b+c+d)/4;

// console.log(media(3,2,8,5))

//ejercicio 3
const valor = (precio) => {
    const iva = 0.21 * precio;
    const precioTotal = precio+iva

    return (`Precio sin IVA: ${precio}, IVA: ${iva} y Total ${precioTotal}`)
    
}

// console.log(valor(10))

//ejercicio 4
function esPar(numero) {
    const par = numero % 2 === 0

    return par;
}

// console.log(esPar(5))


//ejercicio 4
const esPar = (numero) => {
    const par = numero % 2 === 0;
    return par;
};


// ejercicio 5
const getEl = (selector) => {
    const elemento = document.querySelector(selector);
    return elemento;
}

const prueba1 = getEl('.container');
console.log(`prueba 1:`)
console.log(prueba1)

const prueba2 = getEl('.title')
console.log(`prueba 2:`)
console.log(prueba2)

const prueba3 = getEl('.img')
console.log(`prueba 3:`)
console.log(prueba3)

const text = prueba2.innerHTML
console.log(text)

// ejercicio 6
const getEl = (selector) => {
    const classHtml = document.querySelector(selector);

    if (!classHtml) {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    }

    return classHtml;
};

//ejercicio 7
const parrafo = getEl('.parrafo');
const recorridoParrafo = parrafo.innerHTML

const parrafoANumero = parseInt(recorridoParrafo)

const esParOImpar= esPar(parrafoANumero)

if (esParOImpar) {
    console.log(`Este numero es PAR ${parrafoANumero}`)
} else {
    console.log(`Este numero es IMPAR ${parrafoANumero}`)

}

// ejercicio 8
let secretLetter = 'y';
const mySecretLetter = () => {
  secretLetter = 'x';
  return secretLetter;
};
