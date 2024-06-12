let arr = [1,4,6,8,0];
const arrays = [1, [2, [3, [4, 5]]], 6];;
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const people = [
    {name : "Akhila", gender : "female", age :25},
    {name : "Joshitha", gender : "female", age :65},
    {name : "Ganesh", gender : "male",age :65},
    {name : "Nags", gender : "male",age :25},
    {name : "Bharathi", gender : "female",age :15},
    {name : "Divya", gender : "female",age :25},
    {name : "Bangalore", gender : "male",age :10}
 ]
const person = {
    "name": "john snow",
    age: 35,
    address: {
        street: {
            name : '1st street',
            roadNum : undefined,
            appNum : 23
        },
      city: "Bangalore",
      "State": "Ka",
      country: null
    },
    occupation: ""
  };

  const users = [
    { id: 1, name: 'Alice', posts: ['Post 1', 'Post 2'] },
    { id: 2, name: 'Bob', posts: ['Post 1', 'Post 2', 'Post 3'] },
    { id: 3, name: 'Charlie', posts: [] }
  ];

  const items = [
    { id: 'a', value: 10 },
    { id: 'b', value: 20 },
    { id: 'c', value: 30 }
  ];


// to find max ele

let maxNum = arr.reduce((acc, curr)=>{
    if(curr > acc) {
        acc = curr;
    }
    return acc;
},0);
//console.log("maxNum",maxNum)

// to remove undefined or emty or null values
//


const pureObj = (person) => {
    return Object.entries(person).reduce((acc, [key, value])=>{
        if(value && typeof value === 'object') {
            let purifiedValu = pureObj(value);
            if(Object.keys(purifiedValu).length > 0 ) {
                acc[key] = purifiedValu;
            }
        } else if(value!== undefined && value!== '' && value!== null){
            acc[key] = value;
        }

        return acc
    },{})
}



const pourData = (data) => {
    return Object.entries(data).reduce((acc,[key,value])=> {
        if(value && typeof value === "object") {
               let filtered  = pourData(value);
               if(Object.keys(filtered).length > 0) {
                acc[key] = filtered
               }
        } else if(value !== undefined && value !== null && value !== '') {
            acc[key] = value;
        }
     return acc;
    },{})
};

console.log(pourData(person))
//grouping by age
const groupByAge = people.reduce((acc,curr)=>{
    let ageVal = curr.age
          if(!acc[ageVal]) {
            acc[ageVal] = [];
          } 
            acc[ageVal].push(curr)
           return acc
 },{});

 //getting adults
 const getAdult = people.reduce((acc,curr)=>{
    if(curr.age > 18) acc.push(curr.name)
        return acc;
 },[])

 //flatting array

 const flattenedArr = (arrays) => arrays.reduce((acc, curr) => {
    if(Array.isArray(curr)) {
        acc = acc.concat(flattenedArr(curr));
    } else {
        acc = acc.concat(curr);
    }
    return acc
 },[])

 //count of elements

 const getFruitCount = fruits.reduce((acc, curr)=>{
   acc[curr] = acc[curr] ? acc[curr] + 1 : 1;   
    return acc;
 },{})

//calculating posts count

const postsCount = users.reduce((acc, curr)=>{
    acc = curr.posts ? acc + curr.posts.length : curr.posts.length;
    return acc;
},0)

const itemss = [
    {'a' : { id: 'a', value: 10 }},
    
  ];
//Creating a Lookup Table
const lookUpTable = items.reduce((acc,curr)=>{
    acc[curr.id] = curr
    return acc;
},[])

const functions = [
    x => x + 1,
    x => x * 2,
    x => x - 3
  ];
  
  // Your reduce implementation here  most tricky question
  //const compose = (fns) => fns.reduceRight((acc, fn) => (...args) => fn(acc(...args)), arg => arg);
  const compose = (fns) => fns.reduceRight((acc,fun)=> (...args) => fun(acc(...args)), arg => arg)
  
  const composedFunction = compose(functions);
  console.log("composedFunction",composedFunction(4)); // Output should be ((5 - 3) * 2) + 1 = 5
  

const cleanObj = pureObj(person);

//console.log("cleanObj", cleanObj);
//console.log("adults", getAdult);
//console.log("flattenedArr", flattenedArr(arrays));
//console.log('getFruitCount', getFruitCount);
//console.log("postsCount", postsCount);
//console.log("lookUpTable", lookUpTable);


