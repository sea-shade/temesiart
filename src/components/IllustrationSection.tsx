import React, { useState } from 'react';
import { GalleryImage, IllustrationSubcats, SectionTranslation } from '../types';

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
        maxWidth: 960,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <img
          src={image.src}
          alt={image.alt}
          style={{ maxWidth: '100%', maxHeight: '82vh', objectFit: 'contain', display: 'block' }}
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

type SubcatKey = 'all' | 'children' | 'historical' | 'cartoon';

interface IllustrationSectionProps {
  id: string;
  section: SectionTranslation;
  subcats: IllustrationSubcats;
  children: GalleryImage[];
  historical: GalleryImage[];
  cartoon: GalleryImage[];
  alt?: boolean;
}

export default function IllustrationSection({
  id,
  section,
  subcats,
  children,
  historical,
  cartoon,
  alt,
}: IllustrationSectionProps) {
  const [active, setActive] = useState<SubcatKey>('all');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const allImages = [
    ...children.map(img => ({ ...img, _subcat: 'children' as SubcatKey })),
    ...historical.map(img => ({ ...img, _subcat: 'historical' as SubcatKey })),
    ...cartoon.map(img => ({ ...img, _subcat: 'cartoon' as SubcatKey })),
  ];

  const visible = active === 'all'
    ? allImages
    : allImages.filter(img => img._subcat === active);

  // Show category cards if no filter is active and we have subcategory cover images
  const subcatCards: { key: SubcatKey; label: string; cover?: GalleryImage }[] = [
    { key: 'children', label: subcats.children, cover: children[0] },
    { key: 'historical', label: subcats.historical, cover: historical[0] },
    { key: 'cartoon', label: subcats.cartoon, cover: cartoon[0] },
  ];

  const hasAnyImages = allImages.length > 0;

  if (!hasAnyImages) return null;

  const tabs: { key: SubcatKey; label: string }[] = [
    { key: 'all', label: subcats.all },
    { key: 'children', label: subcats.children },
    { key: 'historical', label: subcats.historical },
    { key: 'cartoon', label: subcats.cartoon },
  ];

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

        {/* Subcategory category cards (pozsgay.hu style) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-12)',
        }}
          className="subcat-cards"
        >
          {subcatCards.map(({ key, label, cover }) => (
            <button
              key={key}
              onClick={() => setActive(a => a === key ? 'all' : key)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '3/2',
                background: 'var(--color-border)',
                border: active === key
                  ? '2px solid var(--color-accent)'
                  : '2px solid transparent',
                cursor: 'pointer',
                padding: 0,
                display: 'block',
                transition: 'border-color var(--duration) var(--ease)',
              }}
            >
              {cover && (
                <img
                  src={cover.src}
                  alt={cover.alt}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 600ms var(--ease)',
                    filter: active === key ? 'brightness(0.55)' : 'brightness(0.45)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              )}
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,8,6,0.7) 0%, rgba(10,8,6,0.15) 60%, transparent 100%)',
              }} />
              <span style={{
                position: 'absolute',
                bottom: 'var(--space-4)',
                left: 'var(--space-4)',
                right: 'var(--space-4)',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: active === key ? 'var(--color-accent-lt)' : 'rgba(247,245,240,0.92)',
                textAlign: 'left',
                letterSpacing: '0.01em',
                transition: 'color var(--duration)',
              }}>
                {label}
              </span>
              {active === key && (
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-3)',
                  right: 'var(--space-3)',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Filter pills */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-2)',
          marginBottom: 'var(--space-8)',
          flexWrap: 'wrap',
        }}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '6px 14px',
                border: '1px solid',
                borderColor: active === tab.key ? 'var(--color-accent)' : 'var(--color-border)',
                color: active === tab.key ? 'var(--color-accent)' : 'var(--color-muted)',
                background: active === tab.key ? 'transparent' : 'transparent',
                cursor: 'pointer',
                transition: 'border-color var(--duration), color var(--duration)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        {visible.length > 0 && (
          <div className="gallery-grid">
            {visible.map((img, i) => (
              <figure
                key={`${img._subcat}-${i}`}
                onClick={() => setLightbox(img)}
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
        )}
      </div>

      <LightBox image={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
