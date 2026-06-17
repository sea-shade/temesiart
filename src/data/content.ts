// ============================================================
//  TEMESI PORTFOLIO — CONTENT CONFIG
//  Edit this file to update text, images, and sections.
//  Images can be placed in /public/images/ and referenced
//  as "/temesiart/images/yourfile.jpg"
// ============================================================

import { GalleryData, Lang, Translations } from '../types';

export const BASE_PATH = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
const img = (path: string) => `${BASE_PATH}${path}`;

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
          "Watercolour, etching, digital art. Works shown in exhibitions across Budapest and Hungary since 1987. Original pieces are available for purchase; works in a similar style can be commissioned.",
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
        nature: "Nature & Wildlife",
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
          "Akvarell, rézkarc, digitális grafika. 1987 óta kiállítva Budapesten és Magyarország-szerte. Az eredeti alkotások megvásárolhatók; hasonló stílusban megrendelésre is készülnek munkák.",
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
        nature: "Természet & Állatvilág",
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
    { src: img("/images/portrait/babas_csalad_800.jpg"), alt: "Family portrait", title: "Family" },
    { src: img("/images/portrait/gyerekek_keszkep_800.jpg"), alt: "Children portrait", title: "Children" },
    { src: img("/images/portrait/szulok_kettos_Temesi_2010_800.jpg"), alt: "Double portrait of parents", title: "Parents" },
    { src: img("/images/portrait/testverek_Temesi_2010_800.jpg"), alt: "Siblings portrait", title: "Siblings" },
    { src: img("/images/portrait/testverek_800.jpg"), alt: "Pastel siblings", title: "Siblings — Pastel" },
    { src: img("/images/portrait/kislany_voros.jpg"), alt: "Girl portrait", title: "Girl" },
    { src: img("/images/portrait/pasztellrajz01.jpg"), alt: "Pastel portrait", title: "Pastel Portrait" },
    { src: img("/images/portrait/pasztellrajz04b.jpg"), alt: "Pastel portrait II", title: "Pastel Portrait II" },
    { src: img("/images/portrait/akvarell1.jpg"), alt: "Watercolour portrait", title: "Watercolour Portrait" },
    { src: img("/images/portrait/akvarell2.jpg"), alt: "Ildikó — watercolour portrait", title: "Ildikó" },
    { src: img("/images/portrait/olaj1.jpg"), alt: "Oil portrait", title: "Oil Portrait" },
    { src: img("/images/portrait/turi_Temesi_2010_800.jpg"), alt: "Portrait — Turi", title: "Turi" },
    { src: img("/images/portrait/radnoti_800.jpg"), alt: "Caricature of Radnóti", title: "Radnóti" },
    { src: img("/images/portrait/bajszos2_1000.jpg"), alt: "Caricature with moustache", title: "Moustached Gentleman" },
    { src: img("/images/portrait/einstein_bence.jpg"), alt: "Einstein caricature", title: "Einstein" },
    { src: img("/images/portrait/lorant_karikatura.jpg"), alt: "Lóránt caricature", title: "Lóránt" },
    { src: img("/images/portrait/maffioso.jpg"), alt: "Mafioso caricature", title: "Mafioso" },
    { src: img("/images/portrait/mammut.jpg"), alt: "Mammut caricature", title: "Mammut" },
    { src: img("/images/portrait/Cuba_800.jpg"), alt: "Cuba caricature", title: "Cuba" },
    { src: img("/images/portrait/KGBS_Temesi_800.jpg"), alt: "KGBS caricature", title: "KGBS" },
    { src: img("/images/portrait/polografika01.jpg"), alt: "Political caricature I", title: "Political I" },
    { src: img("/images/portrait/polografika03.jpg"), alt: "Political caricature III", title: "Political III" },
    { src: img("/images/portrait/polografika04.jpg"), alt: "Political caricature IV", title: "Political IV" },
  ],
  fineArt: [
    { src: img("/images/aquarel/01.jpg"), alt: "Annunciation — watercolour", title: "Annunciation" },
    { src: img("/images/aquarel/02.jpg"), alt: "Ildikó — watercolour", title: "Ildikó" },
    { src: img("/images/aquarel/akvarell_Nike.jpg"), alt: "Nike — watercolour", title: "Nike" },
    { src: img("/images/aquarel/Lelet_I.jpg"), alt: "Artifact I — watercolour", title: "Artifact I" },
    { src: img("/images/aquarel/Fallen_angel.jpg"), alt: "Fallen Angel — watercolour", title: "Fallen Angel" },
    { src: img("/images/aquarel/Octopus.jpg"), alt: "Octopus — watercolour", title: "Octopus" },
    { src: img("/images/aquarel/Tronus_I.jpg"), alt: "Throne I — watercolour", title: "Throne I" },
    { src: img("/images/aquarel/Zaszlo_III.jpg"), alt: "Flag III — watercolour", title: "Flag III" },
  ],
  videoGames: [
    { src: img("/images/pixel/01.jpg"), alt: "Video game graphic", title: "Game Art I" },
    { src: img("/images/pixel/02.jpg"), alt: "Video game graphic", title: "Game Art II" },
    { src: img("/images/pixel/03.jpg"), alt: "Video game graphic", title: "Game Art III" },
    { src: img("/images/pixel/04.jpg"), alt: "Video game graphic", title: "Game Art IV" },
    { src: img("/images/pixel/05.jpg"), alt: "Video game graphic", title: "Game Art V" },
    { src: img("/images/pixel/07.jpg"), alt: "Video game graphic", title: "Game Art VII" },
    { src: img("/images/pixel/09.jpg"), alt: "Video game graphic", title: "Game Art IX" },
    { src: img("/images/pixel/10.jpg"), alt: "Video game graphic", title: "Game Art X" },
    { src: img("/images/pixel/12.jpg"), alt: "Video game graphic", title: "Game Art XII" },
    { src: img("/images/pixel/13.jpg"), alt: "Video game graphic", title: "Game Art XIII" },
    { src: img("/images/pixel/aeroplan_300.jpg"), alt: "Aeroplane pixel art", title: "Aeroplane" },
    { src: img("/images/pixel/flash_game_bgr.jpg"), alt: "Flash game background", title: "Flash Game Background" },
    { src: img("/images/pixel/game_menu.jpg"), alt: "Game menu design", title: "Game Menu Design" },
    { src: img("/images/videogames/videogameconcept.jpg"), alt: "Video game concept art", title: "Concept Art I" },
    { src: img("/images/videogames/videogameconcept_2.jpg"), alt: "Video game concept art II", title: "Concept Art II" },
    { src: img("/images/videogames/videogameconcept_3.jpg"), alt: "Video game concept art III", title: "Concept Art III" },
    { src: img("/images/videogames/videogameconcept_4.jpg"), alt: "Video game concept art IV", title: "Concept Art IV" },
    { src: img("/images/videogames/videogameconcept_5.jpg"), alt: "Video game concept art V", title: "Concept Art V" },
    { src: img("/images/videogames/videogameconcept_6.jpg"), alt: "Video game concept art VI", title: "Concept Art VI" },
    { src: img("/images/videogames/videogameconcept_7.jpg"), alt: "Video game concept art VII", title: "Concept Art VII" },
  ],
  bookCovers: [
    { src: img("/images/boritok/Helle_Hogyan_erd_el_cover_700.jpg"), alt: "Book cover — Helle", title: "Helle" },
    { src: img("/images/boritok/egy_hajoban_evezunk_borito_Temesi_600.jpg"), alt: "Book cover — Egy hajóban evezünk", title: "Egy hajóban" },
    { src: img("/images/boritok/Della_Meszaros_Peter_cover.jpg"), alt: "Book cover — Della", title: "Della" },
    { src: img("/images/boritok/tengeri_farkas_borito_Temesi_600.jpg"), alt: "Book cover — Tengeri Farkas", title: "Tengeri Farkas" },
    { src: img("/images/boritok/covers_Faklya.jpg"), alt: "Book cover — Fáklya", title: "Fáklya" },
    { src: img("/images/boritok/covers_Parizsban.jpg"), alt: "Book cover — Párizsban", title: "Párizsban" },
    { src: img("/images/boritok/covers_Spartacus.jpg"), alt: "Book cover — Spartacus", title: "Spartacus" },
    { src: img("/images/boritok/covers_Fauntallasia.jpg"), alt: "Book cover — Fauntallasia", title: "Fauntallasia" },
    { src: img("/images/boritok/ofelsege_borito.jpg"), alt: "Book cover — Ő felsége", title: "Ő felsége" },
    { src: img("/images/boritok/onmagam_borito.jpg"), alt: "Book cover — Önmagam", title: "Önmagam" },
    { src: img("/images/boritok/pokoltuz_borito.jpg"), alt: "Book cover — Pokoltűz", title: "Pokoltűz" },
    { src: img("/images/boritok/lebegosarkany_borito.jpg"), alt: "Book cover — Lebegő sárkány", title: "Lebegő sárkány" },
    { src: img("/images/boritok/forgeteg_borito.jpg"), alt: "Book cover — Forgeteges", title: "Forgeteges" },
    { src: img("/images/boritok/armany_borito.jpg"), alt: "Book cover —Ármány", title: "Ármány" },
    { src: img("/images/boritok/vadasz_borito.jpg"), alt: "Book cover — Vadász", title: "Vadász" },
    { src: img("/images/boritok/haboru_borito.jpg"), alt: "Book cover — Háború", title: "Háború" },
    { src: img("/images/boritok/isten_borito.jpg"), alt: "Book cover — Isten", title: "Isten" },
    { src: img("/images/boritok/gyilkososzton_borito.jpg"), alt: "Book cover — Gyilkos ösztön", title: "Gyilkos ösztön" },
    { src: img("/images/boritok/demon_borito.jpg"), alt: "Book cover — Démon", title: "Démon" },
    { src: img("/images/boritok/hetedik_borito.jpg"), alt: "Book cover — Hetedik", title: "Hetedik" },
  ],
  illustrationChildren: [
    { src: img("/images/illustrations/fb_children_01.jpg"), alt: "Animals at table — children's illustration", title: "Dinner Time" },
    { src: img("/images/illustrations/csizmaskandur_1.jpg"), alt: "Puss in Boots — illustration", title: "Puss in Boots I" },
    { src: img("/images/illustrations/csizmaskandur_2.jpg"), alt: "Puss in Boots II — illustration", title: "Puss in Boots II" },
    { src: img("/images/illustrations/Macitanya1000.jpg"), alt: "Teddy Bear's Yard — illustration", title: "Teddy Bear's Yard" },
    { src: img("/images/illustrations/repamese_800.jpg"), alt: "Flying fairy tale — illustration", title: "Flying Fairy Tale" },
    { src: img("/images/illustrations/sarkany1.jpg"), alt: "Dragon — illustration", title: "Dragon" },
    { src: img("/images/illustrations/ozike.jpg"), alt: "Fawn — illustration", title: "Fawn" },
    { src: img("/images/illustrations/kislany.jpg"), alt: "Girl — illustration", title: "Girl" },
    { src: img("/images/illustrations/labda.jpg"), alt: "Ball — children's illustration", title: "Ball" },
    { src: img("/images/illustrations/hangyas1.jpg"), alt: "Ants — illustration", title: "Ants" },
    { src: img("/images/illustrations/suni_6tuskevel.jpg"), alt: "Hedgehog — children's illustration", title: "Hedgehog" },
    { src: img("/images/children_cartoon/children_cartoon_1.jpg"), alt: "Children cartoon illustration", title: "Children's Cartoon I" },
    { src: img("/images/children_cartoon/children_cartoon_2.jpg"), alt: "Children cartoon illustration II", title: "Children's Cartoon II" },
    { src: img("/images/children_cartoon/children_cartoon_3.jpg"), alt: "Children cartoon illustration III", title: "Children's Cartoon III" },
    { src: img("/images/children_cartoon/children_cartoon_4.jpg"), alt: "Children cartoon illustration IV", title: "Children's Cartoon IV" },
  ],
  illustrationHistorical: [
    { src: img("/images/illustrations/galya_illusztracio_Temesi_600.jpg"), alt: "Galleon ship — historical illustration", title: "Galleon" },
    { src: img("/images/illustrations/ill_Lanchid.jpg"), alt: "Chain Bridge — historical illustration", title: "Chain Bridge" },
    { src: img("/images/illustrations/ill_foldvar.jpg"), alt: "Earthwork — historical illustration", title: "Earthwork" },
    { src: img("/images/illustrations/ill_oregur.jpg"), alt: "Old gentleman — historical illustration", title: "Old Gentleman" },
    { src: img("/images/illustrations/rom_szinh_600.jpg"), alt: "Roman theatre — historical illustration", title: "Roman Theatre" },
    { src: img("/images/illustrations/hortobagy_600.jpg"), alt: "Hortobágy — illustration", title: "Hortobágy" },
  ],
  illustrationCartoon: [
    { src: img("/images/illustrations/TVnezo_illusztracio_Temesi600.jpg"), alt: "TV watcher — cartoon illustration", title: "TV Watcher" },
    { src: img("/images/illustrations/ill_schoolbus.jpg"), alt: "School bus — cartoon illustration", title: "School Bus" },
    { src: img("/images/illustrations/ill_seaside.jpg"), alt: "Seaside — cartoon illustration", title: "Seaside" },
    { src: img("/images/illustrations/ill_vulkan.jpg"), alt: "Volcano — cartoon illustration", title: "Volcano" },
    { src: img("/images/illustrations/ropulo.jpg"), alt: "Flying — cartoon illustration", title: "Flying" },
    { src: img("/images/illustrations/raktar_600_temesi.jpg"), alt: "Warehouse — cartoon illustration", title: "Warehouse" },
    { src: img("/images/illustrations/jol_vagyunk_illusztracio_Temesi_600.jpg"), alt: "We're Fine — cartoon illustration", title: "We're Fine" },
    { src: img("/images/illustrations/hodok_vissza_600.jpg"), alt: "Return — cartoon illustration", title: "Return" },
    { src: img("/images/editorial_cartoon/editorial_cartoon_1.jpg"), alt: "Editorial cartoon", title: "Editorial Cartoon I" },
    { src: img("/images/editorial_cartoon/editorial_cartoon_2.jpg"), alt: "Editorial cartoon II", title: "Editorial Cartoon II" },
    { src: img("/images/editorial_cartoon/editorial_cartoon_3.jpg"), alt: "Editorial cartoon III", title: "Editorial Cartoon III" },
    { src: img("/images/editorial_cartoon/editorial_cartoon_4.jpg"), alt: "Editorial cartoon IV", title: "Editorial Cartoon IV" },
    { src: img("/images/editorial_cartoon/editorial_cartoon_5.jpg"), alt: "Editorial cartoon V", title: "Editorial Cartoon V" },
    { src: img("/images/editorial_cartoon/editorial_cartoon_6.jpg"), alt: "Editorial cartoon VI", title: "Editorial Cartoon VI" },
    { src: img("/images/editorial_cartoon/editorial_cartoon_7.jpg"), alt: "Editorial cartoon VII", title: "Editorial Cartoon VII" },
    { src: img("/images/editorial_cartoon/editorial_cartoon_8.jpg"), alt: "Editorial cartoon VIII", title: "Editorial Cartoon VIII" },
    { src: img("/images/editorial_cartoon/editorial_cartoon_9.jpg"), alt: "Editorial cartoon IX", title: "Editorial Cartoon IX" },
  ],
  illustrationNature: [
    { src: img("/images/animals/animal_04ee9f.jpg"), alt: "White stork — watercolour illustration", title: "White Stork" },
    { src: img("/images/animals/animal_62fc3b.jpg"), alt: "Red squirrel — watercolour illustration", title: "Red Squirrel" },
    { src: img("/images/animals/animal_317638.jpg"), alt: "Green lizard — watercolour illustration", title: "Green Lizard" },
    { src: img("/images/animals/animal_82b556.jpg"), alt: "Hedgehog — watercolour illustration", title: "Hedgehog" },
    { src: img("/images/animals/animal_274c48.jpg"), alt: "Animal — watercolour illustration", title: "Wildlife I" },
    { src: img("/images/animals/animal_7714c0.jpg"), alt: "Animal — watercolour illustration", title: "Wildlife II" },
    { src: img("/images/illustrations/01_vaddiszno_Temesi_600.jpg"), alt: "Wild boar — nature illustration", title: "Wild Boar" },
    { src: img("/images/illustrations/03_borz_Temesi_600.jpg"), alt: "Badger — nature illustration", title: "Badger" },
    { src: img("/images/illustrations/04_szarvas_Temesi_600.jpg"), alt: "Deer — nature illustration", title: "Deer" },
    { src: img("/images/illustrations/08_golya_Temesi_600.jpg"), alt: "Stork — nature illustration", title: "Stork" },
    { src: img("/images/illustrations/09_vadkacsa_Temesi_600.jpg"), alt: "Mallard — nature illustration", title: "Mallard" },
    { src: img("/images/illustrations/10_vidra_Temesi_600.jpg"), alt: "Otter — nature illustration", title: "Otter" },
    { src: img("/images/illustrations/11_uregi_nyul_Temesi_600.jpg"), alt: "Rabbit — nature illustration", title: "Rabbit" },
    { src: img("/images/illustrations/12_mokus_Temesi_600.jpg"), alt: "Squirrel — nature illustration", title: "Squirrel" },
    { src: img("/images/illustrations/13_sun_Temesi_600.jpg"), alt: "Hedgehog — nature illustration", title: "Hedgehog II" },
    { src: img("/images/illustrations/14_aranysakal_Temesi_600.jpg"), alt: "Golden jackal — nature illustration", title: "Golden Jackal" },
    { src: img("/images/illustrations/15_gyik_Temesi_600.jpg"), alt: "Lizard — nature illustration", title: "Lizard" },
    { src: img("/images/illustrations/16_vipera_Temesi_600.jpg"), alt: "Viper — nature illustration", title: "Viper" },
    { src: img("/images/illustrations/roka.jpg"), alt: "Fox — nature illustration", title: "Fox" },
    { src: img("/images/illustrations/zsiraf1.jpg"), alt: "Giraffe — nature illustration", title: "Giraffe" },
  ],
};
