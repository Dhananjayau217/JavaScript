/*The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:*/

let bikes=["Yamaha","Bajaj","Honda","TVS"];
console.log(bikes.join( ));
console.log(bikes.join(" "));
console.log(bikes.join("-"));
console.log(bikes.join("&"));

/*Output:

Yamaha,Bajaj,Honda,TVS
Yamaha Bajaj Honda TVS
Yamaha-Bajaj-Honda-TVS
Yamaha&Bajaj&Honda&TVS

*/