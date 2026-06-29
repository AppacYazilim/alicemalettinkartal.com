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

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceColors(fullPath);
    }
  });
}

walk('./pages');
walk('./components');
