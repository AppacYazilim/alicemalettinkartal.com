const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, system-ui, sans-serif";

/**
 * InlineThumb — small photo-card embedded inline within text, like GatesNotes.
 * Replace `src` with a real image path; the colored gradient shows until then.
 */
function InlineThumb({
  src,
  alt,
  gradient,
}: {
  src?: string;
  alt: string;
  gradient: string;
}) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 68,
        height: 68,
        verticalAlign: "middle",
        marginLeft: 8,
        marginBottom: 8,
        flexShrink: 0,
        position: "relative" as const,
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: "0 1px 4px rgba(0,0,0,0.14)",
      }}
    >
      {/* Gradient placeholder */}
      <span
        style={{
          display: "block",
          position: "absolute" as const,
          inset: 0,
          background: gradient,
        }}
      />
      {/* Real image when available */}
      {src && (
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute" as const,
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: 6,
          }}
        />
      )}
    </span>
  );
}

export function AckBio() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", paddingTop: 0, paddingBottom: 0 }}
    >
      {/* Large flowing text — the GatesNotes signature section */}
      <div
        className="ack-section-pad"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          paddingLeft: 48,
          paddingRight: 48,
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(22px, 3vw, 32px)",
            lineHeight: 1.65,
            color: "#888880",
            margin: 0,
          }}
        >
          Yönettiğim{" "}
          <strong style={{ color: "#1a1a1a", fontWeight: "bold" }}>şirketler</strong>
          <InlineThumb
            src="/icons/kbs.svg"
            gradient="#F5F2EC"
            alt="KBS Kartal Bombe Sanayi"
          />{" "}
          ve geliştirdiğim{" "}
          <strong style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            endüstriyel çözümler
          </strong>
          <InlineThumb
            src="/icons/harfkesim.svg"
            gradient="linear-gradient(135deg,#C0181A,#E8222A)"
            alt="Harf Kesim Çıkartmalar"
          />{" "}
          hakkında okuyun. Sürdürdüğüm{" "}
          <strong style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            teknoloji yatırımları
          </strong>
          <InlineThumb
            src="/icons/icon-trending.svg"
            gradient="linear-gradient(135deg,#0F1E35,#1A2F4A)"
            alt="Teknoloji yatırımları"
          />{" "}
          ve yayımladığım{" "}
          <strong style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            sektörel analizleri
          </strong>
          <InlineThumb
            src="/icons/icon-barchart.svg"
            gradient="linear-gradient(135deg,#3A1A5C,#5C2D8A)"
            alt="Sektörel analizleri"
          />{" "}
          keşfedin. Ama iş her şey değil. Desteklediğim{" "}
          <strong style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            genç girişimciler
          </strong>
          <InlineThumb
            src="/icons/icon-lightbulb.svg"
            gradient="linear-gradient(135deg,#0D5C3A,#187A50)"
            alt="Genç girişimciler"
          />{" "}
          ve beni şekillendiren{" "}
          <strong style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            değerler
          </strong>
          <InlineThumb
            src="/icons/icon-compass.svg"
            gradient="linear-gradient(135deg,#1C3962,#1A6B5C)"
            alt="Değerler"
          />{" "}
          için de buradayım.
        </p>
      </div>

      {/* Thin rule between bio text and detail sections */}
      <div
        className="ack-section-pad"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 48,
          paddingRight: 48,
        }}
      >
        <div style={{ height: 1, backgroundColor: "#E8E6E0" }} />
      </div>

      {/* Detail paragraphs */}
      <div
        id="hakkinda"
        className="ack-section-pad"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          paddingLeft: 48,
          paddingRight: 48,
          paddingTop: 72,
          paddingBottom: 80,
        }}
      >
        <p
          style={{
            fontFamily: SANS,
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase" as const,
            color: "#1C3962",
            margin: "0 0 36px 0",
          }}
        >
          Hakkında
        </p>

        <p
          style={{
            fontFamily: SERIF,
            fontSize: 22,
            lineHeight: 1.75,
            color: "#333",
            margin: "0 0 28px 0",
            fontWeight: "normal",
          }}
        >
          Kariyerinin ilk yıllarında sanayi sektöründe edindiği deneyim,
          ilerleyen dönemde teknoloji ve yatırım alanlarına açılmasının sağlam
          temelini oluşturdu. Bu süreçte kurduğu ve büyüttüğü şirketler,
          Türkiye'nin ekonomik dönüşümünde belirleyici roller üstlendi.
        </p>

        <p
          style={{
            fontFamily: SANS,
            fontSize: 17,
            lineHeight: 1.9,
            color: "#666",
            margin: "0 0 52px 0",
          }}
        >
          Birden fazla sektörde yönetim kurulu üyeliği üstlenen Kartal, yerel
          ve uluslararası iş ekosistemlerinin geliştirilmesine aktif katkıda
          bulunmaktadır. Özellikle genç girişimcilere verdiği mentorluk
          desteği, onun liderlik anlayışının ayrılmaz bir parçasını
          oluşturmaktadır.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            margin: "0 0 52px -20px",
            paddingLeft: 20,
            borderLeft: "3px solid #1C3962",
          }}
        >
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 24,
              lineHeight: 1.55,
              color: "#1a1a1a",
              fontStyle: "italic",
              margin: "0 0 14px 0",
            }}
          >
            "Sürdürülebilir büyüme, hızlı kazanımdan değil; doğru ilişkilerden,
            sağlam değerlerden ve uzun soluklu vizyondan doğar."
          </p>
          <footer
            style={{
              fontFamily: SANS,
              fontSize: 11,
              letterSpacing: "0.10em",
              textTransform: "uppercase" as const,
              color: "#888",
            }}
          >
            — Ali Cemalettin Kartal
          </footer>
        </blockquote>

        <p
          style={{
            fontFamily: SANS,
            fontSize: 17,
            lineHeight: 1.9,
            color: "#666",
            margin: 0,
          }}
        >
          Bugün çok sayıda şirketin yönetiminde yer alan ve çeşitli sektörlerde
          aktif yatırımlar sürdüren Kartal, iş dünyasındaki faaliyetlerini
          sosyal sorumluluk projeleriyle harmanlayarak bütünsel bir liderlik
          modeli ortaya koymaktadır.
        </p>
      </div>
    </section>
  );
}
