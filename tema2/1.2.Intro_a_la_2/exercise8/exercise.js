'use strict';

function getEl (cssClassSelector) {
    const result = document.querySelector(cssClassSelector);       
    return result;
}
console.log (getEl('.btn'))


