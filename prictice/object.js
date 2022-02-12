// objects
// 🇺🇿 1️⃣ --> Basic objects
// primitive vs referance ning farqlari?

const user = {
  key: "value",
  firstName: "Ali",
  age: 20,
  phone: 996795407,
};
// const user2 = {
//     key: 'value',
//     firstName:'Vali',
//     age:50,
//     phone: 996795407
// }

let user2 = user;
user2.firstName = "Matilda";

console.log(user2);
console.log(user);

// 2️⃣    --> Object proporties and methods

const learner = {
  city: "Fargana",
  country: "Uzbekistan",
  create: function () {
    console.log("Creating some issues"); //proporty ko'rinishidagi method
  },
  create2() {
    console.log("Creating some issues"); // method
  },
};

console.log(learner);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let box = {
  calledName: "square",
  color: "red",
  number: 5,
};

// Objectga qo'shish
box.design = "modern";
box.isSale = false;
console.log(box);

// Objectdan o'chhirish (delete)
delete box.color;
delete box.number;

console.log(box);

// 3️⃣ --> Object ichida bor yoki  yo'qligini tekshirish

const quti = {
  raqam: 58,
  color: "sariq",
  egasi: "Jo'shqin",
};

console.log("raqam" in quti);

console.log(quti);

// Modern ES6 javascript features in object

let firstName = "Usmon";

const person = {
  firstName, //firstName: firstName,
  age: 52,
};
console.log(person);

// Azizbek Khabibullayev lesson 16 is finishid😎

























// 17 -dars Object
const foydalanuvchi = {
  firstName: "Jack",
  lastName: "Doe",
  age: 19,
  create() {
    console.log("create design log");
  },
};

console.log(foydalanuvchi);

// objectning keys olish
for (let keys in foydalanuvchi) console.log(keys); //stringda olinadi

const keys = Object.keys(foydalanuvchi); //Arrayda olinadi
console.log(keys);

// objectning values olish

for (let value in foydalanuvchi) console.log(foydalanuvchi[value]);

const values = Object.values(foydalanuvchi);
console.log(values);








// ishga kirishda kerak bo'ladi

const ishchi = {
  firstName: "Jack",
  lastName: "Doe",
  age: 19,
  create() {
    console.log("create design log");
  },
};

// object entries  [key, value] juftligi ko'rinishida olish
const entries = Object.entries(ishchi);
console.log(ishchi);







//🌏 ❗❗❗❗  Clone object in javascript
// javascriptdagi objectlarni klonlash
let fName = 'Shabnam';
let fName2 = fName;
fName2 = 'Muhayyo'
console.log(fName);
console.log(fName2);



// object
let mardikor = {
    firstName: "Jack",
    lastName: "Doe",
    age: 19,
}
let mardikor2 = mardikor;
mardikor2.firstName = 'Josh'

console.log(mardikor);
console.log(mardikor2);




// clonlash
let custom = {
    firstName: "Jack",
    lastName: "Doe",
    age: 19,
}

// 1. Onject.assign


let custom2 = Object.assign({}, custom);

custom2.firstName = 'Matilda'

console.log(custom);
console.log(custom2);




// 2. Spreed operator

let custom3 = {...custom};
custom3.firstName = 'Nastinka'

console.log(custom);
console.log(custom2);
console.log(custom3);





// Objectning ichidagi objectni o'zgartirish

let driver = {
    firstName: "Jack",
    lastName: "Doe",
    age: 19,
    address: {
        city: 'Queen',
        state: 'usa'
    }
}

let driver2 = {...driver}


driver2.firstName = 'Conar';
driver2.address.city = 'London'; // xato 
driver2.address = {...driver.address}
driver2.address.city = 'New York'

console.log(driver);
console.log(driver2);




// Azizbek Khabibullayev lesson 17 is finishid 😎