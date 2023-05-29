// pass-by-value (truyền tham trị): number, boolean, string
// pass-by-reference (truyền tham chiếu): array, object, function

// let students_1 = ["Nghĩa", "Nhàn", "Dũng"];
// // let students_2 = students_1;
// let students_2 = [...students_1]
// students_2[2] = "Khoa";
// console.log(students_1);
// console.log(students_2);

let iPhone_1 = {
    name: "iPhone 14 Pro Max",
    store: '256G',
    color: 'violet'
}

// let iPhone_2 = iPhone_1;
// let iPhone_2 = { ...iPhone_1 }
// iPhone_2.color = "Gold";

let iPhone_2 = {
    ...iPhone_1,
    color: "Gold",
    screen: '10inch'
}

console.log(iPhone_1);
console.log(iPhone_2);