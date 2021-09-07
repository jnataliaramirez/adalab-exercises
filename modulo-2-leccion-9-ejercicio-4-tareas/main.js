'use strict';

const main = document.querySelector(".js_main");
const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
    },
];

for (const data of tasks) {
    if (data.completed === true) {
        const html = `<li >${data.name} </li> <input type="checkbox" class="checked" />`;
        main.innerHTML += html;
    } else {
        const html = `<li>${data.name} </li_><input type="checkbox" class="input"/>`;
        main.innerHTML += html;
    }
}
const inputs = document.querySelectorAll(".input");
const lists = document.querySelectorAll("li");

function getCheckOut() {
    let list;
    lists.forEach((list) => list.classList.add("complete"));
}

inputs.forEach((input) => input.addEventListener("click", getCheckOut));