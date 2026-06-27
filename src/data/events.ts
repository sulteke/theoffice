/**
 * ============================================================================
 *  EVENTS / AFISHA — EDIT UPCOMING LIVE MUSIC & PARTIES HERE.
 * ============================================================================
 *  Add or change events in the `events` list below. Past events (before today)
 *  hide themselves automatically when the site is rebuilt.
 *
 *  date      : 'YYYY-MM-DD' (year-month-day), e.g. '2026-07-04'
 *  title     : event name, per language { ru, kk }
 *  performer : artist / band name (kept as-is in both languages)
 *  note      : short detail, per language { ru, kk }  (optional, use '' if none)
 * ============================================================================
 */
import type { Lang } from '../i18n/utils';

export interface EventItem {
  date: string; // 'YYYY-MM-DD'
  title: { ru: string; kk: string };
  performer: string;
  note: { ru: string; kk: string };
}

export const events: EventItem[] = [
  {
    date: '2026-07-03',
    title: { ru: 'Живой концерт', kk: 'Тірі концерт' },
    performer: 'Ruhanyat Band',
    note: {
      ru: 'Любимые хиты вживую. Старт в 21:00.',
      kk: 'Сүйікті хиттер тікелей эфирде. Басталуы 21:00.', // TODO: verify KZ
    },
  },
  {
    date: '2026-07-04',
    title: { ru: 'Қазақша кеш — живая музыка', kk: 'Қазақша кеш — тірі музыка' },
    performer: 'Live session',
    note: {
      ru: 'Вечер казахской музыки и душевных песен. Старт в 21:00.',
      kk: 'Қазақ музыкасы мен жүрекжарды әндер кеші. Басталуы 21:00.',
    },
  },
  {
    date: '2026-07-10',
    title: { ru: 'Акустический вечер', kk: 'Акустикалық кеш' },
    performer: 'Гитара & вокал',
    note: {
      ru: 'Уютная акустика под кальян и коктейли. Старт в 21:00.',
      kk: 'Кальян мен коктейльге арналған жайлы акустика. Басталуы 21:00.', // TODO: verify KZ
    },
  },
  {
    date: '2026-07-11',
    title: { ru: 'Subbота: живая музыка', kk: 'Сенбі: тірі музыка' },
    performer: 'Resident band',
    note: {
      ru: 'Главный вечер недели. Бронируйте столик заранее.',
      kk: 'Аптаның басты кеші. Үстелді алдын ала брондаңыз.',
    },
  },
];

/* -------------------------------------------------------------------------- */
/*  Date formatting helpers (no need to edit).                                */
/* -------------------------------------------------------------------------- */

const MONTHS: Record<Lang, string[]> = {
  ru: [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ],
  kk: [
    'қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым',
    'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан',
  ],
};

const WEEKDAYS: Record<Lang, string[]> = {
  ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  kk: ['Жс', 'Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сб'],
};

/** Format '2026-07-04' -> 'Сб · 4 июля' (ru) / 'Сб · 4 шілде' (kk). */
export function formatEventDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  const weekday = WEEKDAYS[lang][date.getDay()];
  const month = MONTHS[lang][m - 1];
  return `${weekday} · ${d} ${month}`;
}

/** Day number for the calendar "chip" (e.g. 4). */
export function eventDay(iso: string): number {
  return Number(iso.split('-')[2]);
}

/** Short month for the calendar "chip" (first 3 letters of the month). */
export function eventMonthShort(iso: string, lang: Lang): string {
  const m = Number(iso.split('-')[1]);
  return MONTHS[lang][m - 1].slice(0, 3);
}

/** Upcoming events only (today or later), soonest first. */
export function getUpcomingEvents(): EventItem[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => {
      const [y, m, d] = e.date.split('-').map(Number);
      return new Date(y, m - 1, d) >= today;
    })
    .sort((a, b) => (a.date < b.date ? -1 : 1));
}
