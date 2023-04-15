/*2. Write a JavaScript function that checks whether a passed string is palindrome or not?
*/

function palindrome(no) {
    var r = 0;
    var revno = 0;
    var temp = no;
    for (var i = 1; i <= 3; i++) {
        r = no % 10;
        revno = (revno * 10) + r;
        no = no / 10;
    } console.log(revno);
    if (temp == revno) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
    return 
} 
var result=palindrome(121);
console.log(result);



// console.log("Enter no");
// var no = 121;
// var r = 0;
// var revno = 0;
// var temp = no;
// for (var i = 1; i <= 3; i++) {
//     r = no % 10;
//     revno = (revno * 10) + r;
//     no = no / 10;
// } console.log(revno);
// if (temp == revno) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a Palindrome");
// }