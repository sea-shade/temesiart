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
        padding: 'var(--space-8)',
        cursor: 'zoom-out',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div style={{ position: 'relative', maxWidth: 900, width: '100%' }}>
        <img
          src={image.src}
          alt={image.alt}
          style={{
            width: '100%',
            maxHeight: '85vh',
            objectFit: 'contain',
            display: 'block',
          }}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
        {image.title && (
          <p style={{
            marginTop: 'var(--space-4)',
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'var(--text-base)',
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            letterSpacing: '0.02em',
          }}>{image.title}</p>
        )}
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
        <div className="section-header">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'var(--text-2xl)',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
          }}>
            {section.title}
          </h2>
          <div className="section-header-rule" />
          <p className="section-header-desc">
            {section.description}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
          gap: 'var(--space-3)',
        }}>
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              style={{
                cursor: 'zoom-in',
                overflow: 'hidden',
                background: 'var(--color-border)',
                aspectRatio: '4/5',
                position: 'relative',
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
                  transition: 'transform 500ms var(--ease)',
                  display: 'block',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                onError={e => {
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.style.background = 'var(--color-surface)';
                  }
                  e.currentTarget.style.display = 'none';
                }}
              />
              {img.title && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 'var(--space-3) var(--space-4)',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.65))',
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'var(--text-sm)',
                    opacity: 0,
                    transition: 'opacity var(--duration)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                >
                  {img.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <LightBox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
}
