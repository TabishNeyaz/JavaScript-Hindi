let myDate =  new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-14-2023");
// console.log(myCreatedDate2.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());




