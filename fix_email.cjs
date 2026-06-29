const fs = require('fs');

let file = 'pages/iletisim/+Page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/info@kartalimalat\.com\.tr/g, 'info@kartalgrup.com.tr');

fs.writeFileSync(file, content);
