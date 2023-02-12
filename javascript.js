/*
// let display = 0;
// let A = 0;
// let B = null;

// When number is pressed, add to display

// When operator is pressed, save number 'A' (running total) and operator

// When next number (B) is entered after operator, hide A and show B (on first number, live change)

// Start: (display 0)
// 5 (display 5)
// + (save: A = display [5], operator = +) (if B = null, return A[5]?)
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



window.addEventListener("click", handleButtonClick);
window.addEventListener("keydown", handleKeyPress);

function handleButtonClick(event) {
    if (event.target.matches(".number")) {
        numberPress(event.target.value);
    }
}

function handleKeyPress(event) {
     const button = document.querySelector(`button[data-key="${event.keyCode}"]`);
    if (button && button.matches(".number")) {
        numberPress(button.value);
    }
}

function numberPress(value) {
    operatorEnable();
    console.log(value);
    console.log(operator);
    if ((displayText.charAt(0) == "0")) {
        displayText = displayText.slice(1);
        displayText += value;
        console.log("Display text: " + displayText);
        display.textContent = displayText;        
    }
    else if (b == 0) {
        b = null;
        displayText = "";
        displayText += value;
        console.log("Display text: " + displayText);
        display.textContent = displayText;
    }
    else if (operator == "=") {
        a = null;
        b = 0;
        operator = null;
        displayText = "";
        displayText += value;
        console.log("Display text: " + displayText);
        display.textContent = displayText;
    }
    else {
        displayText += value;
        console.log("Display text: " + displayText);
        display.textContent = displayText;
    }
}


/*

const numberButtons = document.querySelectorAll('.number');
for (const button of numberButtons) {
    button.addEventListener('click', numberPress);
    // button.addEventListener('keydown', );
};

*/


// let keyCode = document.querySelector(`button[data-key="48"`)
// console.log(keyCode);

/*

window.addEventListener('keydown', test());

function test(){
    console.log(event.keyCode);
}

*/

// const test = document.querySelector('#three');
// alert(test.keyCode);


/*

const numberButtons = document.querySelectorAll('.number');
for (const button of numberButtons) {
    button.addEventListener('click', numberPress);
    button.addEventListener('keydown', function(e) {
        let keyCode = document.querySelector(`button[data-key="${e.keyCode}"]`);
        if (keyCode === e.keyCode) {
            numberPress();
        }
    });
};

*/


/*
function keyPress(){
    const allButtons = document.querySelectorAll('.number, .operator, .function');
    for (const button of allButtons) {
        if (this.keyCode = event.keyCode){
            // console.log(this.keyCode);
            console.log(event.keyCode);
            
        }
    }
};
*/

// function keyLog(){
//     console.log(event);
// }

// window.addEventListener('keydown', keyPress);
// window.addEventListener('keydown', keyLog);

/*

function numberPress(){
    operatorEnable();

    console.log(this.value);
    console.log(operator);
    if ((displayText.charAt(0) == '0')) {
        displayText = displayText.slice(1);
        displayText += this.value;
        console.log('Display text: ' + displayText);
        display.textContent = displayText;        
    }
    else if (b == 0){ // operator just pressed
        b = null;
        displayText = '';
        displayText += this.value;
        console.log('Display text: ' + displayText);
        display.textContent = displayText;
    }
    else if (operator == '='){
        a = null;
        b = 0;
        operator = null;
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

*/

const operatorButtons = document.querySelectorAll('.operator');
for (const button of operatorButtons) {
    button.addEventListener('click', operatorPress);
};

function operatorPress(){
    operatorEnable();
    let id = this.id;
    console.log(id);
    if (a == null && operator == null) {
    document.querySelector('#' + id).disabled = true;
    a = displayText;
    b = 0;
    operator = this.value;
    console.log('A: ' + a);
    console.log('Operator: ' + operator);
    }
    else if (this.value == '='){
        b = displayText;
        a = operate(a, operator, b);
        displayText = a.toString();
        display.textContent = displayText;
        a = null;
        b = null;
        operator = null;
        document.querySelector('#' + id).disabled = true;
        console.log('B: ' + b);
        console.log('A: ' + a);
        console.log('Operator: ' + operator);
    }
    else {
        b = displayText;
        a = operate(a, operator, b);
        console.log(a);
        displayText = a.toString();
        display.textContent = displayText;
        operator = this.value;
        b = 0;
        document.querySelector('#' + id).disabled = true;
        console.log('B: ' + b);
        console.log('A: ' + a);
        console.log('Operator: ' + operator);
    }
};

function operatorEnable(){
    for (const button of operatorButtons) {
        button.removeAttribute('disabled');
    };
}

const display = document.querySelector('#display');
display.textContent = displayText;







const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);


function clear(){
    operatorEnable();
    displayText = '0';
    display.textContent = displayText;
    a = 0;
    b = null;
}

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', deleteChar);

function deleteChar() {
    operatorEnable();
    displayText = displayText.slice(0, -1);
    display.textContent = displayText;
    console.log(displayText.length)
    if (displayText.length == 0){
        displayText += 0;
        display.textContent = displayText;
}
};




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



