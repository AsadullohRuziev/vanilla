
/*

// 1️⃣ Callback 🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️ Functions in JavaScript
const btn = document.querySelector('.btn');

// Here's an example of a "click" event listener with a callback function that will be run whenever the button is clicked:

btn.addEventListener('click', ()=>{
    let name = 'Asadulloh';
    console.log(name.toUpperCase());
})
*/





/*

// 2️⃣ Promises in JavaScript
setTimeout(()=>{
    console.log('ok');
    setTimeout(()=> {
        console.log("men");
        setTimeout(()=>{
            console.log('ok');
            setTimeout(()=> {
                console.log("men");
            },3000)
        }, 2000)
    },3000)
}, 2000)

//🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️ Gotcha: You can learn what synchronous and asynchronous means in JavaScript via this article by TAPAS ADHIKARY.

*/






// asinxiron dasturlash 🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️🧘‍♂️
/*

// 🆘🆘🆘🆘🆘Callback


const users = [
    {name:'Asadulloh', firstName: 'Ruziev' },
    {name:'Bek', firstName: 'Aka' },
    {name:'Ali', firstName: 'Tolib' },
    {name:'Matilda', firstName: 'Joes' },
]


function getUsers(){
    setTimeout(()=>{
        let result = ''
        users.forEach((user)=>{
            result += `<li><h1>${user.name} ${user.firstName}</h1></li>`
        })
        document.body.innerHTML = result;
    },1000)
}




function addUser(user, callback){
    setTimeout(()=>{
        users.push(user)
        callback()
    },2000)
}

// getUsers()
addUser({name:'josh', firstName:'Kann'}, getUsers)


*/








// 🆘🆘🆘🆘🆘Promises

/*

const foydalanuvchilar = [
    {name:'Bek', firstName: 'Aka' },
    {name:'Matilda', firstName: 'Joes' },
    {name:'Ali', firstName: 'Tolib' },
    {name:'Asadulloh', firstName: 'Ruziev' },
]

function getFodalanuvchi(){
    setTimeout(()=>{
        let natija = '';
        foydalanuvchilar.forEach((foydalanuvchi) =>{
            natija +=   `<li>${foydalanuvchi.name} ${foydalanuvchi.firstName}</li>`
        })
        document.body.innerHTML = natija;
    }, 1000)
}

// getFodalanuvchi()


function qoshFoydalanuvchi(foydalanuvchi){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            foydalanuvchilar.push(foydalanuvchi);


            const error = false;

            if (!error) {
                resolve()
            }else{
                reject('Nimadir xato')
            }

        }, 1000)
    })
}
qoshFoydalanuvchi({name:'Umar', firstName:'Mammadiyev'})
    .then(getFodalanuvchi)
    .catch(err=>console.log(err))

// console.log(qoshFoydalanuvchi({name:'Umar', firstName:'Mammadiyev'}).then(getFodalanuvchi));



*/









// 🆘🆘🆘🆘🆘Async vs Await








const foydalanuvchilar = [
    {name:'Bek', firstName: 'Aka' },
    {name:'Matilda', firstName: 'Joes' },
    {name:'Ali', firstName: 'Tolib' },
    {name:'Asadulloh', firstName: 'Ruziev' },
]

function getFodalanuvchi(){
    setTimeout(()=>{
        let natija = '';
        foydalanuvchilar.forEach((foydalanuvchi) =>{
            natija +=   `<li>${foydalanuvchi.name} ${foydalanuvchi.firstName}</li>`
        })
        document.body.innerHTML = natija;
    }, 1000)
}

// getFodalanuvchi()


function qoshFoydalanuvchi(foydalanuvchi){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            foydalanuvchilar.push(foydalanuvchi);


            const error = false;

            if (!error) {
                resolve()
            }else{
                reject('Nimadir xato')
            }

        }, 1000)
    })
}
qoshFoydalanuvchi({name:'Umar', firstName:'Mammadiyev'})
    .then(getFodalanuvchi)
    .catch(err=>console.log(err))


async function result(){
    await qoshFoydalanuvchi({name:'Kamol', firstName:'Mammadiyev'})

    getFodalanuvchi()
}
result()