// The splice() method can be used to add new items to an array:
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

let array=[99,32,23,43,53,100];
array.splice(2,3,"a","b","c");
console.log(array);


/*Output:

[ 99, 32, 'a', 'b', 'c', 100 ]

*/