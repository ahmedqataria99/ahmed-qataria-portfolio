import { useState, useEffect } from 'react'
import {
  Volume2,
  VolumeX,
  Menu,
  X,
  ArrowUpRight,
  ShieldCheck,
  Languages,
} from 'lucide-react'
import profilePhoto from '../../Ahmed qataria.jpeg'
import { soundFX } from '../utils/audio'

export const THEMES = [
  { id: 'cyan', name: 'Cyber Cyan', color: '#00f0ff', rgb: '0, 240, 255' },
  { id: 'emerald', name: 'Matrix Emerald', color: '#00ff88', rgb: '0, 255, 136' },
  { id: 'violet', name: 'Neon Violet', color: '#a855f7', rgb: '168, 85, 247' },
  { id: 'amber', name: 'Solar Amber', color: '#f59e0b', rgb: '245, 158, 11' },
]

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default function Navbar({
  currentTheme,
  setTheme,
  soundEnabled,
  setSoundEnabled,
  lang = 'en',
  setLang,
  t,
}) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['top', 'about', 'work', 'architecture', 'experience', 'contact']
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    soundFX.playTab()
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleSound = () => {
    const next = !soundEnabled
    soundFX.enabled = next
    setSoundEnabled(next)
    if (next) soundFX.playSuccess()
  }

  const handleThemeChange = (tItem) => {
    soundFX.playClick()
    setTheme(tItem.id)
  }

  const toggleLanguage = () => {
    soundFX.playClick()
    const nextLang = lang === 'en' ? 'ar' : 'en'
    setLang(nextLang)
  }

  return (
    <header className={`navbar-futuristic ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand with Clean Vertically-Centered Name & Verified Badge */}
        <a
          href="#top"
          className="navbar-brand-cyber"
          onClick={(e) => handleNavClick(e, 'top')}
          title={lang === 'ar' ? 'الرجوع للأعلى' : 'Ahmed Qataria — Return to Top'}
        >
          {/* Cyber Avatar Hub */}
          <div className="cyber-avatar-hub">
            <div className="avatar-energy-ring" />
            <div className="avatar-photo-frame">
              <img
                src={profilePhoto}
                alt="Ahmed Qataria"
                className="avatar-photo-img"
              />
              <div className="avatar-scan-glow" />
            </div>
            <div className="avatar-status-beacon" title={lang === 'ar' ? 'متصل وجاهز' : 'Online & Available'}>
              <span className="beacon-ping" />
              <span className="beacon-core" />
            </div>
          </div>

          {/* Clean Centered Name (Sub-badge removed per user request) */}
          <div className="brand-name-centered">
            <span className="brand-title-cyber">
              {lang === 'ar' ? 'أحمد قطارية' : 'Ahmed Qataria'}
            </span>
            <span className="verified-badge-wrap" title={lang === 'ar' ? 'مهندس برمجيات موثق' : 'Verified Software Engineer'}>
              <ShieldCheck size={14} className="verified-icon" />
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <a
            href="#about"
            className={`nav-link-cyber ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            <span className="nav-idx">01.</span>
            <span className="nav-txt">{t?.nav?.about || 'About'}</span>
          </a>
          <a
            href="#work"
            className={`nav-link-cyber ${activeSection === 'work' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'work')}
          >
            <span className="nav-idx">02.</span>
            <span className="nav-txt">{t?.nav?.projects || 'Projects'}</span>
          </a>
          <a
            href="#architecture"
            className={`nav-link-cyber ${activeSection === 'architecture' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'architecture')}
          >
            <span className="nav-idx">03.</span>
            <span className="nav-txt">{t?.nav?.architecture || 'Architecture'}</span>
          </a>
          <a
            href="#experience"
            className={`nav-link-cyber ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'experience')}
          >
            <span className="nav-idx">04.</span>
            <span className="nav-txt">{t?.nav?.experience || 'Experience'}</span>
          </a>
          <a
            href="#contact"
            className={`nav-link-cyber ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <span className="nav-idx">05.</span>
            <span className="nav-txt">{t?.nav?.contact || 'Contact'}</span>
          </a>
        </nav>

        {/* Controls & Quick Actions (Ctrl+K removed per user request, Language Switcher added) */}
        <div className="navbar-actions">
          {/* Language Switcher Pill */}
          <button
            className="lang-switch-btn"
            onClick={toggleLanguage}
            title={lang === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
          >
            <Languages size={14} />
            <span className="lang-label">{lang === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          {/* Theme Palette Switcher */}
          <div className="theme-switcher" title="Switch Cyber Lighting">
            {THEMES.map((tItem) => (
              <button
                key={tItem.id}
                className={`theme-dot ${currentTheme === tItem.id ? 'active' : ''}`}
                style={{ '--dot-color': tItem.color }}
                onClick={() => handleThemeChange(tItem)}
                aria-label={`Switch to ${tItem.name}`}
              />
            ))}
          </div>

          {/* Sound Toggle (Clean & Uncut) */}
          <button
            className={`sound-toggle ${soundEnabled ? 'active' : ''}`}
            onClick={toggleSound}
            title={soundEnabled ? (lang === 'ar' ? 'كتم الصوت' : 'Mute Sound FX') : (lang === 'ar' ? 'تشغيل الصوت' : 'Enable Sound FX')}
            aria-label="Toggle Sound Effects"
          >
            {soundEnabled ? (
              <div className="sound-active-wrap">
                <Volume2 size={15} />
                <span className="audio-bars">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            ) : (
              <VolumeX size={15} />
            )}
          </button>

          {/* GitHub Profile Button */}
          <a
            href="https://github.com/ahmedqataria99"
            target="_blank"
            rel="noreferrer"
            className="nav-social-btn"
            title="GitHub Profile"
            onClick={() => soundFX.playClick()}
          >
            <GithubIcon size={14} />
            <span>{t?.nav?.github || 'GitHub'}</span>
            <ArrowUpRight size={12} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => {
              soundFX.playClick()
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              01 // {t?.nav?.about || 'About'}
            </a>
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')}>
              02 // {t?.nav?.projects || 'Projects'}
            </a>
            <a href="#architecture" onClick={(e) => handleNavClick(e, 'architecture')}>
              03 // {t?.nav?.architecture || 'Architecture'}
            </a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>
              04 // {t?.nav?.experience || 'Experience & Education'}
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              05 // {t?.nav?.contact || 'Contact'}
            </a>
          </div>
          <div className="mobile-drawer-footer">
            <button className="lang-switch-btn full-width" onClick={toggleLanguage}>
              <Languages size={14} />
              <span>{lang === 'en' ? 'التحويل للغة العربية' : 'Switch to English'}</span>
            </button>
            <div className="mobile-theme-pick">
              <span>{lang === 'ar' ? 'لون الإضاءة:' : 'Theme Lighting:'}</span>
              <div className="theme-switcher">
                {THEMES.map((tItem) => (
                  <button
                    key={tItem.id}
                    className={`theme-dot ${currentTheme === tItem.id ? 'active' : ''}`}
                    style={{ '--dot-color': tItem.color }}
                    onClick={() => handleThemeChange(tItem)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
