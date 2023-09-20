//array

const myArray = [0, 1, 2, 3, 4, 5, 6];
// myArray[8] = 10;
//  console.log(myArray[0]);


const myHeroes = ["Flash","Spider-Man"];

// Array Methods
myArray.push(12);
// console.log(myArray);

myArray.unshift(27);
// console.log(myArray);

myArray.pop();
// console.log(myArray);

myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(74));
// console.log(myArray.indexOf(5));

const newArray = myArray.join();
// console.log(newArray);
// console.log(typeof newArray);
// console.log(myArray);


// Slice , Splice

// console.log("A", myArray);

const myn1 = myArray.slice(1,3);
// console.log(myn1);
// console.log("B",myArray);

const myn2 = myArray.splice(1,3);
console.log(myn2);
console.log(myArray);





