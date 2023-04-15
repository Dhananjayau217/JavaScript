function validatePalin(string) {  
    // get the total length of the words  
    const len = string.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (string[i] !== string[len - 1 - i]) {  
            return 'It is not a palindrome';  
        }  
    }  
    return'It is a palindrome';  
} 
  const result = validatePalin("madam"); 
  console.log(result); 

/*Output:

  It is a palindrome
  */