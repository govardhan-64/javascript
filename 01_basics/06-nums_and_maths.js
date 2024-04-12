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


const profits = 455562320
console.log(profits.toLocaleString())
console.log(profits.toLocaleString('en-IN'));
