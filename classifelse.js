var firstclass=36;
var secondclass=58;
var thirdclass=72;
var fourthclass=42;
if(firstclass>=35){
    console.log("1st class pass");
    if(secondclass>=35){
        console.log("2nd class pass");
        if(thirdclass>=35){
            console.log("3rd class pass");
            if(fourthclass>=35){
                console.log("4th class pass");
            }
              else{
                console.log("4th class fail");
              }
            }
            else{
                console.log("3rd class fail");
              } 
            }
            else{
                console.log("2nd class fail");
            }
        }
        else{
            console.log("1st class fail");
        }
       
        
        
/*Output:
 1st class pass
2nd class pass
3rd class pass
4th class pass
*/

    
