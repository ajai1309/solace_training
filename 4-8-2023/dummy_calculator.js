const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function performOperation(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      //if (num2 !== 0) {
        return num1 / num2;
      /*} else {
        return 'Cannot divide by zero!';
      }*/
    default:
      return 'Invalid operator';
  }
}

function startCalculator() {
  rl.question("Enter an operation (e.g., 10 + 5): ", function(operation) {
    if (operation.toLowerCase() === 'exit') {
      rl.close();
      return;
    }
    
    const [num1, operator, num2] = operation.split(' ');
    
    const result = performOperation(num1, operator, num2);
    console.log('Result:', result);
    
    startCalculator();
  });
}

console.log("Calculator - Operations: Addition (+), Subtraction (-), Division (/)");
console.log("Type 'exit' to quit.\n");

startCalculator();
