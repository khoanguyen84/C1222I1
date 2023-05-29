// truthy và falsy
// convert các kiểu dữ liệu về kiểu boolean
// false    => false
// 0        => false
// null     => false
// empty    => false
// undefined  => false
// NaN      => false

// let price_unit = ''
// if(price_unit != null && price_unit != ''){
//     console.log(price_unit);
// }
// else {
//     console.log('Not price yet');
// }

// console.log(price_unit || 'Not price yet');

let numbers = [5, 6, 7, 7];

console.log((numbers.length && numbers) || 'Empty');