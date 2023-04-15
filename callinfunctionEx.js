function main(){
    console.log("main() strated");
    m1();
    // m1();
    console.log("main() ended");
}
function m1(){
    console.log("i am m1 method");
    m2();
}
function m2(){
    console.log("hello baby i am m2 method");
    let a=10;
    console.log(a);
}
main();