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
      style={{
        padding: 'var(--space-24) var(--space-8)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-24)',
        alignItems: 'start',
      }}>
        {/* Left: bio */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'var(--text-2xl)',
            letterSpacing: '-0.01em',
            marginBottom: 'var(--space-8)',
          }}>
            {a.title}
          </h2>
          {a.body.split('\n\n').map((para, i) => (
            <p key={i} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 1.8,
              color: i === 0 ? 'var(--color-ink)' : 'var(--color-muted)',
              marginBottom: 'var(--space-4)',
            }}>{para}</p>
          ))}
        </div>

        {/* Right: education + exhibitions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-4)',
            }}>
              {a.education}
            </h3>
            {a.educationItems.map((item, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-muted)',
                padding: 'var(--space-2) 0',
                borderBottom: '1px solid var(--color-border)',
              }}>{item}</p>
            ))}
          </div>

          <div>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-4)',
            }}>
              {a.exhibitions}
            </h3>
            {a.exhibitionItems.map((item, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-muted)',
                padding: 'var(--space-2) 0',
                borderBottom: '1px solid var(--color-border)',
              }}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
