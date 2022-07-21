const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#makeitLast');
const input2 = document.querySelector('#reloadTask');
const btn = document.querySelector('#doCalculate');
const preResult = document.querySelector('#endPint');

btn.addEventListener('click', addInputValues)

function addInputValues(event) {
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);
  const addInputs = num1 + num2;
  preResult.innerText = "Sum: " + addInputs;
}