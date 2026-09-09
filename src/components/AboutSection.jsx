import { ShieldCheck, Cpu, Database, Smartphone } from 'lucide-react'

const PILLAR_ICONS = [ShieldCheck, Cpu, Database, Smartphone]

export default function AboutSection({ lang = 'en', t }) {
  const pillars = t?.about?.pillars || []

  return (
    <section className="about-section" id="about">
      <div className="section-header-hud">
        <div className="hud-label">
          <span className="hud-num">{t?.about?.hudNum || '01'}</span>
          <span className="hud-slash">/</span>
          <span className="hud-name">{t?.about?.hudName || 'CORE PHILOSOPHY'}</span>
        </div>
        <h2 className="section-title">
          {t?.about?.title || 'Engineering Software'}{' '}
          <span className="gradient-text">{t?.about?.titleHighlight || 'With Intention'}</span>
        </h2>
      </div>

      <div className="about-split-grid">
        <div className="about-bio-text">
          <p className="about-lead">
            {t?.about?.lead || 'I am a Software Engineer focused on mobile development and client-side systems.'}
          </p>
          <p>
            {t?.about?.p1 || 'My work spans cross-platform Flutter applications and native Android.'}
          </p>
          <p>
            {t?.about?.p2 || 'Currently studying at the Faculty of Computers & Artificial Intelligence.'}
          </p>
        </div>

        <div className="about-pillars-grid">
          {pillars.map((p, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length]
            return (
              <div key={p.title} className="pillar-mini-card">
                <div className="pillar-top-row">
                  <div className="pillar-mini-icon">
                    <Icon size={18} />
                  </div>
                  <span className="pillar-index">0{idx + 1}</span>
                </div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
