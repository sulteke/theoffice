/**
 * Main navigation links. They point to anchored sections on the home page,
 * so they work from any page (e.g. the /menu sub-page jumps back home).
 * To rename a link, edit its label in src/i18n/ru.ts & kk.ts (the labelKey).
 */
import type { Lang, TranslationKey } from '../i18n/utils';
import { localeHref } from '../i18n/utils';

export interface NavLink {
  href: string;
  labelKey: TranslationKey;
  /** The on-page anchor id (used to highlight the active section). */
  anchor?: string;
}

export function getNavLinks(lang: Lang): NavLink[] {
  return [
    { href: localeHref(lang, '/'), labelKey: 'nav.home' },
    { href: localeHref(lang, '#about'), labelKey: 'nav.about', anchor: 'about' },
    { href: localeHref(lang, '#menu'), labelKey: 'nav.menu', anchor: 'menu' },
    { href: localeHref(lang, '#events'), labelKey: 'nav.events', anchor: 'events' },
    { href: localeHref(lang, '#gallery'), labelKey: 'nav.gallery', anchor: 'gallery' },
    { href: localeHref(lang, '#contacts'), labelKey: 'nav.contacts', anchor: 'contacts' },
  ];
}
