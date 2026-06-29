const fs = require('fs');
const content = `import { LocaleText } from "../renderer/LocaleText";
import { Link } from "./Link";

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#4a240f_0%,#2b1409_100%)] text-white pt-12 pb-6 mt-12 overflow-hidden relative">
      {/* İnce modern dokunuş - Arkaplan Parıltısı */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff8a3d]/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
          
          {/* Hızlı İletişim */}
          <div>
            <h3 className="mb-6 text-xl font-bold border-b-2 border-[#ff8a3d] inline-block pb-1 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffb077] after:transition-all after:duration-500">
              <LocaleText>Hızlı İletişim</LocaleText>
            </h3>
            <div className="flex flex-col gap-5 mt-2">
              <a href="tel:+902627249292" className="group flex items-center gap-4 transition-all duration-500 hover:translate-x-2">
                <span className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-[#ff8a3d]/10 text-[#ff8a3d] transition-all duration-500 overflow-hidden group-hover:shadow-[0_0_20px_rgba(255,138,61,0.4)] group-hover:scale-110">
                  <span className="absolute inset-0 bg-[#ff8a3d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                  <svg className="relative z-10 group-hover:text-white transition-colors duration-500" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.73 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.36 2.01.6 3.06.73A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-white/50 tracking-widest transition-colors duration-500 group-hover:text-[#ff8a3d]">GENLEŞME TANKI</div>
                  <div className="font-bold text-lg text-white/90 group-hover:text-white transition-colors duration-500">+90 262 724 92 92</div>
                </div>
              </a>
              <a href="mailto:info@kartalimalat.com.tr" className="group flex items-center gap-4 transition-all duration-500 hover:translate-x-2">
                <span className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-[#ff8a3d]/10 text-[#ff8a3d] transition-all duration-500 overflow-hidden group-hover:shadow-[0_0_20px_rgba(255,138,61,0.4)] group-hover:scale-110">
                  <span className="absolute inset-0 bg-[#ff8a3d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                  <svg className="relative z-10 group-hover:text-white transition-colors duration-500" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-white/50 tracking-widest transition-colors duration-500 group-hover:text-[#ff8a3d]">E-POSTA</div>
                  <div className="font-medium text-white/90 group-hover:text-white transition-colors duration-500">info@kartalimalat.com.tr</div>
                </div>
              </a>
            </div>
          </div>

          {/* Menü */}
          <div>
            <h3 className="mb-6 text-xl font-bold border-b-2 border-[#ff8a3d] inline-block pb-1 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffb077] after:transition-all after:duration-500">
              <LocaleText>Menü</LocaleText>
            </h3>
            <ul className="mt-2 space-y-4">
              {['Ana Sayfa', 'Kurumsal', 'İletişim'].map((item, idx) => (
                <li key={item} className="group">
                  <Link href={item === 'Ana Sayfa' ? '/' : \`/\${item.toLowerCase().replace('i', 'i').replace('ş', 's').replace('ç', 'c')}\`} className="inline-flex items-center gap-3 text-gray-300 transition-all duration-300 relative group-hover:text-[#ff8a3d] group-hover:translate-x-3">
                    <span className="flex items-center justify-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-500 ease-out text-[#ff8a3d]">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                    <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 group-hover:after:w-full after:bg-[#ff8a3d] after:transition-all after:duration-500 ease-in-out">
                      <LocaleText>{item}</LocaleText>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hakkımızda */}
          <div>
            <h3 className="mb-6 text-xl font-bold border-b-2 border-[#ff8a3d] inline-block pb-1 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffb077] after:transition-all after:duration-500">
              <LocaleText>Hakkımızda</LocaleText>
            </h3>
            <ul className="mt-2 space-y-4">
              {[
                { label: 'Sertifikalarımız', path: '/sertifikalar' },
                { label: 'Ekibimiz', path: '/ekibimiz' },
                { label: 'Tanıtım Videosu', path: '/tanitim-videosu' }
              ].map((item) => (
                <li key={item.label} className="group">
                  <Link href={item.path} className="inline-flex items-center gap-3 text-gray-300 transition-all duration-300 relative group-hover:text-[#ff8a3d] group-hover:translate-x-3">
                    <span className="flex items-center justify-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-500 ease-out text-[#ff8a3d]">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                    <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 group-hover:after:w-full after:bg-[#ff8a3d] after:transition-all after:duration-500 ease-in-out">
                      <LocaleText>{item.label}</LocaleText>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-[#ff8a3d]/20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#ff8a3d]/60 to-transparent shadow-[0_0_15px_rgba(255,138,61,0.5)]"></div>
        <div className="container mx-auto px-4 pt-6 text-center text-white/50 text-sm tracking-wide">
          © Copyright {new Date().getFullYear()} – <LocaleText>Tüm Hakları Saklıdır</LocaleText>
          <span className="mx-2 text-[#ff8a3d] animate-pulse">•</span>
          Kartal Bombe ve Basınçlı Kaplar A.Ş.
        </div>
      </div>
    </footer>
  );
}
`;
fs.writeFileSync('components/Footer.tsx', content);
