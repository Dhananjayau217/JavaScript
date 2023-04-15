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
console.log(details_obj);
console.log("type of object===", typeof(details_obj));

/*Output

{
    name: 'dhana',
    college: 'SVCE',
    city: 'Tirupati',
    education: 'MCA',
    address: {
      village: 'Mulakalacheruvu',
      houseno: '4-25',
      district: 'chittoor',
      pincode: 517390
    },
    'family details': {
      'father name': 'govindu',
      'mother name': 'umadevi',
      'brother name': 'pavan'
    }
  }
  type of object=== object
  */

  