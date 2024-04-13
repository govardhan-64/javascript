let score1 = 2
// console.log(score1);



// explicitly declaring type number
let score2 = new Number(4)   
// console.log(score2);           // [Number: 4]

let score3 = new Number('5')
//  console.log(score3);            // [Number: 5]

let score4 = new Number('3rf')
// console.log(score4);              // [Number: NaN]



let salary = new Number(44321)
// console.log(salary);
// console.log(salary.toString());
// console.log(salary.toString().length);

// console.log(salary.toFixed(2));
// console.log(salary.toFixed(3));

const amount = 435.665
// console.log(amount.toPrecision(5));
// console.log(amount.toPrecision(4));
// console.log(amount.toPrecision(3));


// const profits = 455562320
// console.log(profits.toLocaleString())
// console.log(profits.toLocaleString('en-IN'));



// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);






// +++++++++++++++++++++++++++++++ Maths  ++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);   // Math is an object 

// console.log(Math.abs(4));
// console.log(Math.abs(-4));

// console.log(Math.round(5.4));
// console.log(Math.round(5.5));

// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));

// console.log(Math.sqrt(25));

// console.log(Math.pow(2, 3));
// console.log(Math.pow(3, 3));
// console.log(Math.pow(4, 3));


// console.log(Math.min(2,4,6,5,7,9,1,8,3));
// console.log(Math.max(2,4,6,5,7,9,1,8,3));


// console.log(Math.random());  // value between 0 and 1


// let randomNumber = Math.random()
// console.log(randomNumber);
// console.log(randomNumber*10);    
// console.log((randomNumber*10) + 1);   
// console.log(Math.floor(randomNumber*10) + 1);



const min = 10
const max = 20

let randomNumber2 = Math.random()
console.log(randomNumber2);
console.log(randomNumber2 * (max - min));    
console.log(randomNumber2 * (max - min + 1));   
console.log(randomNumber2 * (max - min + 1) + min);
console.log(Math.floor(randomNumber2 * (max - min + 1)) + min);
   

// output

// 0.8848193956220647    
// 8.848193956220648
// 9.733013351842711
// 19.73301335184271
// 19

// 0.29770375412633143
// 2.9770375412633143
// 3.2747412953896458
// 13.274741295389646
// 13

// 0.496967973980593
// 4.96967973980593
// 5.466647713786523
// 15.466647713786523
// 15

// 0.06852338637443545       min value
// 0.6852338637443545
// 0.7537572501187899      
// 10.75375725011879
// 10











