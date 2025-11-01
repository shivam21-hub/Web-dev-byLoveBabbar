

// Error
// console.log(x);


// try{

//     console.log("try block starts here")
//     console.log(x); // yeh error hai
//     console.log("try block ends here") // yeh line execute nhi hoga
// }

// catch(error){
//     // error ke sath aap kya karte hai
//     // retry logic
//     //fallback mechanism
//     //custom error
//     console.log("I am a ERROR");
//     console.log("Your error is here: ",error);
// }
// finally{
//     console.log("I will everytime, as I am finally"); // finally execute everytime usme error ho chahe naa ho
// }


// throw use to create a custom error
// try{
//     console.log(x);
// }
// catch(err){
//     throw new Error("Bhai phle declare kro, phir print karna")
// }

let erroCode = 100
if(erroCode==100){
    throw new Error("Invalid Json")
}