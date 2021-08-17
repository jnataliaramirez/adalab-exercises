'use strict';

// llamar peliculas
const movie1 = document.querySelector('#movie1');
const movie2 = document.querySelector('#movie2');
// llamar boton para evento
const btn = document.querySelector('.btn');
// llamar div para agregar contenido
const add = document.querySelector('.include')

function msnScreen() {
    //llamar valor de html
    const movie1Value = movie1.value;
    const movie2Value = movie2.value;
    //creación de array
    const movies = [];
    movies[0] = movie1Value;
    movies[1] = movie2Value;
    
    for (const movie of movies) {
        add.innerHTML += `<p>"¡A mí también me encantó ${movie}! Tenemos mucho en común, humana. </p>`
    }
}

btn.addEventListener('click', msnScreen)