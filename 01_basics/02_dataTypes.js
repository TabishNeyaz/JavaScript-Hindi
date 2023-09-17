"use strict";// treat all JS code as newer version

//alert("hello");// alert cant be used in Node.js
//It is only available for browser.

console.log(3+3);
//Code Readability should be high

let name = "Tabish";
let age = 27;
let isLoggedIn = true;

// number =>  -(2^53 - 1) and 2^53 - 1
// bigint =>  BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique
// object

console.log(typeof "Tabish");
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof undefined);// undefined

console.log(typeof null);// object