let fullname = "Châu";
let gender = false;
let married = true;

// nếu gender = true => Mr
// nếu gender = false => Ms

// if(gender == true){
//     console.log('Mr.' + fullname);
// }
// else{
//     if(married == true){
//         console.log('Mrs.' + fullname)
//     }
//     else{
//         console.log('Ms.' + fullname)
//     }
// }

// Ternary Operator

// gender == true ? console.log('Mr.' + fullname) : 
//                 (married == true ? console.log('Mrs.' + fullname) : console.log('Ms.' + fullname));

// xxx.nnn

console.log(`${gender == true ? "Mr" : (married ? 'Mrs' : 'Ms')}. ${fullname}`);

// let a = 5;
// let b = 7;
// let c = 10;
// 5x2 + 7x + 10 = 0

// console.log(a + 'x2 + ' + b + 'x + ' + c + ' = 0');

// console.log(`${a}x2 + ${b}x + ${c} = 0`);

// (a^2 + b^2) = (a + b)x(a - b);
// let a = 5;
// let b = 8;

// // (5^2 + 8^2) = (5 + 8)x(5 - 8);
// console.log("(" + a + "^2 + " + b + "^2) = (" + a + " + " + b + ")x(" + a + " - " + b + ")");

// console.log(`(${a}^2 + ${b}^2) = (${a} + ${b})x(${a} - ${b})`);


console.log(5**2);