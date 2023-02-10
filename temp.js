/*
// let display = 0;
// let A = 0;
// let B = null;

// When number is pressed, add to display

// When operator is pressed, save number 'A' (running total) and operator

// When next number (B) is entered after operator, hide A and show B (on first number, live change)

// Start: (display 0)
// 5 (display 5)
// + (save: A = 5, operator = +) (if B = null, return A[5]?)
// 1 (display = 1)
// 5 (display = 15)
// * (save B = display [15], A = operate(A, operator, B) 
//                        display = A [20], operator = *)
// 1 (display = 1)
// 0 (display = 10)
// = (save B = display[10], A = operate(A, operator, B) 
//                        display = A [20], operator = =)

*/

let displayText = '0';
let a = null; //changed from 0
let b = null;
let operator = null;

const numberButtons = document.querySelectorAll('.number');
for (const button of numberButtons) {
    button.addEventListener('click', numberPress);
};

function numberPress(){
    console.log(this.value);
    if ((displayText.charAt(0) == '0')) {
        displayText = displayText.slice(1);
        displayText += this.value;
        console.log('Display text: ' + displayText);
        display.textContent = displayText;        
    }
// Need to remove old display upon number after operator
    if (b == 0){
        b = null;
        displayText = '';
        displayText += this.value;
        console.log('Display text: ' + displayText);
        display.textContent = displayText;

    }
    else {
    displayText += this.value;
    console.log('Display text: ' + displayText);
    display.textContent = displayText;
    }

}

const operatorButtons = document.querySelectorAll('.operator');
for (const button of operatorButtons) {
    button.addEventListener('click', operatorPress);
};

function operatorPress(){
    a = displayText;
    b = 0;
    operator = this.value;
    console.log('A: ' + a);
    console.log('Operator: ' + operator);
}

const display = document.querySelector('#display');
display.textContent = displayText;







const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);


function clear(){
    displayText = '0';
    display.textContent = displayText;
    a = 0;
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



// function checkInitial(){
//     if b
// }


// function (operator is pressed) {
//                     If b == null { //first 
//                          display a;    
//                     };                  
//                      
//                      
//                    If (operator !== 'equals'){ 
//                                              Result = Perform operate function (existing operator)
//                                              A = Result
//                                              Display A
//                    };
//                    If (operator == 'equals'){
//                                      4) Update to new operator
//                                      5) Display A
//                                      }
//                         };



