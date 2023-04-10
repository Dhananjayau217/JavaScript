var sample_object={
    "first name":"dhananjaya",
    "last name":"uppithi",
    "marks":80,
    "company":"infosys",
    "location":"mysore",
    "salary":"36k"
};
console.log("before adding====",sample_object);
sample_object["position"]="system engineer";     //adding a value to object
sample_object["date of birth"]="03-06-1999";     //adding a value to object
console.log("after adding====",sample_object);




// OutPut:

// /before adding==== {
//     'first name': 'dhananjaya',
//     'last name': 'uppithi',
//     marks: 80,
//     company: 'infosys',
//     location: 'mysore',
//     salary: '36k'
//   }
//   after adding==== {
//     'first name': 'dhananjaya',
//     'last name': 'uppithi',
//     marks: 80,
//     company: 'infosys',
//     location: 'mysore',
//     salary: '36k',
//     position: 'system engineer',
//     'date of birth': '03-06-1999'
//   }