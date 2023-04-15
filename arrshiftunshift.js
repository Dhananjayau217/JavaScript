var array=["dhana","bhargav","swathi","srikanth"];
console.log("before using shift method array is....",array);
array.shift();        //ushing shift() method to deleting first element from the array
console.log("after using shift method array is .....",array);

//Output:
// before using shift method array is.... [ 'dhana', 'bhargav', 'swathi', 'srikanth' ]
// after using shift method array is ..... [ 'bhargav', 'swathi', 'srikanth' ]

console.log("before using unshift method array is ...",array);
array.unshift("Dhananjaya");
console.log("after using unshift method array is ....",array);

// Output
// before using unshift method array is ... [ 'bhargav', 'swathi', 'srikanth' ]
// after using unshift method array is .... [ 'Dhananjaya', 'bhargav', 'swathi', 'srikanth' ]
