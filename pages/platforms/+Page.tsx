export default function PlatformsPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .plat-body {
          min-height: 100vh;
          background: #0A0818;
          color: #EAE4DC;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          position: relative;
          overflow: hidden;
        }

        /* Renkli arka plan blobları */
        .plat-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .plat-blob--1 {
          width: 400px; height: 400px;
          top: -100px; left: -80px;
          background: rgba(139, 92, 246, 0.25);
        }
        .plat-blob--2 {
          width: 350px; height: 350px;
          bottom: -80px; right: -60px;
          background: rgba(59, 130, 246, 0.2);
        }
        .plat-blob--3 {
          width: 280px; height: 280px;
          top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(184, 149, 106, 0.12);
        }

        /* Ana kart — glass */
        .plat-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 380px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 40px 28px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04) inset,
            0 32px 64px rgba(0,0,0,0.4);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Avatar */
        .plat-avatar-wrap {
          position: relative;
          width: 96px;
          height: 96px;
          margin-bottom: 20px;
        }

        .plat-avatar-wrap::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: conic-gradient(
            rgba(139,92,246,0.8) 0deg,
            rgba(59,130,246,0.6) 90deg,
            rgba(184,149,106,0.8) 200deg,
            rgba(139,92,246,0.8) 360deg
          );
          animation: spin 5s linear infinite;
          z-index: 0;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .plat-avatar-inner {
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          overflow: hidden;
          background: #1A1830;
          z-index: 1;
        }

        .plat-avatar-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          position: relative;
          z-index: 1;
        }

        .plat-avatar-initials {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Georgia, serif;
          font-size: 1.4rem;
          color: rgba(255,255,255,0.3);
          z-index: 0;
        }

        /* İsim & unvan */
        .plat-name {
          font-size: 1.45rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #F0EDE8;
          text-align: center;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .plat-title {
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 32px;
        }

        /* Butonlar */
        .plat-links {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .plat-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          color: #D8D3CC;
          text-decoration: none;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.18s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        /* Üst shimmer çizgisi */
        .plat-btn::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          pointer-events: none;
        }

        .plat-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        .plat-btn:focus-visible {
          outline: 2px solid rgba(139,92,246,0.8);
          outline-offset: 3px;
        }

        .plat-btn-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .plat-btn-icon img {
          width: 24px;
          height: 24px;
          display: block;
        }

        .plat-btn-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .plat-btn-eyebrow {
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          line-height: 1;
        }

        .plat-btn-label {
          font-size: 0.88rem;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          line-height: 1.2;
        }

        .plat-btn-chevron {
          color: rgba(255,255,255,0.2);
          font-size: 1rem;
          flex-shrink: 0;
          transition: transform 0.18s ease, color 0.18s ease;
        }

        .plat-btn:hover .plat-btn-chevron {
          color: rgba(255,255,255,0.5);
          transform: translateX(3px);
        }

        /* Footer */
        .plat-footer {
          margin-top: 28px;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.12);
        }

        @media (prefers-reduced-motion: reduce) {
          .plat-card { animation: none; }
          .plat-avatar-wrap::before { animation: none; }
          .plat-btn { transition: none; }
          .plat-btn:hover { transform: none; }
        }
      `}</style>

      <main className="plat-body">
        {/* Arka plan blobları */}
        <div className="plat-blob plat-blob--1" aria-hidden="true" />
        <div className="plat-blob plat-blob--2" aria-hidden="true" />
        <div className="plat-blob plat-blob--3" aria-hidden="true" />

        <div className="plat-card">

          {/* Avatar */}
          <div className="plat-avatar-wrap">
            <div className="plat-avatar-inner">
              <img src="/ack-profile.png" alt="Ali Cemalettin Kartal" />
              <span className="plat-avatar-initials" aria-hidden="true">AK</span>
            </div>
          </div>

          <h1 className="plat-name">Ali Cemalettin Kartal</h1>
          <p className="plat-title">Yönetim Kurulu Başkan Yardımcısı</p>

          <nav className="plat-links" aria-label="Bağlantılar">

            <a className="plat-btn" href="mailto:cemalettin.kartal@kartalbombe.com.tr">
              <span className="plat-btn-icon" aria-hidden="true">
                <img src="/icons/gmail.svg" alt="" width="24" height="24" />
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Ulaşın</span>
                <span className="plat-btn-label">E-posta Gönder</span>
              </span>
              <span className="plat-btn-chevron" aria-hidden="true">›</span>
            </a>

            <a className="plat-btn" href="https://www.instagram.com/ack_kbs/" target="_blank" rel="noopener noreferrer">
              <span className="plat-btn-icon" aria-hidden="true">
                <img src="/icons/instagram.svg" alt="" width="24" height="24" />
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Sosyal</span>
                <span className="plat-btn-label">Instagram</span>
              </span>
              <span className="plat-btn-chevron" aria-hidden="true">›</span>
            </a>

            <a className="plat-btn" href="https://www.linkedin.com/in/alicemalettinkartal/" target="_blank" rel="noopener noreferrer">
              <span className="plat-btn-icon" aria-hidden="true">
                <img src="/icons/linkedin.svg" alt="" width="24" height="24" />
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Profesyonel</span>
                <span className="plat-btn-label">LinkedIn</span>
              </span>
              <span className="plat-btn-chevron" aria-hidden="true">›</span>
            </a>

            <a className="plat-btn" href="https://alicemalettinkartal.com/" target="_blank" rel="noopener noreferrer">
              <span className="plat-btn-icon" aria-hidden="true">
                <img src="/icons/website.svg" alt="" width="24" height="24" />
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Portfolio</span>
                <span className="plat-btn-label">Web Sitem</span>
              </span>
              <span className="plat-btn-chevron" aria-hidden="true">›</span>
            </a>

          </nav>

          <p className="plat-footer">© 2026</p>
        </div>
      </main>
    </>
  );
}
