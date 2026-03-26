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
      className="section-pad"
      style={{
        background: 'var(--color-ink)',
        color: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 'var(--text-2xl)',
          letterSpacing: '-0.01em',
          marginBottom: 'var(--space-12)',
          color: 'var(--color-bg)',
        }}>
          {c.title}
        </h2>

        <div className="two-col" style={{ gap: 'var(--space-16)' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(var(--text-lg), 2.5vw, var(--text-xl))',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.7)',
            }}>
              {c.availability}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 500,
                marginBottom: 'var(--space-2)',
              }}>Email</p>
              <a
                href={`mailto:${c.email}`}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-bg)',
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                  paddingBottom: 2,
                  transition: 'color var(--duration)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-bg)')}
              >
                {c.email}
              </a>
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 500,
                marginBottom: 'var(--space-2)',
              }}>Location</p>
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-base)',
                color: 'rgba(255,255,255,0.7)',
              }}>{c.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
