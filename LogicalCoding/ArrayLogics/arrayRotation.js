//1
// input : [1,2,3,4,5], number of rotation: 3
//  step 1: [5,1,2,3,4]
// step 2: [4,5,1,2,3]
// step 3: [3,4,5,1,2]


function arrayRotation(input, rotateCount) {

for(let i=0 ;i<rotateCount ;i++) {
    input.unshift((input.pop()));
}
console.log("shiftedArray", input);
return input;
}

//2
//rotated values
function arrayRotation2(input, rotateCount) {
    let delArray = input.splice(input.length - rotateCount);
    console.log(delArray);
}

//3
//to sort a array of string objects based on key name
function sortByName(arr) {
    //method 1
    arr.sort((a,b) => {return a.name.localeCompare(b.name)});
    //method2
    // arr.sort((a,b)=> {
    //     if(a.name > b.name) {
    //         return 1;
    //     } else if(b.name > a.name) {
    //         return -1;
    //     }
    //     return 0;
    // })
    console.log(arr)
}

//4
{/*
Slice:  
array.slice(startIndex, endIndex) => return array;
->Returns values between this indexes.
->If only start index is given, values from the start indexes will be returned.
-> it doesnt modify the original array,
returns a shallow copy of the portion of array that is modified into an new array object

Splice:
array.splice(startIndex, deletecount, values ....)
-> It is used to add or remove values to an array.
->deletecount is the number to be removed
->Fron start index, we will remove deleteCount elements and will add elements at values place
->If count is zero then no elements are removed and the values are added beside it
*/}

let arr1 = [1,4,6,8,9,1,23,56,43,38];
//let arr2 = arr1.slice(3,6); //output [8,9,1]
//let arr3 = arr1.slice(4) //output [9,1,23,56,43,38]

//arr1.splice(1,5,86,23);  //output [1, 86, 23, 23, 56, 43, 38]
//arr1.splice(1,0,90,91);  //output [1, 90, 91,  4,  6, 8,  9,  1, 23, 56, 43, 38]


//5
//create a string method repeat that repeats the string value by count times
//dont use arrow functions

String.prototype.repeatString = function(count) {
    let str = "";
    for(var i=0;i<count;i++) {
        str = str + this;  //this keyword represents the string that will be repeated (Joshitha)
    }
    return str;
}

//way1 
function removeDuplicates(arr) {
    // Use the Set object to remove duplicates. This works beca
    return Array.from(new Set(arr));
   }

//way2 without using set
function removeDups(arr) {
    let newArr = [];
    for(let i=0;i<arr.length;i++) {
        if(newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
   const arrDup = removeDups([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]);
  // console.log("dup removed" , arrDup)


   var opstr = "Joshitha".repeatString(5);

//6 Program to mask the card
const cardNumber = "1234234534564567";
const starLen = cardNumber.length-4; // gives the count that has to be removed
const newCard = "*".repeatString(starLen) + cardNumber.slice(starLen);
console.log(newCard,"newCard")



const empArr = [ {name: "zittu", city:"blr"},{name: "rahul", city:"blr"},{name: "rahul", city:"Zim"},{name: "bamay", city:"blr"} ];

//sortByName(empArr)
//arrayRotation2([1,2,3,4,5],3);

const groupByAge = (arr) => {
    return arr.reduce((acc, person) => {
      const { age } = person;
      if (!acc[age]) {
        acc[age] = [];
      }
      acc[age].push(person);
      return acc;
    }, {});
  };
  
  const groupedPeople = groupByAge(people);
  console.log(groupedPeople);
  