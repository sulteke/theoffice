/**
 * ============================================================================
 *  CELEBRATIONS SLIDESHOW — photos of parties/events YOU hosted.
 * ============================================================================
 *  These show in the "Праздники" section as a rotating slideshow, so visitors
 *  see "they really do host celebrations here".
 *
 *  TO REPLACE: drop your real party photos over the files in
 *  src/assets/images/event-01.jpg … event-04.jpg (same names), and edit the
 *  caption text below. Add more by importing another image and adding a line.
 *  Recommended size: 1200 × 900 (landscape).
 * ============================================================================
 */
import type { ImageMetadata } from 'astro';
import c1 from '../assets/images/event-01.jpg';
import c2 from '../assets/images/event-02.jpg';
import c3 from '../assets/images/event-03.jpg';
import c4 from '../assets/images/event-04.jpg';

export interface Celebration {
  src: ImageMetadata;
  /** Short caption shown over the photo, per language. */
  caption: { ru: string; kk: string };
}

export const celebrations: Celebration[] = [
  { src: c1, caption: { ru: 'Юбилей', kk: 'Мерейтой' } },
  { src: c2, caption: { ru: 'День рождения', kk: 'Туған күн' } },
  { src: c3, caption: { ru: 'Корпоратив', kk: 'Корпоратив' } },
  { src: c4, caption: { ru: 'Вечеринка', kk: 'Кеш' } },
];
