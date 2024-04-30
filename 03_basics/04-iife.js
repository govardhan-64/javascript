
 //  NORMAL FUNCTION
function exampleOne(){
    console.log("one is greater than zero");
}
// exampleOne()


// IMMEDIATELY INVOKED FUNCTION EXPRESSION ( IIFE )
(function exampleTwo(){
    console.log("Two is greater than one");
})();    // it is mandotory to end iife with semicolan
// this is named IIfe

/* inside first peranthesis we have function
   and the second peranthesis is function call */



(function addNum(num1, num2){
  console.log(num1 + num2);
})(2, 4);

((name) => {
    console.log(`${name} is a crew member of  strawhats`);
})('Franky')
