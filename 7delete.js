// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.

let bikes=["Yamaha","Bajaj","Honda","TVS"];
delete bikes[1];
console.log(bikes);

/*Output:

[ 'Yamaha', <1 empty item>, 'Honda', 'TVS' ]

*/