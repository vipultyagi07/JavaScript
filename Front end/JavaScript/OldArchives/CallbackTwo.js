//Suppose you have a function that performs some asynchronous task, like reading a file,
// and you want to execute a specific action once the file is read. You can use a callback function for this purpose.


// Simple asynchronous function with a callback
function readFileAsync(filename, callback) {
    setTimeout(function() {
      console.log(`Reading ${filename}...`);
      callback("File content goes here");
    }, 5000); // Simulating a 1-second delay
  }
  
  // Define a callback function
  function processFileContent(content) {
    console.log(`File content: ${content}`);
  }
  
  // Call the readFileAsync function and pass the callback
  readFileAsync("example.txt", processFileContent);


//   In this example, the readFileAsync function reads a file asynchronously and, after a
//    simulated 5-second delay, calls the provided callback function processFileContent with the file content as its argument.
  