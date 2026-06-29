const fs = require('fs');
let content = fs.readFileSync('pages/iletisim/+Page.tsx', 'utf8');

const oldAddressText = `                  Dilovası O.S.B 4. Kısım
                  <br />
                  Ceyhan Caddesi No.25
                  <br />
                  Gebze/KOCAELİ - TURKEY`;

const newAddressText = `                  DOSB 4. KISIM, Ceyhan Cd NO:25
                  <br />
                  41400 Gebze/Kocaeli, Türkiye`;

content = content.replace(oldAddressText, newAddressText);

const newSrc = 'https://maps.google.com/maps?q=DOSB%204.%20KISIM%2C%20Ceyhan%20Cd%20NO%3A25%2C%2041400%20Gebze%2FKocaeli%2C%20T%C3%BCrkiye&t=&z=14&ie=UTF8&iwloc=&output=embed';

content = content.replace(
  /src="https:\/\/maps\.google\.com\/maps\?q=[^"]+"/g,
  `src="${newSrc}"`
);

fs.writeFileSync('pages/iletisim/+Page.tsx', content);
