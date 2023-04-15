// The replace() method replaces a specified value with another value in a string.

// let text1="Good Morning";
// let text2=text1.replace("Morning","Evening"); 
// console.log("before replace==",text1);
// console.log("after replace===",text2);


/*Output:
before replace== Good Morning
after replace=== Good Evening
*/

//replace()method used for replacing the particular given string or character only once



let text3="Good Morning Dhana,Good Morning Bhargava";
let text4=text3.replace("Morning","Evening"); 
console.log("before replace==",text3);
console.log("after replace===",text4);



/*Output:
before replace== Good Morning Dhana,Good Morning Bhargava
after replace=== Good Evening Dhana,Good Morning Bhargava
*/
/* In the above example we have two mornings is there,but we applying replace
 method here only one morning changes to evening*/