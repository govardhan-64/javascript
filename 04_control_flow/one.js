// CONTROL FLOW

// if(true){
//     console.log("if block executed ");
// }


   // IF statement
// if(3 != 2){
//     console.log("Executed");
// }


    //  If Else statement
// let temperature = 41
// if(temperature == 40){
//     console.log("temperature is 40");
// }
// else{
//     console.log("temperature is greater or less than 40");
// }



// let id = 23
// if(id === 23){
//     let greeting = "hello"
//     // var greeting = "hii"
//     console.log(`${greeting} , ${id}`);
// }
// else{
//     console.log("invalid id");
// }
// // console.log(`${greeting} , ${id}`);




// let id = 24
// if(id === 23){
//     // let greeting = "hello"
//     var greeting = "hii"
//     console.log(`${greeting} , ${id}`);
// }
// else{
//     console.log("invalid id");
// }
// console.log(`${greeting} , ${id}`);
    


   // Implicit scope (no bracas required)

// let balance = 2
// if(balance === 2) console.log("rich") 



// // let userLoggedIn = false
// let userLoggedIn = true
// let debitCardDetails = true
// //  let debitCardDetails = false
// if(userLoggedIn){
//     if(debitCardDetails){
//        console.log("place order");
//     }else{
//         console.log("Enter debit card details");
//     }
// }else{
//     console.log("please! login into your account");
// }




let loggedInFromGoogle = true
let loggedInFromEmail = false
if( loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in ");
}