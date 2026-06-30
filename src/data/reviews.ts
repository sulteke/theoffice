/**
 * ============================================================================
 *  GUEST REVIEWS / ОТЗЫВЫ — shown at the bottom of the page.
 * ============================================================================
 *  These are SAMPLE reviews — replace them with real ones from 2GIS / Instagram
 *  / Google. Review text is kept in the language the guest wrote it (usually
 *  Russian), so it shows the same in both languages.
 *
 *  rating: 1–5 (number of gold stars). source: where it's from (optional).
 * ============================================================================
 */
export interface Review {
  author: string;
  text: string;
  rating: number;
  source?: string;
}

export const reviews: Review[] = [
  {
    author: 'Айгерим',
    text: 'Уютная атмосфера и очень вкусная кухня. Отмечали день рождения — всё на высшем уровне, спасибо за праздник!',
    rating: 5,
    source: '2ГИС',
  },
  {
    author: 'Данияр',
    text: 'Лучший кальян в городе и отличный сервис. Приятный интерьер, будем приходить ещё.',
    rating: 5,
    source: 'Instagram',
  },
  {
    author: 'Жанна',
    text: 'Заказывали корпоратив — украсили зал, всё организовали под ключ. Гости остались в восторге.',
    rating: 5,
    source: '2ГИС',
  },
  {
    author: 'Ерлан',
    text: 'Стейки супер, коктейли тоже на уровне. Тихо, красиво, вкусно. Рекомендую.',
    rating: 5,
    source: 'Google',
  },
  {
    author: 'Мадина',
    text: 'Любимое место для встреч с друзьями. Всегда вкусно и атмосферно.',
    rating: 5,
    source: '2ГИС',
  },
  {
    author: 'Бекзат',
    text: 'Провели здесь вечеринку — организация на пять. Музыка, кальян, кухня — всё супер.',
    rating: 5,
    source: 'Instagram',
  },
];
