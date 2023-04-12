var a=10;
var b=20;
function calculation(a,b,operation){
    console.log("Operation is ===",operation);
    // console.log("addition===",a+b);
    var addition_result;
    if(operation=="add"){
        console.log("inside add block");
         addition_result=a+b;
    }else if(operation=="sub"){
        console.log("inside sub block");
         addition_result=a-b;
    }else if(operation=="mul"){
        console.log("inside mul block");
        addition_result=a*b;
    }else if(operation=="div"){
        console.log("inside div block");
         addition_result=a/b;
    }else if(operation=="rem"){
        console.log("inside rem block");
        addition_result=a%b;
    }return addition_result;

}
var result=calculation(a,b,"add");
var result1=calculation(a,b,"sub");
var result2=calculation(a,b,"mul");
var result3=calculation(a,b,"div");
var result4=calculation(a,b,"rem");
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);



/*Output:

Operation is === add
inside add block
Operation is === sub
inside sub block
Operation is === mul
inside mul block
Operation is === div
inside div block
Operation is === rem
inside rem block
30
-10
200
0.5
10

*/