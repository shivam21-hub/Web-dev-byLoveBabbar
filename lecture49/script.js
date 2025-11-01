// Objects are dynamic in nature we can change the properties during runtime

let obj = {
    age:20,
    ht:180,
    wt:70
}

let src = {
    age:20,
    ht:180,
    wt:70
}
let src2 = {
    name:"Shivam",
    email:"Shiv@13",
}

let dest = Object.assign({}, src, src2) // clonning of Object using assing operator

// src.age = 25
// let dest = {...src} // clonning of object using spread(...) operator

console.log("src: ",src);
console.log("dest: ",dest);



// console.log(obj); // { age: 20, ht: 180, wt: 70 }

// obj.color = "Black"

// console.log(obj); //{ age: 20, ht: 180, wt: 70, color: 'Black' }
