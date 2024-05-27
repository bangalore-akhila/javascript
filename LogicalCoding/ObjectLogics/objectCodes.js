//find maximum value from an object  , h is the one with max value 10

function findMaxValue(obj) {
let maxVal = -1;
let maxChar;
for(var val in obj) {
   if(obj[val] > maxVal) {
    maxVal = obj[val];
    maxChar = val;
   } 
}
console.log("max", maxChar)

return maxChar;

}

let obj = { a: 4, k: 3, h: 10, i: 5, l: 10 };
findMaxValue(obj);

