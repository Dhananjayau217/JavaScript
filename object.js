var sample_object={
    "first name":"dhananjaya",
    "last name":"uppithi",
    "marks":80,
    "company":"infosys",
    "location":"mysore",
    "salary":"36k"
};
console.log(sample_object);
console.log(typeof(sample_object));
console.log(sample_object["first name"]);  //recommended read the object data
console.log(sample_object.company);        //read the object data



//Output:

// {
//     'first name': 'dhananjaya',
//     'last name': 'uppithi',
//     marks: 80,
//     company: 'infosys',
//     location: 'mysore',
//     salary: '36k'
//   }
//   object
//   dhananjaya
//   infosys


var keys=Object.keys(sample_object);      //read the object keys
console.log("keys===",keys); 


//Output:

// keys=== [ 'first name', 'last name', 'marks', 'company', 'location', 'salary' ]


