const readlineSync = require('readline-sync');

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function main() {
  const num = parseInt(readlineSync.question('Enter a number to calculate its factorial: '));

  if (isNaN(num) || num < 0) {
    console.log('Invalid input. Please enter a non-negative integer.');
    return;
  }

  const result = factorial(num);

  console.log(`Factorial of ${num} is: ${result}`);
}

main();
