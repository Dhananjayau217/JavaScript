// function add(a=0,b=0,c=0){
//     var addition=a+b+c;
//     console.log("addition==",addition);
// }
// add(10);
// add(40,50);
// add(70,80,90);
// add();

// Output:
// addition== 10
// addition== 90
// addition== 240
// addition== 0

// function add(a=0,b=0,c=0){
//     var addition=a+b+c;
//     console.log("addition==",addition);
// }
// add(10);
// add(40,50);
// add(70,80,90);
// add(add(10,20,30));

// Output:
// addition== 10
// addition== 90
// addition== 240
// addition== 60
// addition== 0

// Using return statement in functions or methods

function add(a=0,b=0,c=0){
        var addition=a+b+c;
        // console.log("addition==",addition);
    return addition;
}

   var addition1=add(10);
   console.log(addition1);
   var  addition2=add(40,50);
   console.log(addition2); 
   var addition3=add(70,80,90);
   console.log(addition3); 
   var addition4=add();
    console.log(addition4);
    var addition5=add(addition1,addition2,addition3,addition4);
    console.log(addition5);

 // Output:
// 10
// 90
// 240
// 0
// 340
    

