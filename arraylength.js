var array=["praveen","vamsi","dhana","shamsheer"];
// array index postion starts with 0

// to find array legth

console.log(array.length);     //4
console.log(array.length-1);   //3


for (var i = 0; i < array.length; i++) {
    console.log("i=====", i); // by using for loop find the index position starts with 0
    console.log(array[i]);   // Find the element name in the array by using array[position]

}

//Output:
// 4
// 3
// i===== 0
// praveen
// i===== 1
// vamsi
// i===== 2
// dhana
// i===== 3
// shamsheer