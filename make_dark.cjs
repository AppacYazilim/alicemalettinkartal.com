const fs = require('fs');

function applyDark(file) {
  let content = fs.readFileSync(file, 'utf8');

  // Change main page wrapper bg if exists (often min-h-screen bg-...)
  content = content.replace(/className="min-h-screen bg-white"/g, 'className="min-h-screen bg-[linear-gradient(180deg,#050505_0%,#090909_10%,#120d0a_24%,#1c130e_40%,#2b180f_56%,#4a240f_72%,#5a260d_84%,#2b1409_94%,#160c07_100%)]"');
  content = content.replace(/className="min-h-screen bg-gray-50"/g, 'className="min-h-screen bg-[linear-gradient(180deg,#050505_0%,#090909_10%,#120d0a_24%,#1c130e_40%,#2b180f_56%,#4a240f_72%,#5a260d_84%,#2b1409_94%,#160c07_100%)]"');
  
  // Section backgrounds
  content = content.replace(/className="py-12 md:py-20 bg-white"/g, 'className="py-12 md:py-20 bg-transparent"');
  content = content.replace(/className="py-12 md:py-20 bg-gray-50"/g, 'className="py-12 md:py-20 bg-transparent"');
  content = content.replace(/className="py-16 md:py-24 bg-gray-50"/g, 'className="py-16 md:py-24 bg-transparent"');
  content = content.replace(/className="py-12 bg-white"/g, 'className="py-12 bg-transparent"');
  content = content.replace(/className="bg-white py-12 md:py-16"/g, 'className="bg-transparent py-12 md:py-16"');

  // Texts
  content = content.replace(/text-gray-[89]00/g, 'text-white/90');
  content = content.replace(/text-gray-700/g, 'text-white/80');
  content = content.replace(/text-gray-600/g, 'text-white/70');
  content = content.replace(/text-gray-500/g, 'text-white/60');
  content = content.replace(/text-gray-400/g, 'text-white/50');
  content = content.replace(/text-gray-100/g, 'text-white/10');
  content = content.replace(/text-black/g, 'text-white');
  
  // Clean up white cards in iletisim (Contact)
  content = content.replace(/group relative bg-white\/65 backdrop-blur-xl rounded-2xl shadow-lg p-8 text-center border border-white\/70/g, 
    'group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)] p-8 text-center');
    
  // Iletisim sweep
  content = content.replace(/from-white\/70 via-white\/20 to-\[#ff8a3d\]\/10/g, 'from-white/10 via-white/5 to-[#ff8a3d]/20');
  content = content.replace(/bg-white\/60 blur-2xl/g, 'bg-[#ff9d57]/30 blur-2xl');

  // Forms & Inputs & Dividers
  content = content.replace(/border-gray-300/g, 'border-white/10');
  content = content.replace(/border-gray-200/g, 'border-white/10');
  content = content.replace(/bg-gray-50/g, 'bg-white/5');
  content = content.replace(/bg-gray-200/g, 'bg-white/10');
  content = content.replace(/bg-white border border-gray-200/g, 'bg-white/5 border border-white/10 text-white placeholder-white/40');
  content = content.replace(/bg-white border border-white\/10/g, 'bg-white/5 border border-white/10 text-white placeholder-white/40');
  content = content.replace(/bg-white border-b/g, 'bg-white/5 border-b border-white/10');

  // General white cards -> dark glassmorphism
  content = content.replace(/bg-white rounded-2xl shadow-md p-8/g, 'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)] p-8');
  content = content.replace(/bg-white rounded-\[28px\] shadow-sm/g, 'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)]');
  content = content.replace(/bg-white rounded-2xl shadow-md/g, 'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)]');
  content = content.replace(/bg-white rounded-3xl shadow-sm border border-white\/10/g, 'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)]');
  content = content.replace(/bg-white rounded-2xl shadow border border-white\/10/g, 'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)]');
  content = content.replace(/bg-white rounded-2xl p-6/g, 'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] p-6');
  content = content.replace(/bg-white\/80 backdrop-blur-md/g, 'bg-white/5 backdrop-blur-md border border-white/10');
  content = content.replace(/bg-white shadow-lg/g, 'bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]');

  fs.writeFileSync(file, content);
}

const ObjectFiles = [
  'pages/iletisim/+Page.tsx',
  'pages/kurumsal/+Page.tsx',
  'pages/ekibimiz/+Page.tsx',
  'pages/endustriyel-cozumler/+Page.tsx',
  'pages/sertifikalar/+Page.tsx',
  'pages/tanitim-videosu/+Page.tsx'
];

ObjectFiles.forEach(p => {
  if(fs.existsSync(p)) {
    applyDark(p);
    console.log('Updated dark theme for ' + p);
  }
});
