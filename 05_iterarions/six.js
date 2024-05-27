// const hobbies = ['swimming','singing','dancing','cooking','fishing']

// const values = hobbies.forEach( (items) =>{
//     // console.log(items);
//     // // return items
// } )

// // console.log(values);



const myNums =[1,2,3,4,5,6,7,8,9,10]

// myNums.filter( (val) => {
//       if (val > 4) {
//         console.log(val);
//       }
// } )
// // console.log(val);


// const newValue = myNums.filter( (num) => {
//     num > 6 
//     // return num
// } )
// console.log(newValue);


// const newValue = myNums.filter( (num) => (num > 4) )
// console.log(newValue);


// const newNums = []
//   myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
//   } )
// console.log(newNums);


const books = [
    {title: "Book one", genre: "Fiction", publish: 1981, edition: 2004},
    {title: "Book two", genre: "Non-Fiction", publish: 1982, edition: 2005},
    {title: "Book three", genre: "Drama", publish: 1983, edition: 2006},
    {title: "Book four", genre: "Fiction", publish: 1984, edition: 2007},
    {title: "Book five", genre: "scince", publish: 1985, edition: 2004},
    {title: "Book six", genre: "Self-help", publish: 1986, edition: 2008},
    {title: "Book seven", genre: "Thrillr", publish: 1987, edition: 2009},
    {title: "Book eight", genre: "Love", publish: 1988, edition: 2010},
]

//  let user1 = books.filter( (bk) => (bk.genre === "Self-help") )
// console.log(user1);

 let user2 = books.filter( (bk) => {
   return  bk.genre === "Fiction" && bk.edition >= 2005
} )
console.log(user2);


































