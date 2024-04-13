
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

// console.log(isLoggedIn("govardhan"))
// console.log(isLoggedIn());
// console.log(isLoggedIn(""));



// function cartItemsPrice(price)
// function cartItemsPrice(...price)
function cartItemsPrice(val1,val2, ...price)
{
   return price
}

// console.log(cartItemsPrice(23,44,65,78,99));




const user = {
    name: "Franky",
    profession: "shipwright"
}

function someFunction(userObj) {
    console.log(`${userObj.name} is  ${userObj.profession} for strawhats`);
}

// someFunction(user)
// someFunction({
//     name: "roronoa zoro",
//     profession: "vice captain"
// })



const arrOfNum = [20,45,68,99,34,68]

function elementOfArr(num){
    return num[1]

}

// console.log(elementOfArr(arrOfNum));




function element(number){
    return number[1]
}

// console.log(element([20,45,68,99,34,68]));














