import React, { useState } from 'react';
import { GalleryImage, PriceTier, SectionTranslation } from '../types';

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

function PriceBlock({ prices }: { prices: PriceTier[] }) {
  return (
    <div style={{
      marginBottom: 'var(--space-16)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
      padding: 'var(--space-6) 0',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2) var(--space-12)',
    }}>
      <span style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-xs)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--color-muted)',
        paddingRight: 'var(--space-8)',
        alignSelf: 'center',
        flexShrink: 0,
      }}>
        Commission prices
      </span>
      {prices.map((tier, i) => (
        <div key={i} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-muted)',
          }}>
            {tier.label}
          </span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-lg)',
            fontWeight: 400,
            color: 'var(--color-ink)',
            letterSpacing: '-0.01em',
          }}>
            {tier.huf}
          </span>
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-accent)',
          }}>
            {tier.eur}
          </span>
        </div>
      ))}
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

        {/* Price block */}
        {section.prices && section.prices.length > 0 && (
          <PriceBlock prices={section.prices} />
        )}

        {/* Grid */}
        <div className="gallery-grid">
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
                <figcaption className="gallery-caption">
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
