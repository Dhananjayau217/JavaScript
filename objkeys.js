var sample_object={
    "first name":"dhananjaya",
    "last name":"uppithi",
    "marks":80,
    "company":"infosys",
    "location":"mysore",
    "salary":"36k"
};
console.log(sample_object);



// Output

// {
//     'first name': 'dhananjaya',
//     'last name': 'uppithi',
//     marks: 80,
//     company: 'infosys',
//     location: 'mysore',
//     salary: '36k'
//   }
 var keys=Object.keys(sample_object);
 for(var i=0;i<keys.length;i++){
    console.log(`${keys[i]}:${sample_object[keys[i]]}`);
    //  console.log(keys[i] + " : " + sample_object[keys[i]]);
 }


// Output

// first name : dhananjaya
// last name : uppithi
// marks : 80
// company : infosys
// location : mysore
// salary : 36k

