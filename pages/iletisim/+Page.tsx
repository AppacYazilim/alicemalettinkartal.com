import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import factoryImage from "../../assets/slider/slider-1.jpg?format=webp";
import { translate } from "../../locales";
import { LocaleText } from "../../renderer/LocaleText";

// Cloudflare Turnstile site key - production'da environment variable kullanın
const TURNSTILE_SITE_KEY =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"; // Test key
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8082";
const TENANT_ID = import.meta.env.VITE_TENANT_ID || "";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  turnstile?: string;
}

export default function Page() {
  const { locale } = usePageContext();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = translate("Bu alan zorunludur", locale);
    } else if (formData.name.trim().length < 2) {
      newErrors.name = translate("Ad en az 2 karakter olmalıdır", locale);
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = translate("Bu alan zorunludur", locale);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = translate("Geçerli bir e-posta adresi girin", locale);
    }

    // Phone validation (optional but if filled, must be valid)
    if (formData.phone && !/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = translate("Geçerli bir telefon numarası girin", locale);
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = translate("Bu alan zorunludur", locale);
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = translate("Bu alan zorunludur", locale);
    } else if (formData.message.trim().length < 10) {
      newErrors.message = translate(
        "Mesaj en az 10 karakter olmalıdır",
        locale,
      );
    }

    // Turnstile validation
    if (!turnstileToken) {
      newErrors.turnstile = translate(
        "Lütfen robot olmadığınızı doğrulayın",
        locale,
      );
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(`${API_BASE_URL}/public/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          subject: formData.subject,
          message: formData.message,
          turnstileToken: turnstileToken,
          tenantId: TENANT_ID,
          locale: locale,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTurnstileToken(null);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        <div className="relative z-10 text-center px-4 pt-16 md:pt-20 transform transition-all duration-[1000ms] ease-out group-hover:-translate-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-[1000ms] ease-out group-hover:tracking-[0.1em] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            <LocaleText>İletişim</LocaleText>
          </h1>
          <p className="text-white/90 mt-4 text-lg transition-all duration-[1000ms] ease-out group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            <LocaleText>Bizimle iletişime geçin</LocaleText>
          </p>
          <div className="w-12 h-1 bg-white/60 mx-auto mt-5 rounded-full transition-all duration-[1000ms] ease-out group-hover:w-32 group-hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"></div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Telefon */}
            <div className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)] p-8 text-center overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-[#ff8a3d]/20 opacity-90" />
              <div className="pointer-events-none absolute -top-1/2 -left-1/2 h-[220%] w-[45%] rotate-[18deg] bg-[#ff9d57]/30 blur-2xl opacity-0 group-hover:opacity-100 group-hover:animate-[liquidSweep_1.2s_ease-out_forwards]" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#ff8a3d]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-[#ff8a3d]/15 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#ff8a3d]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white/90 mb-3">
                  <LocaleText>Telefon</LocaleText>
                </h3>
                <a
                  href="tel:+902627249292"
                  className="text-lg text-white/70 hover:text-[#ff8a3d] transition-colors"
                >
                  +(90) 262 724 92 92
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)] p-8 text-center overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-[#ff8a3d]/20 opacity-90" />
              <div className="pointer-events-none absolute -top-1/2 -left-1/2 h-[220%] w-[45%] rotate-[18deg] bg-[#ff9d57]/30 blur-2xl opacity-0 group-hover:opacity-100 group-hover:animate-[liquidSweep_1.2s_ease-out_forwards]" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#ff8a3d]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-[#ff8a3d]/15 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#ff8a3d]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white/90 mb-3">
                  <LocaleText>Email</LocaleText>
                </h3>
                <a
                  href="mailto:info@kartalgrup.com.tr"
                  className="text-lg text-white/70 hover:text-[#ff8a3d] transition-colors"
                >
                  info@kartalgrup.com.tr
                </a>
              </div>
            </div>

            {/* Adres */}
            <div className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)] p-8 text-center overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-[#ff8a3d]/20 opacity-90" />
              <div className="pointer-events-none absolute -top-1/2 -left-1/2 h-[220%] w-[45%] rotate-[18deg] bg-[#ff9d57]/30 blur-2xl opacity-0 group-hover:opacity-100 group-hover:animate-[liquidSweep_1.2s_ease-out_forwards]" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#ff8a3d]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-[#ff8a3d]/15 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#ff8a3d]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white/90 mb-3">
                  <LocaleText>Adresimiz</LocaleText>
                </h3>
                <p className="text-lg text-white/70 leading-relaxed whitespace-pre-line">
                  <LocaleText>iletisim.address.full</LocaleText>
                </p>
              </div>
            </div>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
                @keyframes liquidSweep {
                  0% { transform: translateX(-130%) rotate(18deg); opacity: 0; }
                  20% { opacity: 0.35; }
                  100% { transform: translateX(200%) rotate(18deg); opacity: 0; }
                }
              `,
            }}
          />

          {/* Harita */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=DOSB%204.%20KISIM%2C%20Ceyhan%20Cd%20NO%3A25%2C%2041400%20Gebze%2FKocaeli%2C%20T%C3%BCrkiye&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="600"
              height="450"
              style={{ border: 0, width: "100%", height: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* İletişim Formu - Opsiyonel */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-4">
                <LocaleText>Bize Ulaşın</LocaleText>
              </h2>
              <p className="text-white/70">
                <LocaleText>
                  Sorularınız için bizimle iletişime geçebilirsiniz
                </LocaleText>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {submitStatus === "success" && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
                  <LocaleText>
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
                    yapacağız.
                  </LocaleText>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
                  <LocaleText>
                    Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                  </LocaleText>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    <LocaleText>Ad Soyad</LocaleText>{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8a3d] focus:border-[#ff8a3d] outline-none transition-colors bg-transparent text-white placeholder:text-white/50 ${
                      errors.name
                        ? "border-red-500 bg-red-500/10"
                        : "border-white/20"
                    }`}
                    placeholder={translate("Adınız Soyadınız", locale)}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-[#ff8a3d]">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    <LocaleText>E-posta</LocaleText>{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8a3d] focus:border-[#ff8a3d] outline-none transition-colors bg-transparent text-white placeholder:text-white/50 ${
                      errors.email
                        ? "border-red-500 bg-red-500/10"
                        : "border-white/20"
                    }`}
                    placeholder={translate("ornek@email.com", locale)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-[#ff8a3d]">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  <LocaleText>Telefon</LocaleText>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8a3d] focus:border-[#ff8a3d] outline-none transition-colors bg-transparent text-white placeholder:text-white/50 ${
                    errors.phone
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/20"
                  }`}
                  placeholder={translate("+90 5XX XXX XX XX", locale)}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-[#ff8a3d]">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  <LocaleText>Konu</LocaleText>{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8a3d] focus:border-[#ff8a3d] outline-none transition-colors bg-transparent text-white placeholder:text-white/50 ${
                    errors.subject
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/20"
                  }`}
                  placeholder={translate("Mesaj konunuz", locale)}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-[#ff8a3d]">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  <LocaleText>Mesajınız</LocaleText>{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8a3d] focus:border-[#ff8a3d] outline-none transition-colors bg-transparent text-white placeholder:text-white/50 resize-none ${
                    errors.message
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/20"
                  }`}
                  placeholder={translate("Mesajınızı buraya yazın...", locale)}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-[#ff8a3d]">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Cloudflare Turnstile */}
              <div className="flex flex-col items-center">
                <Turnstile
                  siteKey={TURNSTILE_SITE_KEY}
                  onSuccess={(token) => {
                    setTurnstileToken(token);
                    setErrors((prev) => ({ ...prev, turnstile: undefined }));
                  }}
                  onError={() => {
                    setTurnstileToken(null);
                    setErrors((prev) => ({
                      ...prev,
                      turnstile: translate("Doğrulama başarısız oldu", locale),
                    }));
                  }}
                  onExpire={() => {
                    setTurnstileToken(null);
                  }}
                  options={{
                    theme: "light",
                    language:
                      locale === "tr" ? "tr" : locale === "ru" ? "ru" : "en",
                  }}
                />
                {errors.turnstile && (
                  <p className="mt-2 text-sm text-[#ff8a3d]">
                    {errors.turnstile}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative overflow-hidden w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] ${
                  isSubmitting
                    ? "bg-white/10 cursor-not-allowed text-white/50 outline-none"
                    : "bg-[#ff8a3d] text-white shadow-[0_4px_14px_rgba(255,138,61,0.3)] hover:shadow-[0_8px_25px_rgba(255,138,61,0.5)]"
                }`}
              >
                {/* Buton parlaması (Shine effect) */}
                {!isSubmitting && (
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                )}
                
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <LocaleText>Gönderiliyor...</LocaleText>
                  </span>
                ) : (
                  <LocaleText>Mesaj Gönder</LocaleText>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
