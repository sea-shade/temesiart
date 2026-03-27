import React from 'react';
import { BASE_PATH } from '../data/content';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

export default function Hero({ t }: HeroProps) {
  const h = t.hero;

  return (
    <section
      id="top"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: `var(--space-32) clamp(var(--space-4), 5vw, var(--space-8)) var(--space-24)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background artwork — full bleed */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${BASE_PATH}/images/akvarell/Zaszlo_III.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        zIndex: 0,
      }} />

      {/* Gradient overlay — darkens bottom-left for text legibility,
          lets the artwork breathe in the upper-right */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(
            to top,
            rgba(10, 8, 6, 0.88) 0%,
            rgba(10, 8, 6, 0.55) 30%,
            rgba(10, 8, 6, 0.18) 60%,
            rgba(10, 8, 6, 0.06) 100%
          )
        `,
        zIndex: 1,
      }} />

      {/* Rule below nav */}
      <div style={{
        position: 'absolute',
        top: 'var(--nav-height)',
        left: 0,
        right: 0,
        height: '1px',
        background: 'rgba(245,242,236,0.12)',
        zIndex: 2,
      }} />

      {/* Text content */}
      <div style={{
        maxWidth: 'var(--max-width)',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }}>

        {/* Warm accent bar above name */}
        <div style={{
          width: 48,
          height: '2px',
          background: 'var(--color-accent-lt)',
          marginBottom: 'var(--space-8)',
        }} />

        {/* Name — same style, light on dark */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(var(--text-3xl), 8.5vw, var(--text-4xl))',
          fontWeight: 400,
          lineHeight: 1.02,
          letterSpacing: '-0.02em',
          color: 'rgba(245, 242, 236, 0.97)',
          marginBottom: 'var(--space-6)',
        }}>
          {h.name}
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(var(--text-lg), 2.5vw, var(--text-xl))',
          color: 'rgba(245, 242, 236, 0.62)',
          fontWeight: 400,
          marginBottom: 'var(--space-3)',
        }}>
          {h.tagline}
        </p>

        {/* Location */}
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(245, 242, 236, 0.38)',
          fontWeight: 500,
        }}>
          {h.sub}
        </p>

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 'var(--space-8)',
        right: 'clamp(var(--space-4), 5vw, var(--space-8))',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-2)',
      }}>
        <div style={{
          width: 1,
          height: 48,
          background: 'linear-gradient(to bottom, transparent, rgba(245,242,236,0.35))',
        }} />
      </div>

      {/* Bottom rule */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'rgba(245,242,236,0.1)',
        zIndex: 2,
      }} />
    </section>
  );
}
