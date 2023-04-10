var first_class = 36;
var second_class = 35;
var third_class = 36;
if(first_class>35){
    console.log("1st pass");
if(second_class>35){
    console.log("2nd pass");
if(third_class>35){
    console.log("3rd pass");
}else{
    console.log("3rd fail");
}
}else{
    console.log("2nd fail");
}
}else{
    console.log("1st fail");
}


/*Output
1st pass
2nd fail
*/