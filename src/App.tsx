import React, { useState } from 'react';
import './styles/tokens.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { i18n, gallery } from './data/content';
import { Lang } from './types';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const t = i18n[lang];

  return (
    <div className="app">
      <Nav t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <Gallery
          id="portraits"
          section={t.sections.portraits}
          images={gallery.portraits}
        />
        <Gallery
          id="fine-art"
          section={t.sections.fineArt}
          images={gallery.fineArt}
          alt
        />
        <Gallery
          id="video-games"
          section={t.sections.videoGames}
          images={gallery.videoGames}
        />
        <Gallery
          id="book-covers"
          section={t.sections.bookCovers}
          images={gallery.bookCovers}
          alt
        />
        <About id="about" t={t} />
        <Contact id="contact" t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
