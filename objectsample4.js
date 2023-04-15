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

for(var i=0;i<Object.keys(details_obj).length;i++){
    // console.log(i);
    if(details_obj[Object.keys(details_obj)[i]]=="Tirupati"){
        console.log(Object.keys(details_obj)[i]);  //we can print the tirupati key
    }  
}

//Output:  city

//Another method to find value what its key
let keys=Object.keys(details_obj);
for(var i=0;i<keys.length;i++){
    // console.log(i);
    if(details_obj[keys[i]]=="Tirupati"){
        console.log(keys[i]);  //we can print the tirupati key
    }  
}

//Output:  city