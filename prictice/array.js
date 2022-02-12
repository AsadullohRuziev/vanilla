// Ulugbek Samigjanov 14-15 darslar

// 14-darsi


let array = ['go', 'java', 'python', 'javascript'];
let newArray = new Array('ot', 'qo\'y','eshak', 'mol');

console.log(array[3]);


array.push('ruby'); 
console.log(array);
array.unshift('php');
console.log(array);

newArray[1] = 'echki';
console.log(newArray);

newArray.pop();
console.log(newArray);

newArray.shift();
console.log(newArray);

console.log(newArray.length);




// 15 - dars
// concat()
let arr1 = [1,4]
let arr2 = [9,5,7,11];
let add = arr1.concat(arr2)
console.log(add);



// find()
let findValue = (number) => number === 7;
let foundValue = add.find(findValue);
console.log(foundValue);



// filter()

let filterValue = number => number > 5;
const filteredValue = add.filter(filterValue)
console.log(filteredValue);




// map()

const mapValue = number => 'Son ' + number;
const mapedValues = add.map(mapValue)
console.log(mapedValues);


// sort()

let sortedValues = (number1, number2) => number1 - number2
console.log(add.sort(sortedValues));