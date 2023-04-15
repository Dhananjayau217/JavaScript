// function functionname(){
//     //body
//     return;
// }
// functionname();

function main(){
    console.log("main() method is started");
    m1();
    m1();
    console.log("main() method is ended");
}
function m1(){
    console.log("m1() method is started");
    console.log("m1() method is ended");
    
}
main();

/*

main() method is started
m1() method is started
m1() method is ended
m1() method is started
m1() method is ended
main() method is ended

*/

