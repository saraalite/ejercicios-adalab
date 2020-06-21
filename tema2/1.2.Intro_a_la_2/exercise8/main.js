'use strict';

const firstDogName = 'Dina';
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';


const element = document.querySelector('ul');
// const textToShow = '';

// ES6
element.innerHTML = `
<li>
    <div>
        <span>${firstDogName}</span></br>
        <img src="${firstDogImage}">
    </div>
</li>
 <li>
    <div>
        <span>${secondDogName}</span></br>
        <img src="${secondDogImage}">
    </div>
</li>
<li>
    <div>
        <span>${thirdDogName}</span></br>
        <img src="${thirdDogImage}">
    </div>
</li>` ;