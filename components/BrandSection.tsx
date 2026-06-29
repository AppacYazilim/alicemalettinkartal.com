import eagleLogo from "../assets/eagle.png";
import { Link } from "./Link";
import { LocaleText } from "../renderer/LocaleText";

export function BrandSection() {
  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        {/* Brand Slogan */}
        <p className="text-center text-gray-500 text-sm mb-8">
          <LocaleText>common.brandSlogan</LocaleText>
        </p>

        {/* Brand Card */}
        <div className="flex justify-center">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden max-w-md w-full hover:shadow-xl transition-shadow">
            <div className="flex">
              {/* Left Side - Logo */}
              <div className="bg-[#ff8a3d] p-6 flex items-center justify-center">
                <img
                  src={eagleLogo}
                  alt="Kartal İmalat Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Right Side - Content */}
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#ff8a3d] font-bold text-2xl">
                    Kartal İmalat
                  </span>
                </div>
                <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                  EXPANSION VESSELS
                </p>
                <h3 className="text-[#ff8a3d] font-semibold text-sm mb-4">
                  <LocaleText>GENLEŞME VE HİDROFOR TANKLARI</LocaleText>
                </h3>
                <Link
                  href="/genlesme-tanklari"
                  className="inline-block bg-[#ff8a3d] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#ff8a3d]/70 transition-colors"
                >
                  <LocaleText>ÜRÜNLERİMİZ</LocaleText>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
