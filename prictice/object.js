// objects
// 🇺🇿 1️⃣ --> Basic objects
// primitive vs referance ning farqlari?


const user = {
    key: 'value',
    firstName:'Ali',
    age:20,
    phone: 996795407
}
// const user2 = {
//     key: 'value',
//     firstName:'Vali',
//     age:50,
//     phone: 996795407
// }

let user2 = user;
user2.firstName = 'Matilda'

console.log(user2);
console.log(user);





// 2️⃣    --> Object proporties and methods 

const learner = {
    city: 'Fargana',
    country: 'Uzbekistan',
    create: function(){
        console.log('Creating some issues');  //proporty ko'rinishidagi method
    },
    create2(){
        console.log('Creating some issues'); // method
    }
}

console.log(learner);



// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let box = {
    calledName: 'square',
    color: 'red',
    number: 5
}

// Objectga qo'shish
box.design = 'modern';
box.isSale = false
console.log(box);

// Objectdan o'chhirish (delete)
delete box.color
delete box.number

console.log(box);













// 3️⃣ --> Object ichida bor yoki  yo'qligini tekshirish  

const quti = {
    raqam: 58,
    color: 'sariq',
    egasi: 'Jo\'shqin'
}


console.log("raqam" in quti);

console.log(quti);


// Modern ES6 javascript features in object


let firstName = 'Usmon';

const person = {
    firstName,  //firstName: firstName, 
    age:52
}
console.log(person);




// Azizbek Khabibullayev lesson 16 is finishid😎