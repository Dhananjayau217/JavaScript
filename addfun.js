// function add(a,b){
//     console.log("a,b values are....",a,b);
// }
// add(10,20);

// Output:
// a,b values are.... 10 20



// function add(a,b,c){
//     console.log(a,b,c);
// }
// add(10);

// Output:
// 10 undefined undefined



// function add(b){
//     console.log(b);
// }
// add(10,20);

// Output:
// 10

// function add(a=0,b=0,c=0){
//     console.log(a,b,c);
// }
// add(10);
// add(10,20);
// add(10,20,30);

// Output:
// 10 0 0
// 10 20 0
// 10 20 30


// function add(a=null,b=null,c=null){
//     console.log(a,b,c);
// }
// add(10);
// add(10,20);
// add(10,20,30);

// Output:
// 10 null null
// 10 20 null
// 10 20 30


function add(a,b,c){
    console.log(a,b,c);
}
add(10);
add(10,20);
add(10,20,30);

// Output:
// 10 undefined undefined
// 10 20 undefined
// 10 20 30