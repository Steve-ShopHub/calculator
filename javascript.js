////////// Populate the display when buttons pressed

const numberButtons = document.querySelectorAll('.number');
for (const button of numberButtons) {
    button.addEventListener('click', addToDisplay);
};


const operatorButtons = document.querySelectorAll('.operator');
for (const button of operatorButtons) {
    button.addEventListener('click', addToDisplay);
    button.addEventListener('click', saveNumber);
};

let displayText = '';




let testString = '123/456';

let a = null;
let b = null;
let operator = null;

console.log(a);
console.log(b);
console.log(operator);


function saveNumber() {
    if (a === null) {
        a = displayText.slice(0, displayText.indexOf(this.value));
        console.log(a);        
    }
    else {
        b = displayText.slice(a.length + 1);
        operator = displayText.slice((a.length), (a.length + 1));
    console.log(b);
    console.log(operator);
    console.log(operate(a, operator, b));

    }
}



/*

function saveNumber() {
    if (!((displayText).includes('*' || '/' || '+' || '/'))) {
        let a = displayText.slice(0);
        console.log(a);
        return a;
    } else if ((displayText).includes('*' || '/' || '+' || '/')) {{
        let b = displayText.substring(
            displayText.indexOf('*') +1,
            displayText.lastIndexOf(-1)
            );
            console.log(b);
            return b;
    }}
    
};

*/



function addToDisplay() {
    displayText += this.value;    
    const display = document.querySelector('#display');
    display.textContent = displayText;
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);


function clear(){
    displayText = '';
    display.textContent = displayText;
    a = null;
    b = null;
}

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', deleteChar);

function deleteChar() {
    displayText = displayText.slice(0, -1);
    display.textContent = displayText;
}


/////////// Calculation functions

const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
  let result = a - b;
  return result;
};

const multiply = function(a, b) {
    let result = a * b;
    return result;
  };

const divide = function(a, b) {
    let result = a / b;
    return result;
  };

const power = function(a, b) {
  let result = a ** b;
  return result;
};

const factorial = function(num) {
  let factorialN = 1;
  for (i = 1; i <= num; i++) {
    factorialN *= i;
  } return factorialN;
};


const operate = function(a, operator, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operator == '+') {
        return add(a, b);
    } else if (operator =='-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    }
}





/*

const buttonZero = document.querySelector('#zero');
const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');
const buttonThree = document.querySelector('#three');
const buttonFour = document.querySelector('#four');
const buttonFive = document.querySelector('#five');
const buttonSix = document.querySelector('#six');
const buttonSeven = document.querySelector('#seven');
const buttonEight = document.querySelector('#eight');
const buttonNine = document.querySelector('#nine');
const buttonDecimal = document.querySelector('#ten');
const buttonPlus = document.querySelector('#plus');
const buttonSubtract = document.querySelector('#subtract');
const buttonMultiply = document.querySelector('#multiply');
const buttonDivide = document.querySelector('#divide');
const buttonEquals = document.querySelector('#equals');
const buttonDelete = document.querySelector('#delete');
const buttonClear = document.querySelector('#clear');

*/