const button = document.querySelector('.button');
button.addEventListener('click', function changeText() {
  const paragraph = document.querySelector('.text');
  paragraph.innerHTML="Cambio este texto";
});