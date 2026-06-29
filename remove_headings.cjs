const fs = require('fs');

let content = fs.readFileSync('pages/iletisim/+Page.tsx', 'utf8');

const regex1 = /<p className="text-sm text-\[#ff8a3d\] font-semibold uppercase tracking-wide mb-2">\s*<LocaleText>GENLEŞME TANKLARI<\/LocaleText>\s*<\/p>\s*/g;
const regex2 = /<p className="text-sm text-\[#ff8a3d\] font-semibold uppercase tracking-wide mb-2">\s*<LocaleText>BASINÇLI KAPLAR<\/LocaleText>\s*<\/p>\s*/g;

content = content.replace(regex1, '');
content = content.replace(regex2, '');

fs.writeFileSync('pages/iletisim/+Page.tsx', content);
