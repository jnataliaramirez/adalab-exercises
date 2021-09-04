'use strict';

function getEmoji() {
    fetch("https://api.rand.fun/number/integer/") //* Devuelve una promesa
      .then(response => response.json()) //* aquí estara la respuesta cuando llegue
      .then(data => { //* se le indica que hacer cuando se complete la promesa
        document.querySelector('.js-result').innerHTML = data.result
      });
  }
  document.querySelector('.js-emoji').addEventListener("click", getEmoji);