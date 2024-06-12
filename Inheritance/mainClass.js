class Person {
    constructor(fn,ln){
        this.fn = fn;
        this.ln = ln;
    }

    getMyFullName = () => {
        return this.fn + this.ln;
    }
}

class SuperHero extends Person {
    constructor(fn,ln){
        super(fn,ln);
        this.isSuperHero = 'true'
    }

    fightCrime () {
        console.log('fighting')
    }
}

const super1 = new SuperHero('bruse','wyne');
console.log(super1.getMyFullName())