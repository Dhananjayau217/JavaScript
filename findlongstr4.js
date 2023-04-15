// 5. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longString(longstr){
    let sentence=longstr.split(' ');
    let longstrsentence=' ';
    for(let i=0;i<sentence.length;i++){
        if(sentence[i].length>longstrsentence.length){
            longstrsentence=sentence[i];
        }
    }
    return longstrsentence;;
}
let result=longString("hi dhana good morning");
console.log(result);


/*Output:

morning

*/