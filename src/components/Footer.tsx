import React from 'react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations;
}

export default function Footer({ t: _t }: FooterProps) {
  return (
    <footer style={{
      padding: 'var(--space-6) var(--space-8)',
      background: 'var(--color-ink)',
      borderTop: '1px solid rgba(247,245,240,0.07)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 'var(--text-sm)',
        color: 'rgba(247,245,240,0.25)',
      }}>
        Temesi Péter
      </span>
      <span style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-xs)',
        color: 'rgba(247,245,240,0.2)',
        letterSpacing: '0.06em',
      }}>
        © {new Date().getFullYear()} · Budapest, Hungary
      </span>
    </footer>
  );
}
