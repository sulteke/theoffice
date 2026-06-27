/**
 * ============================================================================
 *  MENU DATA — EDIT ALL DISHES & PRICES HERE, IN ONE PLACE.
 * ============================================================================
 *  The whole on-page menu is generated from this file. To change a price,
 *  edit the number in quotes. To add a dish, copy a line like
 *      { name: 'Название', price: '1990' },
 *  and paste it where you want inside the right category's `items: [ ... ]`.
 *
 *  PRICE FORMAT (always keep the quotes):
 *    '2590'        -> shows "2590 ₸"
 *    '2430/1890'   -> two sizes, shows "2430 / 1890 ₸"
 *    '—'           -> price hidden (e.g. seasonal shot sets)
 *
 *  Dish NAMES stay in Russian in both languages (as on the printed menu).
 *  Category TITLES are translated (ru + kk).
 * ============================================================================
 */
import type { TranslationKey } from '../i18n/utils';

export interface MenuItem {
  /** Dish name (Russian, shown in both languages). */
  name: string;
  /** Price string — see PRICE FORMAT above. */
  price: string;
}

export interface MenuCategory {
  /** URL anchor / id used by the sticky category nav (letters & dashes only). */
  id: string;
  /** Category title per language. */
  title: { ru: string; kk: string };
  /** Optional small note under the title (references an i18n key). */
  noteKey?: TranslationKey;
  items: MenuItem[];
}

/** Turn a stored price string into a display string with the ₸ symbol. */
export function formatPrice(price: string): string {
  if (!price || price.trim() === '—') return '—';
  if (price.includes('/')) {
    return (
      price
        .split('/')
        .map((p) => p.trim())
        .join(' / ') + ' ₸'
    );
  }
  return `${price.trim()} ₸`;
}

export const menu: MenuCategory[] = [
  {
    id: 'salads',
    title: { ru: 'Салаты', kk: 'Салаттар' },
    items: [
      { name: 'Салат с рукколой и креветками', price: '2590' },
      { name: 'Руккола со свеклой и апельсином', price: '2290' },
      { name: 'Греческий', price: '2290' },
      { name: 'Цезарь с курицей', price: '2490' },
      { name: 'Цезарь с креветками', price: '2990' },
      { name: 'Малибу', price: '2290' },
      { name: 'Свежий салат', price: '1490' },
      { name: 'Ачучук', price: '1290' },
      { name: 'Хрустящие баклажаны', price: '2490' },
    ],
  },
  {
    id: 'soups',
    title: { ru: 'Супы', kk: 'Сорпалар' }, // TODO: verify KZ
    items: [
      { name: 'Рамен с говядиной', price: '2190' },
      { name: 'Рамен с курицей', price: '1990' },
      { name: 'Лапша по-домашнему', price: '1890' },
      { name: 'Том-ям', price: '3190' },
      { name: 'Шорпа из говядины', price: '2590' },
      { name: 'Солянка', price: '1990' },
      { name: 'Пельмени', price: '1790' },
    ],
  },
  {
    id: 'pastas',
    title: { ru: 'Пасты', kk: 'Паста' },
    items: [
      { name: 'Фетучини с курицей и грибами', price: '2590' },
      { name: 'Фетучини с семгой', price: '3090' },
      { name: 'Фетучини с креветками и песто', price: '3090' },
    ],
  },
  {
    id: 'mains',
    title: { ru: 'Вторые блюда', kk: 'Негізгі тағамдар' },
    items: [
      { name: 'Каре ягненка с фирменным соусом', price: '5590' },
      { name: 'Говяжье ребро', price: '3590' },
      { name: 'Сирне', price: '4090' },
      { name: 'Тай куырдак', price: '5190' },
      { name: 'Колбаски гриль', price: '3590' },
      { name: 'Мясо по-тайски', price: '2990' },
      { name: 'Фри с мясом', price: '2790' },
      { name: 'Фрикасе с курицей', price: '2590' },
      { name: 'Котлеты из говядины', price: '2590' },
      { name: 'Котлеты из курицы', price: '2590' },
      { name: 'Котлеты в сливочном соусе', price: '2790' },
      { name: 'Бифстроганов', price: '2990' },
    ],
  },
  {
    id: 'steaks',
    title: { ru: 'Стейки', kk: 'Стейктер' },
    items: [
      { name: 'Стейк рибай', price: '6190' },
      { name: 'Стейк тибон', price: '6190' },
      { name: 'Стейк из семги', price: '6590' },
    ],
  },
  {
    id: 'pizza',
    title: { ru: 'Пицца', kk: 'Пицца' },
    items: [
      { name: 'Маргарита', price: '2290' },
      { name: 'Пепперони', price: '2690' },
      { name: 'Цезарь', price: '3090' },
      { name: 'С курицей и грибами', price: '3190' },
      { name: '4 сезона', price: '2990' },
      { name: '4 сыра', price: '3190' },
    ],
  },
  {
    id: 'hot-appetizers',
    title: { ru: 'Горячие закуски', kk: 'Ыстық тіскебасарлар' }, // TODO: verify KZ
    items: [
      { name: 'Хычины с брынзой', price: '1790' },
      { name: 'Хычины с брынзой и зеленью', price: '1790' },
      { name: 'Хачапури по-аджарски', price: '2590' },
      { name: 'Пиде с говядиной', price: '2990' },
      { name: 'Чебуреки', price: '1790' },
      { name: 'Наггетсы', price: '1690' },
      { name: 'Сырные палочки', price: '1890' },
      { name: 'Чесночные гренки', price: '1290' },
      { name: 'Шоти-пури', price: '890' },
    ],
  },
  {
    id: 'sides',
    title: { ru: 'Гарниры', kk: 'Гарнирлер' }, // TODO: verify KZ
    items: [
      { name: 'Фри', price: '890' },
      { name: 'Дольки', price: '990' },
      { name: 'Пюре', price: '790' },
      { name: 'Рис', price: '790' },
    ],
  },
  {
    id: 'sauces',
    title: { ru: 'Соусы', kk: 'Тұздықтар' },
    items: [
      { name: 'Сырный', price: '390' },
      { name: 'Кетчуп', price: '390' },
      { name: 'Барбекю', price: '390' },
      { name: 'Тар-тар', price: '390' },
      { name: 'Чесночный', price: '390' },
      { name: 'Лепешка', price: '290' },
      { name: 'Баурсаки', price: '990' },
    ],
  },
  {
    id: 'lemonades',
    title: { ru: 'Лимонады', kk: 'Лимонадтар' },
    noteKey: 'menu.lemonadeNote',
    items: [
      { name: 'Манго-маракуйя', price: '2430/1890' },
      { name: 'Киви-яблоко', price: '2430/1890' },
      { name: 'Киви-маракуйя', price: '2430/1890' },
      { name: 'Цитрусовый', price: '2430/1890' },
      { name: 'Лесные ягоды', price: '2430/1890' },
      { name: 'Мохито', price: '2430/1890' },
      { name: 'Клубника-мохито', price: '2430/1890' },
      { name: 'Арбуз-дыня', price: '2430/1890' },
    ],
  },
  {
    id: 'tea',
    title: { ru: 'Чай', kk: 'Шай' },
    items: [
      { name: 'Черный листовой', price: '990' },
      { name: 'Зеленый листовой', price: '990' },
      { name: 'Облепиховый', price: '1690' },
      { name: 'Ташкентский', price: '1690' },
      { name: 'Ягодный', price: '1690' },
      { name: 'Марокканский', price: '1690' },
    ],
  },
  {
    id: 'soft-drinks',
    title: { ru: 'Напитки', kk: 'Сусындар' },
    noteKey: 'menu.dualPriceNote',
    items: [
      { name: 'Pepsi', price: '1490/890' },
      { name: 'Coca-Cola / Fanta / Sprite', price: '1490/890' },
      { name: 'Borjomi', price: '1690' },
      { name: 'Red Bull 0.25', price: '1790' },
      { name: 'Соки в ассортименте', price: '2290' },
      { name: 'Вода без газа', price: '890' },
    ],
  },
  {
    id: 'bottled-beer',
    title: { ru: 'Пиво бутылочное', kk: 'Бөтелкедегі сыра' },
    items: [
      { name: 'Corona Extra', price: '2990' },
      { name: 'Miller', price: '1490' },
      { name: 'Blanc', price: '1790' },
      { name: 'Carlsberg', price: '1690' },
    ],
  },
  {
    id: 'draft-beer',
    title: { ru: 'Пиво разливное', kk: 'Құйма сыра' },
    items: [
      { name: 'Прага', price: '990' },
      { name: 'Немецкое', price: '1290' },
    ],
  },
  {
    id: 'beer-snacks',
    title: { ru: 'К пиву', kk: 'Сыраға тіскебасар' }, // TODO: verify KZ
    items: [
      { name: 'Чечел', price: '1590' },
      { name: 'Чипсы', price: '1790' },
      { name: 'Фисташки', price: '1890' },
      { name: 'Арахис', price: '1190' },
      { name: 'Курт', price: '1190' },
      { name: 'Пивные креветки', price: '3490' },
      { name: 'Пивной сет', price: '7390' },
    ],
  },
  {
    id: 'whiskey',
    title: { ru: 'Виски', kk: 'Виски' },
    items: [
      { name: 'Jameson', price: '2790' },
      { name: 'Chivas', price: '3890' },
      { name: "William Lawson's", price: '1790' },
      { name: "Ballantine's", price: '1990' },
      { name: "Jack Daniel's", price: '3190' },
    ],
  },
  {
    id: 'cognac',
    title: { ru: 'Коньяк', kk: 'Коньяк' },
    items: [
      { name: 'Казахстанский 3-звездочный', price: '1390' },
      { name: 'Казахстанский 5-звездочный', price: '1690' },
    ],
  },
  {
    id: 'cocktails',
    title: { ru: 'Алкогольные коктейли', kk: 'Алкогольді коктейльдер' },
    items: [
      { name: 'Long Island', price: '3390' },
      { name: 'Мохито', price: '2490' },
      { name: 'Апероль Шприц', price: '3390' },
      { name: 'Виски сауэр', price: '3390' },
      { name: 'Поворот не туда', price: '4290' },
    ],
  },
  {
    id: 'shot-sets',
    title: { ru: 'Сет шотов', kk: 'Шот сеттері' },
    items: [
      { name: 'Вий (6шт)', price: '4890' },
      { name: '5 элемент (6шт)', price: '7290' },
      { name: 'Мальдивы (8шт)', price: '—' },
      { name: 'Веселый мексиканец (6шт)', price: '—' },
      { name: 'Фирменный В/М (6шт)', price: '7790' },
      { name: 'Малиновый закат (8шт)', price: '4690' },
    ],
  },
];
