// Function:Function is having a set of stmnts/block of code designed to performs a specific tasks
//function contains n number of stmnts
//Functions is having three stages  1.function decleration
//                                  2.body of function/return
//                                  3.function call(function is call and end with semicolon)                                 
//Function call is compulsary.
//Functions can be 3 type. 1)Function Decleartion
//                         2)Function Expression
//                         3)Arrow Function
                           4)immediate invoked function 
                           5)generator function       


 //Function Declearation

/*Syntax:
function functionname(){            //function:keyword       
    //body of function
    return;
 }
//  functionname();                   //function call(without calling function we cannot execute)
 */

 //Function Expression

//  let exp=function(){
//     //body
//     return;
//  }
// exp();

 //Arrow Function

// let arrow=()=>{
//     //body
//     return;
// }
// arrow();
  
// Difference: In function declearation methodology we can call function before declare or initiaize the function .
//              but in func expression and arrow func we must call at end.






/*
Declare variables without declaring var or let keywords?          
Variables can be defined using let keyword. Variables defined without let or var keyword become global variables.
Variables should be initialized before accessing it. Unassigned variable has value undefined.
JavaScript is a loosely-typed language, so a variable can store any type value.
Variables can have local or global scope. Local variables cannot be accessed out of the function where they are declared, whereas the global variables can be accessed from anywhere.
*/



/*
use strict:
The purpose of "use strict" is to indicate that the code should be executed in "strict mode". 
With strict mode, you can not, for example, use undeclared variables.
use strict” indicates that the code is to be executed in strict mode. 
Under non-strict, the code won't execute won't execute in strict mode.
It makes it impossible to create global variables by mistake.
*/