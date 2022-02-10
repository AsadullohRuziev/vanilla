// Math object





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
taqriblash = Math.round(10.5)
console.log(taqriblash);



//✅ Sonlarni taqriblash (~)         Ceil method
let ceilMethod;
ceilMethod = Math.ceil(5.9);
console.log(ceilMethod);





//✅ Sonlarni taqriblash (~)         Floor method
let floorMethod;
floorMethod = Math.floor(3.6);
console.log(floorMethod)





//✅ Sonlarni ildizdan chiqarish     SQRT method
let sqrt;
sqrt = Math.sqrt(16)
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