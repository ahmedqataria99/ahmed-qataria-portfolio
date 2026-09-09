import { useState, useEffect, useRef } from 'react'
import {
  Search,
  ArrowRight,
  Sparkles,
  Terminal,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  Volume2,
  VolumeX,
  Palette,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react'
import { soundFX } from '../utils/audio'
import { triggerConfetti } from '../utils/confetti'

export default function CommandPalette({
  isOpen,
  onClose,
  setTheme,
  soundEnabled,
  setSoundEnabled,
  onOpenTerminal,
}) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  // Global key listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        soundFX.playTab()
        if (isOpen) onClose()
        else {
          // Open
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const actions = [
    {
      id: 'nav-projects',
      category: 'Navigation',
      label: 'Jump to Projects & Showcase',
      icon: FolderGit2,
      run: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'nav-arch',
      category: 'Navigation',
      label: 'Inspect Architecture & Tech Matrix',
      icon: Cpu,
      run: () => {
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'nav-exp',
      category: 'Navigation',
      label: 'View Experience & Education',
      icon: GraduationCap,
      run: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      label: 'Contact Ahmed Qataria',
      icon: Mail,
      run: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'term-open',
      category: 'Tools',
      label: 'Launch Terminal Simulator',
      icon: Terminal,
      run: () => {
        onClose()
        onOpenTerminal()
      },
    },
    {
      id: 'copy-mail',
      category: 'Actions',
      label: 'Copy Email Address (ahmedqataria98@gmail.com)',
      icon: copied ? Check : Copy,
      run: () => {
        navigator.clipboard?.writeText('ahmedqataria98@gmail.com')
        triggerConfetti()
        soundFX.playSuccess()
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
          onClose()
        }, 800)
      },
    },
    {
      id: 'theme-cyan',
      category: 'Theme',
      label: 'Switch to Cyber Cyan Accent',
      icon: Palette,
      run: () => {
        setTheme('cyan')
        soundFX.playClick()
        onClose()
      },
    },
    {
      id: 'theme-emerald',
      category: 'Theme',
      label: 'Switch to Matrix Emerald Accent',
      icon: Palette,
      run: () => {
        setTheme('emerald')
        soundFX.playClick()
        onClose()
      },
    },
    {
      id: 'theme-violet',
      category: 'Theme',
      label: 'Switch to Neon Violet Accent',
      icon: Palette,
      run: () => {
        setTheme('violet')
        soundFX.playClick()
        onClose()
      },
    },
    {
      id: 'theme-amber',
      category: 'Theme',
      label: 'Switch to Solar Amber Accent',
      icon: Palette,
      run: () => {
        setTheme('amber')
        soundFX.playClick()
        onClose()
      },
    },
    {
      id: 'toggle-sound',
      category: 'Preferences',
      label: soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects',
      icon: soundEnabled ? VolumeX : Volume2,
      run: () => {
        const next = !soundEnabled
        soundFX.enabled = next
        setSoundEnabled(next)
        if (next) soundFX.playSuccess()
        onClose()
      },
    },
    {
      id: 'ext-git',
      category: 'External',
      label: 'Open GitHub Profile',
      icon: ExternalLink,
      run: () => {
        window.open('https://github.com/ahmedqataria99', '_blank')
        onClose()
      },
    },
    {
      id: 'ext-linkedin',
      category: 'External',
      label: 'Open LinkedIn Profile',
      icon: ExternalLink,
      run: () => {
        window.open('https://linkedin.com/in/ahmedqataria', '_blank')
        onClose()
      },
    },
  ]

  const filtered = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  )

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      soundFX.playClick()
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      soundFX.playTab()
      setSelectedIndex((prev) => (prev + 1 < filtered.length ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      soundFX.playTab()
      setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filtered.length - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].run()
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Search Bar */}
        <div className="palette-input-wrap">
          <Search size={18} className="palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or jump to section..."
          />
          <span className="palette-kbd">ESC</span>
        </div>

        {/* Action Results */}
        <div className="palette-results">
          {filtered.length === 0 ? (
            <div className="palette-empty">No matching commands found.</div>
          ) : (
            filtered.map((item, idx) => {
              const IconComponent = item.icon
              const isSelected = idx === selectedIndex

              return (
                <div
                  key={item.id}
                  className={`palette-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => item.run()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="palette-item-left">
                    <span className="palette-item-cat">{item.category}</span>
                    <IconComponent size={15} className="palette-item-icon" />
                    <span className="palette-item-label">{item.label}</span>
                  </div>
                  <ArrowRight size={13} className="palette-item-arrow" />
                </div>
              )
            })
          )}
        </div>

        {/* Palette Footer */}
        <div className="palette-footer">
          <div className="palette-hints">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="palette-brand">Ahmed Qataria System</span>
        </div>
      </div>
    </div>
  )
}
