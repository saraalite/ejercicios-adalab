"use strict";
const users = [
  {
    name: 'Angela',
    phone: '915552323',
    surname: 'Davis'
  },
  {
    name: 'Virginie',
    phone: '915554564',
    surname: 'Despentes'
  },
  {
    name: 'Judith',
    phone: '915555656',
    surname: 'Butler'
  }
];

const name = document.querySelector('#firstName');
console.log(name);
const lastName = document.querySelector('#lastName');
const phone = document.querySelector('#phone');
const select = document.querySelector('#data');


function fillForm(){
if (select.value==="Angela"){
  name.value=users[0].name;
  lastName.value=users[0].surname;
  phone.value=users[0].phone;
} else if (select.value==="Virginie"){
  name.value=users[1].name;
  lastName.value=users[1].surname;
  phone.value=users[1].phone;
} else if (select.value==="Judith"){
  name.value=users[2].name;
  lastName.value=users[2].surname;
  phone.value=users[2].phone;
}
}
 select.addEventListener("change",fillForm); 