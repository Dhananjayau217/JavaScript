/*
function functionname(){
    return;
}
functionname();
*/

function yearOftheMonth(month){
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    for(var i=0;i<months.length;i++){
        console.log(months[i]);
        if(month.toLowerCase()==months[i].toLowerCase()){
            return "This is " +months[i];
        }
    }
    }
    var result=yearOftheMonth("JAnuAry");
     console.log(result);


/*Output:
January
This is January
*/