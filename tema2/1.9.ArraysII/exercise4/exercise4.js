'use strict'
/* const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

const list = document.querySelector('.js-list');

function addClass (tarea){
    if (tarea.completed === true ) {
        list.innerHTML = `<li class="cross">${tarea.name}</li>`;
    } else {
        list.innerHTML = `<li>${tarea.name}</li>`;
    }
}

addClass(tasks[3]); */

//MI INTENTO DE EJERCICIO







//EJERCICIO DE ELENA



// Partimos de
const tasks = [
  {
      name: 'Recoger setas en el campo',
      completed: true
  },
  {
      name: 'Comprar pilas',
      completed: true
  },
  {
      name: 'Poner una lavadora de blancos',
      completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

​
​
// 1. Mostrar una frase que indique cuántas tareas hay:
​
// Vamos a crear un párrafo con la frase que indica el número de tareas y lo vamos a meter dentro del innerHTML del elemento body, para que aparezca en nuestra página:
const body = document.querySelector('body');
body.innerHTML = `<p>Número de tareas: ${tasks.length}</p>`;
​
​
// Ahora vamos a crear debajo del párrafo un elemento ul con clase "list" 
/*-------------------------------------------*
* RECUERDA que += significa:                *
* "A lo anterior, añádele esto...".         *
* De esta manera el párrafo sigue intancto. *
*------------------------------------------*/
body.innerHTML += '<ul class="list"></ul>';
​
// Ahora creamos una referencia a la lista  
let list = document.querySelector('.list');  // --> Ya podemos añadir elementos a la lista modificando el innerHTML de la variable list 🎉, sin tener que referirnos al body! 🕺🏻
​
// 2. Pintar todas las tareas en pantalla
​
// |-->  Vamos a pintar cada tarea como elemento li de la lista(ul.list):
​
for (let i = 0; i < tasks.length; i++) {
​
  // Pinta el elemento en pantalla
  list.innerHTML += `<li>${tasks[i].name}</li>`; 
​
  // selecciona el último item pintado, que es el que acabamos de pintar y lo guardamos en una variable
  let item = list.querySelector('li:last-child'); 
​
  // |--> Si la tarea está completada, añadirle el estilo "done" al último elemento (que es el que estamos analizando en esta vuelta de loop)
  if (tasks[i].completed === true) {
      item.classList.add('done');
​
      /*------ PARTE 3 ---------*/
      // Crea elemento checkboxTrue que aparece ya marcado como hecho
      const checkboxTrue = `<input type="checkbox" checked class="completed">` 
​
      //Añádeselo al final del elemento li (que está completado!)
      item.innerHTML += checkboxTrue;
​
  } else {
      // Crea elemento checkboxFalse que  NO aparece marcado como hecho
      const checkboxFalse = `<input type="checkbox" class="not-completed">` 
​
      //Añádeselo al final del elemento li (que NO está completado!)
      item.innerHTML += checkboxFalse;
  }
}
​
​
// 3. Añadir checkbox
// 3.1. Añadir input de tipo checkbox al final de cada tarea. 
// 3.2. El checkbox de las tareas completadas debe aparecer marcado. 
// 3.3. Cuando usuario hace click en el checkbox, 1-la tarea debe mostrarse como completada (tachada) y 2-modifica la propiedad de su estado en el array tasks. 
​
// Creamos constante que contiene elemento checkbox - con check
// const checkboxTrue = `<input type="checkbox" checked class="completed">`  --> en parte 3 arriba
​
// Añadimos este elemento al final de las tareas completadas:
// Esta parte la he hecho arriba, dentro de la condicional que me evalúa si una tarea está completada o no, puesto que es más lógico y condensa más el código.
​
// Hacemos lo mismo con constante checkboxFalse que no tiene atribute "checked" y que se añade al final de los items de la lista que no estén completados
​
// Modificar la propiedad completed en el array tasks según hacemos click en el checkbox
​
​
// Necesitamos actualizar el valor
// Creamos array que contiene todos los elementos checkbox de la lista:
const checkbox = document.querySelectorAll('input[type=checkbox]');
​
// Creamos la función handler que actualizará el estatus de las tareas:
function updateStatus(event) {
  let hell = event.currentTarget;
  console.log(hell);
  console.log("HELL");
}
​
// Creamos un loop para asignarle a cada checkbox un event listener que ejecutará la función
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('change', updateStatus); // busca el change event en MDN!
}