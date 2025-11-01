
// let name = "Sangita"
function outerFunc() {
    let name = "Shivam"; 
    function innerFunc() {
        // let name = "Chowbey"
        console.log(name); 
    }
    return innerFunc;
}
let inner = outerFunc();
inner()