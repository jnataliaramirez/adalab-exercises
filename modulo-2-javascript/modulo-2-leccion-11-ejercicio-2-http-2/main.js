'use strict';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

function handlerClick(e) {

    fetch(`https://swapi.dev/api/people/`)
        .then(response => response.json())
        .then(data => {
            let value = input.value;
            const resultsArray = data.results;
            console.log(resultsArray)

            for (const result of resultsArray) {
                if (value === result.name) {
                    let nameSW = result.name;
                    let genderSW = result.gender;

                    list.innerHTML = `<li>Nombre: ${nameSW}</li>`;
                    list.innerHTML += `<li>Género: ${genderSW}</li>`;
                } 
            }
        });

    e.preventDefault
}

btn.addEventListener('click', handlerClick)
