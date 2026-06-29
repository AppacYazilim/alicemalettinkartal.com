const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, system-ui, sans-serif";

const VENTURES = [
  {
    name: "Kartal Holding",
    category: "Yatırım & Holding",
    year: "2005",
    description:
      "Çok sektörlü yatırım portföyü yöneten holding yapısı. Sanayi, teknoloji ve gayrimenkul alanlarında stratejik yatırımlar ve iştiraklerin yönetimi.",
  },
  {
    name: "KBS Endüstriyel",
    category: "Sanayi & Üretim",
    year: "1998",
    description:
      "Yüksek hassasiyetli elektronik kontrol sistemleri ve endüstriyel otomasyon çözümleri alanında tasarım, üretim ve Ar-Ge faaliyetleri.",
  },
  {
    name: "ACK Ventures",
    category: "Girişim Sermayesi",
    year: "2018",
    description:
      "Erken aşama Türk teknoloji girişimlerine yatırım yapan özel fon. Fintech, deeptech ve sağlık teknolojileri öncelikli portföy yönetimi.",
  },
  {
    name: "Kartal Gayrimenkul",
    category: "Gayrimenkul Geliştirme",
    year: "2010",
    description:
      "Kurumsal ve konut projeleri geliştiren gayrimenkul platformu. İstanbul ve çevre illerde aktif proje portföyü ile kentsel dönüşüm odağı.",
  },
];

export function AckVentures() {
  return (
    <section
      id="girisimler"
      style={{ backgroundColor: "#EDECEA", paddingTop: 120, paddingBottom: 120 }}
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
        <div style={{ marginBottom: 64 }}>
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
            Girişimler &amp; Yatırımlar
          </p>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#111010",
              fontWeight: "normal",
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Portföy
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="ack-ventures-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
        >
          {VENTURES.map((v) => (
            <div
              key={v.name}
              style={{
                backgroundColor: "#F9F8F5",
                padding: "44px 40px",
                borderTop: "3px solid #1C3962",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#ffffff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#F9F8F5")
              }
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase" as const,
                    color: "#1C3962",
                    margin: 0,
                  }}
                >
                  {v.category}
                </p>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: 12,
                    color: "#5A5650",
                  }}
                >
                  {v.year}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: SERIF,
                  fontSize: 30,
                  color: "#111010",
                  fontWeight: "normal",
                  margin: "0 0 16px 0",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                }}
              >
                {v.name}
              </h3>

              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#5A5650",
                  margin: 0,
                }}
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
