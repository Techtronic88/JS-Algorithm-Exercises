// Find the longest words


// 1st separate each word passed in
// 2nd We pass the value of arguments splitted into words to another variable
// 3rd We initilize another variable. Note it has to be at least a blank value cannot be null

// longestWords initialized as let longestWords = " " so we can access it's length property to use in our condition
// If we initilized it as let longestWords it will be undefined

// LIMITATION OF THIS ALGORITHM = The script can only display and find 1 word, if there are multiple words with multiple
// length, it will only pick the first one and will ignore the rest therefore 
// not suitable for pulling multiple data


findTheLongestWords = (words) => {
   let wordsRegistered = words.split(" ");
   let longestWords = " "

   for( let word of wordsRegistered) {
       if (word.length > longestWords.length) {                        
           longestWords = word // 
       }
   }
   return longestWords
}




// 2nd We pass the value of arguments splitted into words to another variable


console.log(findTheLongestWords("Javascript is indeed difficult yet rewarding to explore and practice"))

