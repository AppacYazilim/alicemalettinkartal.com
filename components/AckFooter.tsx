const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, system-ui, sans-serif";

export function AckFooter() {
  return (
    <footer
      id="iletisim"
      style={{ backgroundColor: "#111010", color: "#F9F8F5" }}
    >
      {/* Main footer body */}
      <div
        className="ack-section-pad"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 48,
          paddingRight: 48,
          paddingTop: 88,
          paddingBottom: 88,
        }}
      >
        <div
          className="ack-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            paddingBottom: 64,
            borderBottom: "1px solid rgba(249,248,245,0.1)",
            marginBottom: 40,
          }}
        >
          {/* — Left: identity — */}
          <div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 38,
                color: "#F9F8F5",
                fontWeight: "normal",
                margin: "0 0 20px 0",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Ali Cemalettin
              <br />
              Kartal
            </h2>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(249,248,245,0.5)",
                margin: 0,
                maxWidth: 340,
              }}
            >
              Stratejist, girişimci ve lider. Türkiye'nin iş dünyasında
              sürdürülebilir değer yaratmaya odaklanmaktadır.
            </p>
          </div>

          {/* — Right: contact — */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 32 }}>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase" as const,
                color: "rgba(249,248,245,0.35)",
                margin: 0,
              }}
            >
              İletişim
            </p>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
              <div>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: "rgba(249,248,245,0.35)",
                    margin: "0 0 8px 0",
                  }}
                >
                  Kurumsal Asistan
                </p>
                <a
                  href="mailto:asistan@alicemalettinkartal.com"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 19,
                    color: "#F9F8F5",
                    borderBottom: "1px solid rgba(249,248,245,0.2)",
                    paddingBottom: 4,
                    display: "inline-block",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderBottomColor = "rgba(249,248,245,0.8)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderBottomColor = "rgba(249,248,245,0.2)")
                  }
                >
                  asistan@alicemalettinkartal.com
                </a>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: "rgba(249,248,245,0.35)",
                    margin: "0 0 8px 0",
                  }}
                >
                  Sosyal Medya
                </p>
                <a
                  href="https://linkedin.com/in/alicemalettinkartal"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: "rgba(249,248,245,0.5)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F9F8F5")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(249,248,245,0.5)")
                  }
                >
                  LinkedIn <span style={{ fontSize: 16 }}>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap" as const,
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: SANS,
              fontSize: 12,
              color: "rgba(249,248,245,0.25)",
              margin: 0,
            }}
          >
            © 2025 Ali Cemalettin Kartal. Tüm hakları saklıdır.
          </p>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 12,
              color: "rgba(249,248,245,0.18)",
              margin: 0,
            }}
          >
            İstanbul, Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
