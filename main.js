function Person(fn,ln) {
    this.fn = fn;
    this.ln = ln;
    console.log('first name is' + fn)
};

const per1 = new Person('akhi','bang');
const per2 = new Person('sab','gan');

//prototype is used to add properties

Person.prototype.fullName = function(fn,ln) {
    return fn + ln ;
};
//function constructor . They dont have return value and starts with capital letter
function SuperHero (fn, ln) {
    Person.call(this, fn, ln);
    this.superHero = true;
    console.log('SuperHero')
}

SuperHero.prototype.crimeFight = function() {
    console.log("fighting");
}

SuperHero.prototype = Object.create(Person.prototype);

const BatMan = new SuperHero('bruse','wyne');
SuperHero.prototype.constructor = SuperHero;

console.log(BatMan.fullName('akhi','bang'));