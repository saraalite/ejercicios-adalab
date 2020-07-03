'use strict'


function getGithubInfo() {

const userName = document.querySelector('.js-name-input').value;
console.log(userName);

  fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(data => {
      console.log(userName);
      const img = document.querySelector("img");
      console.log(data);
      img.src = data.avatar_url;
      img.alt = "Avatar";
      const name = document.querySelector (".name");
      name.innerHTML = name.innerHTML + data.login;
      const repo = document.querySelector (".repos");
      repo.innerHTML = repo.innerHTML + data.public_repos;
    });
}

const btn = document.querySelector(".js-button");
btn.addEventListener("click",getGithubInfo);