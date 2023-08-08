const fs = require('fs');

function readJsonFileAndOpen(filename) {
  try {
    const configFile = fs.readFileSync(filename, 'utf8');
    const config = JSON.parse(configFile);
    
    if (!config.filename) {
      console.log('Invalid configuration: "filename" key not found.');
      return;
    }

    const content = fs.readFileSync(config.filename, 'utf8');
    console.log(`Contents of ${config.filename}:\n\n${content}`);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

readJsonFileAndOpen('filename.json');
