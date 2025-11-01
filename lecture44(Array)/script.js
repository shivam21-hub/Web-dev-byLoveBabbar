let obj = {
    // name: "Shivam",
    "full name": "Shivam Chowbey",
    age:20,
    height: "6 ft",
    greet: function(){
        console.log("How are you all!");
    }
}

// console.log(obj);
// obj.greet()

// const arr = [1, 2, "Shivam", function getName(userName){
//     console.log(userName);
// }]

// arr.push(55)
// console.log(arr);


// let arr = [10, 20, 30]
// let ans = arr.map((number)=>{
//     return number*number
// })
// console.log(ans);


// let arr = [10, 20, 30, 11, 21, 25,44]

// let ans = arr.filter((number)=>{
//     if(number%2==0) return true;
//     else return false
// })

// console.log(ans);

// let arr = [1,2,"Shivam", "chowbey", null,undefined]

// let ans = arr.filter((value)=>{
//     if(typeof(value)=== "string")return true
//     else return false
// })

// console.log(ans);


// let arr = [10,20,30,40]

// let ans = arr.reduce((acc, curr)=>{
//     return acc + curr
// },0)

// console.log(ans);

// let arr = [1,5,4,6,8,2,3]

// arr.sort()
// console.log(arr);

// let arr = [1,5,4,6,8,2,3]
// const found = arr.find((number) => number>4)
// console.log(found);



let arr = [1,2,3,4]

let ans = (arr)=>{
    let len = arr.length
    let sum = 0
    arr.forEach((element) => {
        sum += element
    });
    return sum
}

console.log(ans(arr));
