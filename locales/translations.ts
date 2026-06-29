// spellcheck-ignore:file

/**
 * Path Translation Pattern:
 *
 * The default locale is Turkish (tr). For path translations, we define two entries:
 *
 * 1. Turkish path (primary): Maps to both Turkish and English versions
 *    "/urunler/eev-v-serisi": {
 *      tr: "/urunler/eev-v-serisi",  // Turkish path stays as-is
 *      en: "/products/eev-v-series", // English translation of the path
 *    }
 *
 * 2. English path (reverse lookup): Always returns the Turkish path
 *    "/products/eev-v-series": {
 *      tr: "/urunler/eev-v-serisi",  // Returns Turkish path
 *      en: "/urunler/eev-v-serisi",  // Also returns Turkish path (for internal routing)
 *    }
 *
 * This pattern ensures:
 * - Turkish URLs work without locale prefix: /urunler/eev-v-serisi
 * - English URLs use /en prefix with translated path: /en/products/eev-v-series
 * - Reverse lookups from English paths always resolve to the Turkish filesystem path
 */

export const translations: Record<string, Record<string, string>> = {
  "/kurumsal": {
    tr: "/kurumsal",
    en: "/about-us",
    ru: "/o-kompanii",
  },
  "/gundem": {
    tr: "/gundem",
    en: "/news",
    ru: "/novosti",
  },
  "/news": {
    tr: "/gundem",
    en: "/gundem",
    ru: "/gundem",
  },
  "/novosti": {
    tr: "/gundem",
    en: "/gundem",
    ru: "/gundem",
  },
  "/about-us": {
    tr: "/kurumsal",
    en: "/kurumsal",
    ru: "/kurumsal",
  },
  "/o-kompanii": {
    tr: "/kurumsal",
    en: "/kurumsal",
    ru: "/kurumsal",
  },

  // Product Pages Path Translations
  "/urunler/eev-v-serisi": {
    tr: "/urunler/eev-v-serisi",
    en: "/products/eev-v-series",
    ru: "/produkty/eev-v-seriya",
  },
  "/products/eev-v-series": {
    tr: "/urunler/eev-v-serisi",
    en: "/urunler/eev-v-serisi",
    ru: "/urunler/eev-v-serisi",
  },
  "/produkty/eev-v-seriya": {
    tr: "/urunler/eev-v-serisi",
    en: "/urunler/eev-v-serisi",
    ru: "/urunler/eev-v-serisi",
  },

  "/urunler/eev-vlm-serisi": {
    tr: "/urunler/eev-vlm-serisi",
    en: "/products/eev-vlm-series",
    ru: "/produkty/eev-vlm-seriya",
  },

  "/products/eev-vlm-series": {
    tr: "/urunler/eev-vlm-serisi",
    en: "/urunler/eev-vlm-serisi",
    ru: "/urunler/eev-vlm-serisi",
  },
  "/produkty/eev-vlm-seriya": {
    tr: "/urunler/eev-vlm-serisi",
    en: "/urunler/eev-vlm-serisi",
    ru: "/urunler/eev-vlm-serisi",
  },
  "/urunler/eev-hl-serisi": {
    tr: "/urunler/eev-hl-serisi",
    en: "/products/eev-hl-series",
    ru: "/produkty/eev-hl-seriya",
  },
  "/products/eev-hl-series": {
    tr: "/urunler/eev-hl-serisi",
    en: "/urunler/eev-hl-serisi",
    ru: "/urunler/eev-hl-serisi",
  },
  "/produkty/eev-hl-seriya": {
    tr: "/urunler/eev-hl-serisi",
    en: "/urunler/eev-hl-serisi",
    ru: "/urunler/eev-hl-serisi",
  },
  "/urunler/eev-ufl-serisi": {
    tr: "/urunler/eev-ufl-serisi",
    en: "/products/eev-ufl-series",
    ru: "/produkty/eev-ufl-seriya",
  },
  "/products/eev-ufl-series": {
    tr: "/urunler/eev-ufl-serisi",
    en: "/urunler/eev-ufl-serisi",
    ru: "/urunler/eev-ufl-serisi",
  },
  "/produkty/eev-ufl-seriya": {
    tr: "/urunler/eev-ufl-serisi",
    en: "/urunler/eev-ufl-serisi",
    ru: "/urunler/eev-ufl-serisi",
  },

  "Kurumsal - KARTAL GROUP": {
    tr: "Kurumsal - KARTAL GROUP",
    en: "Corporate - KARTAL GROUP",
    ru: "О компании - KARTAL GROUP",
  },
  "Gündem - KARTAL GROUP": {
    tr: "Gündem - KARTAL GROUP",
    en: "News - KARTAL GROUP",
    ru: "Новости - KARTAL GROUP",
  },

  // Stats
  "stats.experience": {
    tr: "Yıllık Tecrübe",
    en: "Years of Experience",
    ru: "Лет опыта",
  },
  "stats.area": {
    tr: "Tesis Alanı (m²)",
    en: "Facility Area (sqm)",
    ru: "Площадь объекта (м²)",
  },
  "stats.export": {
    tr: "İhracat Yapılan Ülke",
    en: "Export Countries",
    ru: "Стран экспорта",
  },
  "stats.tanks": {
    tr: "Üretilen Tank",
    en: "Produced Tanks",
    ru: "Произведено танков",
  },
  "FAALİYET ALANLARI": {
    tr: "FAALİYET ALANLARI",
    en: "ACTIVITY AREAS",
    ru: "ОБЛАСТИ ДЕЯТЕЛЬНОСТИ",
  },
  "Farklı sektörlere güçlü üretim altyapımızla hizmet veriyoruz": {
    tr: "Farklı sektörlere güçlü üretim altyapımızla hizmet veriyoruz",
    en: "We serve different industries with our strong production infrastructure",
    ru: "Мы обслуживаем разные отрасли благодаря нашей мощной производственной инфраструктуре",
  },
  "Her faaliyet alanını aynı güçlü üretim disiplini ve mühendislik yaklaşımıyla destekliyoruz.": {
    tr: "Her faaliyet alanını aynı güçlü üretim disiplini ve mühendislik yaklaşımıyla destekliyoruz.",
    en: "We support every field of activity with the same strong production discipline and engineering approach.",
    ru: "Мы поддерживаем каждое направление деятельности одинаково сильной производственной дисциплиной и инженерным подходом.",
  },
  "Metal Sanayi": {
    tr: "Metal Sanayi",
    en: "Metal Industry",
    ru: "Металлургическая промышленность",
  },
  "Metal Sanayi ürünleri hakkında bilgi alın.": {
    tr: "Metal Sanayi ürünleri hakkında bilgi alın.",
    en: "Learn more about metal industry products.",
    ru: "Узнайте больше о продукции для металлургической промышленности.",
  },
  "Savunma Sanayisi": {
    tr: "Savunma Sanayisi",
    en: "Defense Industry",
    ru: "Оборонная промышленность",
  },
  "Savunma sanayisi ürünleri hakkında bilgi alın.": {
    tr: "Savunma sanayisi ürünleri hakkında bilgi alın.",
    en: "Learn more about defense industry products.",
    ru: "Узнайте больше о продукции для оборонной промышленности.",
  },
  "İmalat": {
    tr: "İmalat",
    en: "Manufacturing",
    ru: "Производство",
  },
  "İmalat ürünleri hakkında bilgi alın.": {
    tr: "İmalat ürünleri hakkında bilgi alın.",
    en: "Learn more about manufacturing products.",
    ru: "Узнайте больше о производственной продукции.",
  },
  "Mühendislik": {
    tr: "Mühendislik",
    en: "Engineering",
    ru: "Инженерия",
  },
  "Mühendislik hizmetleri hakkında bilgi alın.": {
    tr: "Mühendislik hizmetleri hakkında bilgi alın.",
    en: "Learn more about engineering services.",
    ru: "Узнайте больше об инженерных услугах.",
  },

  // Kurumsal Page Translations
  Kurumsal: {
    tr: "Kurumsal",
    en: "Corporate",
    ru: "О компании",
  },
  HAKKIMIZDA: {
    tr: "HAKKIMIZDA",
    en: "ABOUT US",
    ru: "О НАС",
  },
  "By Kartal Bombe & Basınçlı Kaplar A.Ş": {
    tr: "By Kartal Bombe & Basınçlı Kaplar A.Ş",
    en: "By Kartal Bombe & Pressure Vessels Inc.",
    ru: "Kartal Bombe & Сосуды под давлением",
  },
  "kurumsal.mainTitle": {
    tr: "1945 yılından beri metali şekillendirerek büyüyor, gelişiyor, araştırıyor ve yatırım yapmaya devam ediyoruz.",
    en: "Since 1945, we have been growing, developing, researching and continuing to invest by shaping metal.",
    ru: "С 1945 года мы растём, развиваемся, исследуем и продолжаем инвестировать, формируя металл.",
  },
  "kurumsal.paragraph1": {
    tr: "Şirketimizin köklü geçmişi bugün 4. nesil ile kendini yenileyerek yeni markalarıyla hız kesmeden yoluna devam ediyor.",
    en: "Our company's deep-rooted history continues today with the 4th generation, renewing itself with new brands without slowing down.",
    ru: "Богатая история нашей компании продолжается сегодня с 4-м поколением, обновляясь новыми брендами без замедления.",
  },
  "kurumsal.paragraph2": {
    tr: "KARTAL GROUP, bu yenilikçi bakış açısıyla yapılandırılmış yeni bir marka olarak Kartal Group çatısı altında Genleşme Hidrofor Tankları, Basınçlı Kaplar ve Ağır Ekipmanlar sektöründe hizmet vermeye başlamıştır.",
    en: "KARTAL GROUP has started to serve in the Expansion Hydrophore Tanks, Pressure Vessels and Heavy Equipment sector under the Kartal Group umbrella as a new brand structured with this innovative perspective.",
    ru: "KARTAL GROUP начал работать в секторе расширительных гидрофорных баков, сосудов под давлением и тяжёлого оборудования под эгидой Kartal Group как новый бренд, структурированный с этой инновационной перспективой.",
  },
  "kurumsal.paragraph3": {
    tr: "Yüksek kalitede hizmet ve üretim prensibi ile yola çıkan KARTAL GROUP, diğer grup şirketlerinde olduğu gibi tüm üretim prosesini kendi bünyesinde, üstün mühendislik çalışmaları ile gerçekleştirmektedir. Hem satış öncesi hem de satış sonrası destek hizmetlerinde müşteri memnuniyetindeki başarımız, bakış açımız ve bunu sağlayan yatırımdan beslenmektedir.",
    en: "Starting with the principle of high-quality service and production, KARTAL GROUP carries out the entire production process in-house with superior engineering work, just like other group companies. Our success in customer satisfaction in both pre-sales and after-sales support services is fed by our perspective and the investment that provides this.",
    ru: "Начав с принципа высококачественного обслуживания и производства, KARTAL GROUP осуществляет весь производственный процесс собственными силами с превосходной инженерной работой, как и другие компании группы. Наш успех в удовлетворении клиентов как в предпродажном, так и в послепродажном обслуживании питается нашим видением и инвестициями, которые это обеспечивают.",
  },
  "kurumsal.paragraph4": {
    tr: "Türk mühendislerinin yılların vermiş olduğu tecrübeyle geliştirdiği tamamen yerli ürünlerimiz, gerekli kalite belgelerine ve uluslararası akreditasyonlara sahiptir.",
    en: "Our completely domestic products, developed by Turkish engineers with years of experience, have the necessary quality certificates and international accreditations.",
    ru: "Наша полностью отечественная продукция, разработанная турецкими инженерами с многолетним опытом, имеет необходимые сертификаты качества и международные аккредитации.",
  },
  "facilities.subtitle": {
    tr: "ÜRETİM TESİSİMİZ",
    en: "OUR PRODUCTION FACILITY",
    ru: "НАШ ПРОИЗВОДСТВЕННЫЙ ЗАВОД",
  },
  "facilities.item1.title": {
    tr: "İzmit Rafinerisi",
    en: "Izmit Refinery",
    ru: "Измитский нефтеперерабатывающий завод",
  },
  "facilities.item1.desc": {
    tr: "İzmit Rafinerisi, 1961 yılında 1 milyon ton/yıl ham petrol işleme kapasitesi ile üretime başlamıştır. Yıllar içinde gerçekleştirilen önemli kapasite artırımları ve dönüşüm ünite yatırımları sonucunda rafinerinin tasarım kapasitesi, 2019 yılında 11,3 milyon ton/yıl olarak tescil ettirilmiştir.",
    en: "Izmit Refinery started production in 1961 with a crude oil processing capacity of 1 million tons/year. As a result of significant capacity increases and conversion unit investments over the years, the refinery's design capacity was registered as 11.3 million tons/year in 2019.",
    ru: "Измитский нефтеперерабатывающий завод начал производство в 1961 году с мощностью переработки сырой нефти 1 миллион тонн в год. В результате значительного увеличения мощности и инвестиций в установки конверсии на протяжении многих лет проектная мощность завода в 2019 году составила 11,3 миллиона тонн в год.",
  },
  "facilities.item2.title": {
    tr: "KARTAL GROUP Mühendislik Holü",
    en: "Kartal Manufacturing Engineering Hall",
    ru: "Инженерный зал Kartal",
  },
  "facilities.item2.desc": {
    tr: "Güneş panelli yeni holümüz, sürdürülebilir enerji kaynaklarını kullanarak üretim kapasitemizi çevreci bir yaklaşımla artırıyor.",
    en: "Our new hall with solar panels increases our production capacity with an environmentally friendly approach by using sustainable energy sources.",
    ru: "Наш новый зал с солнечными панелями увеличивает наши производственные мощности благодаря экологически безопасному подходу.",
  },
  "kurumsal.paragraph5": {
    tr: "AR-GE sürekliliği sayesinde; ekonomik anlamda, yüksek verim sağlayan ve yenilikçi bir bakış açısına sahibiz.",
    en: "Thanks to R&D continuity; we have an economically efficient and innovative perspective.",
    ru: "Благодаря непрерывности НИОКР; мы имеем экономически эффективный и инновационный взгляд.",
  },
  "Yıldan Fazla Tecrübemizle...": {
    tr: "Yıldan Fazla Tecrübemizle...",
    en: "Years of Experience...",
    ru: "Более лет опыта...",
  },
  "Güven Odaklı Yüksek Kalite": {
    tr: "Güven Odaklı Yüksek Kalite",
    en: "Trust-Focused High Quality",
    ru: "Высокое качество, ориентированное на доверие",
  },
  MİSYONUMUZ: {
    tr: "MİSYONUMUZ",
    en: "OUR MISSION",
    ru: "НАША МИССИЯ",
  },
  "kurumsal.mission": {
    tr: "Yarım asrı aşkın süredir edindiğimiz bilgi ve tecrübe ile başta Türk sanayisinin ihtiyacı olan genleşme tankları üretiyoruz.",
    en: "With the knowledge and experience we have acquired for more than half a century, we produce expansion tanks, primarily needed by Turkish industry.",
    ru: "Благодаря знаниям и опыту, накопленным более чем за полвека, мы производим расширительные баки, в первую очередь необходимые турецкой промышленности.",
  },
  VİZYON: {
    tr: "VİZYON",
    en: "VISION",
    ru: "ВИДЕНИЕ",
  },
  "kurumsal.vision": {
    tr: "Daima üreten, yatırımları ile büyüyen ve Türkiye'ye değer katan küresel bir aktör olmak.",
    en: "To be a global actor that always produces, grows with its investments and adds value to Turkey.",
    ru: "Быть глобальным игроком, который всегда производит, растёт благодаря инвестициям и добавляет ценность Турции.",
  },
  HEDEFİMİZ: {
    tr: "HEDEFİMİZ",
    en: "OUR GOAL",
    ru: "НАША ЦЕЛЬ",
  },
  "kurumsal.goal": {
    tr: "Sahip olduğumuz saygınlıktan ödün vermeden faaliyet gösterdiğimiz her alanda global oyuncu olmak ve Türk sanayisinin gelişimine öncü firma olarak katkıda bulunmak.",
    en: "To be a global player in every field we operate without compromising our reputation and to contribute to the development of Turkish industry as a pioneering company.",
    ru: "Быть глобальным игроком во всех областях нашей деятельности, не ставя под угрозу нашу репутацию, и вносить вклад в развитие турецкой промышленности как компания-первопроходец.",
  },
  DEĞERLERİMİZ: {
    tr: "DEĞERLERİMİZ",
    en: "OUR VALUES",
    ru: "НАШИ ЦЕННОСТИ",
  },
  LİDERLİK: {
    tr: "LİDERLİK",
    en: "LEADERSHIP",
    ru: "ЛИДЕРСТВО",
  },
  "kurumsal.leadership": {
    tr: "Var olduğumuz tüm sektörlerde öncü ve lider firma olmak için durmadan üreteceğiz.",
    en: "We will continue to produce non-stop to be a pioneer and leader in all sectors we exist.",
    ru: "Мы будем продолжать производить без остановки, чтобы быть первопроходцем и лидером во всех секторах нашего присутствия.",
  },
  "KALİTE VE PERFORMANS": {
    tr: "KALİTE VE PERFORMANS",
    en: "QUALITY AND PERFORMANCE",
    ru: "КАЧЕСТВО И ПРОИЗВОДИТЕЛЬНОСТЬ",
  },
  "kurumsal.quality": {
    tr: "Ürün ve hizmetlerimizi; uluslararası belirlenen standartlarda müşterilerimize sunmak ve takip ettiğimiz parametreler ile performansımızı artırmak için çalışacağız.",
    en: "We will work to offer our products and services to our customers at internationally determined standards and to increase our performance with the parameters we follow.",
    ru: "Мы будем работать над тем, чтобы предлагать нашу продукцию и услуги клиентам по международным стандартам и повышать нашу производительность с помощью отслеживаемых параметров.",
  },
  "GELİŞİM, DEĞİŞİM": {
    tr: "GELİŞİM, DEĞİŞİM",
    en: "DEVELOPMENT, CHANGE",
    ru: "РАЗВИТИЕ, ИЗМЕНЕНИЕ",
  },
  "kurumsal.development": {
    tr: "Sektörümüzdeki ve teknolojideki gelişmeleri/yenilikleri takip ederek yeteneklerimizi geliştirecek, firmalarımızın güncel kalmasını sağlayacağız.",
    en: "We will develop our skills by following the developments/innovations in our sector and technology, and ensure that our companies stay up-to-date.",
    ru: "Мы будем развивать наши навыки, следя за разработками/инновациями в нашем секторе и технологиях, и обеспечим актуальность наших компаний.",
  },
  "kurumsal.founderTitle": {
    tr: "KURUCUMUZ",
    en: "OUR FOUNDER",
    ru: "НАШ ОСНОВАТЕЛЬ",
  },
  "kurumsal.founderName": {
    tr: "Mehmet KARTAL",
    en: "Mehmet KARTAL",
    ru: "Мехмет КАРТАЛ",
  },
  "kurumsal.founderText": {
    tr: "1940’lı yıllarda Topkapı Perşembe Pazarında iş hayatına başlayan, edindiği bilgi ve tecrübe ile “KARTAL PRES” firmasını kurarak bugün gelinen noktaya ışık tutan, sanayii aşığı kurucumuz merhum Mehmet KARTAL’ ı saygı ve özlemle anıyoruz.",
    en: "Starting his business life in Topkapı Perşembe Pazarı in the 1940s, we remember with respect and longing our late founder Mehmet KARTAL, a lover of industry, who shed light on the point reached today by establishing the 'KARTAL PRES' company with his knowledge and experience.",
    ru: "Начав свою деловую жизнь на рынке Топкапы Першембе в 1940-х годах, мы с уважением и тоской вспоминаем нашего покойного основателя Мехмета КАРТАЛА, любителя промышленности, который пролил свет на достигнутый сегодня уровень, основав компанию «KARTAL PRES» на основе своих знаний и опыта.",
  },
  "BASIN KİTİ": {
    tr: "BASIN KİTİ",
    en: "PRESS KIT",
    ru: "ПРЕСС-КИТ",
  },
  "LOGOMUZU İNDİRİN": {
    tr: "LOGOMUZU İNDİRİN",
    en: "DOWNLOAD OUR LOGO",
    ru: "СКАЧАТЬ НАШ ЛОГОТИП",
  },
  "Zip Dosyasını İndir": {
    tr: "Zip Dosyasını İndir",
    en: "Download Zip File",
    ru: "Скачать Zip-файл",
  },
  Misyonumuz: {
    tr: "Misyonumuz",
    en: "Our Mission",
    ru: "Наша миссия",
  },

  // İletişim Page Translations
  "/iletisim": {
    tr: "/iletisim",
    en: "/contact",
    ru: "/kontakty",
  },
  "/contact": {
    tr: "/iletisim",
    en: "/iletisim",
    ru: "/iletisim",
  },
  "/kontakty": {
    tr: "/iletisim",
    en: "/iletisim",
    ru: "/iletisim",
  },
  İletişim: {
    tr: "İletişim",
    en: "Contact",
    ru: "Контакты",
  },
  "Bizimle iletişime geçin": {
    tr: "Bizimle iletişime geçin",
    en: "Get in touch with us",
    ru: "Свяжитесь с нами",
  },
  "KARTAL GROUP": {
    tr: "KARTAL GROUP",
    en: "KARTAL GROUP",
    ru: "KARTAL GROUP",
  },
  "GENLEŞME TANKLARI": {
    tr: "GENLEŞME TANKLARI",
    en: "EXPANSION TANKS",
    ru: "РАСШИРИТЕЛЬНЫЕ БАКИ",
  },
  "BASINÇLI KAPLAR": {
    tr: "BASINÇLI KAPLAR",
    en: "PRESSURE VESSELS",
    ru: "СОСУДЫ ПОД ДАВЛЕНИЕМ",
  },
  Telefon: {
    tr: "Telefon",
    en: "Phone",
    ru: "Телефон",
  },
  Email: {
    tr: "Email",
    en: "Email",
    ru: "Электронная почта",
  },
  "Fabrika Adresimiz": {
    tr: "Fabrika Adresimiz",
    en: "Our Factory Address",
    ru: "Адрес нашего завода",
  },
  "Adresimiz": {
    tr: "Adresimiz",
    en: "Our Address",
    ru: "Наш адрес",
  },
  "iletisim.address": {
    tr: "Dilovası O.S.B 4. Kısım Ceyhan Caddesi No.25 Gebze/KOCAELİ - TURKEY",
    en: "Dilovası O.S.B 4. Kısım Ceyhan Caddesi No.25 Gebze/KOCAELİ - TURKEY",
    ru: "Dilovası O.S.B 4. Kısım Ceyhan Caddesi No.25 Gebze/KOCAELİ - TURKEY",
  },
  "Bize Ulaşın": {
    tr: "Bize Ulaşın",
    en: "Contact Us",
    ru: "Связаться с нами",
  },
  "Sorularınız için bizimle iletişime geçebilirsiniz": {
    tr: "Sorularınız için bizimle iletişime geçebilirsiniz",
    en: "You can contact us for your questions",
    ru: "Вы можете связаться с нами по вашим вопросам",
  },
  "Ad Soyad": {
    tr: "Ad Soyad",
    en: "Full Name",
    ru: "ФИО",
  },
  "Adınız Soyadınız": {
    tr: "Adınız Soyadınız",
    en: "Your Full Name",
    ru: "Ваше ФИО",
  },
  "E-posta": {
    tr: "E-posta",
    en: "Email",
    ru: "Электронная почта",
  },
  Konu: {
    tr: "Konu",
    en: "Subject",
    ru: "Тема",
  },
  "Mesaj konunuz": {
    tr: "Mesaj konunuz",
    en: "Your message subject",
    ru: "Тема вашего сообщения",
  },
  Mesajınız: {
    tr: "Mesajınız",
    en: "Your Message",
    ru: "Ваше сообщение",
  },
  "Mesajınızı buraya yazın...": {
    tr: "Mesajınızı buraya yazın...",
    en: "Write your message here...",
    ru: "Напишите ваше сообщение здесь...",
  },
  "Mesaj Gönder": {
    tr: "Mesaj Gönder",
    en: "Send Message",
    ru: "Отправить сообщение",
  },
  "ornek@email.com": {
    tr: "ornek@email.com",
    en: "example@email.com",
    ru: "primer@email.com",
  },
  "+90 5XX XXX XX XX": {
    tr: "+90 5XX XXX XX XX",
    en: "+90 5XX XXX XX XX",
    ru: "+90 5XX XXX XX XX",
  },

  // Form validation messages
  "Bu alan zorunludur": {
    tr: "Bu alan zorunludur",
    en: "This field is required",
    ru: "Это поле обязательно",
  },
  "Ad en az 2 karakter olmalıdır": {
    tr: "Ad en az 2 karakter olmalıdır",
    en: "Name must be at least 2 characters",
    ru: "Имя должно содержать не менее 2 символов",
  },
  "Geçerli bir e-posta adresi girin": {
    tr: "Geçerli bir e-posta adresi girin",
    en: "Please enter a valid email address",
    ru: "Введите действительный адрес электронной почты",
  },
  "Geçerli bir telefon numarası girin": {
    tr: "Geçerli bir telefon numarası girin",
    en: "Please enter a valid phone number",
    ru: "Введите действительный номер телефона",
  },
  "Mesaj en az 10 karakter olmalıdır": {
    tr: "Mesaj en az 10 karakter olmalıdır",
    en: "Message must be at least 10 characters",
    ru: "Сообщение должно содержать не менее 10 символов",
  },
  "Lütfen robot olmadığınızı doğrulayın": {
    tr: "Lütfen robot olmadığınızı doğrulayın",
    en: "Please verify that you are not a robot",
    ru: "Пожалуйста, подтвердите, что вы не робот",
  },
  "Doğrulama başarısız oldu": {
    tr: "Doğrulama başarısız oldu",
    en: "Verification failed",
    ru: "Проверка не удалась",
  },
  "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.": {
    tr: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
    en: "Your message has been sent successfully. We will get back to you as soon as possible.",
    ru: "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
  },
  "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.": {
    tr: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
    en: "An error occurred while sending the message. Please try again.",
    ru: "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.",
  },
  "Gönderiliyor...": {
    tr: "Gönderiliyor...",
    en: "Sending...",
    ru: "Отправка...",
  },

  // Certificates Page Translations
  "/sertifikalar": {
    tr: "/sertifikalar",
    en: "/certificates",
    ru: "/sertifikaty",
  },
  "/certificates": {
    tr: "/sertifikalar",
    en: "/sertifikalar",
    ru: "/sertifikalar",
  },
  "/sertifikaty": {
    tr: "/sertifikalar",
    en: "/sertifikalar",
    ru: "/sertifikalar",
  },
  Sertifikalarımız: {
    tr: "Sertifikalarımız",
    en: "Our Certificates",
    ru: "Наши сертификаты",
  },
  "Sertifikalarımız ve Kalite Belgelerimiz": {
    tr: "Sertifikalarımız ve Kalite Belgelerimiz",
    en: "Our Certificates and Quality Documents",
    ru: "Наши сертификаты и документы качества",
  },
  "certificates.paragraph1": {
    tr: 'Kalite denildiği zaman akla ilk gelen marka olma özelliğini kurulduğu ilk günden bugüne dek hep koruyan ve geliştiren KARTAL GROUP, sürekli gelişimin dünya üzerindeki en büyük örneklerindedir. "Toplam Kalite Yönetimi" anlayışı ile üretim yapan KARTAL GROUP, çalışanlarını sürekli eğiterek, kalite çemberinin birer parçası haline getirmektedir.',
    en: 'KARTAL GROUP, which has always preserved and developed its characteristic of being the first brand that comes to mind when quality is mentioned since its founding, is one of the greatest examples of continuous development in the world. KARTAL GROUP, which produces with the "Total Quality Management" approach, continuously trains its employees, making them part of the quality circle.',
    ru: 'KARTAL GROUP, который с момента основания всегда сохранял и развивал свою характеристику первого бренда, который приходит на ум при упоминании качества, является одним из величайших примеров непрерывного развития в мире. KARTAL GROUP, производящий по подходу "Всеобщего управления качеством", постоянно обучает своих сотрудников, делая их частью круга качества.',
  },
  "certificates.paragraph2": {
    tr: "Öncelikle çalışan kalitesi ile gelişimin sürekli olacağına inanılan KARTAL GROUP'da herkes yaptığı işin kırmızı baretlisidir. Dünyanın her noktasına ürün ve hizmet sunan KARTAL GROUP, müşteri memnuniyetine önem vererek sürekli gelişimini şekillendirmektedir.",
    en: "At KARTAL GROUP, where it is believed that development will be continuous primarily through employee quality, everyone is the red helmet of their work. KARTAL GROUP, which offers products and services to every corner of the world, shapes its continuous development by valuing customer satisfaction.",
    ru: "В KARTAL GROUP, где считается, что развитие будет непрерывным в первую очередь благодаря качеству сотрудников, каждый является красной каской своей работы. KARTAL GROUP, предлагающий продукцию и услуги в каждый уголок мира, формирует своё непрерывное развитие, ценя удовлетворённость клиентов.",
  },
  "certificates.paragraph3": {
    tr: "Teknolojik yatırımların hiç hız kesmediği KARTAL GROUP'da, ortaya çıkan ürünler uluslararası standartlara göre üretilmektedir. Teknolojik yatırımların ve insan yatırımının mükemmel bileşkesi olarak üretilen ürünler, firmamız için gurur vericidir. Müşteri beklentilerini karşılamakla kalmayıp, hem kendimizi hem de sunduğumuz ürün ve hizmet ile ülkemizi geliştiriyoruz.",
    en: "At KARTAL GROUP, where technological investments never slow down, the resulting products are manufactured according to international standards. Products produced as a perfect combination of technological and human investment are a source of pride for our company. Not only do we meet customer expectations, but we also develop both ourselves and our country through the products and services we offer.",
    ru: "В KARTAL GROUP, где технологические инвестиции никогда не замедляются, производимая продукция изготавливается в соответствии с международными стандартами. Продукция, произведённая как идеальное сочетание технологических и человеческих инвестиций, является предметом гордости нашей компании. Мы не только оправдываем ожидания клиентов, но и развиваем себя и нашу страну через предлагаемые продукты и услуги.",
  },
  "certificates.paragraph4": {
    tr: "Her zaman ilkleri başaran KBS, KARTAL GROUP markası ile üretimlerini gerçekleştirirken sahip olduğu kalite belgeleri ile de küresel pazardaki en güçlü konuma sahiptir.",
    en: "KBS, which always achieves firsts, holds the strongest position in the global market with its quality certificates while carrying out its productions under the KARTAL GROUP brand.",
    ru: "KBS, который всегда достигает первенства, занимает сильнейшую позицию на мировом рынке со своими сертификатами качества, осуществляя производство под брендом KARTAL GROUP.",
  },
  "KALİTE BELGELERİMİZ": {
    tr: "KALİTE BELGELERİMİZ",
    en: "OUR QUALITY CERTIFICATES",
    ru: "НАШИ СЕРТИФИКАТЫ КАЧЕСТВА",
  },
  SERTİFİKALARIMIZ: {
    tr: "SERTİFİKALARIMIZ",
    en: "OUR CERTIFICATES",
    ru: "НАШИ СЕРТИФИКАТЫ",
  },
  "Uluslararası Standartlarda Üretim": {
    tr: "Uluslararası Standartlarda Üretim",
    en: "Production at International Standards",
    ru: "Производство по международным стандартам",
  },
  "certificates.cta": {
    tr: "KARTAL GROUP, sahip olduğu kalite belgeleri ile küresel pazarda güvenilir bir marka olmaya devam etmektedir.",
    en: "KARTAL GROUP continues to be a reliable brand in the global market with its quality certificates.",
    ru: "KARTAL GROUP продолжает оставаться надёжным брендом на мировом рынке благодаря своим сертификатам качества.",
  },

  // Products Page Translations
  "/urunler": {
    tr: "/urunler",
    en: "/products",
    ru: "/produkty",
  },
  "/endustriyel-cozumler": {
    tr: "/endustriyel-cozumler",
    en: "/industrial-solutions",
    ru: "/promyshlennye-resheniya",
  },
  "/products": {
    tr: "/urunler",
    en: "/urunler",
    ru: "/urunler",
  },
  "/industrial-solutions": {
    tr: "/endustriyel-cozumler",
    en: "/endustriyel-cozumler",
    ru: "/endustriyel-cozumler",
  },
  "/promyshlennye-resheniya": {
    tr: "/endustriyel-cozumler",
    en: "/endustriyel-cozumler",
    ru: "/endustriyel-cozumler",
  },
  "/produkty": {
    tr: "/products",
    en: "/products",
    ru: "/products",
  },
  "Genleşme ve Hidrofor Tankları": {
    tr: "Genleşme ve Hidrofor Tankları",
    en: "Expansion and Hydrophore Tanks",
    ru: "Расширительные и гидрофорные баки",
  },
  "GENLEŞME VE HİDROFOR TANK SERİLERİMİZ": {
    tr: "GENLEŞME VE HİDROFOR TANK SERİLERİMİZ",
    en: "OUR EXPANSION AND HYDROPHORE TANK SERIES",
    ru: "НАШИ СЕРИИ РАСШИРИТЕЛЬНЫХ И ГИДРОФОРНЫХ БАКОВ",
  },
  "DİĞER ÜRÜNLERİMİZ": {
    tr: "DİĞER ÜRÜNLERİMİZ",
    en: "OUR OTHER PRODUCTS",
    ru: "НАША ДРУГАЯ ПРОДУКЦИЯ",
  },

  // Catalog Page Translations

  "Expansion Vessels and Hydrophore Tanks Catalog": {
    tr: "Genleşme ve Hidrofor Tankları Kataloğu",
    en: "Expansion Vessels and Hydrophore Tanks Catalog",
    ru: "Каталог расширительных баков и гидрофорных баков",
  },
  "DİJİTAL KATALOG": {
    tr: "DİJİTAL KATALOG",
    en: "DIGITAL CATALOG",
    ru: "ЦИФРОВОЙ КАТАЛОГ",
  },
  "Ürün kataloğumuzu aşağıda inceleyebilir veya indirebilirsiniz": {
    tr: "Ürün kataloğumuzu aşağıda inceleyebilir veya indirebilirsiniz",
    en: "You can review or download our product catalog below",
    ru: "Вы можете просмотреть или скачать наш каталог продукции ниже",
  },
  "Kataloğu İndir (PDF)": {
    tr: "Kataloğu İndir (PDF)",
    en: "Download Catalog (PDF)",
    ru: "Скачать каталог (PDF)",
  },
  "PDF görüntüleyici çalışmıyor mu?": {
    tr: "PDF görüntüleyici çalışmıyor mu?",
    en: "PDF viewer not working?",
    ru: "PDF-просмотрщик не работает?",
  },
  "Yeni sekmede aç": {
    tr: "Yeni sekmede aç",
    en: "Open in new tab",
    ru: "Открыть в новой вкладке",
  },

  // Tanıtım Videosu Page Translations
  "/tanitim-videosu": {
    tr: "/tanitim-videosu",
    en: "/promotional-video",
    ru: "/prezentatsionnoe-video",
  },
  "/promotional-video": {
    tr: "/tanitim-videosu",
    en: "/tanitim-videosu",
    ru: "/tanitim-videosu",
  },
  "/prezentatsionnoe-video": {
    tr: "/tanitim-videosu",
    en: "/tanitim-videosu",
    ru: "/tanitim-videosu",
  },
  "Tanıtım Videosu": {
    tr: "Tanıtım Videosu",
    en: "Promotional Video",
    ru: "Презентационное видео",
  },
  "KARTAL GROUP TANITIM VİDEOSU": {
    tr: "KARTAL GROUP TANITIM VİDEOSU",
    en: "KARTAL GROUP PROMOTIONAL VIDEO",
    ru: "ПРЕЗЕНТАЦИОННОЕ ВИДЕО KARTAL GROUP",
  },
  "video.description": {
    tr: "KARTAL GROUP, Kartal Group çatısı altında Genleşme Hidrofor Tankları, Basınçlı Kaplar ve Ağır Ekipmanlar sektöründe yüksek kalitede hizmet ve üretim prensibi ile yoluna devam etmektedir. 1945 yılından beri metali şekillendirerek büyüyor, gelişiyor ve yatırım yapmaya devam ediyoruz.",
    en: "KARTAL GROUP continues its journey under the Kartal Group umbrella in the Expansion Hydrophore Tanks, Pressure Vessels and Heavy Equipment sector with the principle of high-quality service and production. Since 1945, we have been growing, developing and continuing to invest by shaping metal.",
    ru: "KARTAL GROUP продолжает свой путь под эгидой Kartal Group в секторе расширительных гидрофорных баков, сосудов под давлением и тяжёлого оборудования с принципом высококачественного обслуживания и производства. С 1945 года мы растём, развиваемся и продолжаем инвестировать, формируя металл.",
  },

  // Our Team Page Translations
  "/ekibimiz": {
    tr: "/ekibimiz",
    en: "/our-team",
    ru: "/nasha-komanda",
  },
  "/our-team": {
    tr: "/ekibimiz",
    en: "/ekibimiz",
    ru: "/ekibimiz",
  },
  "/nasha-komanda": {
    tr: "/ekibimiz",
    en: "/ekibimiz",
    ru: "/ekibimiz",
  },
  Ekibimiz: {
    tr: "Ekibimiz",
    en: "Our Team",
    ru: "Наша команда",
  },
  "Profesyonel Kadromuzla Yanınızdayız": {
    tr: "Profesyonel Kadromuzla Yanınızdayız",
    en: "We Are Here With Our Professional Team",
    ru: "Мы рядом с нашей профессиональной командой",
  },
  "KARTAL GROUP AİLESİ": {
    tr: "KARTAL GROUP AİLESİ",
    en: "KARTAL GROUP FAMILY",
    ru: "СЕМЬЯ KARTAL GROUP",
  },
  "Uzman Ekibimizle Tanışın": {
    tr: "Uzman Ekibimizle Tanışın",
    en: "Meet Our Expert Team",
    ru: "Познакомьтесь с нашей экспертной командой",
  },
  "team.description": {
    tr: "Yılların deneyimi ve uzmanlığı ile genleşme tankları ve basınçlı kaplar sektöründe müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.",
    en: "With years of experience and expertise, we work to provide the best service to our customers in the expansion tanks and pressure vessels sector.",
    ru: "Благодаря многолетнему опыту и экспертизе мы работаем над тем, чтобы предоставить лучший сервис нашим клиентам в секторе расширительных баков и сосудов под давлением.",
  },
  "Ekibimize Katılmak İster misiniz?": {
    tr: "Ekibimize Katılmak İster misiniz?",
    en: "Would You Like to Join Our Team?",
    ru: "Хотите присоединиться к нашей команде?",
  },
  "team.cta.description": {
    tr: "Dinamik ve yenilikçi ekibimizin bir parçası olmak için kariyer fırsatlarımızı inceleyin.",
    en: "Explore our career opportunities to be part of our dynamic and innovative team.",
    ru: "Изучите наши карьерные возможности, чтобы стать частью нашей динамичной и инновационной команды.",
  },

  // Team Member Titles
  "Genel Müdür Yardımcısı": {
    tr: "Genel Müdür Yardımcısı",
    en: "Deputy General Manager",
    ru: "Заместитель генерального директора",
  },
  "Satış Yöneticisi": {
    tr: "Satış Yöneticisi",
    en: "Sales Manager",
    ru: "Менеджер по продажам",
  },
  "Satış Bölüm Yöneticisi": {
    tr: "Satış Bölüm Yöneticisi",
    en: "Sales Department Manager",
    ru: "Руководитель отдела продаж",
  },
  "Satış Sorumlusu": {
    tr: "Satış Sorumlusu",
    en: "Sales Representative",
    ru: "Менеджер по продажам",
  },
  "Muhasebe Sorumlusu": {
    tr: "Muhasebe Sorumlusu",
    en: "Accounting Specialist",
    ru: "Специалист по бухгалтерии",
  },
  "ÜRETİM VE PLANLAMA SORUMLUSU": {
    tr: "ÜRETİM VE PLANLAMA SORUMLUSU",
    en: "PRODUCTION AND PLANNING SUPERVISOR",
    ru: "РУКОВОДИТЕЛЬ ПРОИЗВОДСТВА И ПЛАНИРОВАНИЯ",
  },
  "Kalite Kontrol Mühendisi": {
    tr: "Kalite Kontrol Mühendisi",
    en: "Quality Control Engineer",
    ru: "Инженер по контролю качества",
  },
  "Kalite Müdürü": {
    tr: "Kalite Müdürü",
    en: "Quality Manager",
    ru: "Менеджер по качеству",
  },
  "Fabrikasyon İmalat Yöneticisi": {
    tr: "Fabrikasyon İmalat Yöneticisi",
    en: "Fabrication Manufacturing Manager",
    ru: "Руководитель производственного изготовления",
  },
  "Yönetim Kurulu Üyesi": {
    tr: "Yönetim Kurulu Üyesi",
    en: "Board Member",
    ru: "Член совета директоров",
  },
  "Tasarım Mühendisi": {
    tr: "Tasarım Mühendisi",
    en: "Design Engineer",
    ru: "Инженер-конструктор",
  },
  "Proje Mühendisi": {
    tr: "Proje Mühendisi",
    en: "Project Engineer",
    ru: "Инженер проекта",
  },
  "Ekip Üyesi": {
    tr: "Ekip Üyesi",
    en: "Team Member",
    ru: "Член команды",
  },

  // Header Component Translations
  "Ana Sayfa": {
    tr: "Ana Sayfa",
    en: "Home",
    ru: "Главная",
  },
  "Tüm Ürünler": {
    tr: "Tüm Ürünler",
    en: "All Products",
    ru: "Вся продукция",
  },
  Katalog: {
    tr: "Katalog",
    en: "Catalog",
    ru: "Каталог",
  },
  Sertifikalar: {
    tr: "Sertifikalar",
    en: "Certificates",
    ru: "Сертификаты",
  },
  "Dil Seçimi": {
    tr: "Dil Seçimi",
    en: "Language Selection",
    ru: "Выбор языка",
  },

  // Footer Component Translations
  "Hızlı İletişim": {
    tr: "Hızlı İletişim",
    en: "Quick Contact",
    ru: "Быстрый контакт",
  },
  "GENLEŞME TANKI": {
    tr: "GENLEŞME TANKI",
    en: "EXPANSION TANK",
    ru: "РАСШИРИТЕЛЬНЫЙ БАК",
  },
  Menü: {
    tr: "Menü",
    en: "Menu",
    ru: "Меню",
  },
  Hakkımızda: {
    tr: "Hakkımızda",
    en: "About Us",
    ru: "О нас",
  },
  Kalitemiz: {
    tr: "Kalitemiz",
    en: "Our Quality",
    ru: "Наше качество",
  },
  "Tüm Hakları Saklıdır": {
    tr: "Tüm Hakları Saklıdır",
    en: "All Rights Reserved",
    ru: "Все права защищены",
  },

  // HeroSection Component Translations
  "Hidrofor Tankları": {
    tr: "Hidrofor Tankları",
    en: "Hydrophore Tanks",
    ru: "Гидрофорные баки",
  },
  "Endüstriyel Çözümler": {
    tr: "Endüstriyel Çözümler",
    en: "Industrial Solutions",
    ru: "Промышленные решения",
  },

  // ProductsSection Component Translations
  ÜRÜNLERİMİZ: {
    tr: "ÜRÜNLERİMİZ",
    en: "OUR PRODUCTS",
    ru: "НАША ПРОДУКЦИЯ",
  },
  "GENLEŞME VE HİDROFOR TANKLARI": {
    tr: "GENLEŞME VE HİDROFOR TANKLARI",
    en: "EXPANSION AND HYDROPHORE TANKS",
    ru: "РАСШИРИТЕЛЬНЫЕ И ГИДРОФОРНЫЕ БАКИ",
  },
  "KARTAL GROUP GENLEŞME VE HİDROFOR TANKLARI": {
    tr: "KARTAL GROUP GENLEŞME VE HİDROFOR TANKLARI",
    en: "KARTAL GROUP EXPANSION AND HYDROPHORE TANKS",
    ru: "РАСШИРИТЕЛЬНЫЕ И ГИДРОФОРНЫЕ БАКИ KARTAL GROUP",
  },
  DİKEY: {
    tr: "DİKEY",
    en: "VERTICAL",
    ru: "ВЕРТИКАЛЬНЫЙ",
  },
  "DİKEY AYAKLI": {
    tr: "DİKEY AYAKLI",
    en: "VERTICAL WITH LEGS",
    ru: "ВЕРТИКАЛЬНЫЙ НА НОЖКАХ",
  },
  YATAY: {
    tr: "YATAY",
    en: "HORIZONTAL",
    ru: "ГОРИЗОНТАЛЬНЫЙ",
  },
  "DEĞİŞTİRİLEBİLİR MEMBRANLI": {
    tr: "DEĞİŞTİRİLEBİLİR MEMBRANLI",
    en: "REPLACEABLE MEMBRANE",
    ru: "СО СМЕННОЙ МЕМБРАНОЙ",
  },
  "GENLEŞME ve HİDROFOR TANK SERİSİ": {
    tr: "GENLEŞME ve HİDROFOR TANK SERİSİ",
    en: "EXPANSION AND HYDROPHORE TANK SERIES",
    ru: "СЕРИЯ РАСШИРИТЕЛЬНЫХ И ГИДРОФОРНЫХ БАКОВ",
  },
  DETAYLAR: {
    tr: "DETAYLAR",
    en: "DETAILS",
    ru: "ПОДРОБНЕЕ",
  },

  // Product Series Names
  "EEV-VLM Serisi": {
    tr: "EEV-VLM Serisi",
    en: "EEV-VLM Series",
    ru: "Серия EEV-VLM",
  },
  "EEV-V Serisi": {
    tr: "EEV-V Serisi",
    en: "EEV-V Series",
    ru: "Серия EEV-V",
  },
  "EEV-HL Serisi": {
    tr: "EEV-HL Serisi",
    en: "EEV-HL Series",
    ru: "Серия EEV-HL",
  },
  "EEV-UFL Serisi": {
    tr: "EEV-UFL Serisi",
    en: "EEV-UFL Series",
    ru: "Серия EEV-UFL",
  },
  "EGVL Serisi": {
    tr: "EGVL Serisi",
    en: "EGVL Series",
    ru: "Серия EGVL",
  },
  "EGH Serisi": {
    tr: "EGH Serisi",
    en: "EGH Series",
    ru: "Серия EGH",
  },
  "EGV Serisi": {
    tr: "EGV Serisi",
    en: "EGV Series",
    ru: "Серия EGV",
  },
  "EGUF Serisi": {
    tr: "EGUF Serisi",
    en: "EGUF Series",
    ru: "Серия EGUF",
  },

  // Product Page Translations
  "6-10-16-25 Bar Tank Serisi": {
    tr: "6-10-16-25 Bar Tank Serisi",
    en: "6-10-16-25 Bar Tank Series",
    ru: "Серия баков 6-10-16-25 бар",
  },
  "DEĞİŞTİRİLEBİLİR MEMBRANLI KAPALI GENLEŞME ve HİDROFOR TANKLARI (DİKEY)": {
    tr: "DEĞİŞTİRİLEBİLİR MEMBRANLI KAPALI GENLEŞME ve HİDROFOR TANKLARI (DİKEY)",
    en: "REPLACEABLE MEMBRANE CLOSED EXPANSION AND HYDROPHORE TANKS (VERTICAL)",
    ru: "ЗАКРЫТЫЕ РАСШИРИТЕЛЬНЫЕ И ГИДРОФОРНЫЕ БАКИ СО СМЕННОЙ МЕМБРАНОЙ (ВЕРТИКАЛЬНЫЕ)",
  },
  "DEĞİŞTİRİLEBİLİR MEMBRANLI KAPALI GENLEŞME ve HİDROFOR TANKLARI (DİKEY AYAKLI)":
    {
      tr: "DEĞİŞTİRİLEBİLİR MEMBRANLI KAPALI GENLEŞME ve HİDROFOR TANKLARI (DİKEY AYAKLI)",
      en: "REPLACEABLE MEMBRANE CLOSED EXPANSION AND HYDROPHORE TANKS (VERTICAL WITH LEGS)",
      ru: "ЗАКРЫТЫЕ РАСШИРИТЕЛЬНЫЕ И ГИДРОФОРНЫЕ БАКИ СО СМЕННОЙ МЕМБРАНОЙ (ВЕРТИКАЛЬНЫЕ НА НОЖКАХ)",
    },
  "DEĞİŞTİRİLEBİLİR MEMBRANLI KAPALI GENLEŞME ve HİDROFOR TANKLARI (YATAY)": {
    tr: "DEĞİŞTİRİLEBİLİR MEMBRANLI KAPALI GENLEŞME ve HİDROFOR TANKLARI (YATAY)",
    en: "REPLACEABLE MEMBRANE CLOSED EXPANSION AND HYDROPHORE TANKS (HORIZONTAL)",
    ru: "ЗАКРЫТЫЕ РАСШИРИТЕЛЬНЫЕ И ГИДРОФОРНЫЕ БАКИ СО СМЕННОЙ МЕМБРАНОЙ (ГОРИЗОНТАЛЬНЫЕ)",
  },
  "TERS FLANŞLI DEĞİŞTİRİLEBİLİR MEMBRANLI KAPALI GENLEŞME ve HİDROFOR TANKLARI":
    {
      tr: "TERS FLANŞLI DEĞİŞTİRİLEBİLİR MEMBRANLI KAPALI GENLEŞME ve HİDROFOR TANKLARI",
      en: "REVERSE FLANGE REPLACEABLE MEMBRANE CLOSED EXPANSION AND HYDROPHORE TANKS",
      ru: "ЗАКРЫТЫЕ РАСШИРИТЕЛЬНЫЕ И ГИДРОФОРНЫЕ БАКИ СО СМЕННОЙ МЕМБРАНОЙ С ОБРАТНЫМ ФЛАНЦЕМ",
    },
  MODEL: {
    tr: "MODEL",
    en: "MODEL",
    ru: "МОДЕЛЬ",
  },
  "HACİM (LT)": {
    tr: "HACİM (LT)",
    en: "VOLUME (L)",
    ru: "ОБЪЁМ (Л)",
  },
  "MAKSİMUM İŞLETME BASINCI (BAR)": {
    tr: "MAKSİMUM İŞLETME BASINCI (BAR)",
    en: "MAXIMUM OPERATING PRESSURE (BAR)",
    ru: "МАКСИМАЛЬНОЕ РАБОЧЕЕ ДАВЛЕНИЕ (БАР)",
  },
  "ÇAP (mm)": {
    tr: "ÇAP (mm)",
    en: "DIAMETER (mm)",
    ru: "ДИАМЕТР (мм)",
  },
  "EN (mm)": {
    tr: "EN (mm)",
    en: "WIDTH (mm)",
    ru: "ШИРИНА (мм)",
  },
  "YÜKSEKLİK (mm)": {
    tr: "YÜKSEKLİK (mm)",
    en: "HEIGHT (mm)",
    ru: "ВЫСОТА (мм)",
  },
  "BAĞLANTI (INCH)": {
    tr: "BAĞLANTI (INCH)",
    en: "CONNECTION (INCH)",
    ru: "ПОДКЛЮЧЕНИЕ (ДЮЙМ)",
  },
  "ÖN GAZ BASINÇ (BAR)": {
    tr: "ÖN GAZ BASINÇ (BAR)",
    en: "PRE-CHARGE PRESSURE (BAR)",
    ru: "ДАВЛЕНИЕ ПРЕДВАРИТЕЛЬНОЙ ЗАРЯДКИ (БАР)",
  },
  "6-10 Bar Tank Serisi": {
    tr: "6-10 Bar Tank Serisi",
    en: "6-10 Bar Tank Series",
    ru: "Серия баков 6-10 бар",
  },

  // =============================================
  // META TAGS - Page Titles and Descriptions
  // =============================================


  "meta.defaultDescription": {
    tr: "KARTAL GROUP Genleşme ve Hidrofor Tankları - Yüksek kaliteli endüstriyel tank çözümleri.",
    en: "KARTAL GROUP Expansion and Hydrophore Tanks - High quality industrial tank solutions.",
    ru: "KARTAL GROUP Расширительные и гидрофорные баки - Высококачественные промышленные резервуарные решения.",
  },

  // Homepage
  "meta.home.description": {
    tr: "KARTAL GROUP, Kartal Bombe & Basınçlı Kaplar A.Ş. markasıdır. Genleşme ve hidrofor tankları üretimi.",
    en: "KARTAL GROUP is a brand of Kartal Bombe & Pressure Vessels Inc. Production of expansion and hydrophore tanks.",
    ru: "KARTAL GROUP - торговая марка Kartal Bombe & Basınçlı Kaplar A.Ş. Производство расширительных и гидрофорных баков.",
  },

  "meta.corporate.description": {
    tr: "1945 yılından beri metali şekillendirerek büyüyor, gelişiyor, araştırıyor ve yatırım yapmaya devam ediyoruz.",
    en: "Since 1945, we have been growing, developing, researching and continuing to invest by shaping metal.",
    ru: "С 1945 года мы растём, развиваемся, исследуем и продолжаем инвестировать, формируя металл.",
  },

  // Contact Page
  "İletişim | KARTAL GROUP": {
    tr: "İletişim | KARTAL GROUP",
    en: "Contact | KARTAL GROUP Expansion Tanks",
    ru: "Контакты | KARTAL GROUP Расширительные баки",
  },
  "meta.contact.description": {
    tr: "KARTAL GROUP ile iletişime geçin. Fabrika adresimiz, telefon ve e-posta bilgilerimiz.",
    en: "Contact KARTAL GROUP Expansion Tanks. Our factory address, phone and email information.",
    ru: "Свяжитесь с KARTAL GROUP Expansion Tanks. Адрес нашего завода, телефон и электронная почта.",
  },

  // Team Page
  "Ekibimiz - KARTAL GROUP": {
    tr: "Ekibimiz - KARTAL GROUP",
    en: "Our Team - KARTAL GROUP",
    ru: "Наша команда - KARTAL GROUP",
  },
  "meta.team.title": {
    tr: "Ekibimiz - KARTAL GROUP",
    en: "Our Team - KARTAL GROUP",
    ru: "Наша команда - KARTAL GROUP",
  },
  "meta.team.description": {
    tr: "KARTAL GROUP ekibi olarak, yılların deneyimi ve uzmanlığı ile genleşme tankları ve basınçlı kaplar sektöründe hizmet veriyoruz.",
    en: "As the KARTAL GROUP team, we serve in the expansion tanks and pressure vessels sector with years of experience and expertise.",
    ru: "Как команда KARTAL GROUP, мы работаем в секторе расширительных баков и сосудов под давлением с многолетним опытом и экспертизой.",
  },

  // Promotional Video Page
  "Tanıtım Videosu - KARTAL GROUP": {
    tr: "Tanıtım Videosu - KARTAL GROUP",
    en: "Promotional Video - KARTAL GROUP",
    ru: "Промо видео - KARTAL GROUP",
  },
  "meta.video.description": {
    tr: "KARTAL GROUP tanıtım videosu. Kartal Group çatısı altında Genleşme Hidrofor Tankları, Basınçlı Kaplar ve Ağır Ekipmanlar sektöründe hizmet vermektedir.",
    en: "KARTAL GROUP promotional video. Serving in the Expansion Hydrophore Tanks, Pressure Vessels and Heavy Equipment sector under the Kartal Group umbrella.",
    ru: "Промо видео KARTAL GROUP. Работаем в секторе расширительных гидрофорных баков, сосудов под давлением и тяжёлого оборудования под эгидой Kartal Group.",
  },

  // Catalog Page
  "Katalog - KARTAL GROUP": {
    tr: "Katalog - KARTAL GROUP",
    en: "Catalog - KARTAL GROUP",
    ru: "Каталог - KARTAL GROUP",
  },
  "meta.catalog.description": {
    tr: "KARTAL GROUP ve Hidrofor Tankları Dijital Kataloğu.",
    en: "KARTAL GROUP Expansion Tanks and Hydrophore Tanks Digital Catalog.",
    ru: "Цифровой каталог расширительных и гидрофорных баков KARTAL GROUP.",
  },

  // Certificates Page
  "Sertifikalarımız - KARTAL GROUP": {
    tr: "Sertifikalarımız - KARTAL GROUP",
    en: "Our Certificates - KARTAL GROUP",
    ru: "Наши сертификаты - KARTAL GROUP",
  },
  "meta.certificates.title": {
    tr: "Sertifikalarımız - KARTAL GROUP",
    en: "Our Certificates - KARTAL GROUP",
    ru: "Наши сертификаты - KARTAL GROUP",
  },
  "meta.certificates.description": {
    tr: "KARTAL GROUP kalite belgeleri ve sertifikaları. Uluslararası standartlarda üretim.",
    en: "KARTAL GROUP quality documents and certificates. Production at international standards.",
    ru: "Документы качества и сертификаты KARTAL GROUP. Производство по международным стандартам.",
  },

  // Products Overview Page
  "Products | KARTAL GROUP Expansion Vessels": {
    tr: "Ürünler | KARTAL GROUP",
    en: "Products | KARTAL GROUP Expansion Vessels",
    ru: "Продукция | KARTAL GROUP Расширительные баки",
  },
  "meta.products.description": {
    tr: "KARTAL GROUP genleşme ve hidrofor tankları ürün serilerimizi keşfedin. EEV-V, EEV-VLM, EEV-HL, EEV-UFL serileri ve daha fazlası.",
    en: "Explore our range of expansion and hydrophore tanks including EEV-V, EEV-VLM, EEV-HL, EEV-UFL series and more.",
    ru: "Ознакомьтесь с нашим ассортиментом расширительных и гидрофорных баков, включая серии EEV-V, EEV-VLM, EEV-HL, EEV-UFL и другие.",
  },

  // Product Series Pages
  "EEV-V Serisi | KARTAL GROUP Genleşme ve Hidrofor Tankları": {
    tr: "EEV-V Serisi | KARTAL GROUP Genleşme ve Hidrofor Tankları",
    en: "EEV-V Series | KARTAL GROUP Expansion and Hydrophore Tanks",
    ru: "Серия EEV-V | KARTAL GROUP Расширительные и гидрофорные баки",
  },
  "meta.eev-v.description": {
    tr: "EEV-V Serisi - Değiştirilebilir Membranlı Kapalı Genleşme ve Hidrofor Tankları (Dikey). 6-10-16-25 Bar Tank Serisi.",
    en: "EEV-V Series - Replaceable Membrane Closed Expansion and Hydrophore Tanks (Vertical). 6-10-16-25 Bar Tank Series.",
    ru: "Серия EEV-V - Закрытые расширительные и гидрофорные баки со сменной мембраной (вертикальные). Серия баков 6-10-16-25 бар.",
  },

  "EEV-VLM Serisi | KARTAL GROUP Genleşme ve Hidrofor Tankları": {
    tr: "EEV-VLM Serisi | KARTAL GROUP Genleşme ve Hidrofor Tankları",
    en: "EEV-VLM Series | KARTAL GROUP Expansion and Hydrophore Tanks",
    ru: "Серия EEV-VLM | KARTAL GROUP Расширительные и гидрофорные баки",
  },
  "meta.eev-vlm.description": {
    tr: "EEV-VLM Serisi - Değiştirilebilir Membranlı Kapalı Genleşme ve Hidrofor Tankları (Dikey). 6-10-16-25 Bar Tank Serisi.",
    en: "EEV-VLM Series - Replaceable Membrane Closed Expansion and Hydrophore Tanks (Vertical). 6-10-16-25 Bar Tank Series.",
    ru: "Серия EEV-VLM - Закрытые расширительные и гидрофорные баки со сменной мембраной (вертикальные). Серия баков 6-10-16-25 бар.",
  },

  "EEV-HL Serisi | KARTAL GROUP Genleşme ve Hidrofor Tankları": {
    tr: "EEV-HL Serisi | KARTAL GROUP Genleşme ve Hidrofor Tankları",
    en: "EEV-HL Series | KARTAL GROUP Expansion and Hydrophore Tanks",
    ru: "Серия EEV-HL | KARTAL GROUP Расширительные и гидрофорные баки",
  },
  "meta.eev-hl.description": {
    tr: "EEV-HL Serisi - Değiştirilebilir Membranlı Kapalı Genleşme ve Hidrofor Tankları (Yatay). 6-10-16-25 Bar Tank Serisi.",
    en: "EEV-HL Series - Replaceable Membrane Closed Expansion and Hydrophore Tanks (Horizontal). 6-10-16-25 Bar Tank Series.",
    ru: "Серия EEV-HL - Закрытые расширительные и гидрофорные баки со сменной мембраной (горизонтальные). Серия баков 6-10-16-25 бар.",
  },

  "EEV-UFL Serisi | KARTAL GROUP Genleşme ve Hidrofor Tankları": {
    tr: "EEV-UFL Serisi | KARTAL GROUP Genleşme ve Hidrofor Tankları",
    en: "EEV-UFL Series | KARTAL GROUP Expansion and Hydrophore Tanks",
    ru: "Серия EEV-UFL | KARTAL GROUP Расширительные и гидрофорные баки",
  },
  "meta.eev-ufl.description": {
    tr: "EEV-UFL Serisi - Ters Flanşlı Değiştirilebilir Membranlı Kapalı Genleşme ve Hidrofor Tankları. 6-10 Bar Tank Serisi.",
    en: "EEV-UFL Series - Reverse Flange Replaceable Membrane Closed Expansion and Hydrophore Tanks. 6-10 Bar Tank Series.",
    ru: "Серия EEV-UFL - Закрытые расширительные и гидрофорные баки со сменной мембраной и обратным фланцем. Серия баков 6-10 бар.",
  },

  // Referanslar Page Translations
  "/referanslar": {
    tr: "/referanslar",
    en: "/references",
    ru: "/referencii",
  },
  "/references": {
    tr: "/referanslar",
    en: "/referanslar",
    ru: "/referanslar",
  },
  "/referencii": {
    tr: "/referanslar",
    en: "/referanslar",
    ru: "/referanslar",
  },
  Referanslar: {
    tr: "Referanslar",
    en: "References",
    ru: "Рекомендации",
  },
  Referanslarımız: {
    tr: "Referanslarımız",
    en: "Our References",
    ru: "Наши рекомендации",
  },
  "Güvenilir İş Ortaklarımız": {
    tr: "Güvenilir İş Ortaklarımız",
    en: "Our Trusted Business Partners",
    ru: "Наши надёжные деловые партнёры",
  },
  "Yılların tecrübesiyle birçok prestijli kurum ve kuruluşa hizmet vermenin gururunu yaşıyoruz.":
    {
      tr: "Yılların tecrübesiyle birçok prestijli kurum ve kuruluşa hizmet vermenin gururunu yaşıyoruz.",
      en: "We are proud to serve many prestigious institutions and organizations with years of experience.",
      ru: "Мы гордимся тем, что обслуживаем множество престижных учреждений и организаций благодаря многолетнему опыту.",
    },
  "Referans logoları yakında eklenecek.": {
    tr: "Referans logoları yakında eklenecek.",
    en: "Reference logos will be added soon.",
    ru: "Логотипы рекомендаций скоро будут добавлены.",
  },
  "Siz de Referanslarımız Arasında Yerinizi Alın": {
    tr: "Siz de Referanslarımız Arasında Yerinizi Alın",
    en: "Take Your Place Among Our References",
    ru: "Займите своё место среди наших рекомендаций",
  },
  "Kaliteli ürünlerimiz ve profesyonel hizmet anlayışımızla sizin de çözüm ortağınız olmak istiyoruz.":
    {
      tr: "Kaliteli ürünlerimiz ve profesyonel hizmet anlayışımızla sizin de çözüm ortağınız olmak istiyoruz.",
      en: "We want to be your solution partner with our quality products and professional service approach.",
      ru: "Мы хотим стать вашим партнёром по решениям благодаря нашей качественной продукции и профессиональному подходу к обслуживанию.",
    },
  "İletişime Geçin": {
    tr: "İletişime Geçin",
    en: "Contact Us",
    ru: "Свяжитесь с нами",
  },
  "Tümünü Gör": {
    tr: "Tümünü Gör",
    en: "View All",
    ru: "Смотреть все",
  },

  // Accessibility Labels
  "aria.previousSlide": {
    tr: "Önceki slayt",
    en: "Previous slide",
    ru: "Предыдущий слайд",
  },
  "aria.nextSlide": {
    tr: "Sonraki slayt",
    en: "Next slide",
    ru: "Следующий слайд",
  },
  "aria.goToSlide": {
    tr: "Slayt'a git",
    en: "Go to slide",
    ru: "Перейти к слайду",
  },
  "aria.openMenu": {
    tr: "Menüyü aç",
    en: "Open menu",
    ru: "Открыть меню",
  },
  "aria.closeMenu": {
    tr: "Menüyü kapat",
    en: "Close menu",
    ru: "Закрыть меню",
  },
  "hero.subtitle": {
    tr: "KARTAL GROUP - Kalite ve Güvenin Adresi. Yenilikçi çözümler ile endüstriyel başarıyı yakalayın.",
    en: "KARTAL GROUP - The Address of Quality and Trust. Achieve industrial success with innovative solutions.",
    ru: "KARTAL GROUP - Адрес качества и доверия. Достигайте промышленного успеха с помощью инновационных решений.",
  },
  "hero.title": {
    tr: "Yenilikçi Üretim",
    en: "Innovative Manufacturing",
    ru: "Инновационное Производство",
  },
  "button.details": {
    tr: "Detaylı Bilgi",
    en: "Explore",
    ru: "Подробности",
  },
  "news.agenda": {
    tr: "Haberler",
    en: "News",
    ru: "Новости",
  },
  "Gündem": {
    tr: "Haberler",
    en: "News",
    ru: "Новости",
  },
  "news.title": {
    tr: "KARTAL GROUP'tan Haberler",
    en: "News from KARTAL GROUP",
    ru: "Новости от KARTAL GROUP",
  },
  "news.description": {
    tr: "Şirketimizin dönüşüm yolculuğuna tanıklık etmek, gelişmelerden haberdar olmak ve hayata geçirdiğimiz yeni projeleri izlemek için bizi takip edin...",
    en: "Follow us to witness our company's transformation journey, stay informed about developments, and watch the new projects we bring to life...",
    ru: "Следите за нами, чтобы стать свидетелем пути трансформации нашей компании, быть в курсе событий и наблюдать за новыми проектами, которые мы воплощаем в жизнь...",
  },
  "news.item1.title": {
    tr: "Yeni Proje Duyurusu",
    en: "New Project Announcement: Ceyhan Polypropylene Production",
    ru: "Объявление о новом проекте: Производство полипропилена в Джейхане",
  },
  "news.item1.desc": {
    tr: "\"Ceyhan Polipropilen Üretim\" projesinde yer alacak 4 adet 3369 m³ küresel tankın tedariği için Rönesans Endüstri Tesisleri ile firmamız arasında sözleşme imzalanmıştır. Firmamız bu projeyi EPC olarak üstlenmiş olup, mühendislik çalışmalarına başlanmıştır. Tüm paydaşlarımıza hayırlı olmasını dileriz.",
    en: "A contract has been signed between Rönesans Industrial Facilities and our company for the supply of 4 spherical tanks of 3369 m³ to be located in the \"Ceyhan Polypropylene Production\" project. Our company has undertaken this project as EPC, and engineering works have started. We wish it to be beneficial to all our stakeholders.",
    ru: "Между Rönesans Industrial Facilities и нашей компанией подписан контракт на поставку 4 сферических резервуаров объемом 3369 м³ для проекта «Производство полипропилена в Джейхане». Наша компания взяла на себя этот проект как EPC, и инженерные работы уже начались. Желаем, чтобы это было полезно всем нашим заинтересованным сторонам.",
  },
  "news.item2.title": {
    tr: "Yeni Üretim Tesisimiz Faaliyete Geçti",
    en: "Our New Production Facility Has Gone Into Operation",
    ru: "Наш новый производственный объект начал работу",
  },
  "news.item2.desc": {
    tr: "Kapasitemizi artırmak ve teslimat sürelerimizi kısaltmak amacıyla yatırımını tamamladığımız yeni üretim tesisimiz bugün itibariyle faaliyete başlamıştır.",
    en: "Our new production facility, which we completed investing in to increase our capacity and shorten our delivery times, has started its operations as of today.",
    ru: "Наш новый производственный объект, инвестиции в который мы завершили с целью увеличения наших мощностей и сокращения сроков поставки, начал работу с сегодняшнего дня.",
  },
  "news.item3.title": {
    tr: "KARTAL GROUP: AD2000 Vakum Tankı Sevkiyatı Tamamlandı",
    en: "KARTAL GROUP: AD2000 Vacuum Tank Shipment Completed",
    ru: "KARTAL GROUP: Отгрузка вакуумного бака AD2000 завершена",
  },
  "news.item3.desc": {
    tr: "KARTAL GROUP olarak, yüksek mühendislik standartlarında üretimini tamamladığımız bir projeyi daha müşterimize teslim etmenin gururunu yaşıyoruz. Proje Detayları:\n\nÜrün: Vakum Tankı\nÖlçüler: Ø2100 mm | L: 3000 mm\nTasarım Kodu: AD2000-Merkblatt\n\nYüksek vakum dayanımı ve kalite standartlarına uygun olarak imal edilen tankımız, tüm test süreçlerini başarıyla tamamlayarak nakliye edilmiştir. Sektördeki tecrübemiz ve hassas üretim anlayışımızla projelerinize değer katmaya devam ediyoruz.",
    en: "As KARTAL GROUP, we are proud to deliver another project, completed with high engineering standards. Project Details:\n\nProduct: Vacuum Tank\nDimensions: Ø2100 mm | L: 3000 mm\nDesign Code: AD2000-Merkblatt\n\nOur tank, manufactured with high vacuum resistance and quality standards, was successfully shipped after completing all tests. We continue to add value to your projects with our industry experience and precision manufacturing approach.",
    ru: "Мы гордимся тем, что доставили еще один проект, выполненный по высоким инженерным стандартам. Информация о проекте:\n\nПродукт: Вакуумный бак\nРазмеры: Ø2100 мм | L: 3000 мм\nКод проектирования: AD2000-Merkblatt\n\nНаш бак, изготовленный с учетом высокой вакуумной стойкости и стандартов качества, был успешно отправлен после завершения всех процессов тестирования. Мы продолжаем добавлять ценность вашим проектам благодаря нашему опыту.",
  },

  // Header / Navigation
  Haberler: {
    tr: "Haberler",
    en: "News",
    ru: "Новости",
  },
  Anasayfa: {
    tr: "Anasayfa",
    en: "Home",
    ru: "Главная",
  },
  Faaliyetler: {
    tr: "Faaliyetler",
    en: "Activities",
    ru: "Деятельность",
  },
  Ekibimiz: {
    tr: "Ekibimiz",
    en: "Our Team",
    ru: "Наша команда",
  },

  // ProductsSection short description (header subtitle)
  "Sanayi, enerji, imalat, mühendislik ve dış ticaret alanlarında faaliyet gösteren bir grup şirket.": {
    tr: "Sanayi, enerji, imalat, mühendislik ve dış ticaret alanlarında faaliyet gösteren bir grup şirket.",
    en: "An industrial group active in manufacturing, energy, engineering and international trade.",
    ru: "Промышленная группа, работающая в области производства, энергетики, инжиниринга и внешней торговли.",
  },

  // Activity item descriptions
  "Yüksek dayanımlı çelik konstrüksiyon ve metal işleme çözümleri ile endüstriye güç katıyoruz.": {
    tr: "Yüksek dayanımlı çelik konstrüksiyon ve metal işleme çözümleri ile endüstriye güç katıyoruz.",
    en: "We strengthen the industry with high-strength steel construction and metal processing solutions.",
    ru: "Мы укрепляем промышленность решениями по высокопрочным стальным конструкциям и металлообработке.",
  },
  "Milli güvenlik ve savunma teknolojilerine yönelik ileri kalite üretim ve mühendislik desteği sağlıyoruz.": {
    tr: "Milli güvenlik ve savunma teknolojilerine yönelik ileri kalite üretim ve mühendislik desteği sağlıyoruz.",
    en: "We provide advanced quality production and engineering support for national security and defense technologies.",
    ru: "Мы обеспечиваем высококачественное производство и инженерную поддержку для технологий национальной безопасности и обороны.",
  },
  "Modern üretim hatları ve robotik sistemlerle yüksek hassasiyetli endüstriyel imalat hizmetleri sunuyoruz.": {
    tr: "Modern üretim hatları ve robotik sistemlerle yüksek hassasiyetli endüstriyel imalat hizmetleri sunuyoruz.",
    en: "We offer high-precision industrial manufacturing services with modern production lines and robotic systems.",
    ru: "Мы предлагаем высокоточные промышленные производственные услуги с использованием современных производственных линий и роботизированных систем.",
  },
  "Kapsamlı mühendislik analizi, tasarım ve danışmanlık hizmetleri ile projelerinize değer katıyoruz.": {
    tr: "Kapsamlı mühendislik analizi, tasarım ve danışmanlık hizmetleri ile projelerinize değer katıyoruz.",
    en: "We add value to your projects with comprehensive engineering analysis, design and consultancy services.",
    ru: "Мы добавляем ценность вашим проектам благодаря комплексному инженерному анализу, проектированию и консультационным услугам.",
  },

  // ProductsSection / Activity Areas
  "FAALİYET ALANLARIMIZ": {
    tr: "FAALİYET ALANLARIMIZ",
    en: "OUR ACTIVITY AREAS",
    ru: "НАШИ ОБЛАСТИ ДЕЯТЕЛЬНОСТИ",
  },
  "products.section.description": {
    tr: "Kartal Group, güçlü ve lider konumu, kurumsal yönetim yaklaşımı, nitelikli, özverili iş gücü, yenilikçi, sürekli gelişime olan inanç anlayışı ile sanayi, enerji, imalat, mühendislik, dış ticaret, akademi vb. gibi bir çok sektörde faaliyet göstermektedir.",
    en: "Kartal Group operates in many sectors such as industry, energy, manufacturing, engineering, foreign trade and academia, thanks to its strong and leading position, corporate governance approach, qualified and dedicated workforce, and innovative belief in continuous development.",
    ru: "Kartal Group работает во многих секторах, таких как промышленность, энергетика, производство, инжиниринг, внешняя торговля и наука, благодаря своей сильной и лидирующей позиции, корпоративному управлению, квалифицированной и преданной рабочей силе, а также инновационной вере в постоянное развитие.",
  },

  // Kurumsal long paragraph
  "kurumsal.intro.long": {
    tr: "Kartal Group, 1945 yılında metal şekillendirme sektörü ile başladığı ticaret hayatındaki yolculuğuna farklı sektörlerdeki yatırımları ile büyüyerek devam etmiştir. Grup bünyesinde; makine, metal, enerji, mühendislik ve akademi sektöründe yer alan firma ve markalar yer almaktadır.",
    en: "Starting its commercial journey in 1945 in the metal forming sector, Kartal Group has continued to grow with investments in various sectors. The group includes companies and brands operating in the machinery, metal, energy, engineering and academic sectors.",
    ru: "Начав свой коммерческий путь в 1945 году в секторе формовки металла, Kartal Group продолжает расти, инвестируя в различные сектора. В группу входят компании и бренды, работающие в секторах машиностроения, металла, энергетики, инжиниринга и академической сферы.",
  },

  // Map Section (export countries)
  "map.export.title": {
    tr: "Yaptığımız Ülkeler",
    en: "Countries We Export To",
    ru: "Страны экспорта",
  },
  "map.export.highlight": {
    tr: "İhracat",
    en: "Export",
    ru: "Экспорт",
  },
  "map.export.description": {
    tr: "Dünya genelinde 29 ülkeye ürün ihraç ediyoruz. Detaylı bilgi için bir ülkeye tıklayın.",
    en: "We export our products to 29 countries worldwide. Click a country for details.",
    ru: "Мы экспортируем нашу продукцию в 29 стран мира. Нажмите на страну, чтобы узнать подробности.",
  },
  "map.rotate.pause": {
    tr: "⏸ Durdur",
    en: "⏸ Pause",
    ru: "⏸ Пауза",
  },
  "map.rotate.start": {
    tr: "▶ Döndür",
    en: "▶ Rotate",
    ru: "▶ Вращать",
  },
  "map.reset": {
    tr: "⟲ Sıfırla",
    en: "⟲ Reset",
    ru: "⟲ Сброс",
  },
  "map.stats.countries": {
    tr: "Ülke",
    en: "Countries",
    ru: "Стран",
  },
  "map.stats.years": {
    tr: "Yıllık İhracat",
    en: "Years of Export",
    ru: "Лет экспорта",
  },
  "map.country.equipment": {
    tr: "Ürettiğimiz ekipmanlar",
    en: "Equipment we produce",
    ru: "Производимое оборудование",
  },
  "map.country.placeholder": {
    tr: "Fotoğraf eklenecek",
    en: "Photo to be added",
    ru: "Фото будет добавлено",
  },
  "map.country.helper": {
    tr: "Buraya tıkladığınız ülkeye ait ekipman fotoğraflarını ekleyebilirsiniz.",
    en: "You can add equipment photos for the country you clicked on here.",
    ru: "Здесь вы можете добавить фотографии оборудования для выбранной страны.",
  },
  "map.close": {
    tr: "Kapat",
    en: "Close",
    ru: "Закрыть",
  },
  "map.country.details": {
    tr: "Ülke detayları",
    en: "Country details",
    ru: "Детали страны",
  },

  // Contact page address
  "iletisim.address.full": {
    tr: "DOSB 4. KISIM, Ceyhan Cd NO:25\n41400 Gebze/Kocaeli, Türkiye",
    en: "DOSB 4th SECTION, Ceyhan St. NO:25\n41400 Gebze/Kocaeli, Turkey",
    ru: "DOSB 4-я СЕКЦИЯ, ул. Джейхан №25\n41400 Гебзе/Коджаэли, Турция",
  },

  // Tanitim Videosu
  "Kartal İmalat TANITIM VİDEOSU": {
    tr: "KARTAL GROUP TANITIM VİDEOSU",
    en: "KARTAL GROUP PROMOTIONAL VIDEO",
    ru: "ПРЕЗЕНТАЦИОННОЕ ВИДЕО KARTAL GROUP",
  },

  // Team page
  "Kartal İmalat AİLESİ": {
    tr: "KARTAL GROUP AİLESİ",
    en: "KARTAL GROUP FAMILY",
    ru: "СЕМЬЯ KARTAL GROUP",
  },

  // Header dropdown brand cards (kept brand names; descriptions can localize)
  "Kartal İmalat Mühendislik": {
    tr: "Kartal İmalat Mühendislik",
    en: "Kartal Manufacturing Engineering",
    ru: "Kartal İmalat Mühendislik",
  },

  // News section short subtitle
  "news.shortDescription": {
    tr: "Kartal Group'tan güncel haberler ve projeler.",
    en: "Latest news and projects from Kartal Group.",
    ru: "Последние новости и проекты Kartal Group.",
  },

  // Common
  "common.brandSlogan": {
    tr: "Kartal İmalat, KARTAL GROUP markasıdır.",
    en: "Kartal İmalat is a brand of KARTAL GROUP.",
    ru: "Kartal İmalat — бренд KARTAL GROUP.",
  }
};
