'use strict';

const object = document.querySelector('.object');

const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'Periodista'
}


object.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.profession} `

const adalaber2 = {};
adalaber2.name = 'Rocio';
adalaber2.age = 25;
adalaber2.profession = 'actriz';

object.innerHTML += `<p>Mi nombre es ${adalaber2.name} tengo ${adalaber2.age} años y soy ${adalaber2.profession}</p>`