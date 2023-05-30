// const h1 = document.createElement('h1');
// h1.innerText = "Chúng ta đang học React JS";
// h1.className = 'heading_1';
// h1.onclick = () => alert('Hello World');

// document.getElementById('root').appendChild(h1);

const container = document.createElement("div");

const row_1 = document.createElement('div');
const label_number = document.createElement('label');
label_number.innerText = "Number";
const input_number = document.createElement('input');
input_number.type = 'number';
input_number.id = 'number';

row_1.appendChild(label_number);
row_1.appendChild(input_number);

const row_2= document.createElement('div');
const label_result = document.createElement('label');
label_result.innerText = "Result";
const input_result = document.createElement('input');
input_result.type = 'number';
input_result.id = 'result';
input_result.disabled = true;

row_2.appendChild(label_result);
row_2.appendChild(input_result);

const row_3= document.createElement('div');
const btn_power2 = document.createElement('button');
btn_power2.innerText = "Power 2";
btn_power2.onclick = () => {
    input_result.value = Number(input_number.value)**2;
}
row_3.appendChild(btn_power2);

container.appendChild(row_1);
container.appendChild(row_2);
container.appendChild(row_3);

document.getElementById('root').appendChild(container)