// In this exercise, what if we want to selectively select property of and object 
// nested inside of an object 

let learners = {
    firstName: "Steven",
    lastName: "HanCock",
    scores: {
        s1q1: "5:8",
        s1q2: "9:10",
        s1q3: null,
        s1q4: "1:5",
        s1q5: "12:15",
        s2q1: "6:8",
        s2q2: null,
        s2q3: "6:8",
        s2q4: null
    }
}

// The time complexity for this here would be 0(n);
// By using this function we also end up increasing the space complexity as well.
// We could have used scores = Object.assign(obj.scores) for readability but I chose ES6 spead because
// to my understanding using spread saves us an extra function call. Correct me if I am wrong.
const pullScores = function(obj, section = 0 ){
    let scores = {};

    if (section === 0) {
        scores = {...obj.scores};
    } else {
        for(let key in obj.scores) {
            if (key.includes('s' + section)) {
                scores[key] = obj.scores[key] 
            }
        }
    }
    return scores
}

let newObject = pullScores (learners, 1);
console.log(newObject);



// CALLBACK PATTERN ADVANTAGES: 
// 1 - We don't repeat code
// 2 - Make your functions more more versatile 
// 3 - Code is more maintainable

// Today I discovered another way to manipulate data inside of an Object using Call back pattern.
// We use call back pattern all the time with AddEventListener - Manipulate data in array with built in ES6 functions like map - reduce etc...

function objectManipulate(object, section = 0, callback) {
    let scores = {}
    for(key in object.scores){
      if (key.includes('s' + section)){
        let value = object.scores[key]
          if (typeof callback === "function"){
              value = callback(value)
          }
            scores[key] = value 
       }
    }
    return scores
}

// What we have done above is validating callback function as argument in the objectManipulate function
// The value we get back from property pulled from the original object is now passed in the call function()
// Below we will demonstrate how we can manipulate data we pulled from old object with our call back function attached.
// Note the data we pulled was an object nested indie of an object
// I find this concept quite fascinating.

let newObject2 = objectManipulate(learners, 1, function(val){
    if(val === null){
      return "Data not available"
    } else {
      let newValue = val.split(":");
      return newValue[0] / newValue[1] * 100 + " percent"
    }
  })
  
  console.log(newObject2)
  // RESULT
  // newObject now data pulled from original Object's nested object 
  // with data edited and conditioned we gave it
   // { s1q1: '62.5 percent',
   // s1q2: '90 percent',
   // s1q3: 'Data not available',
   // s1q4: '20 percent',
   // s1q5: '80 percent' }

