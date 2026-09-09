import { ArrowUp } from 'lucide-react'
import { soundFX } from '../utils/audio'

export default function Footer({ lang = 'en', t }) {
  const scrollToTop = () => {
    soundFX.playTab()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="cyber-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="brand-dot" />
            <span className="brand-name">
              {lang === 'ar' ? 'أحمد قطارية' : 'Ahmed Qataria'}
            </span>
          </div>
          <p className="footer-role">{t?.footer?.role || 'Software Engineer — Mobile & Systems Architecture'}</p>
        </div>

        <div className="footer-right">
          <button className="back-to-top" onClick={scrollToTop} title={t?.footer?.backToTop || 'Return to Top'}>
            <span>{t?.footer?.backToTop || 'BACK TO TOP'}</span>
            <ArrowUp size={14} className="back-to-top-icon" />
          </button>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span>© {new Date().getFullYear()} {t?.footer?.rights || 'Ahmed Qataria. All rights reserved.'}</span>
        <span>{t?.footer?.builtWith || 'Built with React 19 & Vite // Engineered for Maximum Performance'}</span>
      </div>
    </footer>
  )
}
