// Reading file synchronously using readFileSync() method

const fs = require('fs');

try {
  // Read a file synchronously
  const data = fs.readFileSync('sample.txt', 'utf8');

  console.log('File contents:', data);

  // Perform some other synchronous operations
  for (let i = 0; i < 5; i++) {
    console.log('Synchronous operation', i);
  }

  console.log('All synchronous operations completed.');
} catch (err) {
  console.error('Error:', err.message);
}
