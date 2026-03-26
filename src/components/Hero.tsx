import React from 'react';
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
        padding: 'var(--space-32) var(--space-8) var(--space-16)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative rule */}
      <div style={{
        position: 'absolute',
        top: 'var(--nav-height)',
        left: 'var(--space-8)',
        right: 'var(--space-8)',
        height: '1px',
        background: 'var(--color-border)',
      }} />

      {/* Large decorative year */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: 'var(--space-8)',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: 'clamp(100px, 18vw, 280px)',
        color: 'var(--color-surface)',
        lineHeight: 1,
        userSelect: 'none',
        letterSpacing: '-0.04em',
        pointerEvents: 'none',
      }}>
        1960
      </div>

      {/* Content */}
      <div style={{ maxWidth: 'var(--max-width)', position: 'relative' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: 'var(--space-4)',
        }}>
          {h.sub}
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(var(--text-3xl), 8vw, var(--text-4xl))',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--color-ink)',
          marginBottom: 'var(--space-4)',
        }}>
          {h.name}
        </h1>

        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'var(--text-xl)',
          color: 'var(--color-muted)',
          fontWeight: 300,
        }}>
          {h.tagline}
        </p>

        {/* Scroll hint */}
        <div style={{
          marginTop: 'var(--space-16)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
        }}>
          <div style={{
            width: 40,
            height: '1px',
            background: 'var(--color-accent)',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>scroll</span>
        </div>
      </div>
    </section>
  );
}
