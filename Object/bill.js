// function Item(name, price, quantity, discount) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.discount = discount;
//     this.getAmount = function () {
//         return (1 - this.discount) * this.price * this.quantity;
//     }
//     this.getDiscount = function () {
//         return `${this.discount * 100}%`;
//     }
// }

class Item {
    constructor(name, price, quantity, discount) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
    }
    getAmount() {
        return (1 - this.discount) * this.price * this.quantity;
    }
    getDiscount() {
        return `${this.discount * 100}%`;
    }
}


let bill = [
    new Item("Black Coffee", 10000, 2, 0.05),
    new Item("Lemon Fruit", 25000, 4, 0),
    new Item("Coffee Milk", 15000, 6, 0.1),
    new Item("Milk Tea", 35000, 3, 0.1),
    new Item("Water Melon", 25000, 6, 0.1),
]

// for (let i = 0; i < bill.length; i++) {
//     // console.log(`${bill[i].name}\t\t${bill[i].price}\t\t${bill[i].quantity}\t\t${bill[i].discount}\t\t${(1 - bill[i].discount) * bill[i].price * bill[i].quantity}`);
//     console.log(`${bill[i].name}\t\t${bill[i].price}\t\t${bill[i].quantity}\t\t${bill[i].getDiscount()}\t\t${bill[i].getAmount()}`);
// }

function renderBill() {
    let tbBill = document.getElementById('tbBill');
    let totalAmount = 0;
    for (let i = 0; i < bill.length; i++) {
        tbBill.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${bill[i].name}</td>
                <td style='text-align:right;'>${bill[i].quantity}</td>
                <td style='text-align:right;'>${bill[i].price}</td>
                <td style='text-align:right;'>${bill[i].getDiscount()}</td>
                <td style='text-align:right;'>${bill[i].getAmount()}</td>
            </tr>
        `
        totalAmount += bill[i].getAmount();
    }
    document.getElementById('totalAmount').innerHTML = totalAmount;
}

renderBill();