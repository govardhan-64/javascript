// for of 

let numbers = [2,4,6,8,10,12,14,16,18,20]
 for (const num of numbers) {
    // console.log(num);
 }


//  let greetings = "Hello world!"
//  for (const greet of greetings) {
//     // if(greet == " "){
//     //     continue;
//     // }
//     console.log(`each char is ${greet}`);
//  }


let map = new Map()
map.set('strawhat', "luffy")
map.set('roronoa', "zoro")
map.set('vinsmoke', "sanji")
map.set('general', "franky")
map.set('roronoa', "zoro")

// console.log(map);

for (const [key, values] of map) {
   //  console.log(key, " -> ",values);
}


// const myGames = {
//    game1: "NFS",
//    game2: "LOF",
//    game3: "ER",
//    game4: "PUBG"
// }

// for (const [gNum, gName] of myGames) {
//    console.log(gNum, gName);
// }