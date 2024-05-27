function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
}
var closureFn = outer();
//closureFn();

//o/p 10

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        // console.log(i);
    }, 1000);
}

// o/p after 1000millisecinds 012 will be printed

function createCounter() {
    let count = 0;
    return function () {
        count++;
        // console.log(count);
    };
}
const counter = createCounter();
counter();
counter();
counter();

//o/p 1 2 3  colosures concept


for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        //console.log(i);
    }, 1000);
}
//let has block scope, which preserves the value of i for each iteration within the block scope of the loop
// op 333     if we use let output will be different.

function outer() {
    var x = 10;
    function inner() {
        var y = 5;
        return x + y;
    }
    return inner;
}
var closureFn = outer();
//  console.log(closureFn());

///////
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
});
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
/**
 * Start, End,Promise,Timeout.
"Start" is logged first because it's a synchronous operation.
Then, "End" is logged because it's another synchronous operation.
"Promise" is logged because Promise.resolve().then() is a microtask
and will be executed before the next tick of the event loop.
Finally, "Timeout" is logged. Even though it's a setTimeout with a
delay of 0 milliseconds, it's still a macrotask and will be executed in
the next tick of the event loop after all microtasks have been
executed.

 */


const p = { k: 1, l: 2 };
const q = { k: 1, l: 2 };
let isEqual = p == q;
let isStartEqual = p === q;
console.log(isEqual, isStartEqual)


//false false    objects compares the reference not values


// 2+2 = 4;
//  "2"+"2" = "22";
// 2+2-2 = 2;
// "2"+"2"-"2" = 20;

let a = 'jscafe'
a[0] = 'c'
//console.log(a);

//op jscafe   //strings are immutable

// var x=10;
// function foo(){
// var x = 5;
// console.log(x)
// }
// foo();
// console.log(x)
//Output: 5 and 10

//This code prints 6 everytime. How to print 1,2,3,4,5,6 ?
function x() {

    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }

}
x();

//solution 1 using iife based on i

for (var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(() => {
            // console.log(i)
        }, i * 1000)
    })(i)
}
//solution 2using let 
function x() {

    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            //console.log(i)
        }, i * 1000)
    }

}
x();

//solution 3 using colosures
function x() {
    function closur(x) {
        setTimeout(() => {
            console.log(x);
        }, x * 1000);
    }

    for (var i = 1; i <= 5; i++) {
        closur(i);
    }
}

x();

function x(){
    let a = 10;
    function d(){
    console.log(a);
    }
    a = 500;
    return d;
   }
   var z = x();
   z();

   //op 500


   function func() {
    try {
    console.log(1)
    return              // prints 1 and comes out of excecution
    } catch (e) {
    console.log(2)
    } finally {
    console.log(3)      // irespective of error or sucess it will exce
    }
    console.log(4)
   }
   func()

   //o/p 1 3

//    const nums = [1,2,3,4,5,6,7];
// nums.forEach((n) => {
//  if(n%2 === 0) {
//  break;
//  }
//  console.log(n);
// });
// for, while, do…while and
 //o/p break cant be used in map  


 let a = true;
setTimeout(() => {
 a = false;
}, 2000)
while(a) {
 console.log(' -- inside whilee -- ');
}

//o/p  infinite loop

///////

setTimeout(() => console.log(1), 0);
console.log(2);
new Promise(res => {
 console.log(3)
 res();
}).then(() => console.log(4));
console.log(5);

//o/p 2 3 5 4 1

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("C");
   }
   console.log("D");
  
   foo();
   console.log("E")
//    Output:
//    D, A, E, B, C
   