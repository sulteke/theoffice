/**
 * ============================================================================
 *  KAZAKH UI TEXT (kk) — second language.
 * ============================================================================
 *  Same keys as ru.ts. If you add a key to ru.ts you must add it here too,
 *  otherwise TypeScript will show an error during `npm run build`.
 *
 *  NOTE: Lines marked "// TODO: verify KZ" are best-effort translations —
 *  please have a native Kazakh speaker double-check the wording before launch.
 * ============================================================================
 */
import { ru } from './ru';

export const kk: Record<keyof typeof ru, string> = {
  /* ---- Accessibility ---- */
  'a11y.skip': 'Мазмұнға өту',
  'a11y.menuOpen': 'Мәзірді ашу',
  'a11y.menuClose': 'Мәзірді жабу',
  'a11y.toTop': 'Жоғарыға',

  /* ---- Navigation ---- */
  'nav.home': 'Басты бет',
  'nav.about': 'Біз туралы',
  'nav.menu': 'Мәзір',
  'nav.events': 'Афиша',
  'nav.gallery': 'Галерея',
  'nav.contacts': 'Байланыс',

  /* ---- Calls to action (buttons) ---- */
  'cta.reserve': 'Үстел брондау',
  'cta.reserveShort': 'Брондау',
  'cta.viewMenu': 'Мәзірді қарау',
  'cta.call': 'Қоңырау шалу',
  'cta.whatsapp': 'WhatsApp-қа жазу',
  'cta.directions': 'Бағыт салу',

  /* ---- Language switcher ---- */
  'lang.switch': 'Тілді ауыстыру',
  'lang.ru': 'RU',
  'lang.kk': 'KZ',

  /* ---- HERO ---- */
  'hero.subtitle':
    'Еуропалық тағамдар, кальян, авторлық бар және демалыс күндері тірі музыка',
  'hero.scroll': 'Төмен қарай жылжыңыз',

  /* ---- ABOUT / CONCEPT ---- */
  'about.kicker': 'Біз туралы',
  'about.title': 'Жай бар емес — нағыз атмосфера',
  // TODO: verify KZ
  'about.body':
    'THE OFFICE — Талдықорған орталығындағы лаунж-бар әрі еуропалық ас үй мейрамханасы. Жайлы жарық, авторлық коктейльдер, хош иісті кальян және демалыс күндеріндегі тірі музыка кешті ұзартқың келгендей етеді. Кішігірім мерекелерді толық ұйымдастырып, безендіреміз — туған күннен шағын кешке дейін.',
  // TODO: verify KZ (office-humor line)
  'about.humor':
    '«Жиналыс» коктейльмен аяқталатын жалғыз кеңсе, мұнда бастық — бұл сіз.',
  'about.feature.cuisine.title': 'Еуропалық ас үй',
  'about.feature.cuisine.desc':
    'Стейк, паста, салаттар мен ыстық тағамдар — балғын әрі дәмді.',
  'about.feature.hookah.title': 'Кальян',
  'about.feature.hookah.desc':
    'Дәмдердің бай картасы және мінсіз микс таңдап беретін шеберлер.',
  'about.feature.music.title': 'Тірі музыка',
  'about.feature.music.desc':
    'Вокалистер, гитаристер және топтар әр демалыс сайын — қазақша кештерді қоса.',
  // TODO: verify KZ
  'about.feature.parties.title': 'Мерекелерді ұйымдастыру',
  'about.feature.parties.desc':
    'Тойыңызды ұйымдастырып, безендіреміз — сізге тек демалу қалады.',

  /* ---- MENU ---- */
  'menu.kicker': 'Мәзір',
  'menu.title': 'Ас үй мен бар',
  'menu.intro':
    'Салаттар мен стейктерден авторлық коктейльдер мен лимонадтарға дейін. Барлық баға теңгемен (₸) көрсетілген.',
  'menu.jumpTo': 'Бөлімге өту',
  'menu.openPage': 'Мәзірді бөлек бетте ашу',
  'menu.priceNote': 'Бағалар теңгемен (₸) көрсетілген және өзгеруі мүмкін.',
  'menu.lemonadeNote': 'Көлемі: 1,8 л / 1 л',
  'menu.dualPriceNote': 'Екі көлем: үлкен / кіші',

  /* ---- EVENTS & LIVE MUSIC ---- */
  'events.kicker': 'Афиша',
  'events.title': 'Тірі музыка және мерекелер',
  // TODO: verify KZ
  'events.intro':
    'Әр демалыс сайын — тірі қойылымдар, ал мерекелеріңізді біз ұйымдастырамыз: безендіру, музыка және көңіл-күй.',
  'events.live.title': 'Тірі қойылымдар',
  'events.live.desc':
    'Вокалистер, гитаристер және топтар (Ruhanyat Band қоса) мен қазақша музыкалық кештер әр жұма мен сенбіде.',
  'events.private.title': 'Жеке мерекелер',
  'events.private.desc':
    'Туған күндер, корпоративтер және шағын кештер. Залды безендіреміз, мәзір дайындап, көңіл-күй сыйлаймыз.',
  'events.upcoming': 'Жақын арадағы іс-шаралар',
  'events.performer': 'Орындаушы',
  'events.none':
    'Жаңа күндерді жақында жариялаймыз — бізді Instagram-да бақылап жүріңіз.',
  'events.bookParty': 'Мереке брондау',

  /* ---- GALLERY ---- */
  'gallery.kicker': 'Галерея',
  'gallery.title': 'THE OFFICE атмосферасы',
  'gallery.intro':
    'Интерьер, тағамдар, тірі музыка және мерекелер. Ішке көз салыңыз — өзіңіз келгіңіз келеді.',
  'gallery.open': 'Суретті ашу',
  'gallery.close': 'Жабу',
  'gallery.prev': 'Алдыңғы',
  'gallery.next': 'Келесі',

  /* ---- RESERVATION ---- */
  'reserve.kicker': 'Брондау',
  'reserve.title': 'Үстел брондау',
  'reserve.intro':
    'Өтінім қалдырыңыз — растау үшін сізбен хабарласамыз. Бронь қызметкер арқылы WhatsApp немесе телефон арқылы расталады.',
  'reserve.form.name': 'Аты',
  'reserve.form.namePlaceholder': 'Атыңыз',
  'reserve.form.phone': 'Телефон',
  'reserve.form.phonePlaceholder': '+7 7XX XXX XX XX',
  'reserve.form.date': 'Күні',
  'reserve.form.time': 'Уақыты',
  'reserve.form.guests': 'Қонақтар саны',
  'reserve.form.notes': 'Тілектер',
  'reserve.form.notesOptional': 'міндетті емес',
  'reserve.form.notesPlaceholder': 'Мысалы: терезе жанындағы үстел, кальян, торт…',
  'reserve.form.submit': 'WhatsApp арқылы жіберу',
  'reserve.form.sending': 'WhatsApp ашылуда…',
  'reserve.success':
    'Рахмет! Өтініміңізбен WhatsApp аштық — хабарламаны жіберіңіз, біз броньды растаймыз.',
  'reserve.orCall': 'немесе бізге қоңырау шалыңыз',
  'reserve.confirmNote':
    'Бронь қызметкер жауап бергеннен кейін ғана расталған болып саналады.',
  'reserve.noscript':
    'Форманы толтырып, «Жіберу» түймесін басыңыз — өтінім поштамызға келеді.',
  // Keep the { } placeholders — they are filled with what the visitor typed.
  'reserve.waTemplate':
    'Сәлеметсіз бе! THE OFFICE-те үстел брондағым келеді.\nАты: {name}\nТелефон: {phone}\nКүні: {date}\nУақыты: {time}\nҚонақтар: {guests}\nТілектер: {notes}',
  'reserve.noteEmpty': '—',

  /* ---- CONTACT + MAP ---- */
  'contact.kicker': 'Байланыс',
  'contact.title': 'Бізді қалай табуға болады',
  'contact.addressLabel': 'Мекенжай',
  'contact.hoursLabel': 'Жұмыс уақыты',
  'contact.phoneLabel': 'Телефон',
  'contact.followLabel': 'Instagram-да',
  'contact.mapTitle': 'THE OFFICE орналасқан жердің картасы',

  /* ---- FOOTER ---- */
  // TODO: verify KZ
  'footer.nav': 'Шарлау',
  'footer.contacts': 'Байланыс',
  'footer.follow': 'Әлеуметтік желілер',
  'footer.rights': 'Барлық құқықтар қорғалған.',
  'footer.humor':
    'THE OFFICE — жұмыстан кейін оралғың келетін жалғыз кеңсе.',

  /* ---- Floating / general WhatsApp messages ---- */
  'wa.general': 'Сәлеметсіз бе! THE OFFICE сайтынан жазып отырмын.',
  'wa.party':
    'Сәлеметсіз бе! THE OFFICE-те мереке ұйымдастыру туралы білгім келеді.',

  /* ---- About: extra amenities (TV/football + board games) ---- */
  // TODO: verify KZ
  'about.feature.tv.title': 'Спорт ТВ-да',
  'about.feature.tv.desc':
    'Футбол мен спорт трансляциялары үшін үлкен экран — кез келген уақытта қосамыз.',
  'about.feature.games.title': 'Үстел ойындары',
  'about.feature.games.desc':
    'Достар компаниясына арналған үстел ойындары — кешті көңілді өткізіңіз.',

  /* ---- Hookah ---- */
  'hookah.kicker': 'Кальян',
  'hookah.title': 'Кальян-микс',
  'hookah.intro':
    'Шеберлеріміздің авторлық микстері. Кез келген микс — 7000 ₸.',
  'hookah.priceLabel': 'Кез келген дәм',
  'hookah.flavorsNote': 'Таңдауыңызға 4 фирмалық микс',
  'hookah.imageAlt': 'THE OFFICE-тегі кальян',

  /* ---- Cart / pre-order ---- */
  'cart.open': 'Себетті ашу',
  'cart.title': 'Себет',
  'cart.empty': 'Себет бос. Мәзірден «+» арқылы тағам қосыңыз.',
  'cart.total': 'Барлығы',
  'cart.checkout': 'WhatsApp арқылы алдын ала тапсырыс',
  'cart.clear': 'Тазалау',
  'cart.remove': 'Жою',
  'cart.add': 'Себетке',
  'cart.added': 'Себетке қосылды',
  'cart.note': 'Алдын ала тапсырыс қызметкермен расталады. Бұл төлем емес.',
  'cart.waHello': 'Сәлеметсіз бе! THE OFFICE-те алдын ала тапсырыс бергім келеді:',

  /* ---- Reservation: attach order from cart ---- */
  'reserve.attachOrder': 'Себеттегі тапсырысымды қосу',
  'reserve.orderTitle': 'Менің тапсырысым',

  /* ---- SEO (page titles & descriptions) ---- */
  'seo.home.title': 'THE OFFICE Lounge Bar — Талдықорғандағы лаунж-бар',
  'seo.home.desc':
    'Талдықорғандағы еуропалық ас үй, кальян, авторлық бар және демалыс күндері тірі музыка. Жансүгіров 35. Үстел брондау, мерекелерді ұйымдастыру. Күн сайын 12:00–02:00.',
  'seo.menu.title': 'Мәзір — THE OFFICE Lounge Bar, Талдықорған',
  'seo.menu.desc':
    'THE OFFICE толық мәзірі: салаттар, сорпалар, паста, стейктер, пицца, бар және лимонадтар. Бағалар теңгемен. Жансүгіров 35, Талдықорған.',
};
