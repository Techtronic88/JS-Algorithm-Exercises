//Log all pairs of array so they each index value get attached to another 

// THIS IS A VERY EXPENSIVE OPERATION Since it is now BIG 0(n^2) it will be very slow
// WE MUST CONVERT THIS BACK INTO BIG 0(a + b )
// THE SOLUTION IS TO run 2 separate for each loop NOT nested inside one another but in the same indentation
// of the function


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


// For this algorithm we now have a BIG 0(n^2) NOTE RECOMMENDED 
attachEachLetterTogether(boxes);

// RESULT 
a a
a b
a c
a d
a e
b a
b b
b c
b d
b e
c a
c b
c c
c d
c e
d a
d b
d c
d d
d e
e a
e b
e c
e d
e e
