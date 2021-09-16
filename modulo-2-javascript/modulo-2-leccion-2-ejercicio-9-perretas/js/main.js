'use strict';

//perro 1
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

let dog1 = document.querySelector('.dog-1')

dog1.innerHTML = `<img src=" ${firstDogImage}" alt="Dog image"> ${firstDogName}`

//perro 2
const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

let dog2 = document.querySelector('.dog-2')

dog2.innerHTML = `<img src=" ${secondDogImage}" alt="Dog image"> ${secondDogName}`

//perro 3
const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

let dog3 = document.querySelector('.dog-3')

dog3.innerHTML = `<img src=" ${thirdDogImage}" alt="Dog image"> ${thirdDogName}`