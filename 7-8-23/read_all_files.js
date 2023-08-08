const fs = require('fs').promises;

async function readFilesAsync() {
  try {
    const textData = await fs.readFile('node1.txt', 'utf8');
    console.log('Text file content:');
    console.log(textData,"\n");

    const htmlData = await fs.readFile('index.html', 'utf8');
    console.log('HTML file content:');
    console.log(htmlData,"\n");

    const jsonData = await fs.readFile('users1.json', 'utf8');
    const parsedJson = JSON.parse(jsonData);
    console.log('JSON file content:');
    console.log(parsedJson,"\n");
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

readFilesAsync();
