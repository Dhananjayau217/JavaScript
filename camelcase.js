var firstname="dhananjaya";
var middlename="uppithi";
console.log(`my name is ${firstname}${middlename}`);
console.log(middlename.charAt(0).toUpperCase()+middlename.slice(1));
middlename=middlename.charAt(0).toUpperCase()+middlename.slice(1);
console.log(`my name is ${firstname}${middlename}`);


/*Output:
my name is dhananjayauppithi
Uppithi
my name is dhananjayaUppithi  //camelcase
*/
