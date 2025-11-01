function saymyName(){
    console.log("Shivam Chowbey");
}

// saymyName()

function printNum(){
    for (let i = 0; i <=100; i++) {
        console.log(i);
    }
}

// printNum()

function love(name){
    console.log(`I love you ${name}`);
}

// love("Sangita")


function wedding(name1, name2){
    console.log(`Please come to ${name1} and ${name2} wedding`)
}

// wedding("Shivam", "Sangita")

// return Function

function sum(num1, num2, num3){
    return num1 + num2 + num3
}

// console.log(sum(3,5,10));

const mul = function(a, b, c){
    return a*b*c
}

// console.log(mul(2,4,5));

const getPower = (a, b)=>{
    return a**b
}

console.log(getPower(2,10));

