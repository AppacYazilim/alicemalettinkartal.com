const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, system-ui, sans-serif";

const THOUGHTS = [
  {
    date: "Haziran 2025",
    title: "Türkiye'de Derin Teknoloji: Fırsatlar ve Engeller",
    excerpt:
      "Deeptech girişimleri geleneksel sektörleri yeniden şekillendirirken, Türkiye bu dönüşümde nerede duruyor?",
    href: "#",
  },
  {
    date: "Nisan 2025",
    title: "Aile Şirketlerinde Kurumsallaşma: Bir Süreklilik Meselesi",
    excerpt:
      "Nesiller arası değer aktarımının önündeki yapısal engelleri aşmak için pratik bir çerçeve.",
    href: "#",
  },
  {
    date: "Şubat 2025",
    title: "Yatırımda Sabır: Uzun Vadeli Düşünmenin Değeri",
    excerpt:
      "Kısa vadeli kazanımların cazibesine karşın, kalıcı değer yaratmanın neden zaman istediği üzerine.",
    href: "#",
  },
];

export function AckThoughts() {
  return (
    <section
      id="dusunceler"
      style={{ backgroundColor: "#F9F8F5", paddingTop: 120, paddingBottom: 120 }}
    >
      <div
        className="ack-section-pad"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 48,
          paddingRight: 48,
        }}
      >
        {/* Header */}
        <p
          style={{
            fontFamily: SANS,
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase" as const,
            color: "#1C3962",
            margin: "0 0 12px 0",
          }}
        >
          Düşünceler &amp; Yazılar
        </p>
        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(32px, 4vw, 52px)",
            color: "#111010",
            fontWeight: "normal",
            margin: "0 0 64px 0",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Sektörel Perspektifler
        </h2>

        {/* Article list */}
        <div>
          {THOUGHTS.map((t, i) => (
            <a
              key={i}
              href={t.href}
              style={{ display: "block", color: "inherit" }}
            >
              <article
                className="ack-thoughts-row"
                style={{
                  paddingTop: 36,
                  paddingBottom: 36,
                  borderTop: "1px solid #E5E2DC",
                  display: "grid",
                  gridTemplateColumns: "140px 1fr 32px",
                  gap: 40,
                  alignItems: "start",
                  transition: "opacity 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "0.65")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "1")
                }
              >
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    color: "#5A5650",
                    paddingTop: 5,
                  }}
                >
                  {t.date}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: SERIF,
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      color: "#111010",
                      fontWeight: "normal",
                      margin: "0 0 10px 0",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: SANS,
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "#5A5650",
                      margin: 0,
                    }}
                  >
                    {t.excerpt}
                  </p>
                </div>

                <span
                  className="ack-thoughts-arrow"
                  style={{
                    fontFamily: SANS,
                    fontSize: 20,
                    color: "#5A5650",
                    paddingTop: 3,
                    lineHeight: 1,
                  }}
                >
                  →
                </span>
              </article>
            </a>
          ))}
          <div style={{ borderTop: "1px solid #E5E2DC" }} />
        </div>
      </div>
    </section>
  );
}
