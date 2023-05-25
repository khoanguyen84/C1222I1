// let jobs = ["java", "javascript", "reactjs", "vuejs"];
// console.log(jobs[0]);
// console.log(jobs[1]);
// console.log(jobs[2]);
// console.log(jobs[3]);

// for(let i = 0; i < jobs.length; i++){
//     console.log(jobs[i]);
// }

// [min, max]
// Math.floor(Math.random()*(max - min + 1) + min)

Math.floor(Math.random()*11 )

// Math.random() => (0,1) -> 0.0001 -> 0.9999
// [1, 10] -> 0.9999 * (10) -> 9.999 -> 10.999 -> 10
// [1, 10] -> 0.8999 * (10) -> 8.999 -> 9.999 -> 9

// [1, 10] -> 0.0001 * (10) -> 0.0010 -> 1.0010 -> 1
console.log(Math.floor(10.9999));
console.log(Math.ceil(10.00001));

console.log(0.9999*11);