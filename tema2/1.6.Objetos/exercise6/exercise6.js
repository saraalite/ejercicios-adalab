const cesta = {
    max: 6,
    min: 0,
    actual: 2,
    inicial: 2,
    añadirPera: function () {
        if (this.actual >= this.max) {
            this.actual = this.max;
        } else {
            this.actual += 1;    
        }
    },
    sacarPera: function () {
        if (this.actual <= this.min) {
            this.actual = this.min;
        } else {
            this.actual -= 1;    
        }
    },
    restablece: function () {
        this.actual = this.inicial; 
    }, 
}

cesta.sacarPera()
cesta.restablece()

console.log(cesta.actual);

