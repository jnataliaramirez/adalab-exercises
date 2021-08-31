'use strict';

function isModelBox(borderBox, width, padding, borderSize) {
    if (borderBox) {
        let content = width - padding*2 - borderSize*2;
        let widthBox = width;
        return `El ancho del contenido es: ${content}px y el ancho total de la caja es: ${widthBox}px.`
    } else {
        let content = width;
        let widthBox = width + padding*2 + borderSize*2;
        return `El ancho del contenido es: ${content}px y el ancho total de la caja es: ${widthBox}px.`
    }

}

let result = isModelBox(false,100,3,3);

console.log(result)