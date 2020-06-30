'use strict'

function ten(timesToRepeat,word){
    for (let i = 0; i < timesToRepeat; i = i + 1) {
        console.log(word);
      }
}
const writeThis = ten;
writeThis(5,"pizza")
writeThis(18, "avocado")
writeThis(3,"hummus")