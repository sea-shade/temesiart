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
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

        {/* Section heading */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 'var(--text-2xl)',
          letterSpacing: '-0.01em',
          color: 'rgba(247,245,240,0.9)',
          marginBottom: 'var(--space-4)',
        }}>
          {c.title}
        </h2>

        <div style={{
          width: 40,
          height: '2px',
          background: 'var(--color-accent)',
          marginBottom: 'var(--space-16)',
        }} />

        <div className="two-col" style={{ gap: 'var(--space-16)' }}>

          {/* Availability */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(var(--text-lg), 2.2vw, var(--text-xl))',
            lineHeight: 1.65,
            color: 'rgba(247,245,240,0.6)',
          }}>
            {c.availability}
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(247,245,240,0.3)',
                fontWeight: 500,
                marginBottom: 'var(--space-2)',
              }}>
                Email
              </p>
              <a
                href={`mailto:${c.email}`}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'var(--text-base)',
                  color: 'rgba(247,245,240,0.85)',
                  borderBottom: '1px solid rgba(154,100,68,0.5)',
                  paddingBottom: 2,
                  transition: 'color var(--duration), border-color var(--duration)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--color-accent-lt)';
                  e.currentTarget.style.borderBottomColor = 'var(--color-accent-lt)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(247,245,240,0.85)';
                  e.currentTarget.style.borderBottomColor = 'rgba(154,100,68,0.5)';
                }}
              >
                {c.email}
              </a>
            </div>

            <div>
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(247,245,240,0.3)',
                fontWeight: 500,
                marginBottom: 'var(--space-2)',
              }}>
                Location
              </p>
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-base)',
                color: 'rgba(247,245,240,0.6)',
              }}>
                {c.location}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
