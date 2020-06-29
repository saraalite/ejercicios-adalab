/* const paragraph = document.querySelector('.text');
paragraph.addEventListener('mouseover', function addText() {
  const text = document.querySelector('.text');
  const newText= '<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>';
  text.innerHTML = text.innerHTML + newText;
});
 */
// const buttonElement = document.querySelector('.button');

function changeColor() {
  if(event.key === 'r') {
      document.body.style.backgroundColor = "red";
  } else if(event.key ===  'm') {
      document.body.style.backgroundColor = "purple";
  }
}


document.addEventListener("keydown", changeColor);

/* 
const buttonElement = document.querySelector('.button');

function handleButtonClick(event) {
  console.log(event.currentTarget);
}

buttonElement.addEventListener('click', handleButtonClick);

 */

function handleButtonClick(a,b) {
  console.log(a.num);
  const num = 1;
  b(num);
}

const lololol = {}
lololol.currentTarget = 'soyCurrentTarget';

let objeto =  {};
objeto.num = 5;
objeto.num2 = 6;

function myfunc(a) {
  console.log(a);
}

const juan = myfunc;

handleButtonClick(objeto, juan);

