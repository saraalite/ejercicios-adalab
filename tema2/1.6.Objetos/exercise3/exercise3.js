
function showBio() {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`
}

const adalaber1 = {}
adalaber1.name='Juan';
adalaber1.age="37 years";
adalaber1.job="Loser";
adalaber1.showBio = function() {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`
};

const adalaber2 = {}
adalaber2.name='Susana';
adalaber2.age="34 years";
adalaber2.job="Periodista";
adalaber2.showBio = showBio;

console.log(adalaber1.showBio());
console.log(adalaber2.showBio());