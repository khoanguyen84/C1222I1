function genarateArray(size, min, max) {
    let array = [];
    for(let i = 0; i < size; i++){
        array[i] = Math.floor(Math.random()*(max - min + 1) + min);
    }
    // console.log(array);
    // document.write(array + "<br>");
    return array;
}

function printArray(numbers){
    for(let i = 0; i < numbers.length; i++){
        document.write(`${numbers[i]} <br>`);
    }
}

function calculateTotalValueArray(numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}

function isExist15(numbers, findValue){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == findValue){
            return 'Exist';
        }
    }
    return "Not Exist";
}

function countOddNumber(numbers){
    let count = 0;
    for(let i =0 ; i < numbers.length; i++){
        if(numbers[i] % 2 != 0){
            count++;
        }
    }
    return count;
}
// console.log(genarateArray(10, 2, 27));

// let n = 30;
// document.write(genarateArray(n, 23, 98) + "<br>");

// document.getElementById('h_1').innerText = genarateArray(15, 14, 57);

// let numbers = genarateArray(10, 2, 27);
// printArray(numbers);
// console.log(calculateTotalValueArray(numbers))

// document.write(isExist15(numbers, 15))
// document.write(isExist15(numbers, 25))

// document.write(`<br>There are ${countOddNumber(numbers)} odd number in array`);

// let n = 30;
// printArray(genarateArray(n, 23, 98))

function process(){
    let size = +document.getElementById('size').value;
    let min = +document.getElementById('min').value;
    let max = +document.getElementById('max').value;
    let numbers = genarateArray(size, min, max);
    document.getElementById('showArray').innerText = `Array: ${numbers}`;
    document.getElementById('showTotal').innerText = `Total value in Array: ${calculateTotalValueArray(numbers)}`;
    document.getElementById('showFind').innerText = `${isExist15(numbers, 15)}`;
    document.getElementById('showOdd').innerText = `There are ${countOddNumber(numbers)} odd number in array`;
}

function process2(){
    let size = +document.getElementById('size').value;
    let min = +document.getElementById('min').value;
    let max = +document.getElementById('max').value;
    let numbers = genarateArray(size, min, max);
    document.getElementById('showArray2').innerText = `Array: ${numbers}`;
    document.getElementById('showTotal2').innerText = `Total value in Array: ${calculateTotalValueArray(numbers)}`;
    document.getElementById('showOdd2').innerText = `There are ${countOddNumber(numbers)} odd number in array`;
}