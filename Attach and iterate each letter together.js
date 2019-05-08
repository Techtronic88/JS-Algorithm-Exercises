//Log all pairs of array so they each index value get attached to another 


// We know we will need to input 2 arguments = two separate operation
// I decided to nested one for loop inside of another for loop
// Attempted return console.log (i, j) but that ended up taking the value of index
// instead of the value of the index
const boxes = ['a', 'b', 'c', 'd', 'e', 'f', 'e'];
 function attachEachLetterTogether (array) {
          for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
              console.log(array[i], array[j]);
            }
     }
};


// For this algorithm it seems we now a BIG 0(n^2)
// If inside the attachEachLetterTogether() we run two separate for loops 
// instead of nested one inside another I would say it would be BIG (a + b)
attachEachLetterTogether(boxes);