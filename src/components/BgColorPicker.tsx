import React, { useState } from 'react';

const DEFAULT_BG = '#04171f';
const DEFAULT_SURFACE = '#071e28';

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return [h / 6 * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  h /= 360; s /= 100; l /= 100;
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r: number, g: number, b: number;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function deriveSurface(bgHex: string): string {
  const [r, g, b] = hexToRgb(bgHex);
  const [h, s, l] = rgbToHsl(r, g, b);
  return hslToHex(h, s, Math.max(0, l - 3));
}

export default function BgColorPicker() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(DEFAULT_BG);

  function applyColor(hex: string) {
    setColor(hex);
    document.documentElement.style.setProperty('--color-bg', hex);
    document.documentElement.style.setProperty('--color-surface', deriveSurface(hex));
  }

  function reset() {
    setColor(DEFAULT_BG);
    document.documentElement.style.setProperty('--color-bg', DEFAULT_BG);
    document.documentElement.style.setProperty('--color-surface', DEFAULT_SURFACE);
  }

  return (
    <div style={{
      position: 'fixed',
      right: 'var(--space-4)',
      bottom: 'var(--space-8)',
      zIndex: 500,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 'var(--space-2)',
    }}>
      {open && (
        <div style={{
          background: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          padding: 'var(--space-4)',
          boxShadow: '0 8px 32px rgba(4,90,130,0.35)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
          minWidth: 148,
        }}>
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-muted)',
          }}>
            Background
          </span>
          <input
            type="color"
            value={color}
            onChange={e => applyColor(e.target.value)}
            style={{ width: '100%', height: 38, cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
          />
          {color !== DEFAULT_BG && (
            <button
              onClick={reset}
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                padding: '2px 0',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'color var(--duration)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              Reset
            </button>
          )}
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        title="Change background color"
        aria-label="Change background color"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: color,
          border: '2px solid var(--color-border)',
          boxShadow: '0 2px 8px rgba(4,90,130,0.35)',
          cursor: 'pointer',
          transition: 'box-shadow 200ms, transform 200ms',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(4,90,130,0.55)';
          e.currentTarget.style.transform = 'scale(1.08)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(4,90,130,0.35)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      />
    </div>
  );
}
