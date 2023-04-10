// ECMAScript 5 (2009) allows property access [ ] on strings:


let text = "HELLO WORLD";
let char = text[0];
console.log(char);


// Output:
// H

/*
Property access might be a little unpredictable:
It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
 */
