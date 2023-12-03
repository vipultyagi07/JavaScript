let prices=[12,13,21,50,60];

let adjustPrices=[]

// 1.

// prices.forEach((element, index, prices) =>{

//     // console.log(element, index,prices)
//     adjustPrices.push(element*1.5)


// }) 
 
// adjustPrices.forEach((i)=>{


//     console.log(i);
// })


// for each does not support return so we will going to use MAP


// this is similar to previous 

// 2. 

// adjustPrices=prices.map((element,index,prices)=>{

//     return element*2;
// }

// )

// console.log(adjustPrices,prices)

// IF WE DO NOT USE DECLARE ANY type(var,let, const), 
// so it will set its scope to GLOBAL //PS : also open this and close above one then see the otput 

// adjustPrices1=prices.map((element,index,prices)=>{

//     return{
//         index,
//         price:element*3
//     }
// }

// )

// console.log(adjustPrices1)


// 3. 

// let copiedPrices=prices;
// console.log(prices, copiedPrices)

// // Q: suppose we changed the "prices" so our "copiedPrices" will be changed, but it is not good 

// prices.push(200)

// // the upper one is bad way of copying the array, so we use "SPREAD OPERATOR"

// let newCopiedPrices=[...prices];
// console.log(prices,newCopiedPrices);

//     prices.push(69)

//     // if suppose we want to push in the copied array, it will be pushed in the copied array only

//  newCopiedPrices.push(2000);

// 4.

let userDetails={
name:'Vimmu',
age:13,
designation: 'champ',
company: 'GeeksForGeeks'

}
 
// now we want to assign/copy this userDetails object to  another 
// let{name,...rest}=userDetails;
let{...rest}=userDetails;


console.log(rest);
