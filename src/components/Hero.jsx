import { useState, useRef, useEffect } from 'react'
import {
  ArrowUpRight,
  Terminal,
  ShieldCheck,
  Download,
  Mail,
  Smartphone,
  Layers,
  Award,
  GraduationCap,
  Sparkles,
  MapPin,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  Code2,
} from 'lucide-react'
import profilePhoto from '../../Ahmed qataria.jpeg'
import { soundFX } from '../utils/audio'

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedInIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function WhatsAppIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

const CONSOLE_SNIPPETS = {
  ts: {
    id: 'ts',
    filename: 'architect.config.ts',
    tag: 'TypeScript // Core',
    lines: [
      { num: '01', keyword: 'export const', ident: 'engineer', extra: ': MobileArchitect = {' },
      { num: '02', key: '  name:', val: '"Ahmed Qataria",' },
      { num: '03', key: '  specialization:', val: '["Flutter", "Native Android (Kotlin)"],' },
      { num: '04', key: '  patterns:', val: '["Clean Architecture", "BLoC", "MVI", "Flow"],' },
      { num: '05', key: '  performance:', val: '"60/120 FPS // Sub-ms Frame Budget",' },
      { num: '06', key: '  status:', val: '"READY_FOR_DEPLOYMENT" 🟢' },
      { num: '07', extra: '};' },
    ],
    raw: `export const engineer: MobileArchitect = {
  name: "Ahmed Qataria",
  specialization: ["Flutter", "Native Android (Kotlin)"],
  patterns: ["Clean Architecture", "BLoC", "MVI", "Flow"],
  performance: "60/120 FPS // Sub-ms Frame Budget",
  status: "READY_FOR_DEPLOYMENT"
};`,
  },
  dart: {
    id: 'dart',
    filename: 'mobile_engine.dart',
    tag: 'Flutter 3.x // BLoC',
    lines: [
      { num: '01', keyword: 'class', ident: 'MobileEngine', extra: 'extends BLoCArchitecture {' },
      { num: '02', key: '  final frameBudget =', val: 'TargetFrameRate.fps120;' },
      { num: '03', key: '  final offlineCache =', val: 'HiveStore() & SQLiteDatabase();' },
      { num: '04', key: '  final remoteSync =', val: 'FirebaseCloudService();' },
      { num: '05', key: '  Stream<AppState> dispatch(Event event) =>', val: 'pureStateFlow();' },
      { num: '06', extra: '}' },
    ],
    raw: `class MobileEngine extends BLoCArchitecture {
  final frameBudget = TargetFrameRate.fps120;
  final offlineCache = HiveStore() & SQLiteDatabase();
  final remoteSync = FirebaseCloudService();
  Stream<AppState> dispatch(Event event) => pureStateFlow();
}`,
  },
  kt: {
    id: 'kt',
    filename: 'system_core.kt',
    tag: 'Android // Compose',
    lines: [
      { num: '01', keyword: '@HiltViewModel', ident: '', extra: '' },
      { num: '02', keyword: 'class', ident: 'SystemCoreViewModel', extra: '@Inject constructor(' },
      { num: '03', key: '  private val repo:', val: 'ClientTelemetryRepository' },
      { num: '04', extra: ') : ViewModel() {' },
      { num: '05', key: '  val uiState: StateFlow<UiState> =', val: 'repo.flowState' },
      { num: '06', key: '    .stateIn(viewModelScope,', val: 'SharingStarted.Lazily, UiState.Ready)' },
      { num: '07', extra: '}' },
    ],
    raw: `@HiltViewModel
class SystemCoreViewModel @Inject constructor(
  private val repo: ClientTelemetryRepository
) : ViewModel() {
  val uiState: StateFlow<UiState> = repo.flowState
    .stateIn(viewModelScope, SharingStarted.Lazily, UiState.Ready)
}`,
  },
}

export default function Hero({ onOpenTerminal, lang = 'en', t }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('ts')
  const [copied, setCopied] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const roles = t?.hero?.roles || [
    'Mobile Systems Architect',
    'Flutter & Dart Specialist',
    'Native Android / Kotlin Craftsman',
    'Clean Architecture & BLoC Purist',
  ]

  // Rotating roles effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [roles.length])

  // Copy code snippet with audio & feedback
  const handleCopyCode = () => {
    soundFX.playClick()
    const raw = CONSOLE_SNIPPETS[activeTab]?.raw || ''
    navigator.clipboard.writeText(raw)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // 3D Tilt calculation
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateX = -(y / (rect.height / 2)) * 12
    const rotateY = (x / (rect.width / 2)) * 12
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const currentSnippet = CONSOLE_SNIPPETS[activeTab] || CONSOLE_SNIPPETS.ts
  const METRIC_ICONS = [Smartphone, Layers, Award, GraduationCap]

  return (
    <section className="hero-section" id="top">
      {/* Background Ambient Glows & Cyber Mesh */}
      <div className="ambient-glow glow-top-left" />
      <div className="ambient-glow glow-bottom-right" />
      <div className="hero-cyber-grid-overlay" />

      <div className="hero-grid">
        {/* Left Column: Text, Status, Code Pill & Actions */}
        <div className="hero-content">
          {/* Status Badge with Live Radar, Location & System Pill */}
          <div className="hero-status-row">
            <div className="status-badge-elite">
              <span className="status-dot">
                <span className="dot-ping" />
                <span className="dot-core" />
              </span>
              <span className="status-live-tag">LIVE</span>
              <span className="status-text">{t?.hero?.status || 'Available for Mobile & Systems Engineering'}</span>
            </div>
            <div className="hero-location-pill">
              <MapPin size={11} className="loc-icon" />
              <span>{lang === 'ar' ? 'مصر / عن بُعد' : 'Egypt / Remote'}</span>
            </div>
            <div className="hero-sys-badge">
              <span>SYS.ID // 0xAQ</span>
            </div>
          </div>

          {/* Heading Area with Cyber Sub-label & Metallic Name */}
          <div className="hero-title-group">
            <div className="hero-sub-label">
              <Sparkles size={12} className="spark-icon" />
              <span>{t?.hero?.subTitle || '// MOBILE SOFTWARE ENGINEER & CLIENT ARCHITECT'}</span>
            </div>
            <h1 className="hero-name-elite">
              {t?.hero?.greeting || 'Ahmed'}{' '}
              <span className="gradient-text-elite">{t?.hero?.surname || 'Qataria'}</span>
            </h1>
          </div>

          {/* Interactive Quick Tech Pills Row */}
          <div className="hero-tech-chips-row">
            <span className="tech-chip chip-fl">
              <span className="chip-bullet fl" />
              Flutter &amp; Dart
            </span>
            <span className="tech-chip chip-kt">
              <span className="chip-bullet kt" />
              Kotlin &amp; Compose
            </span>
            <span className="tech-chip chip-arch">
              <span className="chip-bullet arch" />
              Clean Architecture
            </span>
            <span className="tech-chip chip-flow">
              <span className="chip-bullet flow" />
              BLoC &amp; StateFlow
            </span>
          </div>

          {/* Upgraded Multi-Tab Interactive Sci-Fi Developer Console */}
          <div className="hero-console-elite">
            {/* Console Tab Header */}
            <div className="console-tab-header">
              <div className="console-window-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>

              {/* Interactive File Tabs */}
              <div className="console-tab-buttons">
                {Object.keys(CONSOLE_SNIPPETS).map((tabKey) => {
                  const item = CONSOLE_SNIPPETS[tabKey]
                  const isActive = activeTab === tabKey
                  return (
                    <button
                      key={tabKey}
                      className={`console-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        soundFX.playTab()
                        setActiveTab(tabKey)
                      }}
                      type="button"
                    >
                      <Code2 size={11} className="tab-code-icon" />
                      <span>{item.filename}</span>
                    </button>
                  )
                })}
              </div>

              {/* Copy Code Button */}
              <button
                className={`console-copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyCode}
                title={t?.hero?.copyCode || 'Copy Code'}
                type="button"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                <span>{copied ? (t?.hero?.copied || 'Copied!') : (t?.hero?.copyCode || 'Copy')}</span>
              </button>
            </div>

            {/* Console Code Body with Real Line Numbers */}
            <div className="console-code-body">
              {currentSnippet.lines.map((line, idx) => (
                <div key={idx} className="console-code-line">
                  <span className="code-line-num">{line.num}</span>
                  <div className="code-line-tokens">
                    {line.keyword && <span className="token-keyword">{line.keyword} </span>}
                    {line.ident && <span className="token-ident">{line.ident} </span>}
                    {line.key && <span className="token-key">{line.key} </span>}
                    {line.val && <span className="token-val">{line.val}</span>}
                    {line.extra && <span className="token-extra">{line.extra}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Console Dynamic Status Footer */}
            <div className="console-status-footer">
              <div className="console-focus-row">
                <span className="console-status-ping" />
                <span className="console-focus-tag">{t?.hero?.execActive || 'ACTIVE FOCUS:'}</span>
                <span className="console-active-role" key={`${roleIndex}-${lang}`}>
                  "{roles[roleIndex] || roles[0]}"
                </span>
                <span className="console-cursor" />
              </div>
              <span className="console-tag-badge">{currentSnippet.tag}</span>
            </div>
          </div>

          {/* Primary & Secondary Cyber Action CTAs (Upgraded) */}
          <div className="hero-actions-row">
            <a
              href="#work"
              className="btn-cyber-laser-v2"
              onClick={() => soundFX.playTab()}
            >
              <div className="btn-laser-sweep" />
              <span className="btn-core-dot" />
              <span className="btn-label">{t?.hero?.viewProjects || 'Explore Projects'}</span>
              <span className="btn-arrow-wrap">
                <ArrowUpRight size={16} className="hero-arrow-icon" />
              </span>
            </a>

            <button
              className="btn-cyber-terminal-v2"
              onClick={() => {
                soundFX.playClick()
                onOpenTerminal()
              }}
              type="button"
            >
              <div className="btn-terminal-scan" />
              <span className="terminal-prompt-sym">&gt;_</span>
              <span className="btn-label">{t?.hero?.launchTerminal || 'Launch Terminal'}</span>
              <span className="terminal-keycap">⌘K</span>
            </button>

            <a
              href="mailto:ahmedqataria98@gmail.com"
              className="btn-cyber-mail-v2"
              onClick={() => soundFX.playClick()}
              title="Email Ahmed"
            >
              <span className="mail-pulse-wave" />
              <Mail size={15} className="mail-icon-v2" />
              <span className="btn-label">{lang === 'ar' ? 'إرسال بريد فوري' : 'Contact'}</span>
            </a>
          </div>

          {/* Hero Quick Social Dock */}
          <div className="hero-social-dock">
            <span className="dock-label">{lang === 'ar' ? 'تواصل فوري:' : 'Direct Links:'}</span>
            <div className="dock-icons-row">
              <a
                href="https://github.com/ahmedqataria99"
                target="_blank"
                rel="noreferrer"
                className="dock-icon-btn"
                title="GitHub"
                onClick={() => soundFX.playClick()}
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ahmedqataria"
                target="_blank"
                rel="noreferrer"
                className="dock-icon-btn"
                title="LinkedIn"
                onClick={() => soundFX.playClick()}
              >
                <LinkedInIcon size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/201026027157?text=Hello%20Ahmed,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noreferrer"
                className="dock-icon-btn whatsapp"
                title="WhatsApp"
                onClick={() => soundFX.playClick()}
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic Dossier Card with Floating Tech Badges */}
        <div className="hero-photo-wrapper-elite">
          {/* Floating Orbiting Tech Badges */}
          <div className="floating-orbit-chip chip-top-left">
            <Smartphone size={14} className="chip-icon" />
            <div className="chip-info">
              <span className="chip-sub">Flutter &amp; Dart</span>
              <span className="chip-main">Production Specialist</span>
            </div>
          </div>

          <div className="floating-orbit-chip chip-bottom-right">
            <Layers size={14} className="chip-icon" />
            <div className="chip-info">
              <span className="chip-sub">Android &amp; Compose</span>
              <span className="chip-main">Clean Architecture</span>
            </div>
          </div>

          <div
            ref={cardRef}
            className="holo-card-elite"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient Aura Behind Card */}
            <div className="holo-card-backlight" />

            {/* Sci-Fi Corner Brackets */}
            <div className="hud-corner hud-tl" />
            <div className="hud-corner hud-tr" />
            <div className="hud-corner hud-bl" />
            <div className="hud-corner hud-br" />

            {/* Top Telemetry HUD Bar */}
            <div className="holo-telemetry-bar">
              <div className="telemetry-left">
                <span className="telemetry-radar-dot" />
                <span>LIVE TELEMETRY // 2026</span>
              </div>
              <div className="telemetry-right">
                <span className="telemetry-freq">AQ.CORE</span>
                <span className="telemetry-bars">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            </div>

            {/* Photo Container */}
            <div className="holo-frame-elite">
              <img
                src={profilePhoto}
                alt="Ahmed Qataria - Mobile Software Engineer"
                className="holo-img-elite"
              />
              {/* Sci-Fi Laser Scanline Ruler (مسطرة مسح ضوئي ليزرية متطورة تطلع وتنزل) */}
              <div className="holo-scanline-elite">
                <div className="scan-beam-glow" />
                <div className="scan-ruler-ticks" />
                <div className="scan-beam-line" />
                <div className="scan-ruler-badge">
                  <span className="scan-ruler-dot" />
                  <span>SCAN // 2026</span>
                </div>
              </div>
              <div className="holo-grid-lines" />
            </div>

            {/* Bottom HUD Bar */}
            <div className="holo-hud-bar-elite">
              <div className="hud-meta-elite">
                <span className="hud-id">{t?.hero?.devId || 'DEV-ID: AQ-2026'}</span>
                <span className="hud-status">{t?.hero?.statusOnline || 'STATUS: ONLINE'}</span>
              </div>
              <div className="hud-tags-elite">
                <span>FLUTTER</span>
                <span>KOTLIN</span>
                <span>COMPOSE</span>
                <span>BLOC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upgraded Advanced Holographic Telemetry Metric Cards */}
      <div className="hero-metrics-grid-elite">
        {(t?.hero?.metrics || [
          { number: '3+', label: 'Production Systems', sub: 'Flutter & Native Android', tag: 'SYS.01 // DEPLOYED', color: 'cyan', pct: 96 },
          { number: '100%', label: 'Clean Architecture', sub: 'Decoupled & Testable', tag: 'SYS.02 // ARCH_STRICT', color: 'green', pct: 100 },
          { number: '3x', label: 'Certified Internships', sub: 'DEPI, NTI & GDG', tag: 'SYS.03 // VERIFIED', color: 'amber', pct: 92 },
          { number: 'FCAI', label: 'Damietta University', sub: 'CS & AI Department', tag: 'SYS.04 // ACADEMIC', color: 'purple', pct: 100 },
        ]).map((metric, i) => {
          const IconComp = METRIC_ICONS[i % METRIC_ICONS.length]
          const colorClass = metric.color || (i === 0 ? 'cyan' : i === 1 ? 'green' : i === 2 ? 'amber' : 'purple')
          return (
            <div
              key={i}
              className={`metric-card-telemetry color-${colorClass}`}
            >
              {/* Sci-Fi Corner Reticles */}
              <div className="metric-corner mc-tl" />
              <div className="metric-corner mc-tr" />
              <div className="metric-corner mc-bl" />
              <div className="metric-corner mc-br" />

              {/* Ambient Radiant Glow Aura */}
              <div className="metric-ambient-aura" />

              {/* Card Header: Shield Icon & Telemetry Meta */}
              <div className="metric-telemetry-header">
                <div className="metric-shield-icon">
                  <IconComp size={16} />
                </div>
                <div className="metric-header-right">
                  <span className="metric-tag-code">{metric.tag || `SYS.0${i + 1}`}</span>
                  <span className="metric-live-beacon">
                    <span className="beacon-dot" />
                  </span>
                </div>
              </div>

              {/* Giant Numeric Stat */}
              <div className="metric-value-wrap">
                <span className="metric-giant-number">{metric.number}</span>
              </div>

              {/* Titles & Meta Details */}
              <div className="metric-info-block">
                <div className="metric-primary-label">{metric.label}</div>
                {metric.sub && <div className="metric-sub-detail">{metric.sub}</div>}
              </div>

              {/* Segmented HUD Energy Meter */}
              <div className="metric-gauge-wrap">
                <div className="metric-gauge-track">
                  <div
                    className="metric-gauge-fill"
                    style={{ width: `${metric.pct || 100}%` }}
                  />
                </div>
                <div className="metric-gauge-meta">
                  <span className="gauge-status">NOMINAL</span>
                  <span className="gauge-pct">{metric.pct || 100}%</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
