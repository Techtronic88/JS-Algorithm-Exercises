// Reverse an Interger
// Worst case assumption: What if users add in negative value
// The operation for this would be 0(n)
// I like this operation as well because it is actually easier to read

function reverseInt(int){
    
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) * Math.sign(int)
}

// Now if input added = -12345 that would be converted to -54321
// And if a normal interger is put in that would work too
reverseInt(-12345);
