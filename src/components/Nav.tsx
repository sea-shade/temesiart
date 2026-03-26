import React, { useEffect, useState } from 'react';
import { Lang, Translations } from '../types';

interface NavProps {
  t: Translations;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const navStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  height: 'var(--nav-height)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 var(--space-8)',
  transition: 'background var(--duration) var(--ease), border-color var(--duration) var(--ease)',
  borderBottom: '1px solid transparent',
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 300,
  fontSize: 'var(--text-lg)',
  letterSpacing: '0.04em',
  color: 'var(--color-ink)',
};

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-xs)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--color-muted)',
  transition: 'color var(--duration)',
  padding: '2px 0',
};

export default function Nav({ t, lang, setLang }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = t.nav;

  return (
    <nav
      style={{
        ...navStyle,
        background: scrolled ? 'var(--color-bg)' : 'transparent',
        borderBottomColor: scrolled ? 'var(--color-border)' : 'transparent',
      }}
    >
      <a href="#top" style={logoStyle}>Temesi Péter</a>

      <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}>
        {([
          ['#portraits', nav.portraits],
          ['#fine-art', nav.fineArt],
          ['#video-games', nav.videoGames],
          ['#book-covers', nav.bookCovers],
          ['#about', nav.about],
          ['#contact', nav.contact],
        ] as [string, string][]).map(([href, label]) => (
          <a
            key={href}
            href={href}
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            {label}
          </a>
        ))}

        {/* Language toggle */}
        <div style={{
          display: 'flex',
          gap: '2px',
          borderLeft: '1px solid var(--color-border)',
          paddingLeft: 'var(--space-6)',
          marginLeft: 'var(--space-2)',
        }}>
          {(['en', 'hu'] as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                ...linkStyle,
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                padding: '2px 6px',
                color: lang === l ? 'var(--color-accent)' : 'var(--color-muted)',
                fontWeight: lang === l ? 400 : 300,
                borderBottom: lang === l ? '1px solid var(--color-accent)' : '1px solid transparent',
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
