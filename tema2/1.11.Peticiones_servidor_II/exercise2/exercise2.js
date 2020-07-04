'use strict'


function getInfo() {

const character = document.querySelector('.js-name-input').value;
console.log(character); 

   fetch(`https://swapi.dev/api/people/?search=${character}`)
    .then(response => response.json())
    .then(data => {
      console.log(character);
      const characters = data.results;
      const characterList = document.querySelector('ul');
      let characterContent = '';

      // Creamos constante para el nombre del personaje y otro para el género (como puede que haya varios personajes con el mismo nombre, tenemos que hacer un loop que vaya a recoger todos los posibles nombres y géneros de los personajes y los pinte en el HTML)
      for (let i = 0; i < characters.length; i++) {
          const characterName = characters[i].name;
          const characterGender = characters[i].gender;
          console.log(characterGender);
          console.log(characterName);
          characterContent += `<li>Name: ${characterName}  --- Gender: ${characterGender}</li>`;
      }
      console.log(characterContent);

      // Una vez que terminamos el loop y que characterContent tiene toooodos los li con todos los personajes y su información, lo añadimos a la lista
      characterList.innerHTML = characterContent;

  })
}


const btn = document.querySelector(".js-button");
btn.addEventListener("click",getInfo);


//Este ejercicio tiene parte copiada del ejercicio que subió Elena a su repo