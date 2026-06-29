import { useEffect, useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";

import kbsgroupLogo from "../assets/logo-upload/kbsgroup.svg";
import { LocaleText } from "../renderer/LocaleText";
import { Link } from "./Link";

const homePaths = ["/", "/en", "/ru", "/en/", "/ru/"];

export function HeroSection() {
  const pageContext = usePageContext();
  const isHomePage = homePaths.includes(pageContext.urlPathname || "/");

  const [scrollY, setScrollY] = useState(0);
  const [isHighQualityReady, setIsHighQualityReady] = useState(false);
  const lowQualityVideoRef = useRef<HTMLVideoElement>(null);
  const highQualityVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const high = highQualityVideoRef.current;
    if (!high) return;

    const handleCanPlayThrough = () => {
      const low = lowQualityVideoRef.current;
      if (low) {
        high.currentTime = low.currentTime;
      }

      high.play().catch(() => {
      });
      setIsHighQualityReady(true);
    };

    high.load();
    high.addEventListener("canplaythrough", handleCanPlayThrough, { once: true });
    return () => high.removeEventListener("canplaythrough", handleCanPlayThrough);
  }, []);

  useEffect(() => {
    if (!isHighQualityReady) return;
    const timeoutId = window.setTimeout(() => {
      lowQualityVideoRef.current?.pause();
    }, 900);

    return () => window.clearTimeout(timeoutId);
  }, [isHighQualityReady]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <video
          ref={lowQualityVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            isHighQualityReady ? "opacity-0" : "opacity-100"
          }`}
        >
          <source src="/video/kartalgrup.mov" />
        </video>

        <video
          ref={highQualityVideoRef}
          loop
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            isHighQualityReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/video/kartalgrup.mov" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.28)_38%,rgba(0,0,0,0.74)_100%)] md:h-48" />

      {/* Hero Content with Entrance Animations */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between pb-16 md:pb-24">
        {/* Top Navigation - Show on non-homepage */}
        {!["/", "/en", "/ru", "/en/", "/ru/"].includes(pageContext.urlPathname || "/") && (
          <div className="pt-8 md:pt-12 container mx-auto px-6 md:px-12 lg:px-24">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <LocaleText>Anasayfa</LocaleText>
            </Link>
          </div>
        )}

        {/* Main Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24">
          <div className="w-full flex flex-col items-center justify-center text-white drop-shadow-2xl">
            {isHomePage ? (
              <div className="flex items-center justify-center">
                <img
                  src={kbsgroupLogo}
                  alt="KBS Group"
                  className="w-[180px] max-w-[46vw] object-contain opacity-95 drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] md:w-[260px] lg:w-[320px]"
                />
              </div>
            ) : (
              <div className="mt-24 md:mt-32" />
            )}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 flex justify-center md:bottom-12">
          <div className="relative flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
            <div className="absolute top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-white/10 blur-2xl animate-[heroGlowPulse_2.4s_ease-in-out_infinite]" />
            <div className="h-16 w-[1px] bg-gradient-to-b from-white/5 via-white/35 to-white/80" />
            <div className="relative flex h-20 w-14 items-start justify-center rounded-full border border-white/20 bg-white/8 pt-3 shadow-[0_8px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/18 via-transparent to-transparent" />
              <div className="h-3 w-3 rounded-full bg-white/90 shadow-[0_0_14px_rgba(255,255,255,0.65)] animate-[heroScrollDot_1.8s_ease-in-out_infinite]" />
            </div>
            <div className="flex flex-col items-center text-white/85 animate-[heroArrowFloat_1.8s_ease-in-out_infinite]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 10l5 5 5-5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="-mt-4 h-7 w-7 opacity-55" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 10l5 5 5-5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes heroArrowFloat {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(8px); opacity: 1; }
        }

        @keyframes heroScrollDot {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          70% { opacity: 0.95; }
          100% { transform: translateY(34px) scale(0.92); opacity: 0; }
        }

        @keyframes heroGlowPulse {
          0%, 100% { transform: translateY(-50%) scale(0.92); opacity: 0.28; }
          50% { transform: translateY(-50%) scale(1.08); opacity: 0.48; }
        }
      `}} />
    </section>
  );
}

