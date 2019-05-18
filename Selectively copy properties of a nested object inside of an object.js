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
