const fs = require('fs');
let txt = fs.readFileSync('pages/kurumsal/+Page.tsx', 'utf8');

const s1 = `      {/* Misyonumuz Section */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ff8a3d] tracking-wide">
              <LocaleText>MİSYONUMUZ</LocaleText>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 order-2 lg:order-1">
                <p className="text-white/70 text-sm md:text-base">
                  <LocaleText>kurumsal.mission</LocaleText>
                </p>`;

const s2 = `      {/* Misyon ve Vizyon Section */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#ff8a3d] mb-4">
                    <LocaleText>MİSYONUMUZ</LocaleText>
                  </h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    <LocaleText>kurumsal.mission</LocaleText>
                  </p>
                </div>`;

if (txt.includes(s1)) {
    txt = txt.replace(s1, s2);
    fs.writeFileSync('pages/kurumsal/+Page.tsx', txt);
    console.log('REPLACED');
} else {
    console.log('NOT FOUND');
}
