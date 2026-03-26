import React from 'react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations;
}

export default function Footer({ t: _t }: FooterProps) {
  return (
    <footer style={{
      padding: 'var(--space-6) clamp(var(--space-4), 5vw, var(--space-8))',
      background: 'var(--color-ink)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
    }}>
      <span style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-xs)',
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.06em',
      }}>
        © {new Date().getFullYear()} Temesi Péter
      </span>
      <span style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-xs)',
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.06em',
      }}>
        Budapest, Hungary
      </span>
    </footer>
  );
}
