'use strict';

const htmlElement = 'body';


const nombre = 'Sara Alite';

const texto = `El nombre de mi compañera es ${nombre}, y está compuesto por ${nombre.split(' ').join('').length} caracteres`



const element = document.querySelector(htmlElement);
// const textToShow = '';

// ES6
element.innerHTML = `
    <div class="popup">
        <span>${texto}</span>
    </div>`;