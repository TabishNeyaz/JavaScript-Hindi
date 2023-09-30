const user = {
    username: "Tabish",
    price: 999,
    welcomeMessage: function(){
    // console.log(`${this.username}, welcome to website`);
    // console.log(this);
    }

}
// user.welcomeMessage();
// user.username = "Neyaz";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "Tabish";
//     console.log(this.username);
// }

// chai();

// const chai = function(){
//     let username = "Tabish";
//     console.log(this.username);
// }

// chai();

// const chai = () => {
//     let username = "Tabish"
//     console.log(this);
// }

// chai();

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo1 = (num1, num2) => num1 + num2 

const addTwo2 = (num1, num2) => (num1 + num2) 

const addTwo3 = (num1, num2) => ({username: "Tabish"}) 

// console.log(addTwo());
// console.log(addTwo(3,4));
// console.log(addTwo1(14,4));
// console.log(addTwo2(5,4));
// console.log(addTwo3(3,45))