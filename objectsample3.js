//objecty:key value pair
//var details_obj={key:value}

var details_obj={
    "name":"dhana",
     "college":"SVCE",
     "city":"Tirupati",
     "education":"MCA",
     "address":{
         "village":"Mulakalacheruvu",
         "houseno":"4-25",
         "district":"chittoor",
         "pincode":517390
     },
     "family details" :{
         "father name":"govindu",
         "mother name":"umadevi",
         "brother name":"pavan"
 
     }
 };
let keys=Object.keys(details_obj);
console.log("keys length====",keys.length);
console.log("keys===",keys);

/*
keys length==== 6
keys=== [ 'name', 'college', 'city', 'education', 'address', 'family details' ]
*/

for(var i=0;i<keys.length;i++){
    // console.log(i);          //find index position
    console.log(keys[i]);        //find keys
}
/*
name
college
city
education
address
family details
*/