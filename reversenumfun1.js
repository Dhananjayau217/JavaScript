function reverse_num(number){
    console.log("Before reverse the number is==",number);
    number=number+"";
    return number.split("").reverse().join("");
}
var result=reverse_num(31432);
console.log("After revese the number is=== ",result);


/*Output:

Before reverse the number is== 31432
After revese the number is===  23413
*/