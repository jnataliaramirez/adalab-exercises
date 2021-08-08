'use strict';

// seleccionar clase 
const containerJS = document.querySelector(`.container`)

// asignar warning
// const warning = containerJS.classList.add('warning')
// const warningJS = document.querySelector('.warning')
// warningJS.innerHTML = `<h1>AVISO</h1> <p>Tenga cuidado</p>` 


// asignar error 
// const error = containerJS.classList.add('error')
// const errorJS = document.querySelector('.error')
// errorJS.innerHTML = `<h1>ERROR</h1> <p>Ha surgido un error</p>` 

// asignar success
const success = containerJS.classList.add(`success`)
const successJS = document.querySelector(`.success`)
successJS.innerHTML =  `<h1>CORRECTO</h1> <p>Los datos son correctos</p>` 



