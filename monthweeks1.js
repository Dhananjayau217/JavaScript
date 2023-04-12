var month=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
var week=["mon","tue","wed","thu","fri","sat","sun"];
function monthweeks(month,week){
    var weeksandmonths;
    for(var i=0;i<month.length;i++){
        console.log(`This month ${i} name is ${month[i]}`);
         weeksandmonths=i;
    }for(var j=0;j<week.length;j++){
        console.log(`This Week ${j} name is ${week[j]}`);
         weeksandmonths=j;
    }return weeksandmonths;
    }
    monthweeks(month,week);




/*Output:

    This month 0 name is JAN
This month 1 name is FEB
This month 2 name is MAR
This month 3 name is APR
This month 4 name is MAY
This month 5 name is JUN
This month 6 name is JUL
This month 7 name is AUG
This month 8 name is SEP
This month 9 name is OCT
This month 10 name is NOV
This month 11 name is DEC
This Week 0 name is mon
This Week 1 name is tue
This Week 2 name is wed
This Week 3 name is thu
This Week 4 name is fri
This Week 5 name is sat
This Week 6 name is sun

    */