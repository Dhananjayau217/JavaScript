//object:key value pair
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
console.log("keys===",keys);
console.log("keys length===",keys.length);
for(var i=0;i<keys.length;i++){
    console.log(`${keys[i]}:${details_obj[keys[i]]}`);
}

/*Output:

keys=== [ 'name', 'college', 'city', 'education', 'address', 'family details' ]
keys length=== 6
name:dhana
college:SVCE
city:Tirupati
education:MCA
address:[object Object]
family details:[object Object]
*/



console.log("address details===",details_obj["address"]);
console.log("family details===",details_obj["family details"]);

/*Output:

address details=== {
    village: 'Mulakalacheruvu',
    houseno: '4-25',
    district: 'chittoor',
    pincode: 517390
  }
  family details=== {
    'father name': 'govindu',
    'mother name': 'umadevi',
    'brother name': 'pavan'
  }
  */