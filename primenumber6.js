// 6. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function primeNum(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return "It is not a prime number";
        }
    }
    if(num==1){
        return "1 is not prime number";
    }
    return "It is a prime number";
}
let result=primeNum(11);
console.log(result);


/*Output:

It is a prime number

*/