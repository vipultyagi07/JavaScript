function getUserDetails(){

    console.log("Getting User details")

}

getUserDetails()

// use case of arrow function 

console.log(userName) // it will not throw any error , instead it will print undefined 
    var userName="Vip";
                        //  so it will create a problem for developer to find the error


    // =>  arrow function 


     const fetchUserDetails1=()=>{

        console.log("Fetching User Details 1 using Arrow Function")
         
     }
        // modified  arrow function

     const fetchUserDetails2=()=>console.log("Fetching User Details 2 using modified Arrow Function")



        
     const fetchUserDetails3=(parameter)=>{

        console.log("Fetching User Details using 3 Arrow Function             ",parameter)
         
     }
        // modified parametrized arrow function
     const fetchUserDetails4=parameter=>{

        console.log("Fetching User Details using 4 Arrow Function             ",parameter)
         
     }

        fetchUserDetails1();
        fetchUserDetails2();
        fetchUserDetails3("Hello there");
        fetchUserDetails4("Hell");




    
