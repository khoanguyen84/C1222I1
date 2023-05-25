let root = [
    [
        {
            option_value: "4",
            option_label: "black"
        },
        {
            option_value: "5",
            option_label: "blue"
        }
    ],
    [
        {
            option_value: "6",
            option_label: "S"
        },
        {
            option_value: "7",
            option_label: "m"
        }
    ]
];

let result = [];
for (let i = 0; i < root[0].length; i++) {
    for (let j = 0; j < root[1].length; j++) {
        let array = [];
        array.push(root[0][i])
        array.push(root[1][j]);
        result.push(array);
    }
}

console.log(result);
// let example = [
//     [
//         {
//             option_value: "4",
//             option_label: "black"
//         },
//         {
//             option_value: "6",
//             option_label: "S"
//         },

//     ],
//     [
//         {
//             option_value: "4",
//             option_label: "black"
//         },
//         {
//             option_value: "7",
//             option_label: "m"
//         }
//     ],
//     [
//         {
//             option_value: "5",
//             option_label: "blue"
//         },
//         {
//             option_value: "6",
//             option_label: "S"
//         },

//     ],
//     [
//         {
//             option_value: "5",
//             option_label: "blue"
//         },
//         {
//             option_value: "7",
//             option_label: "m"
//         }

//     ],
// ];