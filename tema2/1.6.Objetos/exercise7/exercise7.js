const person={};
const job= "developer";
person.firstName="Pepe";
person.lastName="López";
person.age=23;
person.job=job;

person.firstName="Juan";



person.incrementAge=function (){
    return person.age+1;
     
}

console.log(person.incrementAge());