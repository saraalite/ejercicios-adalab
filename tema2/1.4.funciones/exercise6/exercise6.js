
 function getEl (cssClassSelector) {
    const element = document.querySelector(cssClassSelector);
    if (element===''){
        console.log(`No existe ningún elemento con clase, id o tag llamado ${cssClassSelector}`);
    } else {
        console.log(`Tu selector es ${cssClassSelector}`);
        return element;
    }       
}


const mySelector = getEl('.main__title');


console.log(mySelector);


