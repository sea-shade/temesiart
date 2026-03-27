// ============================================================
//  TEMESI PORTFOLIO — CONTENT CONFIG
//  Edit this file to update text, images, and sections.
//  Images can be placed in /public/images/ and referenced
//  as "/temesiart/images/yourfile.jpg"
// ============================================================

import { GalleryData, Lang, Translations } from '../types';

export const BASE_PATH = "/temesiart";

export const i18n: Record<Lang, Translations> = {
  en: {
    nav: {
      portraits: "Portraits",
      fineArt: "Fine Art",
      videoGames: "Video Games",
      bookCovers: "Book Covers",
      caricatureIllustration: "Caricature & Illustration",
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
          "Pencil portraits, caricatures, pastel drawings — capturing character with wit and precision. Available for commission.",
        prices: [
          { label: "Portrait", huf: "40,000 – 50,000 Ft", eur: "€100 – 125" },
          { label: "Caricature — simple", huf: "30,000 – 40,000 Ft", eur: "€75 – 100" },
          { label: "Caricature — detailed", huf: "55,000 Ft", eur: "€138" },
        ],
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
      caricatureIllustration: {
        title: "Caricature & Illustration",
        description:
          "Editorial caricatures and illustrations across genres — children's books, historical subjects, cartoons and comics.",
      },
      illustrationSubcats: {
        all: "All",
        children: "Children's",
        historical: "Historical",
        cartoon: "Cartoon & Comic",
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
      caricatureIllustration: "Karikatúra & Illusztráció",
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
          "Ceruzarajzok, karikatúrák, pasztellrajzok — a jellem megragadása szellemességgel és precizitással. Megrendelésre készül.",
        prices: [
          { label: "Portré", huf: "40 000 – 50 000 Ft", eur: "€100 – 125" },
          { label: "Karikatúra — egyszerű", huf: "30 000 – 40 000 Ft", eur: "€75 – 100" },
          { label: "Karikatúra — részletes", huf: "55 000 Ft", eur: "€138" },
        ],
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
      caricatureIllustration: {
        title: "Karikatúra & Illusztráció",
        description:
          "Szerkesztői karikatúrák és illusztrációk — gyermekkönyvek, történelmi témák, rajzfilmek és képregények.",
      },
      illustrationSubcats: {
        all: "Összes",
        children: "Gyerekillusztráció",
        historical: "Történelmi",
        cartoon: "Rajzfilm & Képregény",
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
//  - src: path under /public  (e.g. "/temesiart/images/folder/file.jpg")
//  - alt: short description (used for accessibility)
//  - title: optional display title
//  - subcategory (for illustration): set on the image via a custom field
//    handled in IllustrationSection.tsx
// ============================================================

export const gallery: GalleryData = {
  portraits: [
    { src: "/temesiart/images/megrendeles/babas_csalad_800.jpg", alt: "Family portrait", title: "Family" },
    { src: "/temesiart/images/megrendeles/gyerekek_keszkep_800.jpg", alt: "Children portrait", title: "Children" },
    { src: "/temesiart/images/megrendeles/szulok_kettos_Temesi_2010_800.jpg", alt: "Double portrait of parents", title: "Parents" },
    { src: "/temesiart/images/megrendeles/testverek_Temesi_2010_800.jpg", alt: "Siblings portrait", title: "Siblings" },
    { src: "/temesiart/images/megrendeles/testverek_800.jpg", alt: "Pastel siblings", title: "Siblings — Pastel" },
    { src: "/temesiart/images/megrendeles/kislany_voros.jpg", alt: "Girl portrait", title: "Girl" },
    { src: "/temesiart/images/megrendeles/pasztellrajz01.jpg", alt: "Pastel portrait", title: "Pastel Portrait" },
    { src: "/temesiart/images/megrendeles/pasztellrajz04b.jpg", alt: "Pastel portrait II", title: "Pastel Portrait II" },
    { src: "/temesiart/images/megrendeles/akvarell1.jpg", alt: "Watercolour portrait", title: "Watercolour Portrait" },
    { src: "/temesiart/images/megrendeles/akvarell2.jpg", alt: "Ildikó — watercolour portrait", title: "Ildikó" },
    { src: "/temesiart/images/megrendeles/olaj1.jpg", alt: "Oil portrait", title: "Oil Portrait" },
    { src: "/temesiart/images/megrendeles/turi_Temesi_2010_800.jpg", alt: "Portrait — Turi", title: "Turi" },
    { src: "/temesiart/images/megrendeles/radnoti_800.jpg", alt: "Caricature of Radnóti", title: "Radnóti" },
    { src: "/temesiart/images/megrendeles/bajszos2_1000.jpg", alt: "Caricature with moustache", title: "Moustached Gentleman" },
    { src: "/temesiart/images/megrendeles/einstein_bence.jpg", alt: "Einstein caricature", title: "Einstein" },
    { src: "/temesiart/images/megrendeles/lorant_karikatura.jpg", alt: "Lóránt caricature", title: "Lóránt" },
    { src: "/temesiart/images/megrendeles/maffioso.jpg", alt: "Mafioso caricature", title: "Mafioso" },
    { src: "/temesiart/images/megrendeles/mammut.jpg", alt: "Mammut caricature", title: "Mammut" },
    { src: "/temesiart/images/megrendeles/Cuba_800.jpg", alt: "Cuba caricature", title: "Cuba" },
    { src: "/temesiart/images/megrendeles/KGBS_Temesi_800.jpg", alt: "KGBS caricature", title: "KGBS" },
    { src: "/temesiart/images/megrendeles/polografika01.jpg", alt: "Political caricature I", title: "Political I" },
    { src: "/temesiart/images/megrendeles/polografika03.jpg", alt: "Political caricature III", title: "Political III" },
    { src: "/temesiart/images/megrendeles/polografika04.jpg", alt: "Political caricature IV", title: "Political IV" },
  ],
  fineArt: [
    { src: "/temesiart/images/akvarell/01.jpg", alt: "Annunciation — watercolour", title: "Annunciation" },
    { src: "/temesiart/images/akvarell/02.jpg", alt: "Ildikó — watercolour", title: "Ildikó" },
    { src: "/temesiart/images/akvarell/akvarell_Nike.jpg", alt: "Nike — watercolour", title: "Nike" },
    { src: "/temesiart/images/akvarell/Lelet_I.jpg", alt: "Artifact I — watercolour", title: "Artifact I" },
    { src: "/temesiart/images/akvarell/Fallen_angel.jpg", alt: "Fallen Angel — watercolour", title: "Fallen Angel" },
    { src: "/temesiart/images/akvarell/Octopus.jpg", alt: "Octopus — watercolour", title: "Octopus" },
    { src: "/temesiart/images/akvarell/Tronus_I.jpg", alt: "Throne I — watercolour", title: "Throne I" },
    { src: "/temesiart/images/akvarell/Zaszlo_III.jpg", alt: "Flag III — watercolour", title: "Flag III" },
  ],
  videoGames: [
    { src: "/temesiart/images/pixel/01.jpg", alt: "Video game graphic", title: "Game Art I" },
    { src: "/temesiart/images/pixel/03.jpg", alt: "Video game graphic", title: "Game Art III" },
    { src: "/temesiart/images/pixel/05.jpg", alt: "Video game graphic", title: "Game Art V" },
    { src: "/temesiart/images/pixel/07.jpg", alt: "Video game graphic", title: "Game Art VII" },
    { src: "/temesiart/images/pixel/09.jpg", alt: "Video game graphic", title: "Game Art IX" },
    { src: "/temesiart/images/pixel/10.jpg", alt: "Video game graphic", title: "Game Art X" },
    { src: "/temesiart/images/pixel/12.jpg", alt: "Video game graphic", title: "Game Art XII" },
    { src: "/temesiart/images/pixel/13.jpg", alt: "Video game graphic", title: "Game Art XIII" },
    { src: "/temesiart/images/pixel/aeroplan_300.jpg", alt: "Aeroplane pixel art", title: "Aeroplane" },
    { src: "/temesiart/images/pixel/stewardess_300.jpg", alt: "Stewardess pixel art", title: "Stewardess" },
    { src: "/temesiart/images/pixel/flash_game_bgr.jpg", alt: "Flash game background", title: "Flash Game Background" },
    { src: "/temesiart/images/pixel/game_menu.jpg", alt: "Game menu design", title: "Game Menu" },
    { src: "/temesiart/images/pixel/char_concept.jpg", alt: "Character concept art", title: "Character Concept" },
    { src: "/temesiart/images/pixel/char2_concept.jpg", alt: "Character concept art II", title: "Character II" },
    { src: "/temesiart/images/pixel/char5_concept.jpg", alt: "Character concept art V", title: "Character V" },
    { src: "/temesiart/images/pixel/char6_concept.jpg", alt: "Character concept art VI", title: "Character VI" },
    { src: "/temesiart/images/pixel/rapper_concept.jpg", alt: "Rapper character concept", title: "Rapper" },
    { src: "/temesiart/images/pixel/ocelot_char_concept.jpg", alt: "Ocelot character concept", title: "Ocelot" },
  ],
  bookCovers: [
    { src: "/temesiart/images/boritok/Helle_Hogyan_erd_el_cover_700.jpg", alt: "Book cover — Helle", title: "Helle" },
    { src: "/temesiart/images/boritok/egy_hajoban_evezunk_borito_Temesi_600.jpg", alt: "Book cover — Egy hajóban evezünk", title: "Egy hajóban" },
    { src: "/temesiart/images/boritok/Della_Meszaros_Peter_cover.jpg", alt: "Book cover — Della", title: "Della" },
    { src: "/temesiart/images/boritok/tengeri_farkas_borito_Temesi_600.jpg", alt: "Book cover — Tengeri Farkas", title: "Tengeri Farkas" },
    { src: "/temesiart/images/boritok/covers_Faklya.jpg", alt: "Book cover — Fáklya", title: "Fáklya" },
    { src: "/temesiart/images/boritok/covers_Parizsban.jpg", alt: "Book cover — Párizsban", title: "Párizsban" },
    { src: "/temesiart/images/boritok/covers_Spartacus.jpg", alt: "Book cover — Spartacus", title: "Spartacus" },
    { src: "/temesiart/images/boritok/covers_Fauntallasia.jpg", alt: "Book cover — Fauntallasia", title: "Fauntallasia" },
    { src: "/temesiart/images/boritok/ofelsege_borito.jpg", alt: "Book cover — Ő felsége", title: "Ő felsége" },
    { src: "/temesiart/images/boritok/onmagam_borito.jpg", alt: "Book cover — Önmagam", title: "Önmagam" },
    { src: "/temesiart/images/boritok/pokoltuz_borito.jpg", alt: "Book cover — Pokoltűz", title: "Pokoltűz" },
    { src: "/temesiart/images/boritok/lebegosarkany_borito.jpg", alt: "Book cover — Lebegő sárkány", title: "Lebegő sárkány" },
    { src: "/temesiart/images/boritok/forgeteg_borito.jpg", alt: "Book cover — Forgeteges", title: "Forgeteges" },
    { src: "/temesiart/images/boritok/armany_borito.jpg", alt: "Book cover —Ármány", title: "Ármány" },
    { src: "/temesiart/images/boritok/vadasz_borito.jpg", alt: "Book cover — Vadász", title: "Vadász" },
    { src: "/temesiart/images/boritok/haboru_borito.jpg", alt: "Book cover — Háború", title: "Háború" },
    { src: "/temesiart/images/boritok/isten_borito.jpg", alt: "Book cover — Isten", title: "Isten" },
    { src: "/temesiart/images/boritok/gyilkososzton_borito.jpg", alt: "Book cover — Gyilkos ösztön", title: "Gyilkos ösztön" },
    { src: "/temesiart/images/boritok/demon_borito.jpg", alt: "Book cover — Démon", title: "Démon" },
    { src: "/temesiart/images/boritok/hetedik_borito.jpg", alt: "Book cover — Hetedik", title: "Hetedik" },
  ],
  illustrationChildren: [
    { src: "/temesiart/images/illusztracio/csizmaskandur_1.jpg", alt: "Puss in Boots — illustration", title: "Puss in Boots I" },
    { src: "/temesiart/images/illusztracio/csizmaskandur_2.jpg", alt: "Puss in Boots II — illustration", title: "Puss in Boots II" },
    { src: "/temesiart/images/illusztracio/Macitanya1000.jpg", alt: "Teddy Bear's Yard — illustration", title: "Teddy Bear's Yard" },
    { src: "/temesiart/images/illusztracio/repamese_800.jpg", alt: "Flying fairy tale — illustration", title: "Flying Fairy Tale" },
    { src: "/temesiart/images/illusztracio/sarkany1.jpg", alt: "Dragon — illustration", title: "Dragon" },
    { src: "/temesiart/images/illusztracio/ozike.jpg", alt: "Fawn — illustration", title: "Fawn" },
    { src: "/temesiart/images/illusztracio/kislany.jpg", alt: "Girl — illustration", title: "Girl" },
    { src: "/temesiart/images/illusztracio/labda.jpg", alt: "Ball — children's illustration", title: "Ball" },
    { src: "/temesiart/images/illusztracio/hangyas1.jpg", alt: "Ants — illustration", title: "Ants" },
    { src: "/temesiart/images/illusztracio/suni_6tuskevel.jpg", alt: "Hedgehog — illustration", title: "Hedgehog" },
  ],
  illustrationHistorical: [
    { src: "/temesiart/images/illusztracio/galya_illusztracio_Temesi_600.jpg", alt: "Galleon ship — historical illustration", title: "Galleon" },
    { src: "/temesiart/images/illusztracio/ill_Lanchid.jpg", alt: "Chain Bridge — historical illustration", title: "Chain Bridge" },
    { src: "/temesiart/images/illusztracio/ill_foldvar.jpg", alt: "Earthwork — historical illustration", title: "Earthwork" },
    { src: "/temesiart/images/illusztracio/ill_oregur.jpg", alt: "Old gentleman — historical illustration", title: "Old Gentleman" },
    { src: "/temesiart/images/illusztracio/rom_szinh_600.jpg", alt: "Roman theatre — historical illustration", title: "Roman Theatre" },
    { src: "/temesiart/images/illusztracio/hortobagy_600.jpg", alt: "Hortobágy — illustration", title: "Hortobágy" },
  ],
  illustrationCartoon: [
    { src: "/temesiart/images/illusztracio/TVnezo_illusztracio_Temesi600.jpg", alt: "TV watcher — cartoon illustration", title: "TV Watcher" },
    { src: "/temesiart/images/illusztracio/ill_schoolbus.jpg", alt: "School bus — cartoon illustration", title: "School Bus" },
    { src: "/temesiart/images/illusztracio/ill_seaside.jpg", alt: "Seaside — cartoon illustration", title: "Seaside" },
    { src: "/temesiart/images/illusztracio/ill_vulkan.jpg", alt: "Volcano — cartoon illustration", title: "Volcano" },
    { src: "/temesiart/images/illusztracio/ropulo.jpg", alt: "Flying — cartoon illustration", title: "Flying" },
    { src: "/temesiart/images/illusztracio/raktar_600_temesi.jpg", alt: "Warehouse — cartoon illustration", title: "Warehouse" },
    { src: "/temesiart/images/illusztracio/jol_vagyunk_illusztracio_Temesi_600.jpg", alt: "We're Fine — cartoon illustration", title: "We're Fine" },
    { src: "/temesiart/images/illusztracio/hodok_vissza_600.jpg", alt: "Return — cartoon illustration", title: "Return" },
  ],
};
