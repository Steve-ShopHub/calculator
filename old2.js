////////// Populate the display when buttons pressed

const numberButtons = document.querySelectorAll('.number');
for (const button of numberButtons) {
    button.addEventListener('click', addToDisplay);
    button.addEventListener('click', refreshDisplay);
};

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', equals);

function equals(){
  ///
}


const operatorButtons = document.querySelectorAll('.operator');
for (const button of operatorButtons) {
    // button.addEventListener('click', addToDisplay);
    button.addEventListener('click', saveNumber);
    button.addEventListener('click', logEvent);
};




function logEvent(){
  console.log(this.value);
}

let displayText = '';




let testString = '123/456';

let x = null;
let y = null;
let a = null;
let b = null;
let operator = null;

console.log(x);
console.log(y);
console.log(operator);

/* CONVERT BELOW TO AN ARRAY TO ENABLE MULTIPLE NUMBERS */


function saveNumber() {
    if (x === null) {
        x = displayText.slice(0, displayText.indexOf(this.value));
        operator = displayText.slice(-1);
        console.log(x);
        console.log('X1:' + x);
        console.log('Y1: ' + y);
        console.log('Operator1: ' + operator );        
    }
    else if (x !== null && y === null) {
        y = displayText.slice(x.length + 1, -1);
        let a = operate(x, operator, y);
        x == a;
        operator = displayText.slice((x.length), (x.length + 1));
        displayText = x;
        console.log('X2:' + x);
        console.log('Y2: ' + y);
        console.log('Operator2: ' + operator );
        console.log(operate(x, operator, y));
    } else if (x !== null && y !== null) {
     console.log('Operate: ' + operate(x, operator, y));
     let result = operate(x, operator, y);
     x = result;
     y = null;
     operator = null;
    console.log('X3:' + x);
    console.log('Y3: ' + y);
    console.log('Operator3: ' + operator );
    }
};

function addToDisplay() {
    displayText += this.value;    
    const display = document.querySelector('#display');
    display.textContent = displayText;
}

function refreshDisplay(){
  //when number is pressed after operator, show sum number to date
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