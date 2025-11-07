

let display = document.getElementById('display');
const zero=document.getElementById("zero");
const equalb=document.getElementById("equal");

function clearDisplay() {
  display.value = '';
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function appendNumber(num) {
  display.value += num;
}

function appendOperator(operator) {
  display.value += operator;
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
zero.style.width='200%';
equalb.style.height='210%'
