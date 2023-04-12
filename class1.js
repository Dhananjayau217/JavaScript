var firstclass=36;
var secondclass=36;
var thirdclass=32;
function passfail(firstclasss,secondclass,thirdclass){
    if(firstclass>=35){
        console.log("firstclass pass===",firstclass);
        if(secondclass>=35){
            console.log("secondclass pass==",secondclass);
            if(thirdclass>=35){
                console.log("thirdclass pass==",thirdclass);
            }else{
                console.log("third class fail==",thirdclass);
            }
            }else{
                console.log("second class fail==",secondclass);
            }
        }else{
            console.log("firstclass fail==",firstclass);
        }return;
    }

passfail(firstclass,secondclass,thirdclass);


/*Output:
firstclass pass=== 36
secondclass pass== 36
third class fail== 32
*/