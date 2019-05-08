// Find out how many repeat instances of random data we have in an array and convert to an Object

const array = ["bike", "car", "phone", "people", "building", "birds", "bike", "car", "people", "people", "building", "building"
,"building" , "coffee cups", "beer", "beer", "beer", "beer", "coffee cups", "coffee cups"  ];




// With Reduce, we can initialize object argument with different set of data structure such as array / objects/ Set / Map

// Step 1: initialize object for reduce
// Step 2: As reduce interate through item in the array, if item does not exist yet initialize the object propery as 0
// Step 3: If item comes across the same property again it will add it to the object's existing property

const listOfObjects = array.reduce((object, item) => {
 if(!object[item]) { 
     object[item] = 0
 } object[item]++
   return object
},{})

console.log(listOfObjects)

