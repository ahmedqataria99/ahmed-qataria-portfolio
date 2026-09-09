import { useState } from 'react'
import { Wifi, Battery, Maximize2, Sparkles, ChevronRight, Layers } from 'lucide-react'
import { soundFX } from '../utils/audio'

export function PhoneMockup({
  images = [],
  screens = [],
  projectName = '',
  onEnlarge,
  enlargeLabel = 'Enlarge HD',
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSelectScreen = (idx) => {
    soundFX.playTab()
    setActiveIndex(idx)
  }

  return (
    <div className="phone-showcase-container">
      {/* Smartphone Outer Chassis */}
      <div className="phone-chassis">
        {/* Dynamic Island / Speaker */}
        <div className="phone-island-bar">
          <div className="phone-speaker" />
          <div className="phone-camera-lens" />
        </div>

        {/* Status Bar */}
        <div className="phone-status-bar">
          <span className="phone-time">09:41</span>
          <div className="phone-status-icons">
            <span className="phone-signal">5G</span>
            <Wifi size={12} />
            <Battery size={13} />
          </div>
        </div>

        {/* Screen Display Area */}
        <div className="phone-screen-viewport">
          {images.map((imgSrc, idx) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`${projectName} - ${screens[idx] || 'Screen'}`}
              className={`phone-screen-img ${idx === activeIndex ? 'active' : ''}`}
            />
          ))}

          {/* Enlarge Button */}
          <button
            className="screen-enlarge-overlay"
            onClick={() => {
              soundFX.playClick()
              onEnlarge(images[activeIndex], screens[activeIndex] || projectName)
            }}
            title="View Fullscreen"
          >
            <Maximize2 size={16} />
            <span>{enlargeLabel}</span>
          </button>
        </div>

        {/* Home Indicator Bar */}
        <div className="phone-home-indicator" />
      </div>

      {/* Screen Selector Tabs */}
      <div className="screen-tabs-bar">
        {screens.map((screenTitle, idx) => (
          <button
            key={screenTitle}
            className={`screen-tab-btn ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => handleSelectScreen(idx)}
          >
            <span className="screen-tab-num">0{idx + 1}</span>
            <span className="screen-tab-title">{screenTitle}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function DesktopMockup({
  images = [],
  screens = [],
  projectName = '',
  onEnlarge,
  fullscreenLabel = 'Fullscreen',
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSelectScreen = (idx) => {
    soundFX.playTab()
    setActiveIndex(idx)
  }

  return (
    <div className="desktop-showcase-container">
      <div className="desktop-window-chassis">
        {/* Window Titlebar */}
        <div className="desktop-window-header">
          <div className="desktop-dots">
            <span className="w-dot dot-close" />
            <span className="w-dot dot-min" />
            <span className="w-dot dot-max" />
          </div>

          <div className="desktop-title">
            <span>{projectName}</span>
            <span className="desktop-version">— Desktop v1.4.0 (Windows / macOS)</span>
          </div>

          <button
            className="desktop-enlarge-btn"
            onClick={() => {
              soundFX.playClick()
              onEnlarge(images[activeIndex], screens[activeIndex] || projectName)
            }}
            title="Inspect in Fullscreen"
          >
            <Maximize2 size={13} />
            <span>{fullscreenLabel}</span>
          </button>
        </div>

        {/* Window Subheader Tabs */}
        <div className="desktop-tabs-bar">
          {screens.map((title, idx) => (
            <button
              key={title}
              className={`desktop-tab ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => handleSelectScreen(idx)}
            >
              <span>{title}</span>
            </button>
          ))}
        </div>

        {/* Desktop Viewport */}
        <div className="desktop-viewport">
          {images.map((imgSrc, idx) => (
            <img
              key={imgSrc}
              src={imgSrc}
              alt={`${projectName} - ${screens[idx] || 'View'}`}
              className={`desktop-screen-img ${idx === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
