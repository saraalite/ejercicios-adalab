"use strict";
const selector = document.querySelector('#cities');
const container = document.querySelector('.container');
const newItem = document.createElement('img');

container.appendChild(newItem);

function addImage(){
  if (selector.value==="madrid"){
    newItem.setAttribute('src','madrid.jpeg');
  } else if (selector.value==="paris"){
    newItem.setAttribute('src','paris.jpeg');
  }else if (selector.value==="ny"){
    newItem.setAttribute('src','newyork.jpeg');
  }
}
selector.addEventListener("change",addImage);