for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i),1)
    
}

for (let index = 0; index < 3; index++) {
    setTimeout(()=> console.log(index), 1)

}



// tavsif ENGLISH
/*  
Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.
*/





// tavsif UZBEK

/*
JavaScript-dagi voqea navbati tufayli setTimeout qayta qo'ng'iroq qilish funksiyasi sikl bajarilgandan so'ng chaqiriladi. Birinchi tsikldagi o'zgaruvchi indeksi var kalit so'zi yordamida e'lon qilinganligi sababli, bu qiymat global edi. Davra davomida biz ++ unar operatoridan foydalanib, har safar indeks qiymatini 1 ga oshirdik. setTimeout qayta qo'ng'iroq qilish funksiyasi ishga tushirilganda, birinchi misolda indeks 3 ga teng edi.

Ikkinchi tsiklda o'zgaruvchilar indeksi let kalit so'zi yordamida e'lon qilindi: let (va const) kalit so'zi bilan e'lon qilingan o'zgaruvchilar blokli bo'ladi (blok { } oralig'idagi narsadir). Har bir iteratsiya davomida indeks yangi qiymatga ega bo'ladi va har bir qiymat tsikl ichida qamrab olinadi.
*/