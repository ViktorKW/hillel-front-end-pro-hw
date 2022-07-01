// // 1
let users = [
  {
    index: 0,

    isActive: true,

    balance: "$2,226.60",

    name: "Eugenia Sawyer",

    gender: "female",

    phone: "+1 (840) 583-3207",

    address: "949 John Street, Rose, Puerto Rico, 1857",
  },

  {
    index: 1,

    isActive: true,

    balance: "$2,613.77",

    name: "Pauline Gallegos",

    gender: "female",

    phone: "+1 (985) 593-3328",

    address: "328 Greenpoint Avenue, Torboy, North Dakota, 6857",
  },

  {
    index: 2,

    isActive: false,

    balance: "$3,976.41",

    name: "Middleton Chaney",

    gender: "male",

    phone: "+1 (995) 591-2478",

    address: "807 Fleet Walk, Brutus, Arkansas, 9783",
  },

  {
    index: 3,

    isActive: true,

    balance: "$1,934.58",

    name: "Burns Poole",

    gender: "male",

    phone: "+1 (885) 559-3422",

    address: "730 Seba Avenue, Osage, Alabama, 6290",
  },

  {
    index: 4,

    isActive: true,

    balance: "$3,261.65",

    name: "Mcfadden Horne",

    gender: "male",

    phone: "+1 (942) 565-3988",

    address: "120 Scholes Street, Kirk, Michigan, 1018",
  },

  {
    index: 5,

    isActive: false,

    balance: "$1,790.56",

    name: "Suzette Lewis",

    gender: "female",

    phone: "+1 (837) 586-3283",

    address: "314 Dunne Place, Bawcomville, Guam, 9053",
  },
];

let rich_users = users.filter((item) => {
  let str_price = item.balance;
  str_price = str_price.replace(",", "");
  str_price = str_price.replace("$", "");
  let price = Number(str_price);

  return price > 2000;
});

console.log(rich_users);

// //2
const removeElement = (array, item) => {
  array.forEach((element, index) => {
    if (element === item) {
      array.splice(index, 1);
      return;
    }
  });
};
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);

console.log(array);

// //3
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const generateKey = (key_size, characters) => {
  let str = "";
  for (let i = 0; i < key_size; i++) {
    str += characters[Math.floor(Math.random() * characters.length)];
  }
  return str;
};

const key = generateKey(16, characters);

console.log(key); // eg599gb60q926j8i
