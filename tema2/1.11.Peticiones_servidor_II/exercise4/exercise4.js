"use strict";

//Aquí la constante input va fuera porque es el valor del HTML (no su valor cuando escribamos). Este input, solo el valor, nos hace falta para el addEventListener. Así, podríamos haber definido otra constante que recogiera el valor (con .value al final), pero no sería necesario porque sería más código. Nos vale con reutilizar esta dentro de la función y añadirle el .value
const input = document.querySelector(".js-input");
const paragraph = document.querySelector(".js-paragraph");
input.value = localStorage.getItem("name");
paragraph.innerHTML = input.value;

function showInfo() {
  console.log(input.value);
  paragraph.innerHTML = input.value;
  localStorage.setItem("name", input.value);
}

input.addEventListener("keyup", showInfo);
