//var c = 300

let a = 20;

if(true){
let a = 10;
const b = 20;
c = 30;
// console.log(a);
}
// console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "Tabish";

    function two(){
        const website ="YouTube";
        //console.log(username);
    }
    //console.log(website);
    two()
}

one();

if(true){
    const firstName = "Tabish";
    if(firstName === "Tabish"){
        const lastName = " Neyaz"
        console.log(firstName + lastName);
    }

}

function addOne(num){
    return num + 1
}

console.log(addOne(5));

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(9))
