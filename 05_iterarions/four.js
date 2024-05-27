const gameName = {
   game1: "NFS",
   game2: "LOF",
   game3: "ER",
   game4: "PUBG"
}

for (const key in gameName) {
        //  console.log(key);
        //  console.log(gameName[key]);
        // //console.log(`${key} is ${gameName[key]}`);
}


const salaries = [2300,3400,4300,5500,6600]
for (const [key, values] in salaries) {
    //    console.log(key);
    //    console.log(salaries[key]);
}


let capitals = new Map()
capitals.set('Maharastra', 'Mumbai')
capitals.set('Telangana', 'Hyderabad')
capitals.set('Karnataka', 'Benguluru')
capitals.set('TamilNadu', 'Chennai')

for (const key in capitals) {
    // console.log(key);   // since, not iterable
}
