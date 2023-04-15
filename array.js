var array=["praveen","vamsi","dhana","shamsheer"];
console.log(array.length);
console.log(array.length-1);

// var array=[1,2,3,4,5,6];
// for(var i=0;i<array.length;i++){
//     console.log(array[i]);
// }


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("length===",fruits.length);                //retuns the number of elements
 console.log(fruits.sort());                           //sorts the array
console.log("accecing first arr elm==",fruits[0]);     //returns the first element[index=0] name in array
console.log("accecing last arr elm==",fruits.length-1);//returns length of the array
for (let i = 0; i < fruits.length; i++) {
 
console.log("index===",i);                              //index of array elements
console.log(fruits[i]);                                 //elements in array
}