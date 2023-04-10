var array=[1,2,3,4,5,6,7,8,9];
var add_array=[];
// add_array.push(array[0]+10);
// add_array.push(array[1]+10);
// add_array.push(array[2]+10);
// add_array.push(array[3]+10);
// add_array.push(array[4]+10);
// add_array.push(array[5]+10);
// add_array.push(array[6]+10);
// add_array.push(array[7]+10);
// add_array.push(array[8]+10);
// console.log(add_array);

// Output:

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19
//   ]

//By using for loop we can add an array within short lines
for(var i=0;i<array.length;i++){
        add_array.push(array[i]+10);
    }
    console.log("original array===",array);
    console.log("add_array===",add_array);


    //Output:
    // original array=== [
    //     1, 2, 3, 4, 5,
    //     6, 7, 8, 9
    //   ]
    //   add_array=== [
    //     11, 12, 13, 14, 15,
    //     16, 17, 18, 19
    //   ]

    