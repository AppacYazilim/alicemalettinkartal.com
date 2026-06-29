import { HeroSection } from "../../components/HeroSection";
import { StatsSection } from "../../components/StatsSection";
import { MapSection } from "../../components/MapSection";
import { NewsSection } from "../../components/NewsSection";
import { ProductsSection } from "../../components/ProductsSection";
import { FacilitiesSection } from "../../components/FacilitiesSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#050505_0%,#090909_10%,#120d0a_24%,#1c130e_40%,#2b180f_56%,#321a0e_68%,#2a150a_78%,#1a0d07_88%,#0e0906_100%)]">
        <StatsSection />
        <MapSection />
        <ProductsSection />
        <NewsSection />
        <FacilitiesSection />
      </main>
    </>
  );
}
