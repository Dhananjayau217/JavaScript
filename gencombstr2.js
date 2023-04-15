// 3. Write a JavaScript function that generates all combinations of a string. 


function generateCombinations(str){
    let result=[];
    for(var i=0;i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++){
            result.push(str.slice(i,j));
        }
    }
 return result;
}
var result1=generateCombinations("cat");
console.log(result1);


/*Output:

[ 'c', 'ca', 'cat', 'a', 'at', 't' ]
 
*/