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
                {/* Gmail logo */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                  <path d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819v-9.27L0 7.64V5.457z" fill="#C5221F"/>
                  <path d="M24 5.457v2.184l-5.455 4.09v9.27h3.819A1.636 1.636 0 0 0 24 19.365V5.457z" fill="#C5221F"/>
                  <path d="M0 5.457l12 9.09 12-9.09C24 3.434 21.69 2.28 20.073 3.493L18.545 4.64 12 9.548 5.455 4.64 3.927 3.493C2.31 2.28 0 3.434 0 5.457z" fill="#EA4335"/>
                </svg>
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Ulaşın</span>
                <span className="plat-btn-label">E-posta Gönder</span>
              </span>
              <span className="plat-btn-arrow" aria-hidden="true">→</span>
            </a>

            <a className="plat-btn" href="https://www.instagram.com/ack_kbs/" target="_blank" rel="noopener noreferrer">
              <span className="plat-btn-icon" aria-hidden="true">
                {/* Instagram official gradient logo */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="ig-rg" cx="30%" cy="107%" r="150%">
                      <stop offset="0%" stopColor="#fdf497"/>
                      <stop offset="5%" stopColor="#fdf497"/>
                      <stop offset="45%" stopColor="#fd5949"/>
                      <stop offset="60%" stopColor="#d6249f"/>
                      <stop offset="90%" stopColor="#285AEB"/>
                    </radialGradient>
                  </defs>
                  <rect width="24" height="24" rx="6" fill="url(#ig-rg)"/>
                  <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.5"/>
                  <circle cx="17.2" cy="6.8" r="1" fill="white"/>
                </svg>
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Sosyal</span>
                <span className="plat-btn-label">Instagram</span>
              </span>
              <span className="plat-btn-arrow" aria-hidden="true">→</span>
            </a>

            <a className="plat-btn" href="https://www.linkedin.com/in/alicemalettinkartal/" target="_blank" rel="noopener noreferrer">
              <span className="plat-btn-icon" aria-hidden="true">
                {/* LinkedIn official logo */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                  <path fill="white" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <span className="plat-btn-text">
                <span className="plat-btn-eyebrow">Profesyonel</span>
                <span className="plat-btn-label">LinkedIn</span>
              </span>
              <span className="plat-btn-arrow" aria-hidden="true">→</span>
            </a>

            <a className="plat-btn" href="https://alicemalettinkartal.com/" target="_blank" rel="noopener noreferrer">
              <span className="plat-btn-icon" aria-hidden="true">
                {/* Safari/globe icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="#B8956A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.5 15.5 0 0 1 4 10 15.5 15.5 0 0 1-4 10 15.5 15.5 0 0 1-4-10 15.5 15.5 0 0 1 4-10z"/>
                </svg>
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
