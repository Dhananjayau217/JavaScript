var week=["mon","tue","wed","thu","fri","sat","sun"];
function monthweek(week){
    var weeks_result;
    if(week[0]=="mon"){
        console.log("Monday");
        weeks_result="Today is monday";
    }else if(week[1]=="tue"){
        console.log(" Tuesday");
        weeks_result="Today is tuesday";
    }else if( week=="wed"){
        console.log("Wednesday");
        weeks_result="Today is wednesday";
      } 
      return weeks_result;
}
var result=monthweek(week);
console.log(result);




/*output:

Monday
Today is monday

*/