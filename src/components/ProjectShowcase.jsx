import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { PhoneMockup, DesktopMockup } from './DeviceFrame'
import ArchitectureDiagram from './ArchitectureDiagram'
import { soundFX } from '../utils/audio'

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default function ProjectShowcase({ projects = [], onEnlargeImage, lang = 'en', t }) {
  const localizedItems = t?.projects?.items || []

  return (
    <section className="work-section" id="work">
      {/* Section Header */}
      <div className="section-header-hud">
        <div className="hud-label">
          <span className="hud-num">{t?.projects?.hudNum || '02'}</span>
          <span className="hud-slash">/</span>
          <span className="hud-name">{t?.projects?.hudName || 'ENGINEERED SYSTEMS'}</span>
        </div>
        <h2 className="section-title">
          {t?.projects?.title || 'Selected'}{' '}
          <span className="gradient-text">{t?.projects?.titleHighlight || 'Work & Applications'}</span>
        </h2>
        <p className="section-subtitle">
          {t?.projects?.subtitle || 'Real-world software built with clean layered architecture.'}
        </p>
      </div>

      {/* Projects List */}
      <div className="projects-container">
        {projects.map((baseProject, idx) => {
          const loc = localizedItems[idx] || {}
          const name = loc.name || baseProject.name
          const subtitle = loc.subtitle || baseProject.subtitle
          const platform = loc.platform || baseProject.platform
          const description = loc.description || baseProject.description
          const screens = loc.screens || baseProject.screens
          const architecture = loc.architecture || baseProject.architecture
          const isDesktop = baseProject.platform.toLowerCase().includes('windows') || baseProject.platform.toLowerCase().includes('desktop')

          return (
            <article
              key={baseProject.name}
              className={`project-card-cyber project-theme-${baseProject.accent || 'cyan'}`}
            >
              {/* Sci-Fi Corner Reticles */}
              <div className="project-corner pc-tl" />
              <div className="project-corner pc-tr" />
              <div className="project-corner pc-bl" />
              <div className="project-corner pc-br" />
              <div className="project-card-ambient-aura" />

              {/* Project Card Top Bar */}
              <div className="project-top-bar">
                <div className="project-id-badge">
                  <span className="pid-num">{baseProject.number}</span>
                  <span className="pid-dot" />
                  <span className="pid-platform">{platform}</span>
                </div>

                <div className="project-links-row">
                  <a
                    href={baseProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-git-btn"
                    onClick={() => soundFX.playClick()}
                    title={t?.projects?.sourceCode || 'Source Code'}
                  >
                    <GithubIcon size={15} />
                    <span>{t?.projects?.sourceCode || 'Source Code'}</span>
                    <ArrowUpRight size={13} className="btn-arrow" />
                  </a>
                </div>
              </div>

              {/* Main Content Grid: Info & Mockup */}
              <div className="project-main-grid">
                {/* Left Info Column */}
                <div className="project-info-col">
                  <h3 className="project-title">{name}</h3>
                  <p className="project-subtitle-text">{subtitle}</p>

                  <p className="project-desc">{description}</p>

                  {/* Tags */}
                  <div className="project-tags-cloud">
                    {baseProject.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Architecture Flow */}
                  <div className="project-arch-section">
                    <ArchitectureDiagram
                      items={architecture}
                      title={t?.projects?.archTitle}
                      hint={t?.projects?.archHint}
                      lang={lang}
                    />
                  </div>
                </div>

                {/* Right Interactive Mockup Column */}
                <div className="project-mockup-col">
                  {isDesktop ? (
                    <DesktopMockup
                      images={baseProject.images}
                      screens={screens}
                      projectName={name}
                      onEnlarge={onEnlargeImage}
                      fullscreenLabel={t?.projects?.fullscreen}
                    />
                  ) : (
                    <PhoneMockup
                      images={baseProject.images}
                      screens={screens}
                      projectName={name}
                      onEnlarge={onEnlargeImage}
                      enlargeLabel={t?.projects?.enlarge}
                    />
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
