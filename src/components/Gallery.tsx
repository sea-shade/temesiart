import React, { useEffect, useRef, useState } from 'react';
import { GalleryImage, PriceTier, SectionTranslation } from '../types';
import { useGridColumns } from '../hooks/useGridColumns';

interface LightBoxProps {
  image: GalleryImage | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

function LightBox({ image, onClose, onPrev, onNext, hasPrev, hasNext }: LightBoxProps) {
  useEffect(() => {
    if (!image) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
      else if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [image, onPrev, onNext, onClose]);

  if (!image) return null;

  const navBtn = (onClick: () => void, disabled: boolean, side: 'left' | 'right') => (
    <button
      onClick={e => { e.stopPropagation(); onClick(); }}
      disabled={disabled}
      aria-label={side === 'left' ? 'Previous' : 'Next'}
      style={{
        position: 'absolute',
        top: '50%',
        [side]: 'clamp(var(--space-2), 3vw, var(--space-6))',
        transform: 'translateY(-50%)',
        background: 'rgba(245,242,236,0.08)',
        border: '1px solid rgba(245,242,236,0.18)',
        color: disabled ? 'rgba(245,242,236,0.2)' : 'rgba(245,242,236,0.75)',
        width: 44,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'default' : 'pointer',
        fontSize: 20,
        lineHeight: 1,
        transition: 'background 200ms, color 200ms',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        if (!disabled) e.currentTarget.style.background = 'rgba(245,242,236,0.16)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(245,242,236,0.08)';
      }}
    >
      {side === 'left' ? '←' : '→'}
    </button>
  );

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
      {navBtn(onPrev, !hasPrev, 'left')}
      {navBtn(onNext, !hasNext, 'right')}

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
  // Index into `images` (full list) — navigation always covers all images
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const initialCount = useGridColumns(gridRef);

  if (images.length === 0) return null;

  const visible = expanded ? images : images.slice(0, initialCount);
  const hasMore = images.length > initialCount;

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

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

        {/* Grid — visible is a prefix slice of images, so index i === index in images */}
        <div ref={gridRef} className="gallery-grid">
          {visible.map((img, i) => (
            <figure
              key={i}
              onClick={() => setActiveIndex(i)}
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

        {/* See more / See less */}
        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: 'var(--space-16)' }}>
            <button
              onClick={() => setExpanded(e => !e)}
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '10px 28px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-muted)',
                background: 'transparent',
                cursor: 'pointer',
                transition: 'border-color var(--duration), color var(--duration)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-muted)';
              }}
            >
              {expanded ? 'See less' : `See all ${images.length} works`}
            </button>
          </div>
        )}
      </div>

      <LightBox
        image={activeImage}
        onClose={() => setActiveIndex(null)}
        onPrev={() => setActiveIndex(i => i !== null ? Math.max(0, i - 1) : null)}
        onNext={() => setActiveIndex(i => i !== null ? Math.min(images.length - 1, i + 1) : null)}
        hasPrev={activeIndex !== null && activeIndex > 0}
        hasNext={activeIndex !== null && activeIndex < images.length - 1}
      />
    </section>
  );
}
