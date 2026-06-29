const fs = require('fs');
const file = 'pages/iletisim/+Page.tsx';
let content = fs.readFileSync(file, 'utf8');

const newSrc = 'https://maps.google.com/maps?q=Dilovas%C4%B1%20O.S.B%204.%20K%C4%B1s%C4%B1m%20Ceyhan%20Caddesi%20No.25%20Gebze%2FKOCAEL%C4%B0&t=&z=14&ie=UTF8&iwloc=&output=embed';

content = content.replace(
  /src="https:\/\/www\.google\.com\/maps\/embed\?pb[^"]+"/s,
  `src="${newSrc}"`
);

fs.writeFileSync(file, content);
