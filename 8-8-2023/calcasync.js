//simple calculator -- Asynchronous


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function percentageNumbers(a, b) {
  return (a / b)*100;
  
}

console.log('Incase of percentage calculation Enter number first integer and total in second integer');
rl.question('Enter the first integer: ', (num1Input) => {
  const num1 = parseInt(num1Input);

  rl.question('Enter the second integer: ', (num2Input) => {
    const num2 = parseInt(num2Input);

    rl.question('Choose an operation by entering the letter inside bracket: \n(a)dd \n(s)ubtract \n(m)ultiply \n(d)ivide \n(p)ercentage: ', (operation) => {
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
		case 'p':
          result = percentageNumbers(num1, num2);
          break;
        default:
          console.log('Invalid operation');
          rl.close();
          return;
      }

      if (operation=="p"){
		 console.log(`Result: ${result} %`);
	  }
	  else {
	  console.log(`Given numbers are: ${num1} and ${num2}`);
      console.log(`Result: ${result}`);}
      rl.close();
    });
  });
});
