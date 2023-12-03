
function performOperation(x, y, callback) {
    const result = x + y;
    callback(result);
  }
  
  function displayResult(result) {
    console.log(`The result is: ${result}`);
  }
  
  performOperation(5, 3, displayResult);


  
//   In this example, performOperation is a function that takes two numbers x and y,
//   adds them, and then calls a callback function, passing the result to it. displayResult
//    is the callback function, and it simply displays the result in the console.

// When you call performOperation(5, 3, displayResult), it calculates 5 + 3, and
//  the displayResult function is called with the result, which logs "The result is: 8" to the console.