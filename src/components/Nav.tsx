import React, { useEffect, useState } from 'react';
import { Lang, Translations } from '../types';

interface NavProps {
  t: Translations;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Nav({ t, lang, setLang }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 800) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const nav = t.nav;
  const links: [string, string][] = [
    ['#portraits', nav.portraits],
    ['#fine-art', nav.fineArt],
    ['#video-games', nav.videoGames],
    ['#book-covers', nav.bookCovers],
    ['#caricature-illustration', nav.caricatureIllustration],
    ['#about', nav.about],
    ['#contact', nav.contact],
  ];

  const onDark = !scrolled && !menuOpen;

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: onDark ? 'rgba(245,242,236,0.55)' : 'var(--color-muted)',
    transition: 'color var(--duration)',
    fontWeight: 500,
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(var(--space-4), 5vw, var(--space-8))',
        background: (scrolled || menuOpen) ? 'var(--color-bg)' : 'transparent',
        borderBottom: (scrolled || menuOpen) ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'background var(--duration) var(--ease), border-color var(--duration) var(--ease)',
      }}>
        {/* Logo */}
        <a href="#top" style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 'var(--text-lg)',
          color: onDark ? 'rgba(245,242,236,0.9)' : 'var(--color-ink)',
          letterSpacing: '0.01em',
          transition: 'color var(--duration) var(--ease)',
        }}>
          Temesi Péter
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = onDark ? 'rgba(245,242,236,0.95)' : 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = onDark ? 'rgba(245,242,236,0.55)' : 'var(--color-muted)')}
            >
              {label}
            </a>
          ))}

          {/* Language toggle */}
          <div style={{
            display: 'flex',
            gap: '2px',
            borderLeft: `1px solid ${onDark ? 'rgba(245,242,236,0.15)' : 'var(--color-border)'}`,
            paddingLeft: 'var(--space-6)',
            marginLeft: 'var(--space-2)',
          }}>
            {(['en', 'hu'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  ...linkStyle,
                  padding: '2px 6px',
                  color: lang === l
                    ? (onDark ? 'rgba(245,242,236,0.92)' : 'var(--color-accent)')
                    : (onDark ? 'rgba(245,242,236,0.4)' : 'var(--color-muted)'),
                  fontWeight: lang === l ? 500 : 400,
                  borderBottom: lang === l
                    ? `1.5px solid ${onDark ? 'rgba(245,242,236,0.5)' : 'var(--color-accent)'}`
                    : '1.5px solid transparent',
                  transition: 'color var(--duration)',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{ color: onDark ? 'rgba(245,242,236,0.8)' : 'var(--color-ink)' }}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                color: 'var(--color-ink)',
                padding: 'var(--space-3) 0',
                borderBottom: '1px solid var(--color-border)',
                fontWeight: 400,
              }}
            >
              {label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
            {(['en', 'hu'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => { setLang(l); setMenuOpen(false); }}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: lang === l ? 500 : 400,
                  color: lang === l ? 'var(--color-accent)' : 'var(--color-muted)',
                  borderBottom: lang === l ? '1.5px solid var(--color-accent)' : '1.5px solid transparent',
                  padding: '2px 4px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
