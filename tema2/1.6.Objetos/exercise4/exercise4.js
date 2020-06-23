const button = document.querySelector('.button');

button.addEventListener('click', function logEvent(e) {
    console.log(e);
    console.log(`Type es un ${typeof e.type}`);
});