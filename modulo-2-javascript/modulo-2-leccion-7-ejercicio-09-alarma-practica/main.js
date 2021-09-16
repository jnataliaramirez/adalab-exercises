"use strict";

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');

function selectBtn() {
  screen.classList.toggle('red')
}

//forEach permite recorrer los elementos del array sin necesidad de usar for y ejecuta la funcion que hay dentro de si para cada elemento del array
//Se crea una función que recorra cada elemento y escuche cuando se da click sobre este 
btns.forEach(btn => btn.addEventListener('click', selectBtn));

/*

? En esta misma página abrimos las herramientas para desarrolladoras de Chrome (DevTools) y seleccionamos la pestaña Consola.

? Escribimos el siguiente código: document.querySelectorAll('h1'). ¿Qué está devolviendo este método?
* R. Devuelve el array de los elementos que contiene 

? Y si escribimos document.querySelectorAll('h1')[0] ¿qué está mostrando en consola este código?
* R. Devuelve lo que contiene la linea html en la posición cero 
* <h1 class="title">Soy un titulo</h1>

? Ahora escribimos document.querySelectorAll('h1')[0].className. ¿qué información nos muestra? ¿Y el código document.querySelectorAll('h1')[0].innerText?
* R. Muestra las clases que tiene 

? Y por último ¿qué muestra el código document.querySelectorAll('asdf') y por qué?
* R. Muestra el array de asdf aunque no este asociado a ningún elemento, hace un array de el
*/