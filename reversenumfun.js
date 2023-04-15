/*1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223
*/

function reverse11(num){
    num = num.toString();
    console.log("converting string==",num);
    num=num.split("");
    console.log("After split==",num);
    num=num.reverse();
    console.log("reverse the number split==",num);
    num=num.join("");
    console.log("Join the spiltted string===",num);
    return "reverse number is ===",+num;
}
var result=reverse11(12345);
console.log("After reveese number==",result);

/*Output:

converting string== 12345
After split== [ '1', '2', '3', '4', '5' ]
reverse the number split== [ '5', '4', '3', '2', '1' ]
Join the spiltted string=== 54321
After reveese number== 54321

/*
