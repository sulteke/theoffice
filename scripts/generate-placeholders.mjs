/**
 * Generates good-looking PLACEHOLDER images so the site looks complete before
 * the owner adds real photos. Run with:  npm run placeholders
 *
 * It writes optimized-pipeline source images to  src/assets/images/  and the
 * social-share image to  public/images/ . The owner replaces these files with
 * real photos (see ASSETS_TODO.md) — same filenames, done.
 *
 * Placeholders are elegant navy cards with a label, matching the brand palette.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, '../src/assets/images');
const PUB = resolve(__dirname, '../public/images');
mkdirSync(SRC, { recursive: true });
mkdirSync(PUB, { recursive: true });

// Brand palette
const NAVY_BASE = '#0E1729';
const NAVY_ELEV = '#16213B';
const NAVY_DEEP = '#0A1020';
const GOLD = '#C9A86A';
const ACCENT = '#2E5BBA';
const MUTED = '#A9B4C6';
const INK = '#ECEFF4';
const FONT = '-apple-system, Helvetica, Arial, sans-serif';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Build an SVG placeholder (navy gradient + border + emblem ring + labels). */
function svg(w, h, { label, sub = 'REPLACE PHOTO', big = false } = {}) {
  const cx = w / 2;
  const cy = h / 2;
  const ring = Math.min(w, h) * 0.16;
  const labelSize = Math.round(Math.min(w, h) / (big ? 9 : 13));
  const subSize = Math.round(Math.min(w, h) / 30);
  const brandSize = Math.round(Math.min(w, h) / 34);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY_ELEV}"/>
      <stop offset="0.55" stop-color="${NAVY_BASE}"/>
      <stop offset="1" stop-color="${NAVY_DEEP}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect x="14" y="14" width="${w - 28}" height="${h - 28}" fill="none" stroke="${ACCENT}" stroke-width="2" opacity="0.55"/>
  <circle cx="${cx}" cy="${cy - h * 0.06}" r="${ring}" fill="none" stroke="${GOLD}" stroke-width="2.5" opacity="0.85"/>
  <text x="${cx}" y="${cy - h * 0.06 + ring * 0.12}" font-family="${FONT}" font-size="${Math.round(ring * 0.5)}" fill="${GOLD}" text-anchor="middle" font-weight="700" letter-spacing="2">TO</text>
  <text x="${cx}" y="${cy + h * 0.16}" font-family="${FONT}" font-size="${labelSize}" fill="${INK}" text-anchor="middle" font-weight="700" letter-spacing="3">${esc(label)}</text>
  <text x="${cx}" y="${cy + h * 0.16 + subSize * 2}" font-family="${FONT}" font-size="${subSize}" fill="${MUTED}" text-anchor="middle" letter-spacing="2">${esc(sub)}</text>
  <text x="${cx}" y="${h - 26}" font-family="${FONT}" font-size="${brandSize}" fill="${ACCENT}" text-anchor="middle" letter-spacing="4" opacity="0.9">THE OFFICE LOUNGE BAR</text>
</svg>`);
}

/** Social-share (Open Graph) image — brand name + tagline + city. */
function ogSvg(w, h) {
  const cx = w / 2;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY_ELEV}"/>
      <stop offset="0.6" stop-color="${NAVY_BASE}"/>
      <stop offset="1" stop-color="${NAVY_DEEP}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect x="22" y="22" width="${w - 44}" height="${h - 44}" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.6"/>
  <circle cx="${cx}" cy="${h * 0.30}" r="62" fill="none" stroke="${GOLD}" stroke-width="3"/>
  <text x="${cx}" y="${h * 0.30 + 22}" font-family="${FONT}" font-size="58" fill="${GOLD}" text-anchor="middle" font-weight="700" letter-spacing="3">TO</text>
  <text x="${cx}" y="${h * 0.56}" font-family="${FONT}" font-size="64" fill="${INK}" text-anchor="middle" font-weight="700" letter-spacing="6">THE OFFICE</text>
  <text x="${cx}" y="${h * 0.56 + 46}" font-family="${FONT}" font-size="30" fill="${GOLD}" text-anchor="middle" letter-spacing="8">LOUNGE BAR</text>
  <text x="${cx}" y="${h * 0.80}" font-family="${FONT}" font-size="26" fill="${MUTED}" text-anchor="middle" letter-spacing="1">Место, где отдых становится атмосферой</text>
  <text x="${cx}" y="${h * 0.80 + 38}" font-family="${FONT}" font-size="22" fill="${ACCENT}" text-anchor="middle" letter-spacing="3">ТАЛДЫКОРГАН · 12:00–02:00</text>
</svg>`);
}

const toJpg = (buf, out, q = 82) =>
  sharp(buf).jpeg({ quality: q, mozjpeg: true }).toFile(out);

// --- The full set of placeholders to generate ---
const jobs = [
  // Hero (wide, high-res)
  () => toJpg(svg(1920, 1080, { label: 'HERO', sub: 'replace with venue photo / video', big: true }), `${SRC}/hero.jpg`, 80),
  // About
  () => toJpg(svg(1200, 1400, { label: 'ATMOSPHERE', sub: 'interior photo' }), `${SRC}/about.jpg`),
  // Hookah (featured section)
  () => toJpg(svg(1200, 1000, { label: 'HOOKAH', sub: 'hookah photo' }), `${SRC}/hookah.jpg`),
  // Gallery (mixed aspect ratios for a masonry grid)
  () => toJpg(svg(1200, 1600, { label: 'INTERIOR', sub: 'gallery 01' }), `${SRC}/gallery-01.jpg`),
  () => toJpg(svg(1200, 900, { label: 'FOOD', sub: 'gallery 02' }), `${SRC}/gallery-02.jpg`),
  () => toJpg(svg(1200, 1200, { label: 'COCKTAILS', sub: 'gallery 03' }), `${SRC}/gallery-03.jpg`),
  () => toJpg(svg(1200, 1500, { label: 'LIVE MUSIC', sub: 'gallery 04' }), `${SRC}/gallery-04.jpg`),
  () => toJpg(svg(1200, 900, { label: 'HOOKAH', sub: 'gallery 05' }), `${SRC}/gallery-05.jpg`),
  () => toJpg(svg(1200, 1200, { label: 'STEAK', sub: 'gallery 06' }), `${SRC}/gallery-06.jpg`),
  () => toJpg(svg(1200, 1500, { label: 'CELEBRATIONS', sub: 'gallery 07' }), `${SRC}/gallery-07.jpg`),
  () => toJpg(svg(1200, 900, { label: 'EXTERIOR', sub: 'gallery 08' }), `${SRC}/gallery-08.jpg`),
  () => toJpg(svg(1200, 1200, { label: 'DESSERT', sub: 'gallery 09' }), `${SRC}/gallery-09.jpg`),
  () => toJpg(svg(1200, 1400, { label: 'THE BAR', sub: 'gallery 10' }), `${SRC}/gallery-10.jpg`),
  // Event thumbnails
  () => toJpg(svg(1200, 900, { label: 'LIVE BAND', sub: 'event 01' }), `${SRC}/event-01.jpg`),
  () => toJpg(svg(1200, 900, { label: 'KAZAKH NIGHT', sub: 'event 02' }), `${SRC}/event-02.jpg`),
  () => toJpg(svg(1200, 900, { label: 'ACOUSTIC', sub: 'event 03' }), `${SRC}/event-03.jpg`),
  () => toJpg(svg(1200, 900, { label: 'WEEKEND', sub: 'event 04' }), `${SRC}/event-04.jpg`),
  // Open Graph / social share
  () => toJpg(ogSvg(1200, 630), `${PUB}/og-image.jpg`, 85),
];

await Promise.all(jobs.map((j) => j()));
console.log(`✓ Generated ${jobs.length} placeholder images.`);
console.log(`  → ${SRC}`);
console.log(`  → ${PUB}`);
