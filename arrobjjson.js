var sample_json=[{
    "first name":"Dhananjaya",
    "last name":"Uppithi",
    "marks":80,
    "company":"infosys",
    "location":"mysore"
},
{
    "first name":"Bhargava",
    "last name":"Reddy",
    "marks":90,
    "company":"happiestminds",
    "location":"bangalore",
    "position":"software developer"
},
{
    "first name":"Dharshini",
    "last name":"Thammathaka",
    "marks":99,
    "company":"IBM",
    "location":"hyderabad",
    "position":"L2"
}];
// console.log(sample_json);
console.log(("infosys").toLocaleUpperCase());  //to change lower case to upper case letters
console.log(("IBM").toLocaleLowerCase());      //to change upper case to lower case letters

//Output:

// INFOSYS 
// ibm


for(var i=0;i<sample_json.length;i++){
    if((sample_json[i]["first name"]).toLocaleLowerCase()===("Dhananjaya").toLocaleLowerCase()){
        sample_json[i]["position"]="system engineer";          //adding new object data in particular object
        console.log(sample_json[i]);                 
    }
}


// Output

// {
//   'first name': 'Dhananjaya',
//   'last name': 'Uppithi',
//   marks: 80,
//   company: 'infosys',
//   location: 'mysore',
//   position: 'system engineer'
// }