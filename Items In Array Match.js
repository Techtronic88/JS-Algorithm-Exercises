// Given 2 array, create a function that lets a user know
// If there are items match in both array - return true
// Tf thre are no item match in both arrays - return false



// SOLUTION 1: 
// CONS:
// Inefficient / Expensive in term of time complexity
// There are no size limit to the input - so this is brute force solution / Not efficent nor scalable
// BIG 0 notation = 0(a * b) as we don't know input size so we always have to assume the worst
// Nest loops also cause readability problem
const array1 = ["a", "b", "c", "d", "h"];
const array2 = ["h", "i", "l", "n", "t", "n" ];


function matchItemInArray (array1, array2) {
    for(let i = 0; i < array1.length; i++) {
         for (let i2 = 0; i2 < array2.length; i2++) {
                if(array1[i] === array2[i2]){ // NOTE: Each array has own index: array1[i] === array2[i] will not work
                    return true
            }
         }
    }
    return false 
}


// SOLUTION 2
// Instead of Nested for loops we will use 2 separate for loops
// Time complexity will be improved BUT we will have more space complexity

function matchItemInArray2(array1, array2) {
    let convertedArrayToObject = {};
    for(let i = 0; i < array1.length; i++ ) {
        if(!convertedArrayToObject[array1[i]]) {
        const property = array1[i];
        convertedArrayToObject[property] = true
        return convertedArrayToObject            
        }
    }
    for (let j = 0; j < array2.length; j++) {
        if(convertedArrayToObject[array2[i]]) {
            return true
        }
    }
    return false
}

matchItemInArray2(array1, array2)









// OUTPUT: Return true OR false