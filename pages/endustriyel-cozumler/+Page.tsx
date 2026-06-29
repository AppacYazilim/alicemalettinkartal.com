import factoryImage from "../../assets/slider/slider-1.jpg?format=webp";
import { LocaleText } from "../../renderer/LocaleText";

export default function Page() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#050505_0%,#090909_10%,#120d0a_24%,#1c130e_40%,#2b180f_56%,#4a240f_72%,#5a260d_84%,#2b1409_94%,#160c07_100%)]">
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
            <LocaleText>Endüstriyel Çözümler</LocaleText>
          </h1>
          <div className="w-12 h-1 bg-white/60 mx-auto mt-5 rounded-full transition-all duration-[1000ms] ease-out group-hover:w-32 group-hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
        </div>
      </section>
    </div>
  );
}
