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
    { src: "/temesiart/images/portrait/babas_csalad_800.jpg", alt: "Family portrait", title: "Family" },
    { src: "/temesiart/images/portrait/gyerekek_keszkep_800.jpg", alt: "Children portrait", title: "Children" },
    { src: "/temesiart/images/portrait/szulok_kettos_Temesi_2010_800.jpg", alt: "Double portrait of parents", title: "Parents" },
    { src: "/temesiart/images/portrait/testverek_Temesi_2010_800.jpg", alt: "Siblings portrait", title: "Siblings" },
    { src: "/temesiart/images/portrait/testverek_800.jpg", alt: "Pastel siblings", title: "Siblings — Pastel" },
    { src: "/temesiart/images/portrait/kislany_voros.jpg", alt: "Girl portrait", title: "Girl" },
    { src: "/temesiart/images/portrait/pasztellrajz01.jpg", alt: "Pastel portrait", title: "Pastel Portrait" },
    { src: "/temesiart/images/portrait/pasztellrajz04b.jpg", alt: "Pastel portrait II", title: "Pastel Portrait II" },
    { src: "/temesiart/images/portrait/akvarell1.jpg", alt: "Watercolour portrait", title: "Watercolour Portrait" },
    { src: "/temesiart/images/portrait/akvarell2.jpg", alt: "Ildikó — watercolour portrait", title: "Ildikó" },
    { src: "/temesiart/images/portrait/olaj1.jpg", alt: "Oil portrait", title: "Oil Portrait" },
    { src: "/temesiart/images/portrait/turi_Temesi_2010_800.jpg", alt: "Portrait — Turi", title: "Turi" },
    { src: "/temesiart/images/portrait/radnoti_800.jpg", alt: "Caricature of Radnóti", title: "Radnóti" },
    { src: "/temesiart/images/portrait/bajszos2_1000.jpg", alt: "Caricature with moustache", title: "Moustached Gentleman" },
    { src: "/temesiart/images/portrait/einstein_bence.jpg", alt: "Einstein caricature", title: "Einstein" },
    { src: "/temesiart/images/portrait/lorant_karikatura.jpg", alt: "Lóránt caricature", title: "Lóránt" },
    { src: "/temesiart/images/portrait/maffioso.jpg", alt: "Mafioso caricature", title: "Mafioso" },
    { src: "/temesiart/images/portrait/mammut.jpg", alt: "Mammut caricature", title: "Mammut" },
    { src: "/temesiart/images/portrait/Cuba_800.jpg", alt: "Cuba caricature", title: "Cuba" },
    { src: "/temesiart/images/portrait/KGBS_Temesi_800.jpg", alt: "KGBS caricature", title: "KGBS" },
    { src: "/temesiart/images/portrait/polografika01.jpg", alt: "Political caricature I", title: "Political I" },
    { src: "/temesiart/images/portrait/polografika03.jpg", alt: "Political caricature III", title: "Political III" },
    { src: "/temesiart/images/portrait/polografika04.jpg", alt: "Political caricature IV", title: "Political IV" },
  ],
  fineArt: [
    { src: "/temesiart/images/aquarel/01.jpg", alt: "Annunciation — watercolour", title: "Annunciation" },
    { src: "/temesiart/images/aquarel/02.jpg", alt: "Ildikó — watercolour", title: "Ildikó" },
    { src: "/temesiart/images/aquarel/akvarell_Nike.jpg", alt: "Nike — watercolour", title: "Nike" },
    { src: "/temesiart/images/aquarel/Lelet_I.jpg", alt: "Artifact I — watercolour", title: "Artifact I" },
    { src: "/temesiart/images/aquarel/Fallen_angel.jpg", alt: "Fallen Angel — watercolour", title: "Fallen Angel" },
    { src: "/temesiart/images/aquarel/Octopus.jpg", alt: "Octopus — watercolour", title: "Octopus" },
    { src: "/temesiart/images/aquarel/Tronus_I.jpg", alt: "Throne I — watercolour", title: "Throne I" },
    { src: "/temesiart/images/aquarel/Zaszlo_III.jpg", alt: "Flag III — watercolour", title: "Flag III" },
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
    { src: "/temesiart/images/pixel/flash_game_bgr.jpg", alt: "Flash game background", title: "Flash Game Background" },
    { src: "/temesiart/images/pixel/game_menu.jpg", alt: "Game menu design", title: "Game Menu" },
    { src: "/temesiart/images/videogames/videogameconcept.jpg", alt: "Video game concept art", title: "Concept Art I" },
    { src: "/temesiart/images/videogames/videogameconcept_2.jpg", alt: "Video game concept art II", title: "Concept Art II" },
    { src: "/temesiart/images/videogames/videogameconcept_3.jpg", alt: "Video game concept art III", title: "Concept Art III" },
    { src: "/temesiart/images/videogames/videogameconcept_4.jpg", alt: "Video game concept art IV", title: "Concept Art IV" },
    { src: "/temesiart/images/videogames/videogameconcept_5.jpg", alt: "Video game concept art V", title: "Concept Art V" },
    { src: "/temesiart/images/videogames/videogameconcept_6.jpg", alt: "Video game concept art VI", title: "Concept Art VI" },
    { src: "/temesiart/images/videogames/videogameconcept_7.jpg", alt: "Video game concept art VII", title: "Concept Art VII" },
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
    { src: "/temesiart/images/illustrations/fb_children_01.jpg", alt: "Animals at table — children's illustration", title: "Dinner Time" },
    { src: "/temesiart/images/illustrations/csizmaskandur_1.jpg", alt: "Puss in Boots — illustration", title: "Puss in Boots I" },
    { src: "/temesiart/images/illustrations/csizmaskandur_2.jpg", alt: "Puss in Boots II — illustration", title: "Puss in Boots II" },
    { src: "/temesiart/images/illustrations/Macitanya1000.jpg", alt: "Teddy Bear's Yard — illustration", title: "Teddy Bear's Yard" },
    { src: "/temesiart/images/illustrations/repamese_800.jpg", alt: "Flying fairy tale — illustration", title: "Flying Fairy Tale" },
    { src: "/temesiart/images/illustrations/sarkany1.jpg", alt: "Dragon — illustration", title: "Dragon" },
    { src: "/temesiart/images/illustrations/ozike.jpg", alt: "Fawn — illustration", title: "Fawn" },
    { src: "/temesiart/images/illustrations/kislany.jpg", alt: "Girl — illustration", title: "Girl" },
    { src: "/temesiart/images/illustrations/labda.jpg", alt: "Ball — children's illustration", title: "Ball" },
    { src: "/temesiart/images/illustrations/hangyas1.jpg", alt: "Ants — illustration", title: "Ants" },
    { src: "/temesiart/images/illustrations/suni_6tuskevel.jpg", alt: "Hedgehog — children's illustration", title: "Hedgehog" },
    { src: "/temesiart/images/children_cartoon/children_cartoon_1.jpg", alt: "Children cartoon illustration", title: "Children's Cartoon I" },
    { src: "/temesiart/images/children_cartoon/children_cartoon_2.jpg", alt: "Children cartoon illustration II", title: "Children's Cartoon II" },
    { src: "/temesiart/images/children_cartoon/children_cartoon_3.jpg", alt: "Children cartoon illustration III", title: "Children's Cartoon III" },
    { src: "/temesiart/images/children_cartoon/children_cartoon_4.jpg", alt: "Children cartoon illustration IV", title: "Children's Cartoon IV" },
  ],
  illustrationHistorical: [
    { src: "/temesiart/images/illustrations/galya_illusztracio_Temesi_600.jpg", alt: "Galleon ship — historical illustration", title: "Galleon" },
    { src: "/temesiart/images/illustrations/ill_Lanchid.jpg", alt: "Chain Bridge — historical illustration", title: "Chain Bridge" },
    { src: "/temesiart/images/illustrations/ill_foldvar.jpg", alt: "Earthwork — historical illustration", title: "Earthwork" },
    { src: "/temesiart/images/illustrations/ill_oregur.jpg", alt: "Old gentleman — historical illustration", title: "Old Gentleman" },
    { src: "/temesiart/images/illustrations/rom_szinh_600.jpg", alt: "Roman theatre — historical illustration", title: "Roman Theatre" },
    { src: "/temesiart/images/illustrations/hortobagy_600.jpg", alt: "Hortobágy — illustration", title: "Hortobágy" },
  ],
  illustrationCartoon: [
    { src: "/temesiart/images/illustrations/TVnezo_illusztracio_Temesi600.jpg", alt: "TV watcher — cartoon illustration", title: "TV Watcher" },
    { src: "/temesiart/images/illustrations/ill_schoolbus.jpg", alt: "School bus — cartoon illustration", title: "School Bus" },
    { src: "/temesiart/images/illustrations/ill_seaside.jpg", alt: "Seaside — cartoon illustration", title: "Seaside" },
    { src: "/temesiart/images/illustrations/ill_vulkan.jpg", alt: "Volcano — cartoon illustration", title: "Volcano" },
    { src: "/temesiart/images/illustrations/ropulo.jpg", alt: "Flying — cartoon illustration", title: "Flying" },
    { src: "/temesiart/images/illustrations/raktar_600_temesi.jpg", alt: "Warehouse — cartoon illustration", title: "Warehouse" },
    { src: "/temesiart/images/illustrations/jol_vagyunk_illusztracio_Temesi_600.jpg", alt: "We're Fine — cartoon illustration", title: "We're Fine" },
    { src: "/temesiart/images/illustrations/hodok_vissza_600.jpg", alt: "Return — cartoon illustration", title: "Return" },
    { src: "/temesiart/images/editorial_cartoon/editorial_cartoon_1.jpg", alt: "Editorial cartoon", title: "Editorial Cartoon I" },
    { src: "/temesiart/images/editorial_cartoon/editorial_cartoon_2.jpg", alt: "Editorial cartoon II", title: "Editorial Cartoon II" },
    { src: "/temesiart/images/editorial_cartoon/editorial_cartoon_3.jpg", alt: "Editorial cartoon III", title: "Editorial Cartoon III" },
    { src: "/temesiart/images/editorial_cartoon/editorial_cartoon_4.jpg", alt: "Editorial cartoon IV", title: "Editorial Cartoon IV" },
    { src: "/temesiart/images/editorial_cartoon/editorial_cartoon_5.jpg", alt: "Editorial cartoon V", title: "Editorial Cartoon V" },
    { src: "/temesiart/images/editorial_cartoon/editorial_cartoon_6.jpg", alt: "Editorial cartoon VI", title: "Editorial Cartoon VI" },
    { src: "/temesiart/images/editorial_cartoon/editorial_cartoon_7.jpg", alt: "Editorial cartoon VII", title: "Editorial Cartoon VII" },
    { src: "/temesiart/images/editorial_cartoon/editorial_cartoon_8.jpg", alt: "Editorial cartoon VIII", title: "Editorial Cartoon VIII" },
    { src: "/temesiart/images/editorial_cartoon/editorial_cartoon_9.jpg", alt: "Editorial cartoon IX", title: "Editorial Cartoon IX" },
  ],
  illustrationNature: [
    { src: "/temesiart/images/animals/animal_04ee9f.jpg", alt: "White stork — watercolour illustration", title: "White Stork" },
    { src: "/temesiart/images/animals/animal_62fc3b.jpg", alt: "Red squirrel — watercolour illustration", title: "Red Squirrel" },
    { src: "/temesiart/images/animals/animal_317638.jpg", alt: "Green lizard — watercolour illustration", title: "Green Lizard" },
    { src: "/temesiart/images/animals/animal_82b556.jpg", alt: "Hedgehog — watercolour illustration", title: "Hedgehog" },
    { src: "/temesiart/images/animals/animal_274c48.jpg", alt: "Animal — watercolour illustration", title: "Wildlife I" },
    { src: "/temesiart/images/animals/animal_7714c0.jpg", alt: "Animal — watercolour illustration", title: "Wildlife II" },
    { src: "/temesiart/images/illustrations/01_vaddiszno_Temesi_600.jpg", alt: "Wild boar — nature illustration", title: "Wild Boar" },
    { src: "/temesiart/images/illustrations/03_borz_Temesi_600.jpg", alt: "Badger — nature illustration", title: "Badger" },
    { src: "/temesiart/images/illustrations/04_szarvas_Temesi_600.jpg", alt: "Deer — nature illustration", title: "Deer" },
    { src: "/temesiart/images/illustrations/08_golya_Temesi_600.jpg", alt: "Stork — nature illustration", title: "Stork" },
    { src: "/temesiart/images/illustrations/09_vadkacsa_Temesi_600.jpg", alt: "Mallard — nature illustration", title: "Mallard" },
    { src: "/temesiart/images/illustrations/10_vidra_Temesi_600.jpg", alt: "Otter — nature illustration", title: "Otter" },
    { src: "/temesiart/images/illustrations/11_uregi_nyul_Temesi_600.jpg", alt: "Rabbit — nature illustration", title: "Rabbit" },
    { src: "/temesiart/images/illustrations/12_mokus_Temesi_600.jpg", alt: "Squirrel — nature illustration", title: "Squirrel" },
    { src: "/temesiart/images/illustrations/13_sun_Temesi_600.jpg", alt: "Hedgehog — nature illustration", title: "Hedgehog II" },
    { src: "/temesiart/images/illustrations/14_aranysakal_Temesi_600.jpg", alt: "Golden jackal — nature illustration", title: "Golden Jackal" },
    { src: "/temesiart/images/illustrations/15_gyik_Temesi_600.jpg", alt: "Lizard — nature illustration", title: "Lizard" },
    { src: "/temesiart/images/illustrations/16_vipera_Temesi_600.jpg", alt: "Viper — nature illustration", title: "Viper" },
    { src: "/temesiart/images/illustrations/roka.jpg", alt: "Fox — nature illustration", title: "Fox" },
    { src: "/temesiart/images/illustrations/zsiraf1.jpg", alt: "Giraffe — nature illustration", title: "Giraffe" },
  ],
};
