function main(){
    m1(10,20,30);
    m2();
    m2(11,22);

}
function m1(a,b){
    console.log(a);
    console.log(b);
}
function m2(){
    console.log("no arguments");
}
function m2(a,b){
    console.log(a,b);
}
main();