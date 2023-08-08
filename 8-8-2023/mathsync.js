//simple calculator -- Asynchronous
// install readline-sync   :: npm install readline-sync


const readlineSync = require('readline-sync');

function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  return a / b;
}

const num1Input = readlineSync.question('Enter the first integer: ');
const num1 = parseInt(num1Input);

const num2Input = readlineSync.question('Enter the second integer: ');
const num2 = parseInt(num2Input);

const operation = readlineSync.question('Choose an operation by entering the letter inside bracket: \n(a)dd \n(s)ubtract \n(m)ultiply \n(d)ivide: ');

let result;

switch (operation) {
  case 'a':
    result = addNumbers(num1, num2);
    break;
  case 's':
    result = subtractNumbers(num1, num2);
    break;
  case 'm':
    result = multiplyNumbers(num1, num2);
    break;
  case 'd':
    result = divideNumbers(num1, num2);
    break;
  default:
    console.log('Invalid operation');
    process.exit(1);
}

console.log(`Given numbers are: ${num1} and ${num2}`);
console.log(`Result: ${result}`);
