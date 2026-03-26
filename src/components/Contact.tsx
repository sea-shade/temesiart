import React from 'react';
import { Translations } from '../types';

interface ContactProps {
  id: string;
  t: Translations;
}

export default function Contact({ id, t }: ContactProps) {
  const c = t.contact;

  return (
    <section
      id={id}
      style={{
        padding: 'var(--space-24) var(--space-8)',
        background: 'var(--color-ink)',
        color: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'var(--text-2xl)',
          letterSpacing: '-0.01em',
          marginBottom: 'var(--space-12)',
          color: 'var(--color-bg)',
        }}>
          {c.title}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-xl)',
              lineHeight: 1.6,
              color: 'var(--color-surface)',
              marginBottom: 'var(--space-8)',
            }}>
              {c.availability}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-lt)',
                marginBottom: 'var(--space-2)',
              }}>Email</p>
              <a
                href={`mailto:${c.email}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-bg)',
                  borderBottom: '1px solid var(--color-accent)',
                  paddingBottom: 2,
                  transition: 'color var(--duration)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-lt)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-bg)')}
              >
                {c.email}
              </a>
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-lt)',
                marginBottom: 'var(--space-2)',
              }}>Location</p>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                color: 'var(--color-surface)',
              }}>{c.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
