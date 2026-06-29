const fs = require('fs');

function applyDarkTheme(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Background
  content = content.replace(
    '<section className="py-12 md:py-20 bg-gray-50">',
    '<section className="py-12 md:py-20 bg-[linear-gradient(180deg,#050505_0%,#090909_10%,#120d0a_24%,#1c130e_40%,#2b180f_56%,#4a240f_72%,#5a260d_84%,#2b1409_94%,#160c07_100%)]">'
  );
  content = content.replace( // pages that use bg-white for background sections
    '<section className="py-12 md:py-20 bg-white">',
    '<section className="py-12 md:py-20 bg-[linear-gradient(180deg,#050505_0%,#090909_10%,#120d0a_24%,#1c130e_40%,#2b180f_56%,#4a240f_72%,#5a260d_84%,#2b1409_94%,#160c07_100%)]">'
  );

  // General text inside these pages
  content = content.replace(/text-gray-800/g, 'text-white/90');
  content = content.replace(/text-gray-900/g, 'text-white');
  content = content.replace(/text-gray-600/g, 'text-white/70');
  content = content.replace(/text-gray-500/g, 'text-white/50');
  content = content.replace(/text-gray-400/g, 'text-white/40');
  
  // Specific border colors
  content = content.replace(/border-gray-100/g, 'border-white/10');
  
  // 1) Card class
  const class1 = 'className="group bg-white rounded-2xl shadow-sm border border-white/10 overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative"';
  const class1_2 = 'className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative"';
  const class1r = 'className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-white/16 hover:shadow-[0_22px_56px_rgba(0,0,0,0.42)]"';
  if (content.includes(class1)) content = content.split(class1).join(class1r);
  if (content.includes(class1_2)) content = content.split(class1_2).join(class1r);

  // 2) Image wrapper
  const class2 = 'className="aspect-[4/3] overflow-hidden bg-gray-200 relative pointer-events-none"';
  const class2r = 'className="aspect-[4/3] mb-0 overflow-hidden bg-[#1c100a] relative pointer-events-none"';
  content = content.split(class2).join(class2r);

  // 3) Image overlay gradient
  const class3 = 'className="absolute inset-0 bg-gradient-to-t from-white/90/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"';
  const class3_2 = 'className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"';
  const class3r = 'className="absolute inset-0 z-10 bg-gradient-to-t from-[#120804]/85 via-[#120804]/15 to-transparent"';
  if (content.includes(class3)) content = content.split(class3).join(class3r);
  if (content.includes(class3_2)) content = content.split(class3_2).join(class3r);

  // 4) Date badge
  const class4 = 'className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"';
  const class4r = 'className="absolute top-4 right-4 z-20 rounded-full border border-white/10 bg-[#2a1309]/88 px-4 py-1.5 shadow-lg backdrop-blur-sm transform -translate-y-2 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100"';
  content = content.split(class4).join(class4r);

  // 5) Date inner text
  const class5 = 'className="text-[#2a1309] text-sm font-bold tracking-tight"';
  const class5r = 'className="text-sm font-bold tracking-tight text-[#ffd0ab]"';
  content = content.split(class5).join(class5r);

  // 6) Content container
  const class6 = 'className="p-6 md:p-8 flex flex-col flex-1 bg-gradient-to-b from-white to-gray-50/80 z-10 relative"';
  const class6r = 'className="relative z-10 flex flex-1 flex-col bg-[linear-gradient(180deg,rgba(41,18,9,0.76)_0%,rgba(20,9,5,0.94)_100%)] p-6 md:p-8"';
  content = content.split(class6).join(class6r);

  // 7) Bottom date info
  const class7 = 'className="flex items-center text-white/40 text-sm mb-4 font-semibold group-hover:text-[#ff8a3d] transition-colors duration-300"';
  const class7r = 'className="mb-4 flex items-center text-sm font-semibold text-white/45 transition-colors duration-300 group-hover:text-[#ffb37a]"';
  content = content.split(class7).join(class7r);

  // 8) Title
  const class8 = 'className="text-xl md:text-2xl font-extrabold mb-4 text-white leading-tight group-hover:text-[#2a1309] transition-colors duration-300 line-clamp-3"';
  const class8r = 'className="mb-4 text-xl md:text-2xl font-extrabold leading-tight text-white transition-colors duration-300 line-clamp-3 group-hover:text-[#ffd6b4]"';
  content = content.split(class8).join(class8r);

  // 9) Description
  const class9 = 'className="text-white/70 mb-8 whitespace-pre-wrap flex-1 opacity-90 leading-relaxed line-clamp-4 group-hover:opacity-100 transition-opacity"';
  const class9_2 = 'className="text-white/70 mb-8 whitespace-pre-wrap flex-1 leading-relaxed line-clamp-4 transition-all duration-300"';
  const class9r = 'className="mb-8 flex-1 whitespace-pre-wrap text-white/66 opacity-90 leading-relaxed line-clamp-4 transition-opacity group-hover:opacity-100"';
  if (content.includes(class9)) content = content.split(class9).join(class9r);
  if (content.includes(class9_2)) content = content.split(class9_2).join(class9r);

  // 10) Button
  const class10 = 'className="mt-auto group/btn inline-flex items-center text-sm font-bold text-[#ff8a3d] uppercase tracking-widest hover:text-[#2a1309] transition-colors overflow-hidden"';
  const class10_2 = 'className="mt-6 group/btn inline-flex items-center text-sm font-bold text-[#ff8a3d] uppercase tracking-widest hover:text-[#2a1309] transition-colors overflow-hidden"';
  const class10r = 'className="group/btn mt-auto inline-flex items-center overflow-hidden text-sm font-bold uppercase tracking-widest text-[#ff9d57] transition-colors hover:text-[#ffd6b4]"';
  if (content.includes(class10)) content = content.split(class10).join(class10r);
  if (content.includes(class10_2)) content = content.split(class10_2).join(class10r);

  // 11) Button arrow wrapper
  const class11 = 'className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-[#ff8a3d]/10 group-hover/btn:bg-[#2a1309] group-hover/btn:text-white transition-all duration-300 transform group-hover/btn:translate-x-2"';
  const class11r = 'className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff9d57]/12 transition-all duration-300 transform group-hover/btn:translate-x-2 group-hover/btn:bg-[#ff9d57] group-hover/btn:text-[#1a0b05]"';
  content = content.split(class11).join(class11r);

  fs.writeFileSync(filePath, content, 'utf8');
}

const p = ['pages/gundem/+Page.tsx', 'pages/urunler/+Page.tsx'];

p.forEach(file => {
  if (fs.existsSync(file)) {
    applyDarkTheme(file);
    console.log('patched ' + file);
  }
});
