// async function getDate() {
//     setTimeout(function(){
//         console.log("I am inside set timout");
//     },3000)
// }

// getDate()

async function getData() {

    // get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    // parse json - async
    let data = await response.json()
    console.log(data);
}
getData()

// scenerio:
// prepare url / api endpoint -> sync
// await -- fetch data -> network call -> async
// process data -> sync