import React, { useState } from 'react';
import { GalleryImage, SectionTranslation } from '../types';

interface LightBoxProps {
  image: GalleryImage | null;
  onClose: () => void;
}

function LightBox({ image, onClose }: LightBoxProps) {
  if (!image) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: 'var(--color-overlay)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(var(--space-4), 5vw, var(--space-8))',
        cursor: 'zoom-out',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div style={{
        position: 'relative',
        maxWidth: 960,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <img
          src={image.src}
          alt={image.alt}
          style={{
            maxWidth: '100%',
            maxHeight: '82vh',
            objectFit: 'contain',
            display: 'block',
          }}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
        {image.title && (
          <p style={{
            marginTop: 'var(--space-6)',
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'var(--text-base)',
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
            letterSpacing: '0.02em',
          }}>
            {image.title}
          </p>
        )}
        {/* Close hint */}
        <p style={{
          marginTop: 'var(--space-4)',
          fontFamily: 'var(--font-ui)',
          fontSize: 'var(--text-xs)',
          color: 'rgba(255,255,255,0.25)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          click to close
        </p>
      </div>
    </div>
  );
}

interface GalleryProps {
  id: string;
  section: SectionTranslation;
  images: GalleryImage[];
  alt?: boolean;
}

export default function Gallery({ id, section, images, alt }: GalleryProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  if (images.length === 0) return null;

  return (
    <section
      id={id}
      className="section-pad"
      style={{
        background: alt ? 'var(--color-surface)' : 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

        {/* Section header */}
        <div className="section-header">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'var(--text-2xl)',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
            color: 'var(--color-ink)',
          }}>
            {section.title}
          </h2>
          <div className="section-header-rule" />
          <p className="section-header-desc">
            {section.description}
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
          gap: 'var(--space-4)',
        }}>
          {images.map((img, i) => (
            <figure
              key={i}
              onClick={() => setActiveImage(img)}
              style={{
                cursor: 'zoom-in',
                overflow: 'hidden',
                background: 'var(--color-border)',
                aspectRatio: '4/5',
                position: 'relative',
                margin: 0,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 600ms var(--ease)',
                  display: 'block',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                onError={e => {
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.style.background = 'var(--color-surface)';
                  }
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Caption overlay — appears on hover */}
              {img.title && (
                <figcaption
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 'var(--space-6) var(--space-4) var(--space-4)',
                    background: 'linear-gradient(transparent, rgba(10,8,6,0.72))',
                    color: 'rgba(247,245,240,0.9)',
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'var(--text-sm)',
                    opacity: 0,
                    transition: 'opacity 300ms var(--ease)',
                    pointerEvents: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                >
                  {img.title}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      <LightBox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
}
