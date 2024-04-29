// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);



//   block scope
// if(true){
    
//     let d = 10     // not accessible outside if block
//     const e = 20   // not accessible outside if block
//     var f = 30    // accessible
// }
// // console.log(d);
// // console.log(e);
// console.log(f);



// global scope
// let g = 21
// const h = 35
// var  i = 23

// if(true){
//     let g = 210
//    const h = 350
//    var  i = 230
// }

// console.log(g);
// console.log(h);
// console.log(i);      



// scope works differently in node and client side(browser)


function outer(){
    const name = "Govardhan"
    function inner(){
        const gameName = "Frankey"
        console.log(name);
    }
    // console.log(gameName);

    // inner()
}

// outer()



// if(true){
//     const firstName = "Govardhan"
//     if(true){
//        const lastName = " Kyasani"
//        console.log(firstName + lastName);
//     }
//     let lastName = "General"
//     console.log(lastName);
// }
// let firstName = "Franky"
// console.log(firstName);




// function declaratiom

// console.log(fullName1("Govardhan", " Kyasani"));

function fullName1(firstName, lastName){
    return firstName + lastName
}



// function expression

// console.log(fullName2("Franky", " General"));

const fullName2 = function(firstName, lastName){
    return firstName + lastName
}


/* In function expression, the entire function is assigned to a variable  
  so, we cannot call that function before initialization    */


