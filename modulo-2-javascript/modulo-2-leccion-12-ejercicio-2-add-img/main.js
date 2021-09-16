'use strict';

const divImg = document.querySelector('.js_images');
const select = document.querySelector('#city');


// * Creación del nuevo elemento:
const img1 = document.createElement('img');
divImg.appendChild(img1);
const img2 = document.createElement('img');
divImg.appendChild(img2);
const img3 = document.createElement('img');
divImg.appendChild(img3);

function handlerCity() {
    let value = select.value;

    // * Adicionar atributos a la imagen, dependiendo de la selección 
    if(value === 'Madrid' ) {
        img1.src = `./img/madrid_1.jfif`
        img1.alt = 'Madrid Bonita'
        img2.src = `./img/madrid_2.jfif`
        img2.alt = 'Madrid Bonita'
        img3.src = `./img/madrid_3.jfif`
        img3.alt = 'Madrid Bonita'
    } else if (value === 'París' ) {
        img1.src = `./img/paris_1.jfif`
        img1.alt = 'París Bonita'
        img2.src = `./img/paris_2.jfif`
        img2.alt = 'París Bonita'
        img3.src = `./img/paris_3.jfif`
        img3.alt = 'París Bonita' 
    } else if (value === 'NuevaYork' ) {
        img1.src = `./img/newYork_1.jfif`
        img1.alt = 'New York Bonita'
        img2.src = `./img/newYork_2.jfif`
        img2.alt = 'New York Bonita'
        img3.src = `./img/newYork_3.jfif`
        img3.alt = 'New York Bonita'
    }
}


select.addEventListener('change', handlerCity)
