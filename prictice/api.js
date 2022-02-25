// api bilan ishlash


fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))


/*
fetch('https://jsonplaceholder.typicode.cERRORom/photos') 
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log("error aka"))  //Errorda ishlatiladi
*/




fetch('https://jsonplaceholder.typicode.com/users/12')
    .then(res => {
        if(res.ok){
            console.log('Success');
        }else{
            console.log('ERROR');
        }
    })




