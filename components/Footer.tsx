import { LocaleText } from "../renderer/LocaleText";
import { Link } from "./Link";

export function Footer() {
  return (
    <footer className="bg-[#0d0907] text-white pt-14 pb-6 mt-12 overflow-hidden relative border-t border-white/[0.06]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ff4713]/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">

          {/* Hızlı İletişim */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff4713]">
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
                  <div className="text-xs text-white/50 tracking-widest transition-colors duration-500 group-hover:text-[#e8622a]"><LocaleText>Telefon</LocaleText></div>
                  <div className="font-bold text-lg text-white/90 group-hover:text-white transition-colors duration-500">+90 262 724 92 92</div>
                </div>
              </a>
              <a href="mailto:info@kartalgrup.com.tr" className="group flex items-center gap-4 transition-all duration-500 hover:translate-x-2">
                <span className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-[#ff8a3d]/10 text-[#ff8a3d] transition-all duration-500 overflow-hidden group-hover:shadow-[0_0_20px_rgba(255,138,61,0.4)] group-hover:scale-110">
                  <span className="absolute inset-0 bg-[#ff8a3d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                  <svg className="relative z-10 group-hover:text-white transition-colors duration-500" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-white/50 tracking-widest transition-colors duration-500 group-hover:text-[#e8622a]">E-POSTA</div>
                  <div className="font-medium text-white/90 group-hover:text-white transition-colors duration-500">info@kartalgrup.com.tr</div>
                </div>
              </a>
            </div>
          </div>

          {/* Menü */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff4713]">
              <LocaleText>Menü</LocaleText>
            </h3>
            <ul className="mt-2 space-y-3">
              {['Ana Sayfa', 'Kurumsal', 'İletişim'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Ana Sayfa' ? '/' : `/${item.toLowerCase().replace('i', 'i').replace('ş', 's').replace('ç', 'c')}`} className="text-white/50 transition-colors duration-200 hover:text-white text-sm">
                    <LocaleText>{item}</LocaleText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hakkımızda */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff4713]">
              <LocaleText>Hakkımızda</LocaleText>
            </h3>
            <ul className="mt-2 space-y-3">
              {[
                { label: 'Sertifikalarımız', path: '/sertifikalar' },
                { label: 'Ekibimiz', path: '/ekibimiz' },
                { label: 'Tanıtım Videosu', path: '/tanitim-videosu' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className="text-white/50 transition-colors duration-200 hover:text-white text-sm">
                    <LocaleText>{item.label}</LocaleText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/[0.06]">
        <div className="container mx-auto px-4 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/35 text-xs">
          <span>© {new Date().getFullYear()} Kartal Bombe ve Basınçlı Kaplar A.Ş.</span>
          <span><LocaleText>Tüm Hakları Saklıdır</LocaleText></span>
        </div>
      </div>
    </footer>
  );
}
