'use strict'

let dogYear=14;

if (dogYear===1) {
    console.log('Tu perro tiene 15 años humanos')
}                                            
else if (dogYear === 2) {
    console.log('Tu perro tiene 24 años humanos')
}                                  
else if (dogYear >= 3) {
    console.log (`Tu perro tiene ${((dogYear-2)*5)+24} años humanos`)
}