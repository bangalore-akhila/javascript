 
 const people = [
    {name : "Akhila", gender : "female", age :25},
    {name : "Joshitha", gender : "female", age :65},
    {name : "Ganesh", gender : "male",age :65},
    {name : "Nags", gender : "male",age :25},
    {name : "Bharathi", gender : "female",age :15},
    {name : "Divya", gender : "female",age :25},
    {name : "Bangalore", gender : "male",age :10}
 ]
 const fruits  = fruit => ["orange", "kiwiw","apple"].includes(fruit)
 //console.log("",fruits("apple"));

 let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [... new Set(arr)]// [1, 2, 3, 4, 5]
//console.log(uniqueArr)

//kth largest element
let arrrr = [2,67,43,56,90,12];
const kethLatrge = (arrrr,k)=>arrrr.sort((a,b) => b-a)[k-1];
console.log(kethLatrge(arrrr,3))

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let intersection = arr1.filter(value => arr2.includes(value)) // [3, 4]
console.log(intersection)


 //filter personswho are adults
 //map the names from the filtered array

 const getAdults = people.filter(peop => peop.age > 18).map(per => per.name);
 //console.log(getAdults);

//grouping by age
 const groupByAge = people.reduce((acc,curr)=>{
    let ageVal = curr.age
          if(!acc[ageVal]) {
            acc[ageVal] = [];
          } 
            acc[ageVal].push(curr)
           return acc
 },{});

 const groupByA = people.reduce((acc,curr)=>{
  let age = curr.age;
  if(!acc[age]) {
    acc[age] = []
  }
  acc[age].push(curr)
  return acc
 },{})

  console.log(groupByA)