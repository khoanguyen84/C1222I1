// for(let i = 1; i <= 10; i++){
//     console.log('xin chào các bạn');
// }

// let i = 1;
// while(i <= 10){
//     console.log('xin chào các bạn');
//     i++;
// }

// for(let i = 1; i <= number; i++){
//     if(number % i == 0){
//         count++;
//     }
// }
let i = 1;
let count = 0;
let number = 11;
while(i <= number){
    if(number % i == 0){
        count++;
    }
    i++;
}
if(count == 2){
    console.log("Là số nguyên tố");
}
else{
    console.log("Không phải là số nguyên tố");
}