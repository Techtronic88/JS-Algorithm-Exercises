// We will assume the worst case scenario where users will input some capital letters
// So we will make sure to convert the input to lowercase first.

// We will assume the worst case scenario where users will input some capital letters
// So we will make sure to convert the input to lowercase first.

function convertLetter(input) {

    let words = input.toLowerCase().split(" ")   
    //Loop through each letter
    // Convert that to array ?
    
    // Now slice out the first letter in each word + the rest of the wordds
    
    for(let i = 0; i < words.length; i++){
      words[i][0].toUpperCase() + words[i].slice(1)
      }
      return words.join(" ")
    }
    
    
    
    
    // We can use ES6 Map function to achieve the same result 
    // This code can be shorten even further
    
    function convertLetter2(str) {
      let titled = str.toLowerCase().split(" ").map((element) => {
        return element[0].toUpperCase() + elem.slice(1);
      })
    }
    convertLetter("just checking");
    
    
    