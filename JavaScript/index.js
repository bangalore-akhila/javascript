// closures
function outer() {   // outer function 
    let count = 0;
    function inner() {
        count++;
        console.log("count", count);  // inner function accesing outer function variables
    }
    return inner();
}

outer();

//////////////////////////\
//apply, call and bind

const john= {
    firstName : "Bangalore",
    lastName : "Akhila"
};

function greet (greeting){
    console.log(`${greeting} ${this.firstName} ${this.lastName}`)
}

greet.call(john,'welcome');
greet.apply(john,['hello']);

////////////////////////////////
//currying

const add = x => y => {
    console.log(x+y)
    return x+y
};

const addNum20 = add(20);
addNum20(100);
addNum20(200);
