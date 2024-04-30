const employee = {
    empName: "Govardhan",
    age: 23,
     greetings: function(){
        console.log(`${this.empName}, welcome to Infosys`);
        console.log(this);
     },
     salary: 45000
}

// employee.greetings()


employee.empName = "Franky"
// employee.greetings()



// console.log(this); 
/* this behaves differently in browser and client side( browser).
   In browser, window is the global object so it refers to window.
   but in node environment it returns an empty object */


   function exampleOne(){
     console.log(this);
   }

//    exampleOne()

function exampleTwo(){
    username: "Govardhan"
    console.log(this.username);
}

// exampleTwo()


// arrow function
const exampleThree = () => {
    const userName = "General Franky"
    // console.log(this.userName);
    console.log(this);
    console.log("arrow function");
}

// exampleThree()



const sum = (num1, num2) => {
    return num1 + num2
}

// console.log(sum(4, 7));


/* for single line statement we can avoid braces and return keyword
    but it is mandatory to use return keyword if we use curley braces*/

const addition = (num1, num2) => (num1 + num2)    // wrap it with paranthesis
// console.log(addition(5, 5));


const user1 = () => {userName: "Govardhan"}
// console.log(user1());


const user2 = () => ({userName: "Govardhan"})
// console.log(user2());