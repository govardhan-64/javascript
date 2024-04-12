
function sum(){
    let num1 = 5
    let num2 = 7
   console.log( num1 + num2 )
}
// sum()



function sumOfTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
// sumOfTwoNumbers()
// sumOfTwoNumbers(5)
// sumOfTwoNumbers(5, 4)
// sumOfTwoNumbers(5, "4")
// sumOfTwoNumbers(5, null)
// sumOfTwoNumbers(5, undefined)
// sumOfTwoNumbers(5, 4, 6)



function difference1(num1, num2){
    console.log(num1 - num2);
}

// difference1(7, 4)
// let result1 = difference1(8, 4)
// console.log(result1);




function difference2(num1, num2){
    // let res = num1 - num2
    // // console.log("reachable code");
    // return res
    // console.log("unreachable code");


    return (num1 - num2)
}

let result2 =  difference2(7, 4)
// console.log(result2);


// function isLoggedIn(username){
//     return `${username} is logged in` 
// }

// console.log(isLoggedIn("govardhan"))
// console.log(isLoggedIn());
// console.log(isLoggedIn(""));





// function isLoggedIn(username)
function isLoggedIn(username = "franky")
{
    // if(username === "" || username === undefined)
    if( !username )
    
    {
         return "no user logged in"
    }
    else{
    return `${username} is logged in` 
    }
}

console.log(isLoggedIn("govardhan"))
console.log(isLoggedIn());
console.log(isLoggedIn(""));








