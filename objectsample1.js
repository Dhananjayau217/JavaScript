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
 console.log("before adding==",details_obj);
 details_obj["phoneno"]="7093878067";
 details_obj["collegeid"]="19BF1F0001";
 console.log("adter adding===",details_obj);
 delete details_obj["address"];
 console.log("after deleteing====",details_obj);

/*Output:
 before adding== {
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
  adter adding=== {
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
    },
    phoneno: '7093878067',      //newly added
    collegeid: '19BF1F0001'      //newly added
  }


  after deleteing==== {
  name: 'dhana',
  college: 'SVCE',
  city: 'Tirupati',
  education: 'MCA',          //here detelet the address key details
  'family details': {
    'father name': 'govindu',
    'mother name': 'umadevi',
    'brother name': 'pavan'
  },
  phoneno: '7093878067',
  collegeid: '19BF1F0001'
}
  */