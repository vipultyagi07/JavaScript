// setTimeout( ()=>{     // it is the function which is provided by the browser, it is not a feature of javascript

//     console.log("Logging this statement after 5se")

// },5000)


// console.log("loggin")

// now will define a button  in html and provide functionality by the JS


   // It is basically the DOM api, which provides this function 
 document.getElementById("button1").addEventListener("click",function butnClick
 (){
    console.log("Button has been clicked")
 }
 
 )

//this is a callback function 


// by using arrow function 

 
document.getElementById("button2").addEventListener("click",()=>console.log("hola!, reset button has been clicked")
    )