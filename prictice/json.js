// JSON bilan ishlash



// Matn ko'rinishidagi JSON
let odam = `[
    {
        "ism": "Javohir",
        "yoshi":145,
        "turmush": false
    },
    {
        "ism": "Javohir",
        "yoshi":145,
        "turmush": false
    },
    {
        "ism": "Javohir",
        "yoshi":145,
        "turmush": false
    },
    {
        "ism": "Javohir",
        "yoshi":145,
        "turmush": false
    },
    {
        "ism": "Javohir",
        "yoshi":145,
        "turmush": false
    }
]`

// console.log(odam);


// parse -----> objectga aylantirish
console.log(JSON.parse(odam));


















// Object korinishidagi JSON
let person = [
  {
    ism: "javohir",
    yoshi: 45,
    turmush: false,
  },
  {
    ism: "javohir",
    yoshi: 45,
    turmush: false,
  },
  {
    ism: "javohir",
    yoshi: 45,
    turmush: false,
  },
];

// console.log(person);

// stringify ----> Matnga aylantiradi
console.log(JSON.stringify(person));


