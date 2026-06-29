import { useEffect, useState } from "react";
import factoryImage from "../../assets/slider/slider-1.jpg?format=webp";
import { LocaleText } from "../../renderer/LocaleText";

import cert1 from "../../assets/certificates/1.jpg?format=webp";
import cert10 from "../../assets/certificates/10.jpg?format=webp";
import cert11 from "../../assets/certificates/11.jpg?format=webp";
import cert12 from "../../assets/certificates/12.jpg?format=webp";
import cert13 from "../../assets/certificates/13.jpg?format=webp";
import cert14 from "../../assets/certificates/14.jpg?format=webp";
import cert15 from "../../assets/certificates/15.jpg?format=webp";
import cert16 from "../../assets/certificates/16.jpg?format=webp";
import cert17 from "../../assets/certificates/17.jpg?format=webp";
import cert18 from "../../assets/certificates/18.png?format=webp";
import cert19 from "../../assets/certificates/19.jpg?format=webp";
import cert2 from "../../assets/certificates/2.jpg?format=webp";
import cert20 from "../../assets/certificates/20.jpg?format=webp";
import cert3 from "../../assets/certificates/3.jpg?format=webp";
import cert4 from "../../assets/certificates/4.jpg?format=webp";
import cert5 from "../../assets/certificates/5.jpg?format=webp";
import cert6 from "../../assets/certificates/6.jpg?format=webp";
import cert7 from "../../assets/certificates/7.jpg?format=webp";
import cert8 from "../../assets/certificates/8.jpeg?format=webp";
import cert9 from "../../assets/certificates/9.jpeg?format=webp";

const certificates = [
  { id: 1, src: cert1 },
  { id: 2, src: cert2 },
  { id: 3, src: cert3 },
  { id: 4, src: cert4 },
  { id: 5, src: cert5 },
  { id: 6, src: cert6 },
  { id: 7, src: cert7 },
  { id: 8, src: cert8 },
  { id: 9, src: cert9 },
  { id: 10, src: cert10 },
  { id: 11, src: cert11 },
  { id: 12, src: cert12 },
  { id: 13, src: cert13 },
  { id: 14, src: cert14 },
  { id: 15, src: cert15 },
  { id: 16, src: cert16 },
  { id: 17, src: cert17 },
  { id: 18, src: cert18 },
  { id: 19, src: cert19 },
  { id: 20, src: cert20 },
];

export default function Page() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null,
  );

  // ESC tuşu ile modal'ı kapatma
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    if (selectedCertificate) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedCertificate]);

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
            <LocaleText>Sertifikalarımız ve Kalite Belgelerimiz</LocaleText>
          </h1>
          <div className="w-12 h-1 bg-white/60 mx-auto mt-5 rounded-full transition-all duration-[1000ms] ease-out group-hover:w-32 group-hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
        </div>
      </section>

      {/* Quality Description Section */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-white/80 leading-relaxed text-lg text-center">
              <LocaleText>certificates.paragraph1</LocaleText>
            </p>
            <p className="text-white/80 leading-relaxed text-lg text-center mt-4">
              <LocaleText>certificates.paragraph2</LocaleText>
            </p>
            <p className="text-white/80 leading-relaxed text-lg text-center mt-4">
              <LocaleText>certificates.paragraph3</LocaleText>
            </p>
            <p className="text-white/80 leading-relaxed text-lg text-center mt-4">
              <LocaleText>certificates.paragraph4</LocaleText>
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#ff8a3d] text-sm font-medium uppercase tracking-wider mb-2">
              <LocaleText>KALİTE BELGELERİMİZ</LocaleText>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90">
              <LocaleText>SERTİFİKALARIMIZ</LocaleText>
            </h2>
            <div className="w-24 h-1 bg-[#ff8a3d] mx-auto mt-4"></div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCertificate(cert.src)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={cert.src}
                    alt={`Certificate ${cert.id}`}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors p-2"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Certificate Image */}
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            <LocaleText>Uluslararası Standartlarda Üretim</LocaleText>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            <LocaleText>certificates.cta</LocaleText>
          </p>
        </div>
      </section>
    </>
  );
}
