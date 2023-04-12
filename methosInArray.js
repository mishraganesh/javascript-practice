//methods in array
//1.fill() method 
//fill() method overwrites original array
//start and end can be specified. if not all elements filled


// const fruits=["apple","mangos","orange","lichi","guava"];
// const newArr=fruits.fill("kiwi",2)

// console.log(newArr);

//filter method 
//The filter() method creates a new array filled with elements that pass a test provided by a function.

//The filter() method does not execute the function for empty elements.

//The filter() method does not change the original array.

// function even (num){
//     return num%2===1

// }
// const filtered=[10,20,66,,45,25,32,41,25];

// const newFilter=filtered.filter(even)
// console.log(newFilter)


function canVote(age){
    return age>=18;
}

const arr=[15,62,11,20,1,10];

let result=arr.filter(canVote)

console.log(result)



