let userEmail = "govardhan@o1"           // truthy
// let userEmail = ""                   // falsy
// let userEmail = []                    // truthy
// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("dont't have user email");
// }



// falsy values 
//   false, 0, -0, "", BigInt 0n, null, undefined, Nan 


// trurhy values 
// "0", " ", 'false, [], {}, function(){}


// to check array is empty or not
// let cars = []
// if(cars.length === 0){
//     console.log("array is empty");
// }else{
//     console.log(cars);
// }



//  to check object is empty or not
// let empDetails = {}
// if(Object.keys(empDetails).length === 0){
//     console.log("object is empty");
// }else{
//     console.log(empDetails);
// }



// ********
//  console.log(false == 0);
//  console.log(false == '');
//  console.log(0 == "");



// Nullish coalescing operator (??): null  undefined
let value;
// value = 5 ?? 10
// value = null ?? 10
// value = undefined ?? 15
// value = null ?? 20 ?? 25
// value = null ?? undefined
// value = undefined ?? null

// console.log(value);
// console.log(typeof value);



// Ternary operator

// condition ? true : false 

// let age = 21
let age = 18
let elligibility = age > 18 ? "Elligible" : "Not elligible"
console.log(elligibility);