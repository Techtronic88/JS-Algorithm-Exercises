// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// Operation of this still 0(n)
// I prefer this solution in this specific case as it does not
// need space complexity since there are no variables declared
// A bonus with using recursive as well is READABILILY 
function findFactorialRecursive(number) {
    if (number === 2){
      return 2
    }
    return number * findFactorialRecursive(number - 1)
  }
  
  findFactorialRecursive(4)
  
  
  // With for loop the operation is still 0(n)
  // Space complexity increased as well since we have declared a variable inside of a function
  // There is only one stack as all execution has been done inside a for loop
  // We start i from 2 as with recursion 1 * 1 = 1 
  // answer * i = 1 * 2 so we can start i from 2 
  
  function findFactorialIterative(number) {
    let answer = 1;
    for(let i = 2; i <=number; i++){
     answer = answer * i
    }
    return answer;
  }
  
  
  findFactorialIterative(5);