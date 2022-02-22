

// <!-- 🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗🌗 -->


// let nums = [1,5,9,7,6,48]
// let str = ['1','5','9','7','6','48'];
// nums = [...nums, ...str];
// console.log(nums);

// console.log(48);




let staffs = [
    { name: "Susan", age: 14, salary: 100 },
    { name: "Daniel", age: 16, salary: 120 },
    { name: "Bruno", age: 56, salary: 400 },
    { name: "Jacob", age: 15, salary: 110 },
    { name: "Sam", age: 64, salary: 500 },
    { name: "Dave", age: 56, salary: 380 },
    { name: "Neils", age: 65, salary: 540 }
  ];    

const foundStaffs = staffs.filter(staff => (
    staff.age === 56
  ))
  console.log(foundStaffs);

  let activeStaff = [];
  activeStaff = [...foundStaffs]

  console.log(activeStaff);






//   🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗🆗

// Rest

function add(a,b){
    return a +b
}
 const result = add(1, 2)
console.log(result);



function qosh(...params){
    console.log(params);
    let sum = 0;
    for (i = 0; i < params.length; i++){
        sum += params[i]
    }
    return sum
}
const natija = qosh(1,2,3,4,5,6,7,8,9,10)

console.log(natija);