// string (matinlar bilan ishlash)


// charAt
const word = 'Hello';
const result = word.charAt(1);  //indexni oberadi
console.log(result);
console.log(word[2]);       //charAt bilan bir xil




// startsWidth --- boshlanadimi?

const test = 'Welcome to Javascript World';
console.log(test.startsWith('Welcome'));
console.log(test.startsWith('to'));
console.log(test.startsWith('W'));



// endsWidth --- tugadimi?

const namuna = 'Javascriptga xush kelibsiz';
console.log(namuna.endsWith('kelibsiz'));
console.log(namuna.endsWith('z'));
console.log(namuna.endsWith('xush'));








// startWidth vs endsWidth ning optimallashgan varianti bu  --------> inculudes

// inculudes ---- ichidan tekshiradi
const message = 'You are selected to our university';
console.log(message.includes('You'));
console.log(message.includes('our'));
console.log(message.includes('sity'));
console.log(message.includes('hahahahahahahaha'));









// indexOf ---> nechanchi indexdan boshlanayotganligini ko'rsatadi

const soz = 'You are mine';
console.log(soz.indexOf('mine'));
console.log(soz.indexOf('are'));
console.log(soz.indexOf('ou'));






// LastIndexOf  ---> oxiridan qidiradi
const matn = 'Sen menikisan';
console.log(matn.lastIndexOf('i'));
console.log(matn.indexOf('i'));







// toUppercase toLowercase

const katta = 'You are so beautiful girl';
console.log(katta.toUpperCase());
console.log(katta.toLowerCase());


const search = "ARE so";

const findWords = katta.toLowerCase().includes(search.toLowerCase());
console.log(findWords);







// subString  --->  aynan malum bir qismini qirqib olish uchun ishlatiladi !!!
const qirqibOlish = 'Frontend developer';
const natija = qirqibOlish.substring(0, 8)       //    (0<8)
console.log(natija);








// replace --->  alishtirib qo'yish
let matnlar = 'You are our member and you are registered';
console.log(matnlar.replace('and', 'va'));
console.log(matnlar.replace('registered', 'complated'));









