'use strict';

const faceState = document.querySelector('.face');
const pageHtml = document.querySelector('.page')
debugger
function faceWink() {
    faceState.innerHTML = ';)'; 
}

function faceSmile() {
    faceState.innerHTML = ':)'
}

pageHtml.addEventListener('click', faceWink);

pageHtml.addEventListener('mouseout', faceSmile);