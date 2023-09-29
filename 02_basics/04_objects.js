//const tinderUser = new Object();

const tinderUser =  {};

tinderUser.id ="123abc";
tinderUser.name = "Sharad";
tinderUser.isLoggedIn = false;


//console.log(tinderUser);

const regularUser = {
    email: "Sharad@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Sharad",
            lastname: "Singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);
//console.log(regularUser);

const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"c", 4: "d"};

//const obj3 = {obj1, obj2 };
//const obj3 = Object.assign({}, obj1, obj2);//args are target and source

const obj3 = {...obj1, ...obj2};
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "Tab@gmail.com"
    },
    {
        id: 2,
        email: "Sab@gmail.com"
    },
    {
        id: 3,
        email: "Tab@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


