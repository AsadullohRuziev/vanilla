


// <!-- 🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗 -->


// forEach()        harbirini alohida olib chiqish;

let sinfdoshlar = ['Shohjahon', 'Parda', 'Farrux', 'Madina'];



sinfdoshlar.forEach(function(sinfdosh, index){    //index ham oladi
    console.log(sinfdosh.toUpperCase(), index);
})

sinfdoshlar.forEach(sinfdosh=>{
    console.log(sinfdosh);
})






// <!-- 🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗 -->


const books = [
    {
        id:1,
        title: 'Reactjs',
        isRead: true
    },
    {
        id:2,
        title: 'Nextjs',
        isRead: true
    },
    {
        id:3,
        title: 'Vuejs',
        isRead: false
    },
    {
        id:4,
        title: 'Angularjs',
        isRead: true
    },
]


// for
for (let i = 0; i < books.length; i++) {
    const element = books[i];
    console.log(element);
}


// for of
for (const book of books) {
    console.log(book.title);
}







// map()

books.map(function(book){
    console.log(book.id);
})


const bookTitle = books.map(function(book){
    console.log(book.title);
    return book.isRead
})
console.log(bookTitle);








// filter()
const readedBooks = books.filter(function(book){
    return book.isRead === true;
})
console.log(readedBooks);