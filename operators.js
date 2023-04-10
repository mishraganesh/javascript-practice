//total 10 types of operator available in js
/*

1.Assignmants operator
2.comparison operator
3.arithmetic operator
4.bitwiese operator
5.logical operator
6.string operator
7.condtional operator
8.comma operator
9.unary operator
10.relational operator
*/

//assignment operator use = sign to assign value

// let x=10;
// //x assign to y
// // let y=x;
// let y=20;
// // x=x+y;


// //compound operator
// x-=y

// console.log(x)

//2.arithmetic operator like +,-.*,/,**


let a=10;
// a=a+1;
//a+=1
// a=a++
a=a**2  //exponation operator
console.log(a)


//3.logical operators 
//logical and &&-it can have more that 2 operands as well, its work with boolean
//its return true if both oprands are true

let isLoggedIn=true;
let hasPermission=false;
// let hasPermission=true;

if(isLoggedIn&&hasPermission){
    console.log("welcome")
}
else{
    console.log("please logged first")
}
//note- and operator return boolean if u use boolean data type for operands else its return right side operands 
//logical operator operate left to right
 let pet1="cat"
 let pet2="dog"
 let cat=false

 console.log(pet1&&pet2)
 // return dog
 console.log(pet1&&cat)
 // return false
 

 //3.2 logical OR || 
 //if one opearnd true return true

 console.log(isLoggedIn||hasPermission)
 //return true

 //3.3 Logical not ! this operator revrse the value in boolean 
 console.log(isLoggedIn && !hasPermission)
 //return true
