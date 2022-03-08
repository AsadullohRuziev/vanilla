// Template Literals  (ES6 xususiyati ---- interpolatsiyalash)


// 1-usul

// let firsName = 'Angilina';
// let lastName = 'Joana';
// console.log(firsName + ' ' + lastName);   //qo'shtirnoq orqali ajratish






//2-usul
// let firsName = 'Angilina ';  // oxiridan yoki boshidan joy qoldirish
// let lastName = 'Joana';
// console.log(firsName + lastName);






// 3-usul

// let firsName = 'Angilina';  
// let lastName = ' Joana';  // oxiridan yoki boshidan joy qoldirish
// console.log(firsName + ' ' + lastName);





// 4-usul

// let firsName = 'Angilina';  
// let lastName = 'Joana'; 
// console.log(firsName , lastName);  //vergul orqali ajratiladi









// 5-usul   (Template Literal {ES6})

// let firsName = 'Angilina';  
// let lastName = 'Joana'; 
// console.log(`${firsName}  ${lastName}`);















/* Date
    -getFullYear
    -getMonth
    -getDay
    -now()
    -getMinutes
    -getSeconds
*/


// const today = new Date()
// console.log(today);

// let todayDate = today.getDate();
// console.log(todayDate);

// let month = today.getMonth();
// console.log(month);

// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getFullYear());




const timeInMS = Date.now();
console.log(timeInMS);
// vaqtni ko'rsatadi