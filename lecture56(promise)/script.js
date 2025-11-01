

// let firstPromise = new Promise((reselve, reject)=>{
//     console.log("Shivam");
    
// })

// function sayMyName(){
//     console.log("Shivam Chowbey");
    
// }

// setTimeout(sayMyName,10000)

// let promise1 = new Promise((resolve, reject)=>{
//     let success = true
//     if(success){
//         resolve("Promise fulfilled")
//     }
//     else{
//         reject("promise not fulfilled")
//     }
// })

// promise1.then((message)=>{
//     console.log("Then ka message is "+message);
// }).catch((error)=>{
//     console.log("Error: "+error);
// }).finally((message)=>{
//     console.log("Mai toh final hu chalunga hi");
    
// })

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "First")
})
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, "second")
})
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(reject, 4000, "third")
})

Promise.all([promise1, promise2, promise3])
.then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.log("Error: " +error);
    
})