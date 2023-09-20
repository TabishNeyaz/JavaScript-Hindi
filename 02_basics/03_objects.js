//Singleton
//Object.create
  
//object literals

const mySym = Symbol("key1");
// console.log(typeof mySym);

const jsUSer = {
    name: "Tabish",
    "full name": "Tabish Neyaz",
    [mySym]:"mykey1",
    age: 27,
    location: "Patna",
    email: "tabs7@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUSer.email);
// console.log(jsUSer["age"]);
// console.log(jsUSer["full name"]);
// console.log(jsUSer.mySym);

jsUSer.email = "tab2@gmail.com";
//  console.log(jsUSer.email);

//  Object.freeze(jsUSer);
 jsUSer.email = "tab3@gmail.com"
//  console.log(jsUSer);

 jsUSer.greeting = function(){
    console.log("Hello JS User");
 }
 jsUSer.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
 }

 console.log(jsUSer.greeting());
 console.log(jsUSer.greeting2());