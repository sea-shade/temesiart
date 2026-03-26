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
        padding: `var(--space-32) clamp(var(--space-4), 5vw, var(--space-8)) var(--space-16)`,
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', position: 'relative' }}>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-muted)',
          marginBottom: 'var(--space-4)',
          fontWeight: 500,
        }}>
          {h.sub}
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(var(--text-3xl), 8vw, var(--text-4xl))',
          fontWeight: 400,
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
          fontSize: 'clamp(var(--text-lg), 3vw, var(--text-xl))',
          color: 'var(--color-muted)',
          fontWeight: 400,
        }}>
          {h.tagline}
        </p>

        <div style={{
          marginTop: 'var(--space-16)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
        }}>
          <div style={{ width: 32, height: '1px', background: 'var(--color-ink)' }} />
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}>scroll</span>
        </div>
      </div>
    </section>
  );
}
