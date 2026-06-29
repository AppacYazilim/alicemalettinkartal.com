import { useState, useRef, useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";
import kbsLogo from "../assets/logo-upload/kbslogo.svg";
import kartalimLogo from "../assets/logo-upload/kartalim.svg";
import eagleLogo from "../assets/logo-upload/eagle.svg";
import { LocaleText } from "../renderer/LocaleText";
import { Link } from "./Link";

const homePaths = ["/", "/en", "/ru", "/en/", "/ru/"];

export function Header() {
  const pageContext = usePageContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isHomePage = homePaths.includes(pageContext.urlPathname);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Locale switcher helpers
  const currentPath = pageContext.urlPathname || "/";
  const localesList = ["tr", "en", "ru"];
  const defaultLocale = "tr";

  function buildLocalePath(lang: string) {
    const parts = currentPath.split("/").filter(Boolean);
    if (localesList.includes(parts[0])) parts.shift();
    const path = "/" + parts.join("/");
    if (path === "/") return lang === defaultLocale ? "/" : `/${lang}`;
    return lang === defaultLocale ? path : `/${lang}${path}`;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:h-28 md:px-10 lg:px-16" ref={dropdownRef}>
        <div className="flex-1 flex items-center justify-end gap-6 md:gap-10 lg:gap-16">
          {!isHomePage && (
            <Link
              href="/"
              className="text-white/80 transition-all duration-300 hover:text-white hover:scale-110 active:scale-95 flex items-center justify-center p-2 rounded-full hover:bg-white/10"
              aria-label="Ana Sayfa"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </Link>
          )}
          <Link
            href="/kurumsal"
            className="text-xs font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-white md:text-lg"
          >
            <LocaleText>Hakkımızda</LocaleText>
          </Link>
          <Link
            href="/urunler"
            className="text-xs font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-white md:text-lg"
          >
            <LocaleText>Faaliyetler</LocaleText>
          </Link>
        </div>

        <div className="relative flex justify-center px-5 md:px-10">
          <button
            type="button"
            className="flex items-center justify-center relative cursor-pointer outline-none transition-opacity duration-300 hover:opacity-80 active:scale-95"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src={kbsLogo} alt="KBS Logo" className="h-12 w-auto md:h-18" />
          </button>

          {/* Animasyonlu Açılır Menü (Dropdown) */}
          <div 
            className={`absolute top-full mt-6 left-1/2 -translate-x-1/2 w-max bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-3 transition-all duration-400 ease-out origin-top ${
              isDropdownOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-4 invisible pointer-events-none"
            }`}
          >
            <div className="flex flex-row gap-2">
              <a 
                href="https://kartalimalat.com.tr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center px-6 py-4 rounded-xl hover:bg-white/10 transition-colors group"
                onClick={() => setIsDropdownOpen(false)}
              >
                <div className="flex flex-col items-center text-center">
                  <img src={kartalimLogo} alt="Kartal İmalat Logo" className="h-6 w-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#5c84a2]">Kartal İmalat Mühendislik</span>
                  <span className="text-xs text-white/50 mt-1">kartalimalat.com.tr</span>
                </div>
              </a>
              <div className="w-px bg-white/10 my-2"></div>
              <a 
                href="https://kartalbombe.com.tr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center px-6 py-4 rounded-xl hover:bg-white/10 transition-colors group"
                onClick={() => setIsDropdownOpen(false)}
              >
                <div className="flex flex-col items-center text-center">
                  <img src={kbsLogo} alt="KBS Logo" className="h-6 w-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#ff4713]">Kartal Bombe</span>
                  <span className="text-xs text-white/50 mt-1">kartalbombe.com.tr</span>
                </div>
              </a>
              <div className="w-px bg-white/10 my-2"></div>
              <a 
                href="https://eagle.com.tr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center px-6 py-4 rounded-xl hover:bg-white/10 transition-colors group"
                onClick={() => setIsDropdownOpen(false)}
              >
                <div className="flex flex-col items-center text-center">
                  <img src={eagleLogo} alt="Eagle Logo" className="h-6 w-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#e4192f]">Eagle Expansion Vessels</span>
                  <span className="text-xs text-white/50 mt-1">eagle.com.tr</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-start gap-6 md:gap-10 lg:gap-16">
          <Link
            href="/gundem"
            className="text-xs font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-white md:text-lg"
          >
            <LocaleText>Haberler</LocaleText>
          </Link>
          <Link
            href="/iletisim"
            className="text-xs font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-white md:text-lg"
          >
            <LocaleText>İletişim</LocaleText>
          </Link>
          <div className="ml-2 flex items-center gap-2">
            {localesList.map((l) => (
              <a
                key={l}
                href={buildLocalePath(l)}
                className={`px-2 py-1 rounded-md text-sm font-semibold ${pageContext.locale === l ? "bg-white/10 text-white" : "text-white/70 hover:text-white"}`}
                aria-label={`Switch to ${l}`}
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}