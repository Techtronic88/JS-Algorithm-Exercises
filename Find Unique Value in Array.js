// CHALLENGE: Find the repeat / unique value in an array as soon as it finds it - return the number and stop running
// [2,3,4,2,3,4] returns 2 
// If no unique value returns undefined


function findUniqueValue (input) {
    // Brute force nested for loop, Time complexity is too expensive
    for (let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length;  j++){
            if(input[i] === input[j]){
                return input[i]
            }
        }
    } 
    return undefined
}




// SOLUTION 2 
// Time Complexity 0(n) code can be abit short, might not be optimal for readability
// Space complexity 0(1); 
const reg = [4,7,8,5,6,,9,2];
const objectCon2 = reg.reduce((acc, curr) => {
    if(!curr[acc]) {
        curr[acc] = 0
    } else {
        curr[acc]++
    }
    return curr
},{})


// SOLUTION 3 
// If we check where I added console.log(object) it paints a really good picture;
// Keep looping - as soon as it finds the first repeat number return that number
// { 1: 0 }
// { 1: 0, 4: 1 }
// { 1: 0, 4: 1, 5: 2 }
// { 1: 0, 2: 3, 4: 1, 5: 2 }
// { 1: 0, 2: 3, 3: 4, 4: 1, 5: 2 }
// => 3

// Time complexity 0(n)
// Space complexity 0(1);
// Readability I prefer this over solution 2
function uniqueValue(input) {
object = {}
for (let i = 0; i < input.length; i++) {
   if (object[input[i]] !== undefined) {
       return input[i]
   } else {
       object[input[i]] = i
   }  
   console.log(object); 
 }
 return undefined
}
 
