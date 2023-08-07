const fs = require('fs');

fs.readFile('index.html', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading HTML file:', error);
    return;
  }

  console.log('HTML file content:');
  console.log(data);
});
