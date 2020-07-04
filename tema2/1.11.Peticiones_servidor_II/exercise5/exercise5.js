'use strict'

const light=document.querySelector(".light");
const dark=document.querySelector(".dark");
const body = document.querySelector(".body");

function addClass(event){
  if (event.target.value==='light'){
    body.classList.add("light");
    body.classList.remove("dark");
  }else if (event.target.value==='dark'){
    body.classList.add("dark");
    body.classList.remove("light");
  }
  if (light.checked){
    localStorage.setItem("class",light.value);

  }else if (dark.checked){
    localStorage.setItem("class", dark.value);
  }
}

light.addEventListener("change",addClass);
dark.addEventListener("change",addClass);
 

//Falta la parte de pintar la página con la clase que queda guardada en el local storage al refrescar

