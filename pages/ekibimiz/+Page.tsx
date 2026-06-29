import factoryImage from "../../assets/slider/slider-1.jpg?format=webp";
import eagleLogo from "../../assets/eagle.png";
import beyazLogo from "../../assets/beyaz-logo.png";
import { LocaleText } from "../../renderer/LocaleText";

// Team member images
import kazimImg from "../../assets/kazımince.jpg?format=webp";
import burakImg from "../../assets/burak sağlam.png?format=webp";
import ercanImg from "../../assets/ercan.png?format=webp";
import feyzullahImg from "../../assets/feyzullah.png?format=webp";
import korayImg from "../../assets/koray çatal.png?format=webp";
import muhammedImg from "../../assets/muhammed kosif.png?format=webp";
import canerImg from "../../assets/caner küçükköse.jpg?format=webp";

interface SocialMedias {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
  phone?: string;
}

interface TeamMember {
  id: number;
  name: string;
  title: string;
  img: string;
  socialMedias: SocialMedias;
}

// Social Media Icon Components
const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-[336px]">
      {/* Image Container */}
      <div className={`relative h-[358px] overflow-hidden flex items-center justify-center transition-all duration-500 ${
        member.img ? 'bg-gray-100' : 'bg-white/5 group-hover:bg-gradient-to-b group-hover:from-gray-200 group-hover:to-[#80a1b6]'
      }`}>
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-center p-12 transition-opacity duration-300 group-hover:opacity-0 opacity-100">
              <img 
                src={eagleLogo} 
                alt="Kartal İmalat" 
                className="w-48 h-auto object-contain"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-12 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <img 
                src={beyazLogo} 
                alt="Kartal İmalat Beyaz" 
                className="w-48 h-auto object-contain"
              />
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-white/90 mb-1 group-hover:text-[#ff8a3d] transition-colors">
          {member.name}
        </h3>
        <p className="text-[#ff8a3d] font-medium text-sm uppercase tracking-wide mb-2">
          <LocaleText>{member.title}</LocaleText>
        </p>
        
        {/* Email Address */}
        {member.socialMedias.email && (
          <a 
            href={`mailto:${member.socialMedias.email}`}
            className="inline-flex items-center justify-center gap-1.5 text-white/60 hover:text-[#ff8a3d] text-sm transition-colors"
          >
            <EmailIcon />
            <span>{member.socialMedias.email}</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Halil Kartal",
      title: "Yönetim Kurulu Üyesi",
      img: "",
      socialMedias: { email: "halil.kartal@eagle.com.tr" },
    },
    {
      id: 2,
      name: "Emre Kartal",
      title: "Ekip Üyesi",
      img: "",
      socialMedias: { email: "emre.kartal@kartalbombe.com.tr" },
    },
    {
      id: 3,
      name: "Ercan Karaosmanoğlu",
      title: "Kalite Müdürü",
      img: ercanImg,
      socialMedias: { email: "ercan.karaosmanoglu@kartalbombe.com.tr" },
    },
    {
      id: 4,
      name: "Kazım İnce",
      title: "Satış Yöneticisi",
      img: kazimImg,
      socialMedias: {
        email: "kazim.ince@eagle.com.tr",
        phone: "+90 539 519 52 80",
      },
    },
    {
      id: 5,
      name: "Caner Küçükköse",
      title: "Fabrikasyon İmalat Yöneticisi",
      img: canerImg,
      socialMedias: { email: "caner.kucukkose@eagle.com.tr" },
    },
    {
      id: 6,
      name: "Feyzullah Gökteke",
      title: "Tasarım Mühendisi",
      img: feyzullahImg,
      socialMedias: { email: "feyzullah.gokteke@eagle.com.tr", phone: "+90 506 996 09 20" },
    },
    {
      id: 7,
      name: "Koray Çatal",
      title: "Proje Mühendisi",
      img: korayImg,
      socialMedias: { email: "koray.catal@eagle.com.tr" },
    },
    {
      id: 8,
      name: "Muhammed Furkan Kosif",
      title: "Kalite Kontrol Mühendisi",
      img: muhammedImg,
      socialMedias: { email: "furkan.kosif@kartalbombe.com.tr" },
    },
    {
      id: 9,
      name: "Nurgül Gökteke",
      title: "Kalite Kontrol Mühendisi",
      img: "",
      socialMedias: { email: "nurgul.gokteke@kartalbombe.com.tr" },
    },
    {
      id: 10,
      name: "Mehmet Burak Sağlam",
      title: "Kalite Kontrol Mühendisi",
      img: burakImg,
      socialMedias: { email: "mehmet.saglam@kartalbombe.com.tr" },
    }
  ];

  return (
    <>
      {/* Hero Section */}
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
            <LocaleText>Ekibimiz</LocaleText>
          </h1>
          <p className="text-white/80 mt-3 text-lg transition-all duration-[1000ms] ease-out group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            <LocaleText>Profesyonel Kadromuzla Yanınızdayız</LocaleText>
          </p>
          <div className="w-12 h-1 bg-white/60 mx-auto mt-5 rounded-full transition-all duration-[1000ms] ease-out group-hover:w-32 group-hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-[#ff8a3d]/10 text-[#ff8a3d] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <LocaleText>KARTAL GROUP AİLESİ</LocaleText>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-4">
              <LocaleText>Uzman Ekibimizle Tanışın</LocaleText>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              <LocaleText>team.description</LocaleText>
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff8a3d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            <LocaleText>Ekibimize Katılmak İster misiniz?</LocaleText>
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            <LocaleText>team.cta.description</LocaleText>
          </p>
          <a
            href="mailto:kariyer@kartalimalat.com.tr"
            className="inline-flex items-center gap-2 bg-white text-[#ff8a3d] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <EmailIcon />
            <span>kariyer@kartalimalat.com.tr</span>
          </a>
        </div>
      </section>
    </>
  );
}
