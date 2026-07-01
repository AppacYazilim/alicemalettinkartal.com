const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, system-ui, sans-serif";

export function AckHero() {
  return (
    <section
      id="tanis"
      style={{
        position: "relative",
        height: "72vh",
        minHeight: 500,
        maxHeight: 740,
        paddingTop: 64,
        backgroundColor: "#F7F2EA",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <img
        src="/1.jpg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Left fade — helps portrait blend in */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(247,242,234,0.55) 0%, rgba(247,242,234,0) 48%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade — text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(247,242,234,0) 52%, rgba(247,242,234,0.92) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Title overlay — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div
          className="ack-section-pad"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            paddingLeft: 48,
            paddingRight: 48,
            paddingBottom: 40,
          }}
        >
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(30px, 4.5vw, 54px)",
              color: "#111010",
              fontWeight: "bold",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Ali Cemalettin Kartal ile Tanışın
          </h1>
        </div>
      </div>
    </section>
  );
}
