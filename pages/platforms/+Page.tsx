export default function PlatformsPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .plat-body {
          min-height: 100vh;
          background: #0D0C0B;
          color: #EAE4DC;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 24px 80px;
        }

        .plat-page {
          width: 100%;
          max-width: 390px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .plat-avatar-ring {
          width: 92px;
          height: 92px;
          border-radius: 50%;
          padding: 2px;
          background: conic-gradient(from 200deg, #2A2723 0%, #2A2723 50%, #B8956A 75%, #2A2723 100%);
          margin-bottom: 22px;
          transition: background 0.5s ease;
        }

        .plat-avatar-ring:hover {
          background: conic-gradient(from 0deg, #D4AA7D, #B8956A, #D4AA7D);
        }

        .plat-avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #161412;
          position: relative;
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
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.35rem;
          color: #74706B;
          letter-spacing: 0.06em;
          user-select: none;
          z-index: 0;
        }

        .plat-name {
          font-family: Georgia, 'Times New Roman', Times, serif;
          font-size: 1.55rem;
          font-weight: normal;
          letter-spacing: 0.05em;
          color: #EAE4DC;
          text-align: center;
          line-height: 1.2;
        }

        .plat-pip {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #B8956A;
          opacity: 0.6;
          margin: 16px 0;
          flex-shrink: 0;
        }

        .plat-bio {
          font-size: 0.8rem;
          line-height: 1.7;
          color: #74706B;
          text-align: center;
          max-width: 290px;
          letter-spacing: 0.015em;
          margin-bottom: 42px;
        }

        .plat-links {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .plat-btn {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 13px 18px 13px 16px;
          background: #161412;
          border: 1px solid #2A2723;
          border-radius: 10px;
          color: #EAE4DC;
          text-decoration: none;
          transition: border-color 0.22s ease, background 0.22s ease, transform 0.18s ease;
        }

        .plat-btn:hover {
          border-color: #B8956A;
          background: #1D1B18;
          transform: translateY(-2px);
        }

        .plat-btn:focus-visible {
          outline: 2px solid #B8956A;
          outline-offset: 3px;
        }

        .plat-btn-icon {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .plat-btn-icon svg {
          width: 100%;
          height: 100%;
        }

        .plat-btn-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .plat-btn-eyebrow {
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #74706B;
          line-height: 1;
        }

        .plat-btn-label {
          font-size: 0.875rem;
          letter-spacing: 0.015em;
          color: #EAE4DC;
          line-height: 1.2;
        }

        .plat-btn-arrow {
          color: #B8956A;
          opacity: 0;
          font-size: 0.8rem;
          transition: opacity 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }

        .plat-btn:hover .plat-btn-arrow {
          opacity: 1;
          transform: translateX(2px);
        }

        .plat-footer {
          margin-top: 56px;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2E2B27;
        }

        @media (prefers-reduced-motion: reduce) {
          .plat-btn, .plat-avatar-ring { transition: none; }
          .plat-btn:hover { transform: none; }
        }
      `}</style>

      <main className="plat-body">
        <div className="plat-page">

          <div className="plat-avatar-ring">
            <div className="plat-avatar-inner">
              <img
                src="/ack-profile.png"
                alt="Ali Cemalettin Kartal profil fotoğrafı"
              />
              <span className="plat-avatar-initials" aria-hidden="true">AK</span>
            </div>
          </div>

          <h1 className="plat-name">Ali Cemalettin Kartal</h1>
          <div className="plat-pip" aria-hidden="true" />
          <p className="plat-bio">Yönetim Kurulu Başkan Yardımcısı</p>

          <nav className="plat-links" aria-label="Bağlantılar">

            <a className="plat-btn" href="mailto:cemalettin.kartal@kartalbombe.com.tr">
              <span className="plat-btn-icon" aria-hidden="true">
                <img src="/icons/gmail.svg" alt="" width="22" height="22" />
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Ulaşın</span>
                <span className="plat-btn-label">E-posta Gönder</span>
              </span>
              <span className="plat-btn-arrow" aria-hidden="true">→</span>
            </a>

            <a className="plat-btn" href="https://www.instagram.com/ack_kbs/" target="_blank" rel="noopener noreferrer">
              <span className="plat-btn-icon" aria-hidden="true">
                <img src="/icons/instagram.svg" alt="" width="22" height="22" />
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Sosyal</span>
                <span className="plat-btn-label">Instagram</span>
              </span>
              <span className="plat-btn-arrow" aria-hidden="true">→</span>
            </a>

            <a className="plat-btn" href="https://www.linkedin.com/in/alicemalettinkartal/" target="_blank" rel="noopener noreferrer">
              <span className="plat-btn-icon" aria-hidden="true">
                <img src="/icons/linkedin.svg" alt="" width="22" height="22" />
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Profesyonel</span>
                <span className="plat-btn-label">LinkedIn</span>
              </span>
              <span className="plat-btn-arrow" aria-hidden="true">→</span>
            </a>

            <a className="plat-btn" href="https://alicemalettinkartal.com/" target="_blank" rel="noopener noreferrer">
              <span className="plat-btn-icon" aria-hidden="true">
                <img src="/icons/website.svg" alt="" width="22" height="22" />
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Portfolio</span>
                <span className="plat-btn-label">Web Sitem</span>
              </span>
              <span className="plat-btn-arrow" aria-hidden="true">→</span>
            </a>

          </nav>

          <p className="plat-footer">© 2026</p>
        </div>
      </main>
    </>
  );
}
