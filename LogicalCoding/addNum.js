function addNumbers(a,b) {
    console.log("sum" , a + b);
}

function maxNumber(a,b) {
    var max;
    if(a>b) {
        max = a;
    } else max = b;
    console.log("maxNumber", max);
}

// function palindrome(input) {
//     let isPalindrome = true;
//     //let revArray = input.reverse();
//     //reverses the string
//     //let revStr = input.split("").reverse().join("");
//     // if(revArray === input) {
//     //     isPalindrome = true;
//     // } else {
//     //     isPalindrome = false;
//     // }
//     //without using reverse
//    let end = input.length - 1;
//    let start = 0;
   
//    while(input[start] !== input[end]) {
//     isPalindrome = false;
//     start++;
//     end--;
//    }

//     if(isPalindrome) { console.log("Palindrome") } else { console.log("NotPalindrome") }
    
// };


// function evenNumFilter(input){
// let evenNum = input.filter(val =>  val!==0 && val%2 === 0)
// console.log(evenNum)
// }

// function duplicateNumbers(input){
//     //for Array
//     //const inputArray = [1,2,3,4,5,6,5,4,3,2,1,8,0,34];
//     //const dupArr = input.filter((val,index) => input.indexOf(val) !== index );
//     //console.log(dupArr)
//     //for strings
//     let duplicateNum = input.split(' ');
//     let dup = duplicateNum.filter((val,index) => duplicateNum.indexOf(val) !== index);
//     let unique = duplicateNum.filter((val,index) => duplicateNum.indexOf(val) === index);
//     console.log("duplicate Strings", dup);
// }

/*
Write a function fizzBuzz that prints numbers from 1 to n, but for multiples of 3, print "Fizz" instead, 
and for multiples of 5, print "Buzz" instead.
 For numbers that are multiples of both 3 and 5, print "FizzBuzz."
**/

function FizzBuzz(input){
    let arr=[];
for(let i=1; i<=input; i++) {
    if(i%3 == 0 && i%5 == 0) {
        arr.push("FIZZ BUZZ")
    } else if(i%5 == 0) {
        arr.push("Buzz")
    } else if(i%3 == 0 ) {
        arr.push("FIZZ")
    } else arr.push(i)
}
console.log(arr);
return arr;
}

function factorial(input) {
    //return input ===1 ? 1 : input * factorial(input-1);
    // let i = 1;
    // let fact = i;
    // while (i <= input) {
    //     fact = fact * i;
    //     i++;
    // }
    // console.log(fact);
    // return fact;
}

// function isPrime(input) {
//     // let i = 2;
//     // let isPrime = true;
//     // while (i < Math.sqrt(input)) {
//     //     if (input % i === 0) {
//     //         isPrime = false;
//     //     };
//     //     i++;
//     // }
   
//     isPrime ? console.log("Prime") : console.log("NotPrime");
// }

function fibonacci(input){
let i =0;
let arr =[];
    // while(i < input) {
    //  if(i == 0 || i==1) {
    //  arr.push(i)
    // }
    // else {
    //     let nextVal = arr[arr.length-1] + arr[arr.length-2];
    //     arr.push(nextVal)
    // }
    // i++;
    // }
    while(i < input) {
        if(i==0 || i==1) {
            arr.push(i)
        } else {
            let nextVal = arr[arr.length-1] + arr[arr.length-2];
            arr.push(nextVal)
        }
        i++;
    }
    console.log(arr);
    return arr;
}

function longestString(input){
 const inputArr = input.split(' ');
 let longestWord = "";
 for(var val of inputArr){
     if(val.length > longestWord.length) longestWord = val;
 }
 console.log(longestWord);
 return longestWord;
}

/**
 * Write a function countCharacters that counts the occurrences
 *  of each character in a string and returns the results as an object
 */
function charterCount(input){
let charCount ={};
for(const char of input) {
    if(charCount[char]) {
        charCount[char] ++;
    } else {
        charCount[char] = 1;
    }
}
console.log("charCount[char]", charCount)
return charCount
}

function titleCase(inputStr){
const output = inputStr.split(" ");
for(var val in output) {
    output[val] = output[val].charAt(0).toUpperCase() + output[val].slice(1);
}
console.log(output.join(" "))
}

//largest number in nested array

function largestNum(arr) {
    var largest = -1;
    for (var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            let nestedLar = largestNum(arr[i]);
            if(nestedLar > largest) {
                largest = nestedLar
            }
        } else {
            if(arr[i] > largest){
                largest = arr[i]
            }
        }
    }
  
    return largest;
    
}

// function getUniqueArr(array){
//     const uniqueArr = [];
//     const seen = {};
//     for(let i=0; i<=array.length-1;i++){
//     const currentItem = array[i].name;
//     if(!seen[currentItem]){
//     uniqueArr.push(array[i]);
//     seen[currentItem] = true;
//     }
//     }
//     console.log(seen,"seen")
//     return uniqueArr;
//     }
//     let arr =  [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name:
//         "111111"}];
//     console.log(getUniqueArr(arr))



const inputArray = [1,2,3,4,5,6,5,4,3,2,1,8,0,34];
const inputStr = "akhilalihkazeg34";
const sente = "Hi my name is Akhila. Her name is Josh";
const nestedArr = [1,[23,45,[2345,12]],[10,30,46,23,68,91],[17,23,67,34,56]];


// addNumbers(3,6);
// maxNumber(3,6);
// palindrome(inputArray);
// evenNumFilter(inputArray);
// duplicateNumbers(inputArray);
//FizzBuzz(20);
// factorial(6);
//  isPrime(5);
//  fibonacci(11);
longestString(sente);
// charterCount(inputStr);
// titleCase(sente);
// console.log(largestNum(nestedArr));
