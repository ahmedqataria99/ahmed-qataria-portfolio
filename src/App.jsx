import { useState, useEffect } from 'react'
import Navbar, { THEMES } from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import TerminalSimulator from './components/TerminalSimulator'
import AboutSection from './components/AboutSection'
import ProjectShowcase from './components/ProjectShowcase'
import TechMatrix from './components/TechMatrix'
import ExperienceTimeline from './components/ExperienceTimeline'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ImageLightbox from './components/ImageLightbox'
import { projects } from './data/projects'
import { translations } from './data/translations'

function App() {
  const [currentTheme, setCurrentTheme] = useState('cyan')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [lang, setLang] = useState('en')
  const [activeImage, setActiveImage] = useState(null)

  const t = translations[lang] || translations.en

  // Sync theme with root document variables
  useEffect(() => {
    const active = THEMES.find((item) => item.id === currentTheme) || THEMES[0]
    document.documentElement.setAttribute('data-theme', active.id)
    document.documentElement.style.setProperty('--accent', active.color)
    document.documentElement.style.setProperty('--accent-rgb', active.rgb)
  }, [currentTheme])

  // Sync language and document direction
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const handleEnlargeImage = (src, title) => {
    setActiveImage({ src, title })
  }

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal-hub')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`portfolio-app-root ${lang === 'ar' ? 'is-rtl' : 'is-ltr'}`}>
      {/* Interactive Particle & Grid Canvas */}
      <ParticleBackground />

      {/* Floating Capsule Dock Header */}
      <Navbar
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        lang={lang}
        setLang={setLang}
        t={t}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenTerminal={handleOpenTerminal} lang={lang} t={t} />

        {/* Embedded Interactive Terminal Section */}
        <section className="terminal-hub-section" id="terminal-hub">
          <div className="section-header-hud">
            <div className="hud-label">
              <span className="hud-num">{t?.terminal?.hudNum || '00'}</span>
              <span className="hud-slash">/</span>
              <span className="hud-name">{t?.terminal?.hudName || 'INTERACTIVE WORKSTATION'}</span>
            </div>
            <h2 className="section-title">
              {t?.terminal?.title || 'System'}{' '}
              <span className="gradient-text">{t?.terminal?.titleHighlight || 'Console Simulator'}</span>
            </h2>
            <p className="section-subtitle">
              {t?.terminal?.subtitle || 'Run live commands or click presets below to inspect technical capabilities.'}
            </p>
          </div>
          <TerminalSimulator lang={lang} t={t} />
        </section>

        <AboutSection lang={lang} t={t} />
        <ProjectShowcase
          projects={projects}
          onEnlargeImage={handleEnlargeImage}
          lang={lang}
          t={t}
        />
        <TechMatrix lang={lang} t={t} />
        <ExperienceTimeline lang={lang} t={t} />
        <ContactSection lang={lang} t={t} />
      </main>

      <Footer lang={lang} t={t} />

      {/* Fullscreen HD Screenshot Lightbox */}
      <ImageLightbox
        activeImage={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </div>
  )
}

export default App