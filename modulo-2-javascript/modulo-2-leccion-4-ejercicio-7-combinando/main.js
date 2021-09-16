'use strict';

//ejercicio 4
function esPar(numero) {
    const par = numero % 2 === 0
    return par;
}

// ejercicio 6
function getEl(selector) {
    const classHtml = document.querySelector(selector);

    if (!classHtml) {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`)
    }

    return classHtml;
}

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


