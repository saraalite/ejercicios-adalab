'use strict'

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const includeFilms=document.querySelector(".films")

const selectButton = document.querySelector(".button");
function printFilms (){
  includeFilms.innerHTML=`${inception} </br> ${theButterFlyEffect} </br> ${eternalSunshineOfTheSM} </br> ${blueVelvet} </br> ${split}`;
}

selectButton.addEventListener('click',printFilms);