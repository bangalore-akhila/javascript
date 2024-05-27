//1.to reverse a complete string
function reverseStr(str) {
let strLen = str.length;
let initialVal = 0;
let rev="";
while(initialVal < strLen) {
    let x = str.charAt(strLen-1-initialVal);
    rev=rev.concat(x);
    initialVal++;
}
console.log(rev);
return rev;

//output tpircsavaj ot detaler scipot gnidoc ma I
}

//2.to reverse the string words
function reverseStrWords(str) {
    let strArr = str.split(" ");
    for(var i=0;i<strArr.length;i++) {
         strArr[i] = strArr[i].split("").reverse().join(""); 
    }
    console.log(strArr.join(" "));
    return strArr.join(" ");
    //I ma gnidoc scipot detaler ot tpircsavaj
   
}

//3.to find maximum length word in the string

function findMaxWord(str) {
    let maxWord="";
    let strArr = str.split(" ");
    for(var val of strArr) {
        if(val.length > maxWord.length) maxWord= val;
    }
    console.log("maxWord", maxWord);
    return maxWord;
}

//4.to find char count in the string

function findMaxChar(str) {
let charCount = {};
    for(var val of str) {
        if(val !== " ") {
            if(charCount[val]) {charCount[val]++} else { charCount[val] = 1};
        } 
    }
    console.log(charCount)
}

//5.Write a JavaScript program to remove all occurrences of a specified character from a given string in JavaScript

function removeAllOcuurances (str,char){
let stri = str.split(char).join("");
console.log(stri);
return stri;   //I m coding topics relted to jvscript
}


// 6. Write a JavaScript program to remove last occurance of a specified character from a given string in JavaScript.
function removeLastOcuuranceChar (str, char){
    let lastIndex = str.lastIndexOf(char);
    if(lastIndex === -1) return str;
    let updatedStr = str.slice(0,lastIndex) + str.slice(lastIndex+1);
    console.log("lastIndex",updatedStr);
    return updatedStr; 
}

//7.Write a JavaScript program to find first occurance of a specified character from a given string in JavaScript.
function findFirstOccurance (str, char) {
    let firstIndex = str.indexOf(char);
    console.log("firstIndex", firstIndex);
}

//8.Write a JavaScript program that takes two strings as input and returns true if they are anagrams of each other, otherwise return false.


function isAnagramStr (str1, str2) {
    if(str1.length === str2.length) {
        str1 = str1.split("").sort().join("");
        str2 = str2.split("").sort().join("");
        
        if(str1 === str2) {
            console.log("true")
            return true;
        } else {
            console.log("false")
            return false;
        }
    } else {
        return false;
    }
}

//9 Write a JavaScript program that converts a string to camelCase

function convertToCamelCase(str) {

}

//check whether a string is palindrome or not
//using inbulit reverse of array
// function isPalindrome(str) {
//     let revStr = str.split("").reverse().join("");
//     if(str === revStr) {
//         console.log("palindrome")
//     } else {
//         console.log("not palkindrome")
//     }
// }

//without usinginbuilt reverse
function isPalindrome(str) {
    let start = 0;
    let end = str.length -1;
    let isPalindrome = true;
    for (let i=start;i< str.length / 2 -1 ;i++) {
        if(str.charAt(i) !== str.charAt(end-i)) {
            isPalindrome = false;
            break;
        }
    }
    console.log(isPalindrome)
}
const str = "I am coding topics related to javascript";

const str1 = "secure";

const str2 = "reccue";

const str3 = "madam"

//reverseStr(str);

//reverseStrWords(str);

//findMaxWord(str);

//findMaxChar(str);

//removeAllOcuurances(str,'a')

//removeLastOcuuranceChar(str,'i')

//findFirstOccurance(str, 'c')
//isAnagramStr (str1, str2)
//isPalindrome(str3)

// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge
// them and sort [0,3,4,4,6,30,31]


function mergeSortArr(arr1,arr2) {
let mergedArr = [];
let i=1;
let j =1;
let array1 = arr1[0];
let array2 = arr2[0];
while(array1 || array2) {
if(array2 === undefined || array1 < array2) {
mergedArr.push(array1)
array1 = arr1[i];
i++;

} else {
    mergedArr.push(array2);
    array2=arr2[j];
    j++;
}
}
console.log(mergedArr)
}

mergeSortArr([0,3,4,31],[4,6,30])


function sqrtArray(arr1, arr2) {
    let sortedArr1 = arr1.sort((a,b) => a-b);
    let sortedArr2 = arr2.sort((a,b) => a-b);
    let isSqrtArr =true;
    if(arr1.length === arr2.length) {
       for(let i=0;i < sortedArr1.length ; i++) {
        let sqrtVal =  sortedArr1[i];
        if(sortedArr2[i] !== (sqrtVal * sqrtVal)) {
            isSqrtArr = false;
        }
       }
    } else {
        isSqrtArr = false;
        
    }
    return isSqrtArr
}

const freq = sqrtArray([1,2,5],[25,4,1]);
console.log("freq", freq);


let c=0;
let id = setInterval(() => {
console.log(c++)
},10)
setTimeout(() => {
clearInterval(id)
},2000)