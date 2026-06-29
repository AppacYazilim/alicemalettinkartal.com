import { useState } from "react";
import { LocaleText } from "../../renderer/LocaleText";
import factoryImage from "../../assets/slider/bulanik_hali.jpg?format=webp";
import { usePageContext } from "vike-react/usePageContext";
import { translate } from "../../locales/translate";
import slider1 from "../../assets/slider/slider-1.jpg?format=webp";
import slider2 from "../../assets/slider/slider2.jpg?format=webp";
import bulanikHali from "../../assets/slider/bulanik_hali.jpg?format=webp";

export default function Page() {
  const pageContext = usePageContext();
  const locale = (pageContext.routeParams as any)?.locale || "tr";
  const [modalItem, setModalItem] = useState<any>(null);

  const newsItems = [
    {
      id: 5,
      date: "03 Nisan 2026",
      titleKey: "news.item3.title",
      descKey: "news.item3.desc",
      image: bulanikHali,
      link: "#",
    },
    {
      id: 2,
      date: "05 Mart 2026",
      titleKey: "news.item2.title",
      descKey: "news.item2.desc",
      image: slider2,
      link: "#",
    },
    {
      id: 3,
      date: "20 Şubat 2026",
      titleKey: "news.item1.title",
      descKey: "news.item1.desc",
      image: slider1,
      link: "#",
    },
    {
      id: 4,
      date: "15 Ocak 2026",
      titleKey: "news.item2.title",
      descKey: "news.item2.desc",
      image: slider2,
      link: "#",
    },
    {
      id: 1,
      date: "17 Ekim 2025",
      titleKey: "news.item1.title",
      descKey: "news.item1.desc",
      image: slider1,
      link: "#",
    },
  ];

  return (
    <>
      <section className="relative h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden group cursor-default">
        {/* Animated Background Image that gently zooms in on hover */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${factoryImage})` }}
        />
        
        {/* Cool animated gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1309_0%,#ff8a3d_50%,#2a1309_100%)] opacity-85 mix-blend-multiply transition-opacity duration-[1.5s] group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-[1.5s]" />

        {/* Text Content with glow, smooth lift and line expansion animation */}
        <div className="relative z-10 text-center transform transition-all duration-[1000ms] ease-out group-hover:-translate-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-[1000ms] ease-out group-hover:tracking-[0.1em] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            <LocaleText>Gündem</LocaleText>
          </h1>
          <div className="w-12 h-1 bg-white/60 mx-auto mt-5 rounded-full transition-all duration-[1000ms] ease-out group-hover:w-32 group-hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[linear-gradient(180deg,#050505_0%,#090909_10%,#120d0a_24%,#1c130e_40%,#2b180f_56%,#4a240f_72%,#5a260d_84%,#2b1409_94%,#160c07_100%)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              <LocaleText>Gündem</LocaleText>
            </h2>
            <p className="text-lg text-white/68">
              {locale === "tr"
                ? translate("news.shortDescription", "tr")
                : translate("news.shortDescription", locale)}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article 
                key={item.id} 
                className="group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#1a0d08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-shadow duration-500 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
                  <img
                    src={item.image}
                    alt={translate(item.titleKey, locale)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 z-10 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
                    <span className="text-xs font-semibold tracking-wide text-white/90">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-1 pt-5 pb-2">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-white line-clamp-2 transition-colors duration-300 group-hover:text-[#ffb37a]">
                    {translate(item.titleKey, locale)}
                  </h3>
                  <p className="mb-5 text-sm text-white/55 leading-relaxed line-clamp-3">
                    {translate(item.descKey, locale)}
                  </p>
                  
                  <button
                    onClick={() => setModalItem(item)}
                    className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff9d57] transition-colors hover:text-white cursor-pointer"
                  >
                    {translate("button.details", locale)}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalItem && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalItem(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#1a0f0a] shadow-[0_32px_80px_rgba(0,0,0,0.7)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
              <img src={modalItem.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
                <span className="text-xs font-semibold text-white/90">{modalItem.date}</span>
              </div>
            </div>

            <div className="px-6 pb-8 -mt-8 relative z-10 md:px-8">
              <h2 className="text-2xl font-bold text-white mb-4 md:text-3xl">
                {translate(modalItem.titleKey, locale)}
              </h2>
              <p className="text-white/70 leading-relaxed whitespace-pre-wrap text-base">
                {translate(modalItem.descKey, locale)}
              </p>
            </div>

            <button
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
