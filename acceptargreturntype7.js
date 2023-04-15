// 7. Write a JavaScript function which accepts an argument and returns the type.

function argumentType(value){
    return typeof(value);
}
console.log(argumentType(10));
console.log(argumentType("10"));
console.log(argumentType("dhana"));
console.log(argumentType('dhana'));
console.log(argumentType(4.3));
console.log(argumentType({"name":"dhana"}));
console.log(argumentType([10,"dhana"]));



/*Output:

number
string
string
string
number
object
object

*/