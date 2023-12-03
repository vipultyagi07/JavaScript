// 1. example

// Define a function named getEmployeeIdWithCallback that takes a callback function as its argument.
const getEmployeeIdWithCallback = (callback) => {  
    // Inside the function, set a timeout of 3 seconds (3000 milliseconds).
    setTimeout(() => {
        // Generate a random number between 0 and 9 (inclusive), round it down to the nearest integer, and pass it to the callback function.
        callback(Math.floor(Math.random() * 10));
    }, 3000); // The callback function will be executed after the 3-second delay.
}

// Call the getEmployeeIdWithCallback function, providing a callback function as an argument.
getEmployeeIdWithCallback(id => {
    // When the timeout is completed, this callback function is executed, and it receives the random employee ID as 'id'.
    // Log the employee ID to the console.
    console.log(id);

    getEmployeeDetailsWithCallback(id,details=>{

        console.log('Employee Details:',details)
    
    })
    
})



// 2. example

const getEmployeeDetailsWithCallback=(id,callback)=>{

    setTimeout(()=>{

        callback({
            id,
            name:"vipul",
            age:23
        })

    },5000)

}

 








