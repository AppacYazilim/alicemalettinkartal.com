import logoZip from "../../assets/eagle-logo.zip?url";
import kurumsalImage from "../../assets/yenihol.jpg?format=webp";
import factoryImage from "../../assets/slider/slider-1.jpg?format=webp";
import kurucumuzImage from "../../assets/logo-upload/eskifoto3.jpg?format=webp";
import { LocaleText } from "../../renderer/LocaleText";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden group cursor-default">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${factoryImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1309_0%,#ff8a3d_50%,#2a1309_100%)] opacity-85 mix-blend-multiply transition-opacity duration-[1.5s] group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-[1.5s]" />
        
        <div className="relative z-10 text-center transform transition-all duration-[1000ms] ease-out group-hover:-translate-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-[1000ms] ease-out group-hover:tracking-[0.1em] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            <LocaleText>Kurumsal</LocaleText>
          </h1>
          <div className="w-12 h-1 bg-white/60 mx-auto mt-5 rounded-full transition-all duration-[1000ms] ease-out group-hover:w-32 group-hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
              <div className="md:w-1/3 shrink-0">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e8622a]">
                  <LocaleText>Kartal Group</LocaleText>
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
                  <LocaleText>HAKKIMIZDA</LocaleText>
                </h2>
                <div className="mt-5 h-px w-8 bg-[#e8622a]/50"></div>
              </div>
              <div className="md:w-2/3">
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  <LocaleText>Kartal Group, 1945 yılında metal şekillendirme sektörü ile başladığı ticaret hayatındaki yolculuğuna farklı sektörlerdeki yatırımları ile büyüyerek devam etmiştir. Grup bünyesinde; makine, metal, enerji, mühendislik ve akademi sektöründe yer alan firma ve markalar yer almaktadır.</LocaleText>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurucumuz Section */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="rounded-lg overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent z-10"></div>
                  <img
                    src={kurucumuzImage}
                    alt="Mehmet KARTAL - Kurucumuz"
                    className="w-full h-[380px] md:h-[460px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      <LocaleText>kurumsal.founderName</LocaleText>
                    </h3>
                    <p className="text-white/60 text-sm font-medium tracking-wider uppercase">
                      <LocaleText>kurumsal.founderTitle</LocaleText>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e8622a]">
                  <LocaleText>kurumsal.founderTitle</LocaleText>
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  <LocaleText>kurumsal.founderName</LocaleText>
                </h3>
                <div className="h-px w-8 bg-[#e8622a]/50"></div>
                <p className="text-white/65 text-base md:text-lg leading-relaxed border-l border-white/20 pl-5">
                  <LocaleText>kurumsal.founderText</LocaleText>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon ve Vizyon Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20">

            {/* Misyonumuz */}
            <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
              <div className="md:w-1/3 shrink-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  <LocaleText>MİSYONUMUZ</LocaleText>
                </h3>
                <div className="mt-4 h-px w-8 bg-[#e8622a]/50"></div>
              </div>
              <p className="md:w-2/3 text-white/65 text-base md:text-lg leading-relaxed">
                <LocaleText>kurumsal.mission</LocaleText>
              </p>
            </div>

            {/* Vizyon & Hedefimiz */}
            <div className="grid md:grid-cols-2 gap-12 pt-2 border-t border-white/[0.07]">
              <div className="pt-10">
                <h3 className="text-2xl font-bold text-white mb-5">
                  <LocaleText>VİZYON</LocaleText>
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  <LocaleText>kurumsal.vision</LocaleText>
                </p>
              </div>
              <div className="pt-10 md:border-l md:border-white/[0.07] md:pl-12">
                <h3 className="text-2xl font-bold text-white mb-5">
                  <LocaleText>HEDEFİMİZ</LocaleText>
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  <LocaleText>kurumsal.goal</LocaleText>
                </p>
              </div>
            </div>

            {/* Değerlerimiz */}
            <div className="border-t border-white/[0.07] pt-12">
              <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20 mb-12">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    <LocaleText>DEĞERLERİMİZ</LocaleText>
                  </h3>
                  <div className="mt-4 h-px w-8 bg-[#e8622a]/50"></div>
                </div>
              </div>

              <div className="border-t border-white/[0.08]">
                {[
                  { title: "LİDERLİK", key: "kurumsal.leadership" },
                  { title: "KALİTE VE PERFORMANS", key: "kurumsal.quality" },
                  { title: "GELİŞİM, DEĞİŞİM", key: "kurumsal.development" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-10 border-b border-white/[0.08] py-7">
                    <span className="text-base font-semibold text-white/80 shrink-0 w-44 md:w-56">
                      <LocaleText>{item.title}</LocaleText>
                    </span>
                    <span className="hidden md:block text-white/45 text-sm leading-relaxed flex-1">
                      <LocaleText>{item.key}</LocaleText>
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Basın Kiti Section */}
      <section className="py-16 md:py-24 bg-transparent border-t border-white/[0.06]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e8622a]">
                <LocaleText>BASIN KİTİ</LocaleText>
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                <LocaleText>LOGOMUZU İNDİRİN</LocaleText>
              </h2>
            </div>
            <a
              href={logoZip}
              download="eagle-logo.zip"
              className="inline-flex items-center gap-3 border border-white/20 text-white/80 hover:border-white/40 hover:text-white font-medium px-7 py-3.5 rounded-sm transition-colors text-sm shrink-0"
            >
              <LocaleText>Zip Dosyasını İndir</LocaleText>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
