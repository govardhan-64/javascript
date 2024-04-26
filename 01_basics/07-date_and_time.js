// Dates in javascript

let myDate = new Date();
// console.log(myDate);         //2024-04-22T05:31:59.911Z
// console.log(myDate.toJSON());  //2024-04-22T05:31:59.911Z
// console.log(myDate.toISOString());  //2024-04-22T05:31:59.911Z
// console.log(myDate.toString());  //Mon Apr 22 2024 10:55:57 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  // Mon Apr 22 2024
// console.log(myDate.toTimeString());  //10:55:57 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());  //22/4/2024, 10:55:57 am
// console.log(myDate.toLocaleDateString());   //22/4/2024
// console.log(myDate.toLocaleTimeString());  //11:01:59 am
// console.log(typeof myDate);   // object


   // custom created date
let myCreatedDate = new Date(2024, 0, 20)
// console.log(myCreatedDate.toDateString());

// let  myCreatedDateTime = new Date(2024, 0, 21, 7, 30)
// console.log(myCreatedDateTime.toLocaleString());

// let myCreatedDate2 = new Date("2024-01-22")
// console.log(myCreatedDate2.toDateString());

// let myCreatedDate3 = new Date("01-23-2024")
// console.log(myCreatedDate3.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);  //current time in ms from 1970


// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);  // in seconds
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());


//for customized date and time
newDate.toLocaleString('default', {
    weekday:"long"

})







































