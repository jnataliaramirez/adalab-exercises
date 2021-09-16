'use strict';

const btn = document.querySelector('.btn');

function listen(event) {
   console.log(event)
}

btn.addEventListener('click', listen)

//propiedad