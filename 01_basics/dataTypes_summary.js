// Primitive

/* 7 types
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt
*/
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;

const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);
// console.log(id === anotherId);

const bigNumber = 454656465454564564888458745n;

// Reference (Non-primitive)

/*
1. Array
2. Objects
3. Functions etc..
*/

const heros = ["Ironman","Spiderman","Flash"];

let myObj = {
    name: "Tabish",
    age : 27,
}

const myFunction = function(){
    console.log("Hello World");
} 

// console.log(typeof bigNumber);
// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);
// myFunction();


// Stack (Primitive) , Heap (Non-Primitive)


let myCity = "Patna";

let currentCity = myCity;

currentCity = "Banglore"

console.log(myCity);
console.log(currentCity);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "tabish@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);