'use strict';

function iva (a) {
    const result= (a*0.21)+a;        
    return 'Precio sin iva:'+a+', iva: 2.1 y Total: '+result;
}
console.log (iva (8))
