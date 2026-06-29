const fs = require('fs');
let txt = fs.readFileSync('locales/translations.ts', 'utf8');

const t2 = `  "KARTAL GROUP": {
    tr: "KARTAL GROUP",
    en: "KARTAL GROUP",
    ru: "KARTAL GROUP",
  },
  "Kartal Group, 1945 yılında metal şekillendirme sektörü ile başladığı ticaret hayatındaki yolculuğuna farklı sektörlerdeki yatırımları ile büyüyerek devam etmiştir. Grup bünyesinde; makine, metal, enerji, mühendislik ve akademi sektöründe yer alan firma ve markalar yer almaktadır.": {
    tr: "Kartal Group, 1945 yılında metal şekillendirme sektörü ile başladığı ticaret hayatındaki yolculuğuna farklı sektörlerdeki yatırımları ile büyüyerek devam etmiştir. Grup bünyesinde; makine, metal, enerji, mühendislik ve akademi sektöründe yer alan firma ve markalar yer almaktadır.",
    en: "Kartal Group has continued its journey in commercial life, which started in 1945 with the metal shaping sector, by growing with its investments in different sectors. The group includes companies and brands operating in the machinery, metal, energy, engineering and academy sectors.",
    ru: "Kartal Group продолжает свой путь в коммерческой жизни, который начался в 1945 году с сектора металлообработки, развиваясь за счет инвестиций в различные отрасли. В состав группы входят компании и бренды, работающие в секторах машиностроения, металлургии, энергетики, инжиниринга и академии."
  },`;

txt = txt.replace('  "BASIN KİTİ": {', t2 + '\n  "BASIN KİTİ": {');
fs.writeFileSync('locales/translations.ts', txt);
