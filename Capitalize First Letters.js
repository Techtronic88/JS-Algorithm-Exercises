// Convert first letter in every word to capital letters.
// Let's make sure the input is right



// SOLUTION 1 Using a normal for loop
// Let's assume people put in random words with some of them are capital letters 
function convertLetter(input) {
let words = input.toLowerCase().split(" ")

// If we set the variable to words only. It will only pick the first word and neglect the rest
// So we must use words[i]
for(let i = 0 ; i<words.length; i++) {
 words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
return words.join(" ")
}

convertLetter("just waitting for the next")

// SOLUTION 2 Using ES6 and map function
convertLetter2 = (input) => {
let words = input.toLowerCase().split(" ").map(element => element[0].toUpperCase() + element.slice(1)) 
 return words.join(" ")
  
}

convertLetter2("testing the solution")

// Performance why I don't think it makes a difference because they are both utilizing array so the operation stil 0(n)
