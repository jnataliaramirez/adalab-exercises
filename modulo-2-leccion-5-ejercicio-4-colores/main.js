'use strict';

const container = document.querySelector('.container');

function scrollScreen() {
    const scrollY = window.scrollY
    
    if (scrollY >= 250) {
        container.classList.remove('pink')
        container.classList.add('red')
    } else {
        container.classList.remove('red')
        container.classList.add('pink')
    }
    
}

window.addEventListener('scroll', scrollScreen )