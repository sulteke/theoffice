/**
 * ============================================================================
 *  BUSINESS INFORMATION — EDIT EVERYTHING ABOUT THE VENUE HERE, IN ONE PLACE.
 * ============================================================================
 *  Every component imports from this file, so changing a phone number, an
 *  address, the Instagram link, opening hours, etc. here updates the WHOLE site.
 *
 *  HOW TO EDIT: change the text inside the quotes "like this". Keep the quotes
 *  and the commas. If you are unsure, only touch the part between the quotes.
 * ============================================================================
 */

export const business = {
  /** Short brand name shown in the logo / titles. */
  name: 'THE OFFICE',
  /** Full legal/marketing name. */
  fullName: 'THE OFFICE Lounge Bar',

  /** City name, per language. */
  city: {
    ru: 'Талдыкорган',
    kk: 'Талдықорған',
  },

  /** Street address, per language (shown on the site + map + SEO). */
  address: {
    ru: 'ул. Жансугурова 35, Талдыкорган',
    kk: 'Жансүгіров к-сі 35, Талдықорған',
  },
  /** Short address (street + number only) for compact places. */
  addressShort: {
    ru: 'Жансугурова 35',
    kk: 'Жансүгіров 35',
  },

  /**
   * Opening hours. The venue is open every day 12:00–02:00.
   * `display` is what visitors see; `schemaOpens`/`schemaCloses` feed Google SEO.
   */
  hours: {
    display: '12:00 – 02:00',
    everyDay: { ru: 'Ежедневно', kk: 'Күн сайын' },
    schemaOpens: '12:00',
    schemaCloses: '02:00',
  },

  /**
   * Phone / WhatsApp.
   *  - phoneDisplay: pretty version shown on screen.
   *  - phoneTel:     used for tappable "call" links (no spaces, leading +).
   *  - whatsapp:     DIGITS ONLY, no + or spaces — used for wa.me links.
   */
  phoneDisplay: '+7 708 365 7690',
  phoneTel: '+77083657690',
  whatsapp: '77083657690',

  /** Instagram (most traffic comes from the bio link). */
  instagram: 'https://www.instagram.com/theoffice_tdk',
  instagramHandle: '@theoffice_tdk',

  /** Taglines (the venue's slogan), per language. */
  taglines: {
    ru: 'Место, где отдых становится атмосферой',
    kk: 'Демалыс атмосфераға айналатын орын',
  },

  /**
   * Map coordinates (latitude, longitude) used for the map embed + SEO geo.
   * TODO (owner): replace with the EXACT pin from 2GIS. Open the venue on
   * 2gis.kz, copy the coordinates, and paste them here. These are approximate
   * (central Taldykorgan) and should be corrected before launch.
   */
  geo: {
    lat: 45.0146,
    lng: 78.4001,
  },

  /**
   * Price range for SEO ("$" style, here using the tenge symbol).
   * ₸₸ = mid-range. Use ₸ / ₸₸ / ₸₸₸ as appropriate.
   */
  priceRange: '₸₸',
} as const;

/**
 * ----------------------------------------------------------------------------
 *  SITE URL — the final web address of the published site.
 * ----------------------------------------------------------------------------
 *  TODO (owner): after you deploy, change this to your real address, e.g.
 *  'https://theoffice.kz' or your Netlify/Vercel URL. It is used for SEO
 *  (canonical links, sitemap, social-share previews). Do NOT add a trailing "/".
 */
export const SITE_URL = 'https://theofficetdk.netlify.app';

/* -------------------------------------------------------------------------- */
/*  Convenience helpers built from the data above — no need to edit these.    */
/* -------------------------------------------------------------------------- */

/** Build a WhatsApp link with a pre-filled (URL-encoded) message. */
export function waLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Tappable phone link. */
export const telLink = `tel:${business.phoneTel}`;
