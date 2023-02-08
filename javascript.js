////////// Populate the display when buttons pressed

const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');
for (const button of numberButtons) {
    button.addEventListener('click', addToDisplay);
};

const operatorButtons = document.querySelectorAll('.operator');
for (const button of operatorButtons) {
    button.addEventListener('click', addToDisplay);
};


const displayArray = [50, '*', 4];
const displayText = displayArray.join('');

const displayTextDiv = document.createElement('div');
displayTextDiv.classList.add('display-text-div');
displayTextDiv.textContent = displayText;
display.appendChild(displayTextDiv);


function addToDisplay (value) {
    
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

const operate = function(a, b, operator) {
  switch (operator) {
    case '+':
        return add(a, b);
    case '-':
        return subtract(a, b);
    case '*':
        return multiply(a, b);
    case '/':
    return divide(a, b);

}
};


console.log(operate(10, '*', 5 ));

*/


/*

const operate = function(a, b, operator) {
    switch (operator) {
      case '+':
          return add(a, b);
      case '-':
          return subtract(a, b);
      case '*':
          return multiply(a, b);
      case '/':
          return divide(a, b);
      default:
          return 'Operator not recognized';
    }
  };
  
  console.log(operate(10, '*', 5 )); // 50
  
*/




