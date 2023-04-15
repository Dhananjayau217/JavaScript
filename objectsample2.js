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
 console.log(details_obj.name);       //1st method to print name
 console.log(details_obj["name"]);    //2nd method to print name(recommended)

 /*
dhana
dhana
*/

let keys=Object.keys(details_obj);       //key values are printed in array
console.log("keys=====", keys);          

//keys===== [ 'name', 'college', 'city', 'education', 'address', 'family details' ]

let values=Object.values(details_obj);
console.log("values===", values);

/*
values=== [
    'dhana',
    'SVCE',
    'Tirupati',
    'MCA',
    {
      village: 'Mulakalacheruvu',
      houseno: '4-25',
      district: 'chittoor',
      pincode: 517390
    },
    {
      'father name': 'govindu',
      'mother name': 'umadevi',
      'brother name': 'pavan'
    }
  ]
  */