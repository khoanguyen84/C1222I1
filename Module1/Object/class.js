// code convension
// format
// camel case: getElementsById
// pascal case: GetElementsById
// snake case: get_elements_by_id

// trong lớp (class)
// contructor: phương thức khởi tạo/ nhân tử
// proterties: thuộc tính
// methods: phương thức

function Product(name, price) {
    this.productName = name;
    this.productPrice = price;
}

// let ip6 = new Product("iPhone 6S", 5000000);
// let ip7 = new Product("iPhone 7", 6500000);

// let ip14 = {
//     productName: "iPhone 14",
//     productPrice: 30000000
// }
// console.log(ip6);
// console.log(ip7);

let products = [
    new Product("iPhone 6S", 5000000),
    new Product("iPhone 7", 6500000)
]

console.log(products);