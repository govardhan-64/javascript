const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( function (acc, curVal) {
//     console.log(`acc: ${acc} cur: ${curVal}`);
//     return acc + curVal
// },0 )
// console.log(myTotal);

// const myTotal = myNums.reduce( function (acc, curVal) {
//     console.log(`acc: ${acc} cur: ${curVal}`);
//     return acc + curVal
// },3 )
// console.log(myTotal);

// const myTotal = myNums.reduce( function (acc, curVal) {
//     console.log(`acc: ${acc} cur: ${curVal}`);
//     return acc + curVal
// } )
// console.log(myTotal);


// const myTotal = myNums.reduce( (acc, curVal) => {
//        console.log(`acc: ${acc} cur: ${curVal}`);
//        return acc + curVal
// },0 )
// console.log(myTotal);

// const myTotal = myNums.reduce( (acc, curVal) => {
//        console.log(`acc: ${acc} cur: ${curVal}`);
//        return acc + curVal
// },5 )
// console.log(myTotal);

// const myTotal = myNums.reduce( (acc, curVal) => (acc + curVal), 0)
// console.log(myTotal);



const shoppingCart = [
    {
        item: "T-shirt",
        price: 599
    },
    {
        item: "Shirt",
        price: 1799
    },
    {
        item: "Trowser",
        price: 1599
    },
    {
        item: "Watch",
        price: 2199
    },
    {
        item: "Belt",
        price: 799
    },
]

const PriceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(PriceToPay);