// Objects



// creating object using object literals 
  const mySymbol = Symbol("key1")
const jsUser = {
    name: "Franky",             // we can access key or value
    email: "franky@superr" ,      // system processess email as "email by default"
    age: 22,                    // value can be anything
    location: "hyderabad",
    isLoggedIn: false,
    "full name": "Franky Superr",
    [mySymbol]: "key1"              // [] , because we are using a symbol

}

// // console.log(jsUser.name);   // mostly used but not recomended

// // console.log(jsUser[name]);   // error 

// console.log(jsUser["name"]);   // recomended

// console.log(jsUser["full name"]);


// console.log(jsUser.mySymbol);
// console.log(typeof jsUser.mySymbol);

// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);


// jsUser.email = "Govardhan@superr"
// // Object.freeze(jsUser)
// //jsUser.email = "luffy@monkey"
// console.log(jsUser);


// jsUser.greetings1 = function(){
//   console.log("hello js user");
// }
// console.log(jsUser.greetings1);



// jsUser.greetings2 = function(){
//   console.log(`hello js user, ${this.name}`);   // ` ` -> string interpolation
// }
// console.log(jsUser.greetings2());







     