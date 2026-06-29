const fs = require('fs');
let txt = fs.readFileSync('pages/kurumsal/+Page.tsx', 'utf8');
const lines = txt.split('\n');
const start = lines.findIndex(l => l.includes('<div className="max-w-6xl mx-auto">'));
const end = lines.findIndex(l => l.includes('{/* Kurucumuz Section */}'));
if (start > -1 && end > -1) {
  let toReplace = lines.slice(start, end - 2).join('\n');
  const replaceStr = `          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 leading-tight mb-6">
              <LocaleText>KARTAL GROUP</LocaleText>
            </h3>
            <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
              <p>
                <LocaleText>Kartal Group, 1945 yılında metal şekillendirme sektörü ile başladığı ticaret hayatındaki yolculuğuna farklı sektörlerdeki yatırımları ile büyüyerek devam etmiştir. Grup bünyesinde; makine, metal, enerji, mühendislik ve akademi sektöründe yer alan firma ve markalar yer almaktadır.</LocaleText>
              </p>
            </div>
          </div>
        </div>`;
  txt = txt.replace(toReplace, replaceStr);
  fs.writeFileSync('pages/kurumsal/+Page.tsx', txt);
  console.log('REPLACED');
} else {console.log('NOT FOUND');}
