var sample_object={
    "first name":"dhananjaya",
    "last name":"uppithi",
    "marks":80,
    "company":"infosys",
    "location":"mysore",
    "salary":"36k",
    "position":"system engineer",
    "date of birth":"11-sep-1998"
};
delete sample_object["marks"];          // delete key to object
delete sample_object["date of birth"];  // delete key to object
console.log("after deleting......",sample_object);



// Output

// after deleting...... {
//     'first name': 'dhananjaya',
//     'last name': 'uppithi',
//     company: 'infosys',
//     location: 'mysore',
//     salary: '36k',
//     position: 'system engineer'
//   }

