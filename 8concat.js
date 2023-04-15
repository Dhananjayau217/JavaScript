// The concat() method creates a new array by merging (concatenating) existing arrays:

let array1=[1,2,3];
let array2=[23,43,53];
let array3=[111,12];
let arrayConcat=array1.concat(array2,array3);
console.log(arrayConcat);

/*Output:

[
    1,  2,   3, 23,
   43, 53, 111, 12
 ]
 
 */