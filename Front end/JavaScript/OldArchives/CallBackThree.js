//Let's take a more complex example where we use callbacks to handle a series of operations.


//In this example, we have three functions: add, multiply, and performOperations.
//  The performOperations function combines both addition and multiplication operations and uses nested callbacks to execute
//   them in a specific order. The final callback passed to performOperations logs the results of both operations.

// use :  Callbacks are a fundamental concept in asynchronous programming, and they allow you to control the flow of your code when dealing with tasks that may take some time to complete, like network requests, file I/O, or database operations.

// A function to add two numbers
function add(a, b, callback) {
    setTimeout(function() {
      const result = a + b;
      callback(result);
    }, 1000); // Simulating a 1-second delay
  }
  
  // A function to multiply two numbers
  function multiply(a, b, callback) {
    setTimeout(function() {
      const result = a * b;
      callback(result);
    }, 800); // Simulating an 800 ms delay
  }
  
  // A function to perform both addition and multiplication
  function performOperations(x, y, callback) {
    add(x, y, function(sum) {
      multiply(sum, 10, function(product) {
        callback(sum, product);
      });
    });
  }
  
  // Usage
  performOperations(5, 3, function(sum, product) {
    console.log(`Sum: ${sum}, Product: ${product}`);
  });
  