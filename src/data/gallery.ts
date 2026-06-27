/**
 * ============================================================================
 *  GALLERY IMAGES — edit captions / alt text here; replace the photo FILES in
 *  src/assets/images/ (same filenames). See ASSETS_TODO.md.
 * ============================================================================
 *  Each item: the imported image + alt text per language (good for SEO &
 *  screen readers). To add a photo: drop it in src/assets/images/, import it
 *  at the top, and add an entry to the `gallery` array.
 * ============================================================================
 */
import type { ImageMetadata } from 'astro';

import g01 from '../assets/images/gallery-01.jpg';
import g02 from '../assets/images/gallery-02.jpg';
import g03 from '../assets/images/gallery-03.jpg';
import g04 from '../assets/images/gallery-04.jpg';
import g05 from '../assets/images/gallery-05.jpg';
import g06 from '../assets/images/gallery-06.jpg';
import g07 from '../assets/images/gallery-07.jpg';
import g08 from '../assets/images/gallery-08.jpg';
import g09 from '../assets/images/gallery-09.jpg';
import g10 from '../assets/images/gallery-10.jpg';

export interface GalleryImage {
  src: ImageMetadata;
  alt: { ru: string; kk: string };
}

export const gallery: GalleryImage[] = [
  { src: g01, alt: { ru: 'Уютный интерьер лаунж-бара THE OFFICE', kk: 'THE OFFICE лаунж-барының жайлы интерьері' } },
  { src: g02, alt: { ru: 'Блюда европейской кухни', kk: 'Еуропалық ас үй тағамдары' } },
  { src: g03, alt: { ru: 'Авторские коктейли бара', kk: 'Бардың авторлық коктейльдері' } },
  { src: g04, alt: { ru: 'Живая музыка на сцене', kk: 'Сахнадағы тірі музыка' } },
  { src: g05, alt: { ru: 'Кальян в THE OFFICE', kk: 'THE OFFICE-тегі кальян' } },
  { src: g06, alt: { ru: 'Сочный стейк от шефа', kk: 'Шеф-аспаздың шырынды стейкі' } },
  { src: g07, alt: { ru: 'Оформление частного праздника', kk: 'Жеке мерекенің безендірілуі' } },
  { src: g08, alt: { ru: 'Вход и вечерний фасад', kk: 'Кіреберіс және кешкі қасбет' } },
  { src: g09, alt: { ru: 'Десерт к кофе', kk: 'Кофеге арналған десерт' } },
  { src: g10, alt: { ru: 'Барная стойка с напитками', kk: 'Сусындары бар бар сөресі' } },
];
