const name = "Tabish";
const repoCount = 5;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`); 

const gameName  = new String("Tabish-Neyaz-Hoda");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('N'));
// console.log(gameName.charAt(2));

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(-12);
console.log(anotherString);

const newStringOne = "  Tabish  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://tabish.com/tabish%20neyaz";

console.log(url.replace('%20' , '-'));
console.log(url.includes('tabish'));

console.log(gameName.split('-'));  
