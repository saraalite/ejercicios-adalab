'use strict'
const paragraph = document.querySelector(".js-paragraph");
const input = document.querySelector(".js-input");
function addText(event){
  paragraph.innerHTML=event.currentTarget;
  console.log(event);
}
input.addEventListener("keyup",addText);

//El current target me sale "null" ad infinitum, me bajo de la vida. Sí parece funcionar con event.target.value, pero no con currentTarget, como nos pide el enunciado.