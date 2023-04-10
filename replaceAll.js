// In 2021, JavaScript introduced the string method replaceAll( ). The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.


let text="Good Morning Dhana,Good Morning Bhargava,Tommorow morning we have meeting";
console.log("before replace==",text); 
text=text.replaceAll("Morning","Nignt"); 
  text=text.replaceAll("morning","night");

 console.log("after replace===",text);


/*Output:
before replace== Good Morning Dhana,Good Morning Bhargava,Tommorow morning we have meeting
after replace=== Good Nignt Dhana,Good Nignt Bhargava,Tommorow night we have meeting
*/

/* here by using repalceAll() method we can replace the entire sentence i the string
but in replace() method only particular sentence only replaced
*/
