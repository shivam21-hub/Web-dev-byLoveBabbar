

// class  Human{

//     // properties
//     #age = 20; // # indicates private
//     height = 180; // public
//     weight = 80

//     constructor(newAge, newHeight, newWeight){
//         this.#age = newAge
//         this.height = newHeight
//         this.weight = newWeight
//     }
//     // behaviour 

//     walking(){
//         console.log("I am walking", this.#age);
//     }

//     running(){
//         console.log("I am running");
//     }

//     get fetchAge(){
//         return this.#age
//     }

//     set modifyAge(val){
//         this.#age = val
//     }
// }

// let obj = new Human(50,100,200)
// console.log(obj.fetchAge);
// obj.walking()


// function sayName(fName, lName="Chowbey"){
//     console.log("My name is :",fName+" ", lName);
// }

// sayName("Shivam")

function solve(value = {age:20, wt:70}){
    console.log("hello", value);
    
}

solve()