//array is a object in js
//indexing of array is start with 0

let langauges=["javascript","paython","c++"];
//methods in arrays

//length
// console.log(langauges.length);
//push -add new item from last

langauges.push("dart")

//insert form start use unshift method
langauges.unshift("c")


//pop method use to delete from last 
langauges.pop()
langauges.shift() //method use to delete from start 
console.log(langauges);


//loops 
//loop are use repeat same value mutiple time and run until the condition is true

// let a="*"
// for(let i=0; i<4; i++){
//     console.log(a)
// }

let actors=[
    {name:"acotor1",
    paymet:"100"
},
{name:"acotor2",
paymet:"200"
},
{name:"acotor3",
paymet:"300"
},
{name:"acotor4",
paymet:"500"
},
];
// for(let i=0; i<actors.length;i++){
//     actors[i].paymet= actors[i].paymet-10
//     // console.log(actors[i])
// }
//forEach
// actors.forEach((actor)=>{
// actor.paymet=actor.paymet-20
// console.log(actor)
// });

// loop using of

// for(let actor of actors){
//     console.log(actor)
// }


//filter method

let students=[{
    name:"ganesh",
    marks:35
},
{
    name:"ram",
    marks:55
},
{
    name:"stu",
    marks:65
},]

const failed=students.filter((student)=>{
   if(student.marks<45){
   return true
   }
   else{
    return false
   }
  
})
console.log(failed)



//map method

let arr1=[{
    firstName:"ganesh",
    lastName:"mishra"
},
{
    firstName:"rajan",
    lastName:"mishra"
},]

let fullName=arr1.map((x)=>{
    return {
        fullName:`${x.firstName} + ${x.lastName}`
        
    }
   
})
console.log(fullName)



// reduce method

let movies=[{
    name:"avengers",
    budget:500
},
{
    name:"pathan",
    budget:2000
},
{
    name:"lal singh chadda",
    budget:1000
},]



//  let total=0;
 
//  movies.forEach((x)=>{
//     total += x.budget

//  })
const total=movies.reduce((acc,gross)=>{
     acc=acc + gross.budget;
     return acc
},0)
 console.log(total)


 //methos in array

 //1.Conact The concat() method concatenates (joins) two or more arrays.

//The concat() method returns a new array, containing the joined arrays.

//The concat() method does not change the existing arrays.


let newArr=["ram","lal"];
let newArr2=["singh","mishra"]


const arrr=newArr.concat(newArr2)
console.log(arrr)


