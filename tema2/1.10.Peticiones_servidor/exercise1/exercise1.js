'use strict'
function getNumber() {
  fetch('https://api.rand.fun/number/integer?min=0&max=10000')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    });
}
document.querySelector('.js-number').addEventListener("click", getNumber);


//Al principio no me salía, pero después me he metido en el sitio (api.rand.fun y en el apartado de integer), he abierto la consola, ido a network, pinchado en el botón "reload" de la página, pinchado en la petición que sale en consola, la he desplegado y he copiado el link. Solo me va con ese link y no con el que sale arriba en la barra de navegación.