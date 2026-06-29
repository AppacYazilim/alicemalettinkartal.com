import { LocaleText } from "../renderer/LocaleText";
import * as React from "react";
import metalSanayiImage from "../assets/logo-upload/metal-sanayi-kure-detailed.png";

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  background: string;
  Icon: () => JSX.Element;
}

const activityItems: ActivityItem[] = [
  {
    id: "metal-sanayi",
    title: "Metal Sanayi",
    description: "Yüksek dayanımlı çelik konstrüksiyon ve metal işleme çözümleri ile endüstriye güç katıyoruz.",
    image: "",
    link: "/metal-sanayi",
    background: "from-[#ff7a1a]/35 via-[#ff5a1f]/20 to-transparent",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
  {
    id: "defense",
    title: "Savunma Sanayisi",
    description: "Milli güvenlik ve savunma teknolojilerine yönelik ileri kalite üretim ve mühendislik desteği sağlıyoruz.",
    image: "",
    link: "/savunma-sanayi",
    background: "from-[#ff8d4d]/20 via-[#8a3f16]/10 to-transparent",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    id: "manufacturing",
    title: "İmalat",
    description: "Modern üretim hatları ve robotik sistemlerle yüksek hassasiyetli endüstriyel imalat hizmetleri sunuyoruz.",
    image: "",
    link: "/imalat",
    background: "from-[#ff8a3d]/24 via-[#6b2d12]/12 to-transparent",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
        <path d="M17 18h1"></path>
        <path d="M12 18h1"></path>
        <path d="M7 18h1"></path>
      </svg>
    ),
  },
  {
    id: "engineering",
    title: "Mühendislik",
    description: "Kapsamlı mühendislik analizi, tasarım ve danışmanlık hizmetleri ile projelerinize değer katıyoruz.",
    image: "",
    link: "/muhendislik",
    background: "from-[#ff9c52]/18 via-[#7d3414]/10 to-transparent",
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
  },
];

export function ProductsSection() {
  return (
    <section className="relative overflow-visible bg-transparent pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e8622a]">Kartal Group</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
                <LocaleText>FAALİYET ALANLARIMIZ</LocaleText>
              </h2>
            </div>
            <p className="text-white/45 leading-relaxed text-sm max-w-xs md:text-right">
              <LocaleText>
                Sanayi, enerji, imalat, mühendislik ve dış ticaret alanlarında faaliyet gösteren bir grup şirket.
              </LocaleText>
            </p>
          </div>

          {/* Editorial row list */}
          <div className="border-t border-white/[0.08]">
            {activityItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="group flex items-center gap-10 border-b border-white/[0.08] py-7 md:py-8 transition-colors duration-300 hover:border-white/[0.18]"
              >
                <span className="text-lg md:text-xl font-semibold text-white/80 group-hover:text-white transition-colors duration-300 shrink-0 w-44 md:w-56">
                  <LocaleText>{item.title}</LocaleText>
                </span>
                <span className="hidden md:block text-white/35 text-sm leading-relaxed flex-1 group-hover:text-white/50 transition-colors duration-300">
                  <LocaleText>{item.description}</LocaleText>
                </span>
                <svg
                  className="ml-auto shrink-0 text-white/15 group-hover:text-white/45 group-hover:translate-x-1 transition-all duration-300"
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetalIndustryIcon() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 47C34 27 51 14 72 14C93 14 110 27 114 47" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M20 47H114V56H20V47Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M50 15V6H75V15" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 56V102" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M48 56V102" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M69 56V102" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M90 56V102" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M111 56V102" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M21 74H112" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M21 92H112" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M33 58L47 72L33 86" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54 58L68 72L54 86" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 58L89 72L75 86" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 102H33" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M106 102H115" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function DefenseIndustryIcon() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M83 19L111 11L103 39L79 61L92 74L76 90L64 77L39 102L30 93L55 68L42 55L58 39L71 52L83 19Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M77 27L95 45" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M23 36L55 4" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M18 49L38 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M35 53L52 70" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M10 69H39" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M28 87L46 69" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M63 96L81 114" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M88 88L106 106" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M86 30C86 26.6863 88.6863 24 92 24C95.3137 24 98 26.6863 98 30C98 33.3137 95.3137 36 92 36C88.6863 36 86 33.3137 86 30Z" stroke="currentColor" strokeWidth="3.5" />
    </svg>
  );
}

function ManufacturingIcon() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 86C18 80.4772 22.4772 76 28 76H92C97.5228 76 102 80.4772 102 86V90C102 95.5228 97.5228 100 92 100H28C22.4772 100 18 95.5228 18 90V86Z" stroke="currentColor" strokeWidth="3.5" />
      <path d="M33 88H36" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M51 88H54" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M69 88H72" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M87 88H90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M77 18H112" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M86 18V50" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M95 18V50" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M16 18H74V27C74 36.9411 66.9411 44 57 44H38C25.8497 44 16 34.1503 16 22V18Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M86 50H98C102.418 50 106 53.5817 106 58V74" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M76 36H95V62C95 67.5228 90.5228 72 85 72H83C77.4772 72 73 67.5228 73 62V39C73 37.3431 74.3431 36 76 36Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  );
}

function EngineeringIcon() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M82 18H109V26H82V18Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M47 18H74V26H47V18Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M58 26V36" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M93 26V86" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M58 26V86" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M38 40H76" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M38 52H76" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M38 64H76" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M38 76H76" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M28 34H42V43H28V34Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M28 46H42V55H28V46Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M28 58H42V67H28V58Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M28 70H42V79H28V70Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M52 94L58 86L64 94H52Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M87 96H99" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M90 86H96V96H90V86Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  );
}
