// callback = gọi lại
// để gọi 1 hàm là callback thì nó phải:
// 1. Phải là 1 hàm
// 2. Hàm này phải được truyền vào hàm khác thông qua đối số (agrument)
// 3. Nó phải được thực thi



function useCallback(func){
    console.log(func(10, 20));
}

useCallback(function(n1, n2){
    return n1 + n2;
})

// parameter vs agrument
// tham số vs đối số

// function sum(n1, n2){
//     return n1 + n2
// }
// sum(10, 20)

// let numbers = [4, 5, 3, 23, 5, 5]



// numbers.sort(function(n1, n2) {
//     return n1 - n2;
// })

// console.log(compare(100, 50));
// console.log(numbers);