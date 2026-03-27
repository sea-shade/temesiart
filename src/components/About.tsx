import React from 'react';
import { Translations } from '../types';

interface AboutProps {
  id: string;
  t: Translations;
}

export default function About({ id, t }: AboutProps) {
  const a = t.about;

  return (
    <section
      id={id}
      className="section-pad"
      style={{
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div className="two-col">

          {/* Left: bio */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'var(--text-2xl)',
              letterSpacing: '-0.01em',
              marginBottom: 'var(--space-8)',
              color: 'var(--color-ink)',
            }}>
              {a.title}
            </h2>

            {/* Accent rule under heading */}
            <div style={{
              width: 40,
              height: '2px',
              background: 'var(--color-accent)',
              marginBottom: 'var(--space-8)',
            }} />

            {a.body.split('\n\n').map((para, i) => (
              <p key={i} style={{
                fontFamily: i === 0 ? 'var(--font-display)' : 'var(--font-ui)',
                fontStyle: i === 0 ? 'italic' : 'normal',
                fontSize: i === 0 ? 'var(--text-lg)' : 'var(--text-base)',
                fontWeight: 400,
                lineHeight: i === 0 ? 1.75 : 1.8,
                color: i === 0 ? 'var(--color-ink)' : 'var(--color-muted)',
                marginBottom: 'var(--space-6)',
              }}>{para}</p>
            ))}
          </div>

          {/* Right: education + exhibitions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                fontWeight: 500,
                marginBottom: 'var(--space-6)',
              }}>
                {a.education}
              </h3>
              {a.educationItems.map((item, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-muted)',
                  padding: 'var(--space-3) 0',
                  borderBottom: '1px solid var(--color-border)',
                  lineHeight: 1.6,
                }}>{item}</p>
              ))}
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                fontWeight: 500,
                marginBottom: 'var(--space-6)',
              }}>
                {a.exhibitions}
              </h3>
              {a.exhibitionItems.map((item, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-muted)',
                  padding: 'var(--space-3) 0',
                  borderBottom: '1px solid var(--color-border)',
                  lineHeight: 1.6,
                }}>{item}</p>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
