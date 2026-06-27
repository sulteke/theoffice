/**
 * ============================================================================
 *  RUSSIAN UI TEXT (ru) — primary language.
 * ============================================================================
 *  This file holds every visible Russian string on the site (buttons, titles,
 *  section intros, form labels, SEO text, WhatsApp message templates).
 *
 *  TO EDIT TEXT: change only the text between the quotes "...". Keep the key on
 *  the left (e.g. 'hero.subtitle') exactly as it is.
 *
 *  This file also defines the list of available text keys — the Kazakh file
 *  (kk.ts) must provide the same keys (TypeScript will warn if one is missing).
 * ============================================================================
 */
export const ru = {
  /* ---- Accessibility ---- */
  'a11y.skip': 'Перейти к содержимому',
  'a11y.menuOpen': 'Открыть меню',
  'a11y.menuClose': 'Закрыть меню',
  'a11y.toTop': 'Наверх',

  /* ---- Navigation ---- */
  'nav.home': 'Главная',
  'nav.about': 'О нас',
  'nav.menu': 'Меню',
  'nav.events': 'Афиша',
  'nav.gallery': 'Галерея',
  'nav.contacts': 'Контакты',

  /* ---- Calls to action (buttons) ---- */
  'cta.reserve': 'Забронировать столик',
  'cta.reserveShort': 'Бронь',
  'cta.viewMenu': 'Смотреть меню',
  'cta.call': 'Позвонить',
  'cta.whatsapp': 'Написать в WhatsApp',
  'cta.directions': 'Проложить маршрут',

  /* ---- Language switcher ---- */
  'lang.switch': 'Сменить язык',
  'lang.ru': 'RU',
  'lang.kk': 'KZ',

  /* ---- HERO ---- */
  'hero.subtitle':
    'Европейская кухня, кальян, авторский бар и живая музыка по выходным',
  'hero.scroll': 'Листайте вниз',

  /* ---- ABOUT / CONCEPT ---- */
  'about.kicker': 'О нас',
  'about.title': 'Не просто бар — атмосфера',
  'about.body':
    'THE OFFICE — это лаунж-бар и ресторан европейской кухни в самом сердце Талдыкоргана. Уютный свет, авторские коктейли, ароматный кальян и живая музыка по выходным создают вечер, который хочется продлить. Мы готовим и украшаем небольшие праздники под ключ — от дня рождения до камерной вечеринки.',
  'about.humor':
    'Единственный офис, где «совещание» заканчивается коктейлем, а начальник — это вы.',
  'about.feature.cuisine.title': 'Европейская кухня',
  'about.feature.cuisine.desc':
    'Стейки, паста, салаты и горячие блюда от шефа — свежо и со вкусом.',
  'about.feature.hookah.title': 'Кальян',
  'about.feature.hookah.desc':
    'Богатая карта вкусов и мастера, которые подберут идеальный микс.',
  'about.feature.music.title': 'Живая музыка',
  'about.feature.music.desc':
    'Вокалисты, гитаристы и группы каждые выходные — включая казахские вечера.',
  'about.feature.parties.title': 'Праздники под ключ',
  'about.feature.parties.desc':
    'Организуем и украсим ваше торжество — вам останется только отдыхать.',

  /* ---- MENU ---- */
  'menu.kicker': 'Меню',
  'menu.title': 'Наша кухня и бар',
  'menu.intro':
    'От салатов и стейков до авторских коктейлей и лимонадов. Все цены указаны в тенге (₸).',
  'menu.jumpTo': 'Перейти к разделу',
  'menu.openPage': 'Открыть меню отдельной страницей',
  'menu.priceNote': 'Цены указаны в тенге (₸) и могут меняться.',
  'menu.lemonadeNote': 'Объём: 1,8 л / 1 л',
  'menu.dualPriceNote': 'Два размера: большой / маленький',

  /* ---- EVENTS & LIVE MUSIC ---- */
  'events.kicker': 'Афиша',
  'events.title': 'Живая музыка и праздники',
  'events.intro':
    'Каждые выходные — живые выступления, а ваши торжества мы берём на себя: оформление, музыка и атмосфера под ключ.',
  'events.live.title': 'Живые выступления',
  'events.live.desc':
    'Вокалисты, гитаристы и группы (включая Ruhanyat Band) и казахские музыкальные вечера каждые пятницу и субботу.',
  'events.private.title': 'Частные праздники',
  'events.private.desc':
    'Дни рождения, корпоративы и камерные вечеринки. Украшаем зал, готовим меню и создаём настроение.',
  'events.upcoming': 'Ближайшие события',
  'events.performer': 'Исполнитель',
  'events.none': 'Скоро объявим новые даты — следите за нами в Instagram.',
  'events.bookParty': 'Забронировать праздник',

  /* ---- GALLERY ---- */
  'gallery.kicker': 'Галерея',
  'gallery.title': 'Атмосфера THE OFFICE',
  'gallery.intro':
    'Интерьер, блюда, живая музыка и праздники. Загляните внутрь — и захочется зайти лично.',
  'gallery.open': 'Открыть изображение',
  'gallery.close': 'Закрыть',
  'gallery.prev': 'Предыдущее',
  'gallery.next': 'Следующее',

  /* ---- RESERVATION ---- */
  'reserve.kicker': 'Бронирование',
  'reserve.title': 'Забронировать столик',
  'reserve.intro':
    'Оставьте заявку — и мы свяжемся с вами для подтверждения. Бронь подтверждается сотрудником по WhatsApp или телефону.',
  'reserve.form.name': 'Имя',
  'reserve.form.namePlaceholder': 'Ваше имя',
  'reserve.form.phone': 'Телефон',
  'reserve.form.phonePlaceholder': '+7 7XX XXX XX XX',
  'reserve.form.date': 'Дата',
  'reserve.form.time': 'Время',
  'reserve.form.guests': 'Количество гостей',
  'reserve.form.notes': 'Пожелания',
  'reserve.form.notesOptional': 'необязательно',
  'reserve.form.notesPlaceholder': 'Например: столик у окна, кальян, торт…',
  'reserve.form.submit': 'Отправить в WhatsApp',
  'reserve.form.sending': 'Открываем WhatsApp…',
  'reserve.success':
    'Спасибо! Мы открыли WhatsApp с вашей заявкой — отправьте сообщение, и мы подтвердим бронь.',
  'reserve.orCall': 'или позвоните нам',
  'reserve.confirmNote':
    'Бронь считается подтверждённой только после ответа сотрудника.',
  'reserve.noscript':
    'Заполните форму и нажмите «Отправить» — заявка придёт нам на почту.',
  // WhatsApp message template. {name} {phone} {date} {time} {guests} {notes}
  // are replaced with what the visitor typed. Keep the { } placeholders.
  'reserve.waTemplate':
    'Здравствуйте! Хочу забронировать столик в THE OFFICE.\nИмя: {name}\nТелефон: {phone}\nДата: {date}\nВремя: {time}\nГостей: {guests}\nПожелания: {notes}',
  'reserve.noteEmpty': '—',

  /* ---- CONTACT + MAP ---- */
  'contact.kicker': 'Контакты',
  'contact.title': 'Как нас найти',
  'contact.addressLabel': 'Адрес',
  'contact.hoursLabel': 'Часы работы',
  'contact.phoneLabel': 'Телефон',
  'contact.followLabel': 'Мы в Instagram',
  'contact.mapTitle': 'Карта расположения THE OFFICE',

  /* ---- FOOTER ---- */
  'footer.nav': 'Навигация',
  'footer.contacts': 'Контакты',
  'footer.follow': 'Соцсети',
  'footer.rights': 'Все права защищены.',
  'footer.humor':
    'THE OFFICE — единственный офис, куда хочется вернуться после работы.',

  /* ---- Floating / general WhatsApp messages ---- */
  'wa.general': 'Здравствуйте! Пишу с сайта THE OFFICE.',
  'wa.party':
    'Здравствуйте! Хочу узнать про организацию праздника в THE OFFICE.',

  /* ---- SEO (page titles & descriptions) ---- */
  'seo.home.title': 'THE OFFICE Lounge Bar — лаунж-бар в Талдыкоргане',
  'seo.home.desc':
    'Европейская кухня, кальян, авторский бар и живая музыка по выходным в Талдыкоргане. Жансугурова 35. Бронь столиков, праздники под ключ. Ежедневно 12:00–02:00.',
  'seo.menu.title': 'Меню — THE OFFICE Lounge Bar, Талдыкорган',
  'seo.menu.desc':
    'Полное меню THE OFFICE: салаты, супы, паста, стейки, пицца, бар и лимонады. Цены в тенге. Жансугурова 35, Талдыкорган.',
};
