// aveScore = 7.8 [0, 10]
// 9<= aveScore <=10 => xuất sắc
// 8<= aveScore < 9 => Giỏi
// 7<= aveScore < 8 => Khá
// 5<= aveScore < 7 => Trung Bình
// 0<= aveScore < 5 => Yếu

// let aveScore = 11.8;

// if (aveScore >= 9 && aveScore <= 10) {
//     console.log("Xuất sắc");
// }
// else if (aveScore >= 8 && aveScore < 9) {
//     console.log("Giỏi");
// }
// else if (aveScore >= 7 && aveScore < 8) {
//     console.log("Khá");
// }
// else if (aveScore >= 5 && aveScore < 7) {
//     console.log("Trung bình");
// }
// else if (aveScore >= 0 && aveScore < 5) {
//     console.log("Yếu");
// }
// else{
//     console.log("Invalid average score");
// }


// (aveScore >= 9 && aveScore <= 10) ? console.log("Xuất sắc") :
//     (aveScore >= 8 && aveScore < 9) ? console.log("Giỏi"):
//         (aveScore >= 7 && aveScore < 8) ? console.log("Khá"):
//             (aveScore >= 5 && aveScore < 7) ? console.log("Trung bình"): 
//                 (aveScore >= 0 && aveScore < 5) ? console.log("Yếu"): 
//                     console.log("Invalid average score");

// let aveScore = 8.8;
function rank() {
    let aveScore = +document.getElementById('aveScore').value;

    switch (true) {
        case (aveScore >= 9 && aveScore <= 10): {
            document.getElementById('result').value = ("Xuất sắc");
            break;
        }
        case (aveScore >= 8 && aveScore < 9): {
            document.getElementById('result').value = ("Giỏi");
            break;
        }
        case (aveScore >= 7 && aveScore < 8): {
            document.getElementById('result').value = ("Khá");
            break;
        }
        case (aveScore >= 5 && aveScore < 7): {
            document.getElementById('result').value = ("Trung bình");
            break;
        }
        case (aveScore >= 0 && aveScore < 5): {
            document.getElementById('result').value = ("Yếu");
            break;
        }
        default: {
            document.getElementById('result').value = ("Invalid average score");
        }
    }
}