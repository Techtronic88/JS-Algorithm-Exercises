// Recursion solution with bad result in term of time complexity
// We can improve on this drasticlly
function fibonacci(n) { //O(2^n)
  
  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2);
}



// apply memozation we can produce a much faster / cheaper operation reducing the big0 to 0(n)
// Space complexity will increase but I think this is the trade off that is worth it especially when our input is huge
function fibonacciMaster() { 
  let cache = {};
  return function fib(n) {
  count2++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}

