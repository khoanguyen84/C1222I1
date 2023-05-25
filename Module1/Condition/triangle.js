// function kiemtra() {
//     let a = +document.getElementById('a').value;
//     let b = +document.getElementById('b').value;;
//     let c = +document.getElementById('c').value;;

//     if (a + b > c && a + c > b && b + c > a) {
//         if (a == b && b == c && a == c) {
//             document.getElementById('result').innerText = "Đây là tam giác đều";
//         }
//         else if (a == b || a == c || b == c) {
//             document.getElementById('result').innerText = "Đầy là tam giác cân";
//         }
//         else if ((a ** 2 + b ** 2 == c ** 2) || (a ** 2 + c ** 2 == b ** 2) || (b ** 2 + c ** 2 == a ** 2)) {
//             document.getElementById('result').innerText = "Đây là tam giác vuông";
//         } else {
//             document.getElementById('result').innerText = "Đây là tam giác thường";
//         }
//     }
//     else {
//         document.getElementById('result').innerText = "Not a triangle";
//     }
// }

function kiemtra() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    switch (true) {
        case (a + b > c && b + c > a && a + c > b):
            switch (true) {
                case (a == b && b == c && c == a):{
                    document.getElementById('result').innerText = "Tam giác đều";
                    break;
                }
                case (a == b || b == c || c == a):
                    document.getElementById('result').innerText = "Tam giác cân";
                    break;
                case ((a ** 2 == b ** 2 + c ** 2) || (b ** 2 == a ** 2 + c ** 2) || (c ** 2 == a ** 2 + b ** 2)):
                    document.getElementById('result').innerText = "Tam giác vuông";
                    break;
                case ((a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b)):
                    document.getElementById('result').innerText = "Tam giác tù";
                    break;
                default:{
                    document.getElementById('result').innerText = "Tam giác nhọn";
                    break;
                }
            }
            break;
        default:{
            document.getElementById('result').innerText = "Không phải tam giác";
            break;
        }
    }
}