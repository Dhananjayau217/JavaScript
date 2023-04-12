/*
function functionname(){
    return;
}
functionname();
*/

function weekOftheDay(day){
var weeks=["Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
for(var i=0;i<weeks.length;i++){
    console.log(weeks[i]);
    if(day.toLowerCase()==weeks[i].toLowerCase()){
        return "Today is " +weeks[i];
    }
}
}
var result=weekOftheDay("monday");
 console.log(result);