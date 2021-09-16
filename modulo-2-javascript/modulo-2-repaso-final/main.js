'use strict';

const lists = document.querySelector('.js_lists');

// * Variable global
let dataPalettes = [];

// * Verificar que ha creado el array bien 
// function verification () {
//     console.log(dataPalettes)
// }

// * Hacer petición al servidor - Fetch
fetch("http://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json")
    .then(response => response.json())
    .then(data => {
        dataPalettes = data.palettes; 
        console.log(data);
    render();
})

// * Pintar en html 
function render() {

    // * Un for para cojer cada uno de los elementos del array como uno solo
    for (const palette of dataPalettes) {
        // * Crear elementos html
        const newListItemEl = document.createElement('li');
        const newTitleItemEl = document.createElement('h2');
        const newDivItemElWrap = document.createElement('div');

        // * Configuracion de los elementos
        newListItemEl.classList.add('list-palette');
        newTitleItemEl.classList.add('name-palette');
        newDivItemElWrap.classList.add('wrap-palette');
        
        
        // * Añadir contenido: Titulo
        let newContentTitle = document.createTextNode(`${palette.name}`);
        
        
        // * Añadir el contenido a la etiqueta
        newTitleItemEl.appendChild(newContentTitle);
        
        // * Añadir <h2>, <div>:wrapper al <li>
        newListItemEl.appendChild(newTitleItemEl);
        newListItemEl.appendChild(newDivItemElWrap);
        
        // * Añadir <li> al <ul> de la página HTML
        lists.appendChild(newListItemEl);
        
        
        // * Colores 
        
        // * variable del array de los colores por cada ciclo de palette
        let arrayColors = palette.colors;
        
        // * para imprimir en pantalla se necesita un for para recorrer el array
        for (let i = 0; i < arrayColors.length; i++) {
            
            // * Creacion del elemento en cada ciclo
            let newDivItemEl = document.createElement('div');
            
            
            // * Configuracíón del elemento 
            
            // * Añadir clase 
            newDivItemEl.classList.add('color__item');
            
            // * Añadir color 
            let color = arrayColors[i];
            newDivItemEl.style.backgroundColor = `#${color}`
    
            // * Añadir <div>:listado al <div>:wrapper
            newDivItemElWrap.appendChild(newDivItemEl);
        }
    }
    
}

