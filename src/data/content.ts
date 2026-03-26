// ============================================================
//  TEMESI PORTFOLIO — CONTENT CONFIG
//  Edit this file to update text, images, and sections.
//  Images can be placed in /public/images/ and referenced
//  as "/temesi-portfolio/images/yourfile.jpg"
//  (update the base path to match your GitHub repo name)
// ============================================================

import { GalleryData, Lang, Translations } from '../types';

export const BASE_PATH = "/temesi-portfolio"; // ← change to your repo name

export const i18n: Record<Lang, Translations> = {
  en: {
    nav: {
      portraits: "Portraits",
      fineArt: "Fine Art",
      videoGames: "Video Games",
      bookCovers: "Book Covers",
      about: "About",
      contact: "Contact",
    },
    hero: {
      name: "Péter Temesi",
      tagline: "Graphic Artist & Illustrator",
      sub: "Budapest, Hungary",
    },
    sections: {
      portraits: {
        title: "Portraits",
        description:
          "Caricatures, pencil portraits, pastel drawings — capturing character with wit and precision.",
      },
      fineArt: {
        title: "Fine Art",
        description:
          "Watercolour, etching, digital art. Works shown in exhibitions across Budapest and Hungary since 1987.",
      },
      videoGames: {
        title: "Video Games & Concept Art",
        description:
          "Game graphics, concept drawings, UI and pixel art. Projects for Appaloosa Interactive, Bonus, Most Wanted Entertainment and others.",
      },
      bookCovers: {
        title: "Book Covers & Illustration",
        description:
          "Cover art and illustrations for fantasy, thriller, sci-fi and children's books. Over 40 published titles.",
      },
    },
    about: {
      title: "About",
      body: `Hi, I'm Péter Temesi — graphic artist, illustrator and painter based in Budapest, Hungary.

Between 1992 and 1998 I developed computer game graphics for American software companies Appaloosa Interactive and Bonus. Since 2001 I have worked as an independent graphic artist: book covers, illustrations, comics, portraits, caricatures, concept art and fine art.

Member of the Association of Hungarian Fine Artists.`,
      education: "Education",
      educationItems: [
        "1993 — Hungarian Academy of Fine Arts, Budapest (Teacher Training)",
        "1986 — Janus Pannonius University, Pécs (Biology & Art)",
      ],
      exhibitions: "Selected Exhibitions",
      exhibitionItems: [
        "2013 — Kondor Béla Community House, Budapest — Tükör",
        "2012 — Kondor Béla Community House, Budapest — Saints",
        "2011 — Ajkai Tárlat",
        "2010 — Kondor Béla Community House — Vitorla",
        "2009 — Kondor Béla Community House — Galilei's Telescope",
        "2004 — Szabó Ervin Library, Budapest (solo)",
        "2004 — Vigadó Gallery, Budapest",
        "1989 — József Attila Cultural Centre, Budapest (solo)",
      ],
    },
    contact: {
      title: "Contact",
      location: "Budapest, XVIII. district, Hungary",
      email: "hopsy@t-online.hu",
      availability: "Available for commissions, portraits, illustration and concept art projects.",
    },
  },
  hu: {
    nav: {
      portraits: "Portrék",
      fineArt: "Képzőművészet",
      videoGames: "Videojátékok",
      bookCovers: "Könyvborítók",
      about: "Magamról",
      contact: "Kapcsolat",
    },
    hero: {
      name: "Temesi Péter",
      tagline: "Grafikus és Illusztrátor",
      sub: "Budapest, Magyarország",
    },
    sections: {
      portraits: {
        title: "Portrék",
        description:
          "Karikatúrák, ceruzarajzok, pasztellrajzok — a jellem megragadása szellemességgel és precizitással.",
      },
      fineArt: {
        title: "Képzőművészet",
        description:
          "Akvarell, rézkarc, digitális grafika. 1987 óta kiállítva Budapesten és Magyarország-szerte.",
      },
      videoGames: {
        title: "Videojátékok és Concept Art",
        description:
          "Játékgrafika, konceptrajzok, UI és pixelgrafika. Projektek az Appaloosa Interactive, Bonus és Most Wanted Entertainment számára.",
      },
      bookCovers: {
        title: "Könyvborítók és Illusztráció",
        description:
          "Borítóterv és illusztrációk fantasy, thriller, sci-fi és gyermekkönyvekhez. Több mint 40 megjelent kiadványhoz.",
      },
    },
    about: {
      title: "Magamról",
      body: `Temesi Péter grafikus, festőművész vagyok, Budapesten élek és dolgozom.

1992 és 1998 között számítógépes játékok grafikáját készítettem az Appaloosa Interactive és Bonus amerikai cégek számára. 2001 óta független grafikusként dolgozom: könyvborítók, illusztrációk, képregények, portrék, karikatúrák, concept artok és képzőművészeti alkotások.

A Magyar Alkotóművészek Országos Egyesületének tagja.`,
      education: "Tanulmányok",
      educationItems: [
        "1993 — Képzőművészeti Főiskola, Budapest (tanárképző szak)",
        "1986 — Janus Pannonius Tudományegyetem, Pécs (biológia-rajz szak)",
      ],
      exhibitions: "Válogatott kiállítások",
      exhibitionItems: [
        "2013 — Kondor Béla Közösségi Ház, Budapest — Tükör",
        "2012 — Kondor Béla Közösségi Ház, Budapest — Szentek",
        "2011 — Ajkai Tárlat",
        "2010 — Kondor Béla Közösségi Ház — Vitorla",
        "2009 — Kondor Béla Közösségi Ház — Galilei távcsöve",
        "2004 — Szabó Ervin Könyvtár, Budapest (egyéni)",
        "2004 — Vigadó Galéria, Budapest",
        "1989 — József Attila Művelődési Központ, Budapest (egyéni)",
      ],
    },
    contact: {
      title: "Kapcsolat",
      location: "Budapest, XVIII. kerület, Magyarország",
      email: "hopsy@t-online.hu",
      availability: "Megbízásokat, portrékat, illusztrációkat és concept art munkákat vállalok.",
    },
  },
};

// ============================================================
//  GALLERY IMAGES
//  Add new works by appending to the relevant array.
//  - src: path under /public  (e.g. "/temesi-portfolio/images/akvarell/01.jpg")
//  - alt: short description (used for accessibility)
//  - title: optional display title
// ============================================================

export const gallery: GalleryData = {
  portraits: [
    { src: "http://www.temesi.hu/images/megrendeles/babas_csalad_800.jpg", alt: "Family portrait", title: "Family" },
    { src: "http://www.temesi.hu/images/megrendeles/gyerekek_keszkep_800.jpg", alt: "Children portrait", title: "Children" },
    { src: "http://www.temesi.hu/images/megrendeles/szulok_kettos_Temesi_2010_800.jpg", alt: "Double portrait of parents", title: "Parents" },
    { src: "http://www.temesi.hu/images/megrendeles/testverek_Temesi_2010_800.jpg", alt: "Siblings portrait", title: "Siblings" },
    { src: "http://www.temesi.hu/images/megrendeles/testverek_800.jpg", alt: "Pastel siblings", title: "Siblings — Pastel" },
    { src: "http://www.temesi.hu/images/megrendeles/kislany_voros.jpg", alt: "Girl portrait", title: "Girl" },
    { src: "http://www.temesi.hu/images/megrendeles/radnoti_800.jpg", alt: "Caricature of Radnóti", title: "Radnóti" },
    { src: "http://www.temesi.hu/images/megrendeles/bajszos2_1000.jpg", alt: "Caricature with moustache", title: "Moustached Gentleman" },
    { src: "http://www.temesi.hu/images/megrendeles/akvarell2.jpg", alt: "Ildikó — watercolour portrait", title: "Ildikó" },
    { src: "http://www.temesi.hu/images/megrendeles/olaj1.jpg", alt: "Oil portrait", title: "Oil Portrait" },
  ],
  fineArt: [
    { src: "http://www.temesi.hu/images/akvarell/01.jpg", alt: "Annunciation — watercolour", title: "Annunciation" },
    { src: "http://www.temesi.hu/images/akvarell/02.jpg", alt: "Ildikó — watercolour", title: "Ildikó" },
    { src: "http://www.temesi.hu/images/akvarell/akvarell_Nike.jpg", alt: "Nike — watercolour", title: "Nike" },
    { src: "http://www.temesi.hu/images/akvarell/Lelet_I.jpg", alt: "Artifact I — watercolour", title: "Artifact I" },
    { src: "http://www.temesi.hu/images/akvarell/Fallen_angel.jpg", alt: "Fallen Angel — watercolour", title: "Fallen Angel" },
    { src: "http://www.temesi.hu/images/akvarell/Octopus.jpg", alt: "Octopus — watercolour", title: "Octopus" },
    { src: "http://www.temesi.hu/images/akvarell/Tronus_I.jpg", alt: "Throne I — watercolour", title: "Throne I" },
    { src: "http://www.temesi.hu/images/akvarell/Zaszlo_III.jpg", alt: "Flag III — watercolour", title: "Flag III" },
  ],
  videoGames: [
    { src: "http://www.temesi.hu/images/videogames/busytown.jpg", alt: "Busytown game graphics", title: "Busytown (1993)" },
    { src: "http://www.temesi.hu/images/videogames/powerrangers.jpg", alt: "Power Rangers Zeo game", title: "Power Rangers Zeo (1996)" },
    { src: "http://www.temesi.hu/images/videogames/grossology.jpg", alt: "Grossology game", title: "Grossology (1997)" },
    { src: "http://www.temesi.hu/images/videogames/concept01.jpg", alt: "Concept art", title: "Concept Art" },
  ],
  bookCovers: [
    { src: "http://www.temesi.hu/images/konyvborito/borito01.jpg", alt: "Book cover", title: "Book Cover" },
    { src: "http://www.temesi.hu/images/konyvborito/borito02.jpg", alt: "Book cover", title: "Book Cover" },
    { src: "http://www.temesi.hu/images/konyvborito/borito03.jpg", alt: "Book cover", title: "Book Cover" },
    { src: "http://www.temesi.hu/images/konyvborito/borito04.jpg", alt: "Book cover", title: "Book Cover" },
  ],
};
