      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg transition-transform duration-300 ease-in-out ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src={eagleLogo}
                alt="Kartal İmalat Logo"
                className="h-14 object-contain"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className="text-gray-800 hover:bg-gray-50 font-medium transition-colors px-4 py-2 border-b-4 border-transparent hover:border-[#ff8a3d] flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
              <Link
                href="/kurumsal"
                className="text-gray-800 hover:bg-gray-50 font-medium transition-colors px-4 py-2 rounded"
              >
                <LocaleText>Kurumsal</LocaleText>
              </Link>
              <div className="relative group">
                <button className="text-gray-800 hover:bg-gray-50 font-medium transition-colors px-4 py-2 border-b-4 border-transparent hover:border-[#ff8a3d] flex items-center gap-1">
                  <LocaleText>Kartal İmalat</LocaleText>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/urunler"
                      className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] font-medium transition-colors"
                    >
                      <LocaleText>Tüm Ürünler</LocaleText>
                    </Link>

                    <Link
                      href="/sertifikalar"
                      className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] transition-colors"
                    >
                      <LocaleText>Sertifikalar</LocaleText>
                    </Link>
                    <Link
                      href="/tanitim-videosu"
                      className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] transition-colors"
                    >
                      <LocaleText>Tanıtım Videosu</LocaleText>
                    </Link>
                    <Link
                      href="/ekibimiz"
                      className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] transition-colors"
                    >
                      <LocaleText>Ekibimiz</LocaleText>
                    </Link>
                    <Link
                      href="/iletisim"
                      className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] transition-colors"
                    >
                      <LocaleText>İletişim</LocaleText>
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/iletisim"
                className="text-gray-800 hover:bg-gray-50 font-medium transition-colors px-4 py-2 rounded"
              >
                <LocaleText>İletişim</LocaleText>
              </Link>

              {/* Language Switcher - Scrolled Header */}
              <div className="relative group border-l border-gray-200 ml-2 pl-2">
                <button className="text-gray-800 hover:bg-gray-50 font-medium transition-colors px-3 py-2 border-b-4 border-transparent hover:border-[#ff8a3d] flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span className="uppercase">
                    {pageContext.locale || "tr"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Language Dropdown */}
                <div className="absolute top-full right-0 mt-0 w-36 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {locales.map((locale) => (
                      <Link
                        key={locale}
                        href={pageContext.urlPathname}
                        locale={locale}
                        className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                          pageContext.locale === locale
                            ? "bg-red-50 text-[#ff8a3d] font-semibold"
                            : "text-gray-800 hover:text-[#ff8a3d]"
                        }`}
                      >
                        <span className="text-lg">
