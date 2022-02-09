// Quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.



// 1-solution

const quarterOf = (month) =>{
    if (month <= 3) {
        return `1 --> yanvar fevral mart`;
    }else if (month <= 6) {
        return 2;
    }else if (month <= 9) {
        return 3;
    }else{
        return 4;
    }
}
console.log(quarterOf(1));






// 2-solution

const quarterOf2 = (month) =>{
    return Math.ceil(month / 3)
}
console.log(quarterOf2(5));






// 3-solution

const quarterOf3 = m => Math.ceil(m/3);
console.log(quarterOf3(12));






// 4 - solution

const quarterOf4 = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4 
}
console.log(quarterOf4(10));






// 5 - solution


const quarterOf5 = month => month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4
console.log(quarterOf5(5));