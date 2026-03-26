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
        backdropFilter: 'blur(4px)',
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
            fontSize: 'var(--text-lg)',
            color: 'var(--color-bg)',
            textAlign: 'center',
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

  const bgColor = alt ? 'var(--color-surface)' : 'var(--color-bg)';

  return (
    <section
      id={id}
      style={{
        padding: 'var(--space-24) var(--space-8)',
        background: bgColor,
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 'var(--space-6)',
          marginBottom: 'var(--space-12)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'var(--text-2xl)',
            letterSpacing: '-0.01em',
          }}>
            {section.title}
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-muted)',
            maxWidth: 320,
            textAlign: 'right',
          }}>
            {section.description}
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
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
                  transition: 'transform 600ms var(--ease)',
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
                    background: 'linear-gradient(transparent, rgba(28,26,22,0.7))',
                    color: '#f5f2ec',
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
