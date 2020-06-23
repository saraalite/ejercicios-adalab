const currentYear = 2020;
introduceYear=2034;

if(introduceYear%4===0){
    console.log("Este año es bisiesto");
} else if (introduceYear%4===1){
    console.log(`El próximo año bisiesto será ${introduceYear+3}`);
} else if (introduceYear%4===2){
    console.log(`El próximo año bisiesto será ${introduceYear+2}`);
} else if (introduceYear%4==3){
    console.log (`El próximo año bisiesto será ${introduceYear+1}`);
}