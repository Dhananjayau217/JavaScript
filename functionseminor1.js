// function functionname(){
//     //body
//     return;
// }
// functionname();


function add(a,b){
    console.log("a value==",a);
    console.log("b value==",b);
    if(a>b){
        console.log("a is big");
        return 'a is big than b=='+a;
    }else{
        console.log("b is big");
        return 'b is big than a=='+b;
        // console.log(a,b);               //Unreachable statements
    }
}
console.log(add(10,20));

/*
a value== 10
b value== 20
b is big
b is big than a==20
*/


// console.log(add(10,20));
// function add(a,b){
//     console.log("a value==",a);
//     console.log("b value==",b);
//     if(a>b){
//         console.log("a is big");
//         return +a;
//     }else{
//         console.log("b is big");
//         return +b;
//     }
// }





