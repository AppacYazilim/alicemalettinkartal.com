const fs = require('fs');

let content = fs.readFileSync('new_fixed_header.tsx', 'utf8');
content = content.replace(/isHeaderHovered/g, 'true');
fs.writeFileSync('new_fixed_header.tsx', content);

let fullContent = fs.readFileSync('/Users/berk/Documents/GitHub/kartalimalat-site/components/Header.tsx', 'utf8');

const lines = fullContent.split('\n');
const prefix = lines.slice(0, 460); // up to <header> >
const suffix = lines.slice(682); // after </div>

const newLines = prefix.concat(content.split('\n')).concat(suffix);
fs.writeFileSync('Header_updated.tsx', newLines.join('\n'));
