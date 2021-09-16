'use strict';

//ejercicio 1
function multiplicacion(a,b) {
    return a*b;
}

// console.log(multiplicacion(4,5))

//ejercicio 2
function media(a,b,c,d) {
    return (a+b+c+d)/4    
}

// console.log(media(3,2,8,5))

//ejercicio 3
function valor(precio) {
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