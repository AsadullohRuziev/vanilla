function sayHi(){
    console.log(ism);
    console.log(age);
    var ism = 'Asadulloh';
    let age = 21;
}
sayHi()




// tavsif ENGLISH
/*
Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.

*/


// tavsif UZBEK


/*
Funksiya ichida biz avval var kalit so'zi bilan nom o'zgaruvchisini e'lon qilamiz. Bu shuni anglatadiki, biz o'zgaruvchini aniqlaydigan qatorga etib borgunimizcha, o'zgaruvchi ko'tariladi (xotira maydoni yaratilish bosqichida o'rnatiladi) undefined standart qiymati bilan. Biz o'zgaruvchini nom o'zgaruvchisini yozishga harakat qiladigan satrda hali aniqlamadik, shuning uchun u hali ham undefined qiymatini saqlaydi.

Let kalit so'zi (va const) bo'lgan o'zgaruvchilar ko'tariladi, lekin vardan farqli o'laroq, ishga tushirilmaydi. Biz ularni e'lon qilgan (boshlash) qatoridan oldin ularga kirish imkoni yo'q. Bu "vaqtinchalik o'lik zona" deb ataladi. O'zgaruvchilar e'lon qilinishidan oldin ularga kirishga harakat qilsak, JavaScript ReferenceError xatosini chiqaradi.
*/