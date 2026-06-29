const fs = require('fs');
let txt = fs.readFileSync('pages/kurumsal/+Page.tsx', 'utf8');

const s2 = `      {/* Misyon ve Vizyon Section */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Misyonumuz */}
              <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#ff8a3d] mb-4 tracking-wide">
                    <LocaleText>MİSYONUMUZ</LocaleText>
                  </h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    <LocaleText>kurumsal.mission</LocaleText>
                  </p>
              </div>

              {/* Vizyon & Hedefimiz */}
              <div className="grid md:grid-cols-2 gap-8 pt-6">
                <div className="bg-black/20 p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:border-[#ff8a3d]/30 hover:bg-black/30">
                  <h3 className="text-[#ff8a3d] font-bold text-xl md:text-2xl mb-4 text-center">
                    <LocaleText>VİZYON</LocaleText>
                  </h3>
                  <p className="text-white/70 text-sm md:text-base text-center leading-relaxed">
                    <LocaleText>kurumsal.vision</LocaleText>
                  </p>
                </div>

                <div className="bg-black/20 p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:border-[#ff8a3d]/30 hover:bg-black/30">
                  <h3 className="text-[#ff8a3d] font-bold text-xl md:text-2xl mb-4 text-center">
                    <LocaleText>HEDEFİMİZ</LocaleText>
                  </h3>
                  <p className="text-white/70 text-sm md:text-base text-center leading-relaxed">
                    <LocaleText>kurumsal.goal</LocaleText>
                  </p>
                </div>
              </div>

              {/* Değerlerimiz */}
              <div className="pt-8">
                  <h3 className="text-[#ff8a3d] font-bold text-2xl md:text-3xl text-center mb-8 tracking-wide">
                    <LocaleText>DEĞERLERİMİZ</LocaleText>
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-2xl border border-white/5">
                      <div className="w-12 h-12 mx-auto bg-[#ff8a3d]/10 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-[#ff8a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-white/90 font-bold text-lg mb-3">
                        <LocaleText>LİDERLİK</LocaleText>
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        <LocaleText>kurumsal.leadership</LocaleText>
                      </p>
                    </div>

                    <div className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-2xl border border-white/5">
                      <div className="w-12 h-12 mx-auto bg-[#ff8a3d]/10 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-[#ff8a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h4 className="text-white/90 font-bold text-lg mb-3">
                        <LocaleText>KALİTE VE PERFORMANS</LocaleText>
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        <LocaleText>kurumsal.quality</LocaleText>
                      </p>
                    </div>

                    <div className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-2xl border border-white/5">
                      <div className="w-12 h-12 mx-auto bg-[#ff8a3d]/10 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-[#ff8a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <h4 className="text-white/90 font-bold text-lg mb-3">
                        <LocaleText>GELİŞİM, DEĞİŞİM</LocaleText>
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        <LocaleText>kurumsal.development</LocaleText>
                      </p>
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </section>`;

if (txt.includes("alt=\"Misyonumuz\"")) {
    const startIndex = txt.indexOf("      {/* Misyon ve Vizyon Section */}");
    const endIndex = txt.indexOf("      {/* Basın Kiti Section */}");
    if (startIndex !== -1 && endIndex !== -1) {
        txt = txt.substring(0, startIndex) + s2 + "\n\n" + txt.substring(endIndex);
        
        // Also remove the import for misyonImage to avoid unused import errors
        txt = txt.replace(/import misyonImage from ['"].*?['"];?\n?/, "");
        
        fs.writeFileSync('pages/kurumsal/+Page.tsx', txt);
        console.log('REPLACED');
    } else {
        console.log('NOT FOUND BOUNDARIES');
    }
} else {
    console.log('NOT FOUND ALT MİSYONUMUZ');
}