// FUNCTION DECLARATION
function main(){
    console.log("main() method start");
    friuts();
    console.log("main() method end");
}
main();

// friuts();
function friuts(){
    console.log("apple");
    console.log("banana");
}
console.log(typeof friuts);


// FUNCTION EXPREESION
// clothes(); error
let clothes=function(){
    console.log("jenes")
    console.log("polysters")
}
// clothes();

// ARROW FUNCTION
// rooms(); error
let rooms=()=>{
    console.log("1 share room");
    console.log("3 share");
}
// rooms();