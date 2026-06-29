import { Link } from "./Link";
import { LocaleText } from "../renderer/LocaleText";

// Vite glob import ile tüm referans logolarını import et
const logoModules = import.meta.glob<{ default: string }>(
  "../assets/referanslar/*.{png,jpg,jpeg,svg,webp}",
  { eager: true }
);

// Logo dosyalarını array'e çevir
const logos = Object.entries(logoModules).map(([path, module]) => {
  const fileName = path.split("/").pop() || "";
  const name = fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/%C3%BC/g, "ü")
    .replace(/%C4%B1/g, "ı")
    .replace(/%C5%9F/g, "ş")
    .replace(/%C3%B6/g, "ö")
    .replace(/%C3%A7/g, "ç")
    .replace(/%C4%9F/g, "ğ");

  return {
    src: module.default,
    name,
  };
});

export function ReferencesSection() {
  if (logos.length === 0) return null;

  // Sürekli kayması için logoları çoğalt
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              <LocaleText>Referanslarımız</LocaleText>
            </h2>
            <p className="text-gray-600">
              <LocaleText>Güvenilir İş Ortaklarımız</LocaleText>
            </p>
          </div>
          <Link
            href="/referanslar"
            className="hidden md:flex items-center gap-2 text-[#ff8a3d] hover:text-[#3a6a87] font-medium transition-colors"
          >
            <LocaleText>Tümünü Gör</LocaleText>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <Link href="/referanslar" className="block">
        <div className="relative">
          <div className="flex animate-scroll-left hover:pause-animation">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center group"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Link>

      {/* Mobile "Tümünü Gör" button */}
      <div className="container mx-auto px-4 mt-8 md:hidden">
        <Link
          href="/referanslar"
          className="flex items-center justify-center gap-2 text-[#ff8a3d] hover:text-[#3a6a87] font-medium transition-colors"
        >
          <LocaleText>Tümünü Gör</LocaleText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
