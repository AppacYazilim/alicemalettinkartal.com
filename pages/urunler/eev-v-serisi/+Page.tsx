import slider3 from "../../../assets/slider/slider2.jpg?format=webp";
import productImage from "../../../assets/tanklar/eev-v-header.jpg?format=webp";
import { LocaleText } from "../../../renderer/LocaleText";

const productData = {
  name: "EEV-V Serisi",
  subtitle: "6-10-16-25 Bar Tank Serisi",
  description:
    "DEĞİŞTİRİLEBİLİR MEMBRANLI KAPALI GENLEŞME ve HİDROFOR TANKLARI (DİKEY AYAKLI)",
  heroImage: slider3,
  productImage: productImage,
  specs: [
    {
      model: "EEV-V 5",
      hacim: "5",
      bar: "6-10-16-25",
      cap: "160",
      yukseklik: "298",
      baglanti: '1/2" - 3/4"',
      onGaz: "2",
    },
    {
      model: "EEV-V 8",
      hacim: "8",
      bar: "6-10-16-25",
      cap: "219",
      yukseklik: "305",
      baglanti: '1/2" - 3/4"',
      onGaz: "2",
    },
    {
      model: "EEV-V 12",
      hacim: "12",
      bar: "6-10-16-25",
      cap: "219",
      yukseklik: "365",
      baglanti: '1/2" - 3/4"',
      onGaz: "2",
    },
    {
      model: "EEV-V 19",
      hacim: "19",
      bar: "6-10-16-25",
      cap: "280",
      yukseklik: "405",
      baglanti: '3/4" - 1"',
      onGaz: "2",
    },
    {
      model: "EEV-V 24",
      hacim: "24",
      bar: "6-10-16-25",
      cap: "280",
      yukseklik: "471",
      baglanti: '3/4" - 1"',
      onGaz: "2",
    },
    {
      model: "EEV-V 35",
      hacim: "35",
      bar: "6-10-16-25",
      cap: "380",
      yukseklik: "500",
      baglanti: '3/4" - 1"',
      onGaz: "2",
    },
    {
      model: "EEV-V 50",
      hacim: "50",
      bar: "6-10-16-25",
      cap: "380",
      yukseklik: "615",
      baglanti: '3/4" - 1"',
      onGaz: "2",
    },
    {
      model: "EEV-V 240",
      hacim: "24",
      bar: "6-10-16-25",
      cap: "350",
      yukseklik: "325",
      baglanti: '3/4" - 1"',
      onGaz: "2",
    },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[200px] md:h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${productData.heroImage})` }}
        >
          <div className="absolute inset-0 bg-[#ff8a3d]/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            <LocaleText>{productData.name}</LocaleText>
          </h1>
        </div>
      </section>

      {/* Product Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ff8a3d] mb-2">
              <LocaleText>{productData.name}</LocaleText>
            </h2>
            <p className="text-gray-600">
              <LocaleText>{productData.subtitle}</LocaleText>
            </p>
            <p className="text-[#ff8a3d] font-medium mt-2">
              <LocaleText>{productData.description}</LocaleText>
            </p>
          </div>

          {/* Product Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={productData.productImage}
                alt={productData.name}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs Table Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                    <LocaleText>MODEL</LocaleText>
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                    <LocaleText>HACİM (LT)</LocaleText>
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                    <LocaleText>MAKSİMUM İŞLETME BASINCI (BAR)</LocaleText>
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                    <LocaleText>ÇAP (mm)</LocaleText>
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                    <LocaleText>YÜKSEKLİK (mm)</LocaleText>
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                    <LocaleText>BAĞLANTI (INCH)</LocaleText>
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                    <LocaleText>ÖN GAZ BASINÇ (BAR)</LocaleText>
                  </th>
                </tr>
              </thead>
              <tbody>
                {productData.specs.map((spec, index) => (
                  <tr
                    key={spec.model}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-sm text-gray-800 border-b font-medium">
                      {spec.model}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b">
                      {spec.hacim}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b">
                      {spec.bar}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b">
                      {spec.cap}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b">
                      {spec.yukseklik}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b">
                      {spec.baglanti}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border-b">
                      {spec.onGaz}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
