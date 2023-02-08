const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
  let result = a - b;
  return result;
};

// const sum = function(arr) {
// 	let result = arr.reduce((a, b) => a + b, 0);
//   return result;
// };

// const multiply = function(a, b) {
//   let result = arr.reduce((a, b) => a * b);
//   return result;
// };

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

console.log(operate(10, '/', 5 ));


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




