// dùng từ khóa function trong các trường hợp sau
// arrow function: () =>

// Decleration Function
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(10, 20));

// Expression Function
// const times = function (n1, n2) {
//     return n1 * n2;
// }

// const times = (n1, n2) => n1 * n2;
// console.log(times(5, 10));

// const slogen = function() {
//     console.log('1 + 1 = 2');
// }

// const slogen = () => console.log('1 + 1 = 2');
// slogen()

// const showLog =  function(msg) {
//     console.log(`[Log]: ${msg}`);
// }

const showLog = (msg) => console.log(`[Log]: ${msg}`);
showLog('Student created success');

// Anonymous/Callback Function
let numbers = [4, 5, 6, 6, 6];
// let result = numbers.map(function (value, index) {
//     return value * 2;
// })
let result = numbers.map((value, index) => value * 2)
console.log(result);
// Class
// function Student() {
//     // Method
//     this.setName = function (name) {
//         this.Fullname = name
//     }
//     this.getName = function () {
//         return this.Fullname
//     }
// }
class Student{
    // Method
    setName(name) {
        this.Fullname = name
    }
    getName() {
        return this.Fullname
    }
}

let nhan = new Student();
nhan.setName('Nhàn Hoàng');
console.log(nhan.getName());