/**
 * ============================================================================
 *  i18n HELPERS — language detection, translation, and locale-aware links.
 * ============================================================================
 *  You normally do NOT need to edit this file. Text lives in ru.ts / kk.ts.
 * ============================================================================
 */
import { ru } from './ru';
import { kk } from './kk';

/** The languages the site supports + the label shown in the toggle. */
export const languages = { ru: 'RU', kk: 'KZ' } as const;

/** Russian is the default / primary language. */
export const defaultLang = 'ru' as const;

/** A union type: 'ru' | 'kk'. */
export type Lang = keyof typeof languages;

/** Every translatable key (derived from the Russian dictionary). */
export type TranslationKey = keyof typeof ru;

const dictionaries = { ru, kk } as const;

/**
 * Detect the language from a URL, e.g. /kk/menu -> 'kk'.
 * Falls back to the default language for unknown/missing prefixes.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang === 'ru' || maybeLang === 'kk') return maybeLang;
  return defaultLang;
}

/**
 * Returns a typed translator `t('some.key')` for the given language.
 * If a key is somehow missing in the chosen language it falls back to Russian.
 */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return dictionaries[lang][key] ?? ru[key];
  };
}

/**
 * The current path WITHOUT the language prefix.
 * e.g. /kk/menu -> /menu ; /ru/ -> / ; /ru -> /
 */
export function getPathWithoutLang(url: URL): string {
  const stripped = url.pathname.replace(/^\/(ru|kk)/, '');
  return stripped === '' ? '/' : stripped;
}

/**
 * The SAME page in another language (used by the RU/KZ toggle).
 * e.g. localizedPath(url('/ru/menu'), 'kk') -> '/kk/menu'
 */
export function localizedPath(url: URL, targetLang: Lang): string {
  const rest = getPathWithoutLang(url);
  return rest === '/' ? `/${targetLang}/` : `/${targetLang}${rest}`;
}

/**
 * Build a localized href from a sub-path.
 * e.g. localeHref('ru')         -> '/ru/'
 *      localeHref('kk', '/menu') -> '/kk/menu'
 *      localeHref('ru', '#menu') -> '/ru/#menu'   (home-page anchor)
 */
export function localeHref(lang: Lang, path = '/'): string {
  if (path === '/' || path === '') return `/${lang}/`;
  if (path.startsWith('#')) return `/${lang}/${path}`;
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}
