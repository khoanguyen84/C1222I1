// console.log('xin chào các bạn');
// console.log('xin chào các bạn');
// console.log('xin chào các bạn');
// console.log('xin chào các bạn');
// console.log('xin chào các bạn');
// console.log('xin chào các bạn');
// console.log('xin chào các bạn');
// console.log('xin chào các bạn');
// console.log('xin chào các bạn');
// console.log('xin chào các bạn');

// for(let i = 1; i <= 10; i++){
//     console.log('xin chào các bạn');
// }
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == '0') {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

let number = -11;
let count = 0;
// if(number < 2){
//     console.log("không phải là số nguyên tố");
// }
// else{
//     for(let i = 1; i <= number; i++){
//         if(number % i == 0){
//             count++;
//         }
//     }

//     if(count == 2){
//         console.log("Là số nguyên tố");
//     }
//     else{
//         console.log("Không phải là số nguyên tố");
//     }
// }

for(let i = 1; i <= number; i++){
    if(number % i == 0){
        count++;
    }
}

if(count == 2){
    console.log("Là số nguyên tố");
}
else{
    console.log("Không phải là số nguyên tố");
}