'use strict';

const btn = document.querySelector(".js_btn");
const user = document.querySelector('.js_user');
const nameUser = document.querySelector('.js_userName');
const repos = document.querySelector('.js_userRepositorios');
const img = document.querySelector('.js_img');

function getInfoGit() {
  let username = user.value; 
  console.log(username)
  
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        nameUser.innerHTML = data.name;
        repos.innerHTML = data.public_repos;
        img.src = data.avatar_url;
    });
}

btn.addEventListener("click", getInfoGit);
