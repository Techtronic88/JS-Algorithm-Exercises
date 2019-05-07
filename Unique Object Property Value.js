// Find Object Unique Property Value
// EG: Choose / Search  a list of phones based on the companies name


let products = [

{
    title: "Iphone 8",
    company: " apple" 
},

{
    title: " Galaxy ",
    company: " Samsung" 

}, 
{
    title: "Iphone 7",
    company: " apple" 
},

{
    title: "Iphone Xs",
    company: " apple" 
}, 

{
    title: "HTC phone",
    company: " htc" 
}
];

// Use map to loop through all arrays.
// Use new Set, pass in newly copied / returned array and get only unique value

 function getUnique(arr){
    let tempArr = [...new Set(arr.map(item => item.company))]

    // OUTPUT 
    return tempArr
 }


// 2ND SOLUTION: REDUCE  and new Set 
// 1st: We use new Set to initialize the value of gather parameter 
        // Gather paprameter is now a SET  gather.add is the same as SET.add

// 2nd: We then use current to catch the  company(property) of each object we iterate through
        // Knowing SET only collect unique value
            // Return gather to escape the block
// 3rd: The final result get assigned to a variable, we use spread get each values into the array            
function getUnique2(arr) {
    let tempArr = arr.reduce((gather , current) => {
        gather.add(current.company);
        return gather
    }, new Set()) 
    // OUTPUT
    return [...tempArr] 
    
}

// Another way to do it with Reduce combined with new SET
function getUnique3(arr) {
    return [...arr.reduce((gather , current) => {
        gather.add(current.company);
        return gather
    }, new Set())] 
    // OUTPUT
    
}

console.log(getUnique(products))
console.log(getUnique2(products))
console.log(getUnique3(products))