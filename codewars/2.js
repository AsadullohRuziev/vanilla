//  even or odd 

//fuction declaration

function evenOrOddDec(number){
    if (number % 2 === 0) {
        console.log('this is even');
    }else{
        console.log(`${number} is odd`);
    }
}
evenOrOddDec(6)








// function expession

const evenOrOddDec2 = function(number){
    if (number % 2 === 0) {
        console.log('even');
    } else {
       console.log('odd'); 
    }
}
evenOrOddDec2(8)









// Arrow function

const evenOrOddDec3 = number => {
    if (number % 2 === 0) {
        console.log('even');
    } else {
       console.log('odd'); 
    }
}
evenOrOddDec3(6)























// which one is greater?

//fuction declaration

function greater(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2
    }
}
console.log(greater(2,4));



// function expression

const greater2 = function(num1, num2){
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
console.log(greater2(5,3));





// Arrow function 

const greater3 = (num1, num2) => {
    if (num1>num2) {
        return num1
    }
    return num2;
}
console.log(greater(9, 9));





















// reverse declaration

function reverse(number) {
    const numberString = String(number);
    const reversedString = numberString.split('').reverse().join('')
    console.log(typeof reversedString);
    const result = Number(reversedString)
    console.log(typeof result);
    return result;
}
console.log(reverse(123456789));




