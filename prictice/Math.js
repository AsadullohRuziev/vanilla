// Math object
// savollar
//  1 --> PI ning qiymati nechagaga teng?
//  2--> E ning qiymati nechaaga teng?
//  3 --> Taqriblash nima? va unga bir necha ko'rinishda misollar yozing!!!
//  4 --> Taqriblash method(lar)i qays(lar)i va u(lar)ni amalda qo'llab ko'rsating...
//  5 --> Ceil methodi haqida batafsil aytib bering?
//  6 --> Floor methodi haqida batafsil aytib bering?
//  7 --> Sonlarni ildizi qanday chiqariladi?
//  8 --> Manfiy sonni Musbat songa Qanday aylantiradi?
//  9 --> Sonning darajasi qanday topiladi?
//  10 --> Sonlar to'plami berilgan va ular orasidan maxni minni qanday aniqlaymiz?
//  11 --> Ixtiyoriy (random) son qanday aniqlanadi?
//  12 --> Round Ceil Floor Abs Random Pow Max Min Sqrt methodlari haqida batafsil malumot bering?



































// ✅PI --> o'garmas dooimiy       PI ~ 3.14.....
let PI;
PI = Math.PI;
console.log(PI);




//✅ E  --> o'zgarmas doimiy       E ~ 2.71......
let E;
E = Math.E;
console.log(E)







//✅ Sonlarni taqriblash (~)         Round method
// 9.81 ~ 10 
// 9.4  ~ 9
let taqriblash;
taqriblash = Math.round(10.6)
console.log(taqriblash);



//✅ Sonlarni taqriblash (~)         Ceil method
let ceilMethod;
ceilMethod = Math.ceil(5.1);
console.log(ceilMethod);





//✅ Sonlarni taqriblash (~)         Floor method
let floorMethod;
floorMethod = Math.floor(3.9);
console.log(floorMethod)





//✅ Sonlarni ildizdan chiqarish     SQRT method
let sqrt;
sqrt = Math.sqrt(81)
console.log(sqrt);





//✅ ABS method                      ABS  method
// manfiy sonni musbat songa aylantiradi
let ABS;
ABS = Math.abs(-815);
console.log(ABS);




//✅ pow method                     POW  method
// Biror sonning darajasini topish
let pow;
pow = Math.pow(5, 2)
console.log(pow);




//✅ Min vs Max   methods
let min = Math.min(12,58,694,258,654,42,82,5822);
console.log(min);

let max = Math.max(584,87,89,564,68,48,5894,548,4,8,4,848);
console.log(max);





//✅ Random
let random = Math.round(Math.random() * 100);
console.log(random);


let randomNumbers = [];
for(let i = 0; i <= 10; i++){
    let createRandom = Math.round(Math.random()*10)
    randomNumbers.push(createRandom)
}
console.log(randomNumbers);