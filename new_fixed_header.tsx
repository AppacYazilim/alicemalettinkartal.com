        <div className="w-full h-full flex items-center justify-between px-0">
          <div className="flex h-full items-center justify-between w-full">
            {/* Logo - Sol tarafta */}
            <div
              className={`h-full border-r px-4 md:px-8 flex items-center shrink-0 transition-colors duration-300 ${
                true ? "border-gray-200" : "border-white/20"
              }`}
            >
              <Link
                href="/"
                className="transition-opacity hover:opacity-80 relative flex items-center h-full"
              >
                <img
                  src={beyazLogo}
                  alt="Kartal İmalat Logo"
                  className={`h-16 md:h-20 object-contain transition-opacity duration-300 absolute left-0 ${
                    true ? "opacity-0" : "opacity-100"
                  }`}
                />
                <img
                  src={eagleLogo}
                  alt="Kartal İmalat Logo"
                  className={`h-16 md:h-20 object-contain transition-opacity duration-300 ${
                    true ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            </div>

            {/* Navigation - Merkez/Sağda */}
            <div className="hidden md:flex flex-1 items-center justify-end md:justify-center px-4">
              <nav className="flex items-center h-full gap-2">
                <Link
                  href="/"
                  className={`text-lg font-medium transition-colors px-5 py-2 flex items-center h-full ${
                    true
                      ? "text-gray-800 hover:text-black hover:bg-gray-50 border-b-4 border-transparent hover:border-[#ff8a3d]"
                      : "text-white/80 hover:text-white"
                  }`}
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
                  className={`text-lg font-medium transition-colors px-5 py-2 h-full flex items-center ${
                    true
                      ? "text-gray-800 hover:text-black hover:bg-gray-50 border-b-4 border-transparent hover:border-[#ff8a3d]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <LocaleText>Kurumsal</LocaleText>
                </Link>
                <div className="relative group h-full flex items-center">
                  <button
                    className={`text-lg font-medium transition-colors px-5 py-2 flex items-center gap-1 h-full ${
                      true
                        ? "text-gray-800 hover:text-black hover:bg-gray-50 border-b-4 border-transparent group-hover:border-[#ff8a3d]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
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
                        className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] hover:bg-gray-50 font-medium transition-colors"
                      >
                        <LocaleText>Tüm Ürünler</LocaleText>
                      </Link>
                      <Link
                        href="/sertifikalar"
                        className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] hover:bg-gray-50 transition-colors"
                      >
                        <LocaleText>Sertifikalar</LocaleText>
                      </Link>
                      <Link
                        href="/tanitim-videosu"
                        className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] hover:bg-gray-50 transition-colors"
                      >
                        <LocaleText>Tanıtım Videosu</LocaleText>
                      </Link>
                      <Link
                        href="/ekibimiz"
                        className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] hover:bg-gray-50 transition-colors"
                      >
                        <LocaleText>Ekibimiz</LocaleText>
                      </Link>
                      <Link
                        href="/iletisim"
                        className="block px-4 py-2.5 text-gray-800 hover:text-[#ff8a3d] hover:bg-gray-50 transition-colors"
                      >
                        <LocaleText>İletişim</LocaleText>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/iletisim"
                  className={`text-lg font-medium transition-colors px-5 py-2 h-full flex items-center ${
                    true
                      ? "text-gray-800 hover:text-black hover:bg-gray-50 border-b-4 border-transparent hover:border-[#ff8a3d]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <LocaleText>İletişim</LocaleText>
                </Link>
              </nav>
            </div>

            {/* Sağ Actions - Language Switcher & Search */}
            <div className="hidden md:flex h-full items-center shrink-0">
              {/* Language Switcher */}
              <div
                className={`relative group h-full flex items-center border-l transition-colors duration-300 ${
                  true ? "border-gray-200" : "border-white/20"
                }`}
              >
                <button
                  className={`font-medium transition-colors px-6 h-full flex items-center gap-2 border-r ${
                    true
                      ? "text-gray-800 hover:text-black hover:bg-gray-50 border-gray-200"
                      : "text-white/80 hover:text-white border-white/20"
                  }`}
                >
                  <span className="uppercase text-lg">{pageContext.locale || "tr"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Language Dropdown */}
                <div className="absolute top-full right-0 mt-0 w-36 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                  <div className="py-2">
                    {locales.map((locale) => (
                      <Link
                        key={locale}
                        href={pageContext.urlPathname}
                        locale={locale}
                        className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                          pageContext.locale === locale
                            ? "bg-red-50 text-[#ff8a3d] font-semibold"
                            : "text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-lg">{languages[locale]?.flag}</span>
                        <span className="font-medium">{languages[locale]?.name}</span>
                        {pageContext.locale === locale && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Search Icon Placeholder */}
              <button
                className={`h-full px-6 transition-colors flex items-center justify-center ${
                  true
                    ? "text-gray-800 hover:text-black hover:bg-gray-50"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button  */}
            <div className="md:hidden pr-4 flex items-center h-full">
              <button
                className={`p-2 transition-colors ${
                  true ? "text-gray-800 hover:text-black" : "text-white hover:text-gray-300"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={
                  isMobileMenuOpen
                    ? translate("aria.closeMenu", pageContext.locale || "tr")
                    : translate("aria.openMenu", pageContext.locale || "tr")
                }
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
