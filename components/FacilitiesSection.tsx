import { useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { translate } from "../locales/translate";
import yeniHolImg from "../assets/yenihol.jpg?format=webp";
import yeniHol2Img from "../assets/yenihol2.jpg?format=webp";
import yeniHol3Img from "../assets/yenihol3.jpg?format=webp";

export function FacilitiesSection() {
  const pageContext = usePageContext();
  const locale = (pageContext.routeParams as any)?.locale || "tr";
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const facilities = [
    {
      id: 2,
      image: yeniHolImg,
    },
    {
      id: 3,
      image: yeniHol2Img,
    },
    {
      id: 4,
      image: yeniHol3Img,
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth + 32; // itemWidth + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-24">
      {/* No dark gradients, seamless background */}

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center text-left">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#ff4713]/60"></div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff4713]">Kartal Group</span>
            </div>
            <h2 className="mb-5 text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
              {translate("facilities.subtitle", locale)}
            </h2>
            <p className="mb-10 text-white/50 text-base leading-relaxed max-w-sm">
              {translate("facilities.item2.desc", locale)}
            </p>

            {/* Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll("left")}
                className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border transition-colors ${
                  activeIndex === 0 
                  ? "cursor-not-allowed border-white/10 bg-white/[0.03] text-white/20 opacity-70" 
                  : "border-white/14 bg-white/[0.05] text-[#ffb37a] hover:border-[#ff9d57]/70 hover:bg-white/[0.08] hover:text-white"
                }`}
                aria-label="Previous"
                disabled={activeIndex === 0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={() => scroll("right")}
                className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border transition-colors ${
                  activeIndex === facilities.length - 1 
                  ? "cursor-not-allowed border-white/10 bg-white/[0.03] text-white/20 opacity-70" 
                  : "border-white/14 bg-white/[0.05] text-[#ffb37a] hover:border-[#ff9d57]/70 hover:bg-white/[0.08] hover:text-white"
                }`}
                aria-label="Next"
                disabled={activeIndex === facilities.length - 1}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          
          {/* Right Slider */}
          <div className="w-full lg:w-[60%] lg:pl-12">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory hide-scrollbar lg:pr-[20vw]"
              style={{ paddingRight: "max(20px, 20vw)", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {facilities.map((item, idx) => (
                <div 
                  key={item.id} 
                  className={`w-[85vw] md:w-[60vw] lg:w-[100%] flex-shrink-0 snap-center transition-all duration-300 ${
                    idx === activeIndex ? "opacity-100 scale-100" : "opacity-50 scale-[0.98]"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.08] bg-[#1b0d07] shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                    <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,138,61,0.08)_0%,rgba(18,8,4,0.08)_28%,rgba(18,8,4,0.5)_100%)]"></div>
                    <img 
                      src={item.image} 
                      alt="Facility" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
