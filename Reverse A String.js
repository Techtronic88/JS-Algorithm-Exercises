


// Reverse a string 
// SOLUTION 1
// Using for loops is the easiest,  
// I did not need to use input.split as string is al
reverse = (input) => {
    let backward = [];
    let lastIndex = input.length - 1 // Grabbing last index and easier to read in for loops
    for (let i = lastIndex; i >= 0; i--) {    // If we  set i >= 0 the code will break
       backward.push(input[i]);   // NOTE: using input[i] let us pic the actual value of each item  
    }
    console.log(backward)
    return backward.join('');

}

// SOLUTION 2
// Cleaner Code
function reverse2(input) {
   return input.split("").reverse().join('');
}

// I PREFER THIS SOLUTION THE BEST FOR READABILITY
// With ES6 we can omit the curly bracket by using arrow function with already implied return 
const reverse3 = input => input.split("").reverse().join('');

// SHORTER SOLUTION WITH SPREAD
// SPREAD gives each input value into their own index so we won't need split anymore 
const reverse4 = input => [...input].reverse().join('')


// We could even use recursive in this instance but I would be really careful in term of 
// performance as we don't really know how long the input will be
// If the input is long we are better off using the built in function of ES6

function recursive (input){
    debugger;
      if (input === "") {
          return  ""
      } else {
          return recursive(input.substr(1)) + input.charAt(0)
      }
  }
  recursive("Tom");







