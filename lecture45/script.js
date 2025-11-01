
// console.log(age);
// let age = 10

// hlo()
// let hlo = function(){
//     console.log("hello");
// }

// function greetMe(greet, fullName){
//     console.log("Hello", fullName);
//     greet()
// }

// function greet(){
//     console.log("How are you!");
// }

// greetMe(greet,"Shivam")

const arr = [
    function(a,b){
        return a+b
    },
    function(a,b){
        return a-b
    },
    function(a,b){
        return a*b
    }
]

let ans = arr[2]
let finalAns = ans(5,10)
console.log(finalAns);
