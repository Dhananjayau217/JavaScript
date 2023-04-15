/*1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223
*/



function reverse_number(number){
       var reversenum=0;
        while(number!=0){
            reversenum=reversenum*10+number%10;
            number=Math.floor(number/10);
        }
        return reversenum;
    }
     var result=reverse_number(12345);
     console.log("Reverse number===", result);


/*Output:
    D:\dhanajs\Functionsassesment>node reversenumber.js
    Reverse number=== 54321
    */