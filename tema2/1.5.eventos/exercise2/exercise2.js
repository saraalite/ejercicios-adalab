const button = document.querySelector('.button');
button.addEventListener('click', function sayHi() {
  const name = document.querySelector('.input').value;
  console.log(`Hola, ${name}`);
});