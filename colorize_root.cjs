const fs = require('fs');
const path = require('path');

function replaceColors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = content.replace(/#4b7d9b/g, '#ff8a3d');
  content = content.replace(/#1b2f3d/g, '#2a1309');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + filePath);
  }
}

fs.readdirSync('.').forEach(file => {
  if (file.endsWith('.tsx') && fs.statSync(file).isFile()) {
    replaceColors(file);
  }
});
