'use strict';

const classToCheck = '.warning';
const section = document.querySelector(classToCheck);

const title = document.querySelector('.title');
const text = document.querySelector('.text');

if (section.classList.contains('success')){
    title.innerHTML= 'CORRECTO';
    text.innerHTML="Los datos son correctos";
} else if (section.classList.contains('error')){
    title.innerHTML= 'ERROR';
    text.innerHTML="Ha surgido un error";
} else if (section.classList.contains('warning')){
    title.innerHTML='AVISO';
    text.innerHTML="Be careful, mi pana";
}