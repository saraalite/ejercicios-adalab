"use strict";

//Aquí la constante input va fuera porque es el valor del HTML (no su valor cuando escribamos). Este input, solo el valor, nos hace falta para el addEventListener. Así, podríamos haber definido otra constante que recogiera el valor (con .value al final), pero no sería necesario porque sería más código. Nos vale con reutilizar esta dentro de la función y añadirle el .value
const inputName = document.querySelector(".js-input-name");
const inputLastName = document.querySelector(".js-input-lastname");
const paragraph = document.querySelector(".js-paragraph");


function showInfo() {

  paragraph.innerHTML = inputName.value + ' ' + inputLastName.value;
  const user = {
    name:inputName.value,
    lastName:inputLastName.value
  }
  localStorage.setItem(user, JSON.stringify(user));
  
}

document.addEventListener("keyup", showInfo);
