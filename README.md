# THE OFFICE Lounge Bar — website

A fast, bilingual (Russian + Kazakh) marketing website for **THE OFFICE Lounge
Bar** in Taldykorgan, Kazakhstan. Built with [Astro](https://astro.build) +
Tailwind CSS. It's a fully **static** site — no server, no database — so it's
free to host and very fast on phones.

- 🇷🇺 Russian (primary): `/ru/` 🇰🇿 Kazakh: `/kk/` — the root `/` redirects to `/ru/`.
- Sections: Hero · About · **Menu** · Events/Афиша · Gallery · Reservation · Contacts.
- Reservation form → opens **WhatsApp** pre-filled, with an **email backup**.
- Floating WhatsApp button, sticky mobile "Reserve" bar, maps, SEO, sitemap.

---

## 🟢 Quick start (preview it on your computer)

You only need to do this once.

### 1. Install Node.js (the engine that runs the site)
- Go to **https://nodejs.org** and download the **LTS** version.
- Install it (just click Next / Continue).
- This gives you `node` and `npm`.

### 2. Open a terminal in this project folder
- **Mac:** open the **Terminal** app, type `cd ` (with a space), drag this
  folder onto the window, press Enter.
- **Windows:** open the folder, click the address bar, type `cmd`, press Enter.

### 3. Install the project and preview it
```bash
npm install      # downloads what the site needs (do this once)
npm run dev      # starts a live preview
```
Now open the link it prints (usually **http://localhost:4321**) in your browser.
Edits you make are shown live. Press `Ctrl + C` in the terminal to stop.

### 4. Build the final website (when you're ready to publish)
```bash
npm run build
```
This creates a **`dist/`** folder — that folder *is* your website. Upload it
anywhere (see **Deploy** below). To preview the built version locally:
`npm run preview`.

---

## ✏️ How to edit the content (no coding needed)

Everything you'll want to change lives in a few clearly-commented files. Open
them in any text editor (e.g. **VS Code**, free). **Only change the text between
the quotes `"..."`** and keep the commas.

| What you want to change | File to open |
|---|---|
| **Menu dishes & prices** | `src/data/menu.ts` |
| **Phone, WhatsApp, address, hours, Instagram, taglines** | `src/data/business.ts` |
| **Upcoming events (Афиша)** | `src/data/events.ts` |
| **Gallery photo captions** | `src/data/gallery.ts` |
| **All other text — buttons, titles, intros (Russian)** | `src/i18n/ru.ts` |
| **All other text — Kazakh** | `src/i18n/kk.ts` |
| **Photos / logo / hero** | see **`ASSETS_TODO.md`** |

### Change a menu price (example)
Open `src/data/menu.ts`, find the dish, change the number:
```ts
{ name: 'Цезарь с курицей', price: '2490' },   // ← change 2490 to the new price
```
Prices can be `'2490'` (shows "2490 ₸"), `'2430/1890'` (two sizes), or `'—'`
(hidden). Save the file — that's it.

### Change the phone number / address / hours
All contact details are in **one** place: `src/data/business.ts`. Change them
there and they update everywhere on the site (header, footer, WhatsApp links,
map, SEO).

---

## 🔧 5 things to customize BEFORE going live

1. **WhatsApp email backup key (Web3Forms).** The reservation form already opens
   WhatsApp. To *also* receive bookings by email (in case someone has no
   WhatsApp), get a **free** key:
   - Go to **https://web3forms.com**, enter your email, copy the **Access Key**
     (free plan = 250 messages/month, no account needed).
   - Open `src/components/Reservation.astro` and replace:
     ```ts
     const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
     ```
     with your key. Save.

2. **The map (2GIS).** The Contact section shows a free OpenStreetMap pin by
   default. To use **2GIS** (the most popular map in Kazakhstan):
   - Open your venue on **https://2gis.kz**, click **Поделиться / Share**, copy
     the embed `<iframe>` (or link).
   - Open `src/components/Contact.astro` and replace the `<iframe src="...">`
     with the 2GIS one (instructions are in the file).
   - Also set your **exact coordinates** in `src/data/business.ts` → `geo`
     (open your point on 2GIS to read the latitude/longitude).

3. **Real photos.** Replace the placeholder images with your Instagram photos —
   see **`ASSETS_TODO.md`** (it lists every file name + recommended size).

4. **Your website address (for SEO & social links).** In
   `src/data/business.ts`, set `SITE_URL` to your real address once you deploy
   (e.g. `https://theoffice.kz` or your free Netlify/Vercel URL). That single
   value automatically updates the canonical links, `robots.txt`, `sitemap.xml`
   and social-share previews — no other file to edit. Rebuild after changing it.

5. **Double-check the Kazakh text.** Kazakh translations are marked with
   `// TODO: verify KZ` where a native check is recommended. Have a Kazakh
   speaker glance over `src/i18n/kk.ts` (menu dish names intentionally stay in
   Russian, as on the printed menu).

---

## 🚀 Deploy for free

Your built site is just the **`dist/`** folder — it works on any static host.
Two easy, free options:

### Option A — Netlify (drag & drop, easiest)
1. Run `npm run build` to create the `dist/` folder.
2. Go to **https://app.netlify.com/drop**.
3. **Drag the `dist` folder** onto the page. It publishes in seconds and gives
   you a free URL like `https://the-office.netlify.app`.
4. To use your own domain later: Netlify → *Domain settings* → *Add domain*.

> To re-publish after changes: build again and drag the new `dist` folder, or
> use **Option B** so it updates automatically.

### Option B — Netlify or Vercel via GitHub (auto-updates on every change)
1. Put this project on **GitHub** (create a repo, upload the files).
2. **Netlify:** https://app.netlify.com → *Add new site* → *Import from Git* →
   pick the repo. Build settings are auto-detected (Build command
   `npm run build`, Publish directory `dist`). Click **Deploy**.
   **Vercel:** https://vercel.com → *Add New Project* → import the repo →
   it auto-detects Astro → **Deploy**.
3. From then on, every time you change a price/photo and push to GitHub, the
   site rebuilds and updates **automatically**. Zero configuration needed —
   both hosts recognize Astro out of the box.

After deploying, remember to set `SITE_URL` (item #4 above) to your live address
and rebuild, so SEO links and social-share previews point to the right place.

---

## 🗂️ Project structure (for the curious)

```
src/
  data/          ← edit these: business.ts, menu.ts, events.ts, gallery.ts, nav.ts
  i18n/          ← all UI text: ru.ts, kk.ts (+ helpers in utils.ts)
  components/    ← the building blocks (Header, Hero, MenuSection, …)
  layouts/       ← BaseLayout.astro (the shared page shell + SEO)
  pages/         ← /ru/ and /kk/ pages (+ root redirect)
  assets/images/ ← photos that get auto-optimized
  styles/        ← global.css (brand colors & base styles)
public/          ← files served as-is: logo.svg, favicon.svg, images/og-image.jpg
scripts/         ← generate-placeholders.mjs (recreates placeholder images)
  (robots.txt & sitemap.xml are generated automatically at build time)
```

## 📜 Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (run once). |
| `npm run dev` | Live preview at http://localhost:4321 |
| `npm run build` | Build the final site into `dist/` |
| `npm run preview` | Preview the built `dist/` locally |
| `npm run placeholders` | Re-generate the placeholder images |

## 🛠️ Tech notes (for developers)

- **Astro 5** (static output) + **@astrojs/tailwind** (Tailwind v3) +
  **@astrojs/sitemap**. The site is pinned to Astro 5 because that is the latest
  line supported by the official `@astrojs/tailwind` integration (Astro 6/7 use
  the Tailwind v4 Vite plugin instead). Upgrading later means migrating the
  Tailwind setup.
- All interactivity is tiny vanilla `<script>` islands (mobile menu, scroll
  header, gallery lightbox, reservation form, scroll-reveal). No heavy
  framework. Animations respect `prefers-reduced-motion`.
- Images use Astro's `<Image />` (`astro:assets`) → responsive WebP/AVIF, lazy
  loading (hero is eager). Fonts: Playfair Display + Montserrat via Google Fonts
  (full Cyrillic + Cyrillic-ext for Kazakh).
- Accessibility: semantic landmarks, translated `alt` text, keyboard-navigable
  menu/lightbox/form, visible focus, WCAG-AA contrast on the dark navy palette.

---

© THE OFFICE Lounge Bar · Жансугурова 35, Талдыкорган · Ежедневно 12:00–02:00
