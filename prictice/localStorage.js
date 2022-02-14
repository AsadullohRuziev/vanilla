localStorage.setItem('ism', 'Anvar'); //malumot kiritish
localStorage.setItem('laqab', 'Garri');

localStorage['ism']  = 'G\'ayratjon';   // malumotni o'zgartirish

let ism = localStorage.getItem('ism') //malumotni chaqiribolish
let laqab = localStorage.getItem('laqab') //malumotni chaqiribolish
// localStorage.removeItem(laqab)  //o'zgaruvchida ishlamadi
// localStorage.removeItem('ism')    //malumotni o'chirish
localStorage.clear()   // LocalStorageni tozalab tashaydi
console.log(ism);
console.log(laqab);
console.log(ism, laqab);