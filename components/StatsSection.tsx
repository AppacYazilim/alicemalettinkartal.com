import { useEffect, useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { translate } from "../locales/translate";

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  key: string;
}

const stats: StatItem[] = [
  { id: 1, value: 81, suffix: "+", key: "stats.experience" },
  { id: 2, value: 10000, suffix: "+", key: "stats.area" },
  { id: 3, value: 60, suffix: "+", key: "stats.export" },
];

function Counter({ 
  value, 
  duration = 2000, 
  isVisible 
}: { 
  value: number; 
  duration?: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      
      setCount(Math.floor(easeOut * value));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, isVisible]);

  return <span>{new Intl.NumberFormat('tr-TR').format(count)}</span>;
}

export function StatsSection() {
  const pageContext = usePageContext();
  const locale = (pageContext.routeParams as any)?.locale || "tr";
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Stop observing once it becomes visible
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-transparent py-20 md:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black via-black/85 to-transparent pointer-events-none z-[2]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center py-10 px-8 text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="text-[72px] md:text-[88px] font-black leading-none text-white tabular-nums">
                <Counter value={stat.value} isVisible={isVisible} />
                <span className="text-[#e8622a]">{stat.suffix}</span>
              </div>
              <div className="mt-5 mb-4 h-px w-6 bg-[#e8622a]/50"></div>
              <div className="text-xs font-semibold tracking-[0.25em] uppercase text-white/45">
                {translate(stat.key, locale)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}