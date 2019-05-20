
// USING RECURSIVE
// Depends on the size of the input this will result in 0(2n) which is a bad operation
// We could use a for loop

function recursive(array , length) {
    if(array.length > length){
        return array
    } 
    array.push(array[array.length - 2] +  array[array.length - 1])
    return recursive(array, length)
}

let checkOut = recursive([0, 1], 10)



// Perhaps we could try to use Memoization to increase the performance of our recursive
// algo... Gonna have to think about this


// USING WHILE LOOPS that will result in 0(n) but does take up in space complexity
function recursive2(array, length) {
        let num1 = result[0];
        let num2 = result[1];
        next = null
        count = 2;

while (count < length){
        next = num1 + num2;
        num1 = num2;
        num2 = next; 
        array.push(next)
        count++
   }
   return array 
}

