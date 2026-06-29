import { useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { translate } from "../locales/translate";
import slider1 from "../assets/slider/slider-1.jpg?format=webp";
import slider2 from "../assets/slider/slider2.jpg?format=webp";
import bulanikHali from "../assets/slider/bulanik_hali.jpg?format=webp";

export function NewsSection() {
  const pageContext = usePageContext();
  const locale = (pageContext.routeParams as any)?.locale || "tr";

  const scrollRef = useRef<HTMLDivElement>(null);
  const [modalItem, setModalItem] = useState<any>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const newsItems = [
    {
      id: 5,
      date: "03 Nisan 2026",
      titleKey: "news.item3.title",
      descKey: "news.item3.desc",
      image: bulanikHali,
      link: "/gundem"
    },
    {
      id: 2,
      date: "05 Mart 2026",
      titleKey: "news.item2.title",
      descKey: "news.item2.desc",
      image: slider2,
      link: "/gundem"
    },
    {
      id: 3,
      date: "20 Şubat 2026",
      titleKey: "news.item1.title",
      descKey: "news.item1.desc",
      image: slider1,
      link: "/gundem"
    },
    {
      id: 4,
      date: "15 Ocak 2026",
      titleKey: "news.item2.title",
      descKey: "news.item2.desc",
      image: slider2,
      link: "/gundem"
    },
    {
      id: 1,
      date: "17 Ekim 2025",
      titleKey: "news.item1.title",
      descKey: "news.item1.desc",
      image: slider1,
      link: "/gundem"
    }
  ];

  return (
    <section className="relative -mt-12 overflow-hidden bg-transparent pt-24 pb-16 md:-mt-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#ff4713]/60"></div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff4713]">Kartal Group</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {translate("news.agenda", locale)}
            </h2>
            <p className="text-base text-white/50">
              {translate("news.shortDescription", locale)}
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-[#ffb37a] transition-colors hover:border-[#ff9d57]/70 hover:bg-white/[0.08] hover:text-white"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-[#ffb37a] transition-colors hover:border-[#ff9d57]/70 hover:bg-white/[0.08] hover:text-white"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-7 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className="group relative w-[82vw] max-w-[360px] shrink-0 snap-start md:w-[380px] md:max-w-none"
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
              <div className="relative px-1 pt-5 pb-2">
                <h3 className="mb-3 text-lg font-bold leading-snug text-white line-clamp-2 transition-colors duration-300 group-hover:text-[#ffb37a]">
                  {translate(item.titleKey, locale)}
                </h3>
                <p className="mb-5 text-sm text-white/55 leading-relaxed line-clamp-2">
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
            {/* Modal Header Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
              <img src={modalItem.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
                <span className="text-xs font-semibold text-white/90">{modalItem.date}</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="px-6 pb-8 -mt-8 relative z-10 md:px-8">
              <h2 className="text-2xl font-bold text-white mb-4 md:text-3xl">
                {translate(modalItem.titleKey, locale)}
              </h2>
              <p className="text-white/70 leading-relaxed whitespace-pre-wrap text-base">
                {translate(modalItem.descKey, locale)}
              </p>
            </div>

            {/* Close button */}
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

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
