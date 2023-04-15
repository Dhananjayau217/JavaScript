// 4. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function convertCapital(sentence){
    let words=sentence.split(' ');
    for(let i=0;i<words.length;i++){
        words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
     return words.join(' ');
}
console.log(convertCapital("hi dhana good morning"));






/*Output:

Hi Dhana Good Morning

*/