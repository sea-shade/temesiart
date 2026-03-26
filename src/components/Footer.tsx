import React from 'react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations;
}

export default function Footer({ t: _t }: FooterProps) {
  return (
    <footer style={{
      padding: 'var(--space-8)',
      background: 'var(--color-ink)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        color: 'var(--color-muted)',
        letterSpacing: '0.08em',
      }}>
        © {new Date().getFullYear()} Temesi Péter
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        color: 'var(--color-muted)',
        letterSpacing: '0.08em',
      }}>
        Budapest, Hungary
      </span>
    </footer>
  );
}
