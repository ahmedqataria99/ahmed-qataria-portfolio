import { useState, useEffect } from 'react'
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MessageSquare,
  Clock,
  MapPin,
} from 'lucide-react'
import { soundFX } from '../utils/audio'
import { triggerConfetti } from '../utils/confetti'

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default function ContactSection({ lang = 'en', t }) {
  const [copied, setCopied] = useState(false)
  const [localTime, setLocalTime] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now)
      setLocalTime(formatted)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleCopyEmail = (e) => {
    soundFX.playSuccess()
    navigator.clipboard?.writeText('ahmedqataria98@gmail.com')
    const rect = e?.currentTarget?.getBoundingClientRect()
    triggerConfetti(rect ? rect.left + rect.width / 2 : undefined, rect ? rect.top : undefined)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSendMail = (e) => {
    e.preventDefault()
    soundFX.playSuccess()
    triggerConfetti()
    const mailtoUrl = `mailto:ahmedqataria98@gmail.com?subject=${encodeURIComponent(
      subject || (lang === 'ar' ? 'فرصة عمل / استفسار' : 'Software Engineering Opportunity')
    )}&body=${encodeURIComponent(
      message || (lang === 'ar' ? 'مرحباً أحمد، أود التواصل بخصوص...' : 'Hello Ahmed,\n\nI would love to connect regarding...')
    )}`
    window.location.href = mailtoUrl
  }

  return (
    <section className="contact-section" id="contact">
      {/* Ambient Backlight */}
      <div className="ambient-glow glow-center" />

      <div className="section-header-hud center-hud">
        <div className="hud-label">
          <span className="hud-num">{t?.contact?.hudNum || '05'}</span>
          <span className="hud-slash">/</span>
          <span className="hud-name">{t?.contact?.hudName || 'INITIATE TRANSMISSION'}</span>
        </div>
        <h2 className="section-title">
          {t?.contact?.title || "Let's Engineer"}{' '}
          <span className="gradient-text">{t?.contact?.titleHighlight || 'Something Extraordinary'}</span>
        </h2>
        <p className="section-subtitle">
          {t?.contact?.subtitle || 'Whether you have an ambitious mobile product in mind or are hiring for engineering roles — my inbox is always open.'}
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side: Status & Fast Connections */}
        <div className="contact-info-panel">
          {/* Status Hub */}
          <div className="contact-status-card">
            <div className="contact-pulse-row">
              <span className="status-dot">
                <span className="dot-ping" />
                <span className="dot-core" />
              </span>
              <span className="status-label">{t?.contact?.statusLabel || 'Active & Ready for Deployment'}</span>
            </div>

            <p className="contact-lede">
              {t?.contact?.statusLede || 'Specialized in production Flutter and native Android development.'}
            </p>

            <div className="contact-meta-row">
              <div className="meta-item">
                <MapPin size={14} className="meta-icon" />
                <span>{t?.contact?.location || 'Damietta, Egypt (Open to Remote / Relocation)'}</span>
              </div>
              <div className="meta-item">
                <Clock size={14} className="meta-icon" />
                <span>{t?.contact?.localTimeLabel || 'Local Time:'} {localTime || 'Cairo'} (GMT+3)</span>
              </div>
            </div>
          </div>

          {/* Copy Email Hero Button */}
          <div className="copy-email-box">
            <div className="copy-email-top">
              <Mail size={16} />
              <span>{t?.contact?.primaryEmail || 'Primary Direct Email'}</span>
            </div>
            <div className="copy-email-action">
              <span className="email-string">ahmedqataria98@gmail.com</span>
              <button
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
                title="Copy to Clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    <span>{t?.contact?.copied || 'Copied! 🎉'}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>{t?.contact?.copy || 'Copy'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* External Links Row */}
          <div className="contact-social-grid">
            <a
              href="https://linkedin.com/in/ahmedqataria"
              target="_blank"
              rel="noreferrer"
              className="social-card"
              onClick={() => soundFX.playClick()}
            >
              <div>
                <span className="social-platform">LinkedIn</span>
                <span className="social-handle">/in/ahmedqataria</span>
              </div>
              <ArrowUpRight size={17} className="card-arrow" />
            </a>

            <a
              href="https://github.com/ahmedqataria99"
              target="_blank"
              rel="noreferrer"
              className="social-card"
              onClick={() => soundFX.playClick()}
            >
              <div>
                <span className="social-platform">GitHub</span>
                <span className="social-handle">@ahmedqataria99</span>
              </div>
              <ArrowUpRight size={17} className="card-arrow" />
            </a>

            <a
              href="https://wa.me/201026027157?text=Hello%20Ahmed,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="social-card whatsapp"
              onClick={() => soundFX.playClick()}
            >
              <div>
                <span className="social-platform">WhatsApp</span>
                <span className="social-handle">{lang === 'ar' ? 'محادثة مباشرة' : 'Direct Chat'}</span>
              </div>
              <ArrowUpRight size={17} className="card-arrow" />
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Quick Transmission Form */}
        <div className="contact-form-panel">
          <form className="cyber-form" onSubmit={handleSendMail}>
            <div className="form-header">
              <MessageSquare size={16} />
              <span>{t?.contact?.formTitle || 'Direct Transmission Dispatch'}</span>
            </div>

            <div className="form-group">
              <label>{t?.contact?.subjectLabel || 'Topic / Subject'}</label>
              <input
                type="text"
                placeholder={t?.contact?.subjectPlaceholder || 'e.g. Mobile Engineering Role'}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>{t?.contact?.messageLabel || 'Brief Message'}</label>
              <textarea
                rows={5}
                placeholder={t?.contact?.messagePlaceholder || 'Hi Ahmed, we loved your portfolio...'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="form-submit-btn">
              <Send size={16} />
              <span>{t?.contact?.sendButton || 'Launch Transmission via Email'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
