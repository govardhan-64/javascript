
/*Javascript is a dynamically typed language. 
which means its type is defined during script execution*/

//  Primitive Data Types (Call by value (copy of value))  
// 7 types: string, number, boolean, null, undefined, NaN, symbol, bigInt

//   const score = 100       // type is number
//   let scoreValus = 100.3  // type is number
//   let name = "Franky"
//   const isLoggedIn = false
//   const outdoorTemperature = null
//   let email;

//   let id = Symbol('123')          //type is symbol   
//   let anotherId = Symbol('123')   //type is symbol
//   console.log(id == anotherId);

//   const bigNumber =        345568993444343455678888     //type is number
//   const anotherBigNumber = 345568993444343455678888n    // type is bigint


// Non-primitive Data Types (Reference (original value))
// array, ojects, functions

  // const cars = ["bmw", "audi", "volkswagen", "range rover"]    // type is object

  // let userDetails = {
  //   name:"Franky",
  //   age: 21,                      // type is object
  //   title:"superrr pervy"
  // }

  // const myFunction = function(){
  //    console.log("hello world");     // type is function. but technicall called as object function
  // }

  // console.log(typeof anotherBigNumber);


  

  /************************************************************************************* */
   
  // stack 
  /*primitive data types goes into stack.
     if  we want to use the data we get the copy of that value 
     and if we change the value of that copy , the original value will not change */

    //  let name = "Govardhan"
    //  let anotherName = name
    //  console.log(anotherName);   
    //  anotherName = "Franky"
    //  console.log(anotherName);
    //  console.log(name);


  // heap  
  /* non-primitive data types goes into heap 
     if  we want to use the data we get the Reference of that value 
     and if we change the value , the original value will also change */

    //  let obj1 = {
    //   name : "Govardhan",
    //   email: "Govardhan@google.com"
    //  }

    //  let obj2 = obj1
    //  console.log(obj2.email);
    //  obj2.email = "Franky@google.com"
    //  console.log(obj2.email);
    //  console.log(obj1.email);
   


   


