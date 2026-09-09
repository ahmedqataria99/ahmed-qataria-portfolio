import { useEffect } from 'react'
import { X, ExternalLink, Download } from 'lucide-react'
import { soundFX } from '../utils/audio'

export default function ImageLightbox({ activeImage, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        soundFX.playClick()
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!activeImage) return null

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <span className="lightbox-title">{activeImage.title || 'Screen Preview'}</span>
          <button
            className="lightbox-close-btn"
            onClick={() => {
              soundFX.playClick()
              onClose()
            }}
            aria-label="Close Preview"
          >
            <X size={18} />
          </button>
        </div>

        <div className="lightbox-body">
          <img
            src={activeImage.src}
            alt={activeImage.title || 'Screenshot'}
            className="lightbox-image"
          />
        </div>

        <div className="lightbox-footer">
          <span>Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  )
}
