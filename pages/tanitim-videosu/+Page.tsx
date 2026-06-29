import factoryImage from "../../assets/slider/slider-1.jpg?format=webp";
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
        
        <div className="relative z-10 text-center px-4 transform transition-all duration-[1000ms] ease-out group-hover:-translate-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-[1000ms] ease-out group-hover:tracking-[0.1em] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            <LocaleText>Tanıtım Videosu</LocaleText>
          </h1>
          <div className="w-12 h-1 bg-white/60 mx-auto mt-5 rounded-full transition-all duration-[1000ms] ease-out group-hover:w-32 group-hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ff8a3d] tracking-wide">
              <LocaleText>KARTAL GROUP TANITIM VİDEOSU</LocaleText>
            </h2>
            <p className="text-white/50 text-sm mt-2">
              <LocaleText>By Kartal Bombe & Basınçlı Kaplar A.Ş</LocaleText>
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-4xl mx-auto">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
                src="https://www.youtube.com/embed/bQqJbCCAEcg"
                title="Kartal İmalat Tanıtım Videosu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mt-8 md:mt-12 text-center">
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              <LocaleText>video.description</LocaleText>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
