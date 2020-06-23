
function getEl (cssClassSelector) {
    const result = document.querySelector(cssClassSelector);       
    return result;
}
const mySelector = getEl('.main__title');
if (mySelector===''){
    console.log(`No existe ningún elemento con clase, id o tag llamado ${mySelector}`);
} else {
    console.log(`Tu selector es ${mySelector}`);
}
console.log(getEl('.main__title'));


