const marvel_heroes = ["Thor", "Ironman","Spiderman"]
const dc_heroes = ["Superman","Flash","Batman"]


// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// let result = marvel_heroes.flat();
// console.log(result);

// let x = result.fill("Jim",3,5);
// console.log(x);


// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// const all_new_heroes = [...marvel_heroes,...dc_heroes];
// console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]];
const real_another_array = another_array.flat(2);
// console.log(real_another_array);

//console.log(Array.isArray("another_array"));

// console.log(Array.isArray(another_array));
// console.log(Array.from("anotherarray"));
// console.log(Array.from("anotherarray"));
// console.log(Array.from({name: "Tabish"}));// interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

