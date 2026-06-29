import { useState } from "react";

const SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, system-ui, sans-serif";

const NAV_LINKS = [
  { href: "#tanis", label: "Tanışın" },
  { href: "#girisimler", label: "Girişimler" },
  { href: "#dusunceler", label: "Düşünceler" },
  { href: "#iletisim", label: "İletişim" },
];

// KBS logo SVG path (viewBox 0 0 35.62 37.78)
const KBS_PATH =
  "M27.87,14.8v17.21h-4.72v-14.94c-.97.3-1.97.52-3,.66v20.05h-4.7v-20.05c-1-.13-1.97-.34-2.91-.63v14.92h-4.72V14.84c-1.11-.75-2.13-1.62-3.04-2.59v14.34H0V.42h4.78v.3c.12,6.19,4.67,11.3,10.67,12.38V0h9.04v4.9h-4.34v8.21c6.04-1.08,10.61-6.26,10.69-12.49v-.29h4.78v26.25h-4.78v-14.35c-.89.96-1.89,1.81-2.97,2.55";

export function AckNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 64,
        backgroundColor: "#1a1a1a",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="ack-section-pad"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          paddingLeft: 32,
          paddingRight: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo box — KBS SVG + name */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              backgroundColor: "#ffffff",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              padding: "9px 8px",
            }}
          >
            <svg
              viewBox="0 0 35.62 37.78"
              style={{ width: "100%", height: "100%", display: "block" }}
              aria-label="KBS Logo"
            >
              <path fill="#FF4713" d={KBS_PATH} />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.80)",
              letterSpacing: "-0.01em",
            }}
          >
            Ali Cemalettin Kartal
          </span>
        </a>

        {/* Desktop links */}
        <div className="ack-nav-links" style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: SANS,
                fontSize: 14,
                color: "rgba(255,255,255,0.72)",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.72)")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
