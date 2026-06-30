/**
 * ============================================================================
 *  HOOKAH (КАЛЬЯН) — edit the price, the mixes, and the photo here.
 * ============================================================================
 *  All mixes are the same price (HOOKAH_PRICE). To change it, edit the number.
 *  To rename a mix, edit the text. The photo is src/assets/images/hookah.jpg
 *  (replace that file with a real photo — see ASSETS_TODO.md).
 * ============================================================================
 */
import type { ImageMetadata } from 'astro';
import hookahImg from '../assets/images/hookah.jpg';

/** One flat price for every hookah mix (in tenge, as a plain number string). */
export const HOOKAH_PRICE = '7000';

export interface HookahMix {
  name: { ru: string; kk: string };
}

/** The 4 signature mixes — all priced at HOOKAH_PRICE. Rename freely. */
export const hookahMixes: HookahMix[] = [
  { name: { ru: 'Фруктовый микс', kk: 'Жеміс микс' } }, // TODO: verify KZ
  { name: { ru: 'Ягодный микс', kk: 'Жидек микс' } }, // TODO: verify KZ
  { name: { ru: 'Цитрусовый микс', kk: 'Цитрус микс' } }, // TODO: verify KZ
  { name: { ru: 'Десертный микс', kk: 'Десерт микс' } }, // TODO: verify KZ
];

export const hookahImage: ImageMetadata = hookahImg;
