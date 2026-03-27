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
        padding: `var(--space-32) clamp(var(--space-4), 5vw, var(--space-8)) var(--space-24)`,
        position: 'relative',
      }}
    >
      {/* Full-width rule just below nav */}
      <div style={{
        position: 'absolute',
        top: 'var(--nav-height)',
        left: 0,
        right: 0,
        height: '1px',
        background: 'var(--color-border)',
      }} />

      <div style={{ maxWidth: 'var(--max-width)', width: '100%', position: 'relative' }}>

        {/* Warm accent bar above name */}
        <div style={{
          width: 48,
          height: '2px',
          background: 'var(--color-accent)',
          marginBottom: 'var(--space-8)',
        }} />

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(var(--text-3xl), 8.5vw, var(--text-4xl))',
          fontWeight: 400,
          lineHeight: 1.02,
          letterSpacing: '-0.02em',
          color: 'var(--color-ink)',
          marginBottom: 'var(--space-6)',
        }}>
          {h.name}
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(var(--text-lg), 2.5vw, var(--text-xl))',
          color: 'var(--color-muted)',
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
          color: 'var(--color-muted)',
          fontWeight: 500,
        }}>
          {h.sub}
        </p>

      </div>

      {/* Bottom rule separating hero from content */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'var(--color-border)',
      }} />
    </section>
  );
}
