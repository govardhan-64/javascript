
const instaUser = new Object()   // singleton object
// console.log(instaUser);

// const xUser = {}                // non-singleton object
// console.log(xUser);

instaUser.id = "854432"
instaUser.name = "franky_super"
instaUser.isLoggedIn = false
// console.log(instaUser);

const socialMedia = {
    title:"online network",
    instagram: {
        parentCompany: "meta",
        username : {
            firstName: "franky",
            lastName: "super"
        }
    }
}

// console.log(socialMedia.instagram.username["lastName"]);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

 const obj3 = {obj1, obj2}
// console.log(obj3);

const obj4 = Object.assign(obj1,obj2)
// console.log(obj4);

const obj5 = Object.assign({},obj1, obj2)
// console.log(obj5);          




// detailed explanation

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true




// using spread operator

const obj6 = {...obj1,...obj2}
// console.log(obj6);



const users = [
    {
        name:"k",
        age:18,
        city:"hyd"
    },{
        name:"k",
        age:18,
        city:"hyd"
    },{
        name:"k",
        age:18,
        city:"hyd"
    },{
        name:"k",
        age:18,
        city:"hyd"
    },
]

// console.log(users[0]);
// console.log(users[0].name);



const character = {
    name:"franky",
    power:"cyborg",
    age: 25,
    designation:"shipwright",
    from:"water-7"
}

// console.log(Object.keys(character));    // returns arrays of keys of character object
// console.log(Object.values(character));  // returns array of values of character object
// console.log(Object.entries(character)); // returns arrays of key value pairs inside an array

// console.log(character.hasOwnProperty('designation'));
// console.log(character.hasOwnProperty('fatherName'));




// object destructuring

const smartPhone = {
     model: "iphone 15",
     price: "79999 /-",
     company: "apple"
}

// console.log(smartPhone["model"]);
 

// console.log(company);   // error
const {company, model, price} = smartPhone

// console.log(company);
// console.log(price);
// console.log(model);






// json format from   https://api.github.com/users/hiteshchoudhary

/*
 {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 82,
    "public_gists": 4,
    "followers": 19548,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-04-10T13:18:57Z"
  }
*/










