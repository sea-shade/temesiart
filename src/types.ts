export type Lang = 'en' | 'hu';

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export interface PriceTier {
  label: string;
  huf: string;
  eur: string;
}

export interface NavTranslations {
  portraits: string;
  fineArt: string;
  videoGames: string;
  bookCovers: string;
  caricatureIllustration: string;
  about: string;
  contact: string;
}

export interface HeroTranslations {
  name: string;
  tagline: string;
  sub: string;
}

export interface SectionTranslation {
  title: string;
  description: string;
  prices?: PriceTier[];
}

export interface IllustrationSubcats {
  all: string;
  children: string;
  historical: string;
  cartoon: string;
  nature: string;
}

export interface SectionsTranslations {
  portraits: SectionTranslation;
  fineArt: SectionTranslation;
  videoGames: SectionTranslation;
  bookCovers: SectionTranslation;
  caricatureIllustration: SectionTranslation;
  illustrationSubcats: IllustrationSubcats;
}

export interface AboutTranslations {
  title: string;
  body: string;
  education: string;
  educationItems: string[];
  exhibitions: string;
  exhibitionItems: string[];
}

export interface ContactTranslations {
  title: string;
  location: string;
  email: string;
  availability: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  sections: SectionsTranslations;
  about: AboutTranslations;
  contact: ContactTranslations;
}

export interface GalleryData {
  portraits: GalleryImage[];
  fineArt: GalleryImage[];
  videoGames: GalleryImage[];
  bookCovers: GalleryImage[];
  illustrationChildren: GalleryImage[];
  illustrationHistorical: GalleryImage[];
  illustrationCartoon: GalleryImage[];
  illustrationNature: GalleryImage[];
}
