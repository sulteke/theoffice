# 📸 Images to replace — THE OFFICE Lounge Bar

The site currently uses **placeholder images** (elegant navy cards with labels).
Replace them with real photos from your Instagram **@theoffice_tdk** to make the
site come alive. You don't need a designer — just drop your photos in with the
**same file name** and rebuild.

## How to replace a photo (3 steps)
1. Find the file in the folder shown below (e.g. `src/assets/images/hero.jpg`).
2. Put your own photo there with the **exact same name** (e.g. `hero.jpg`).
3. Run `npm run build` again (or `npm run dev` to preview). Done — the site
   automatically resizes & optimizes it (creates fast WebP/AVIF versions).

> 💡 Tip: JPG works great for photos. Keep files reasonably sized (long edge
> ~1600–2000px). Any aspect ratio works, but the "recommended" sizes below look
> best because that's the shape each slot was designed for.

---

## 1) Hero background (the big first screen)
| File | Recommended size | Aspect | Notes |
|------|------------------|--------|-------|
| `src/assets/images/hero.jpg` | 1920 × 1080 | 16:9 (landscape) | Your best moody interior / bar shot. |

**Want a video hero instead?** Put a short, muted, looping clip at
`public/hero.mp4`, then open `src/components/Hero.astro` and un-comment the
`<video>` block (instructions are right there in the file).

## 2) About section photo
| File | Recommended size | Aspect | Notes |
|------|------------------|--------|-------|
| `src/assets/images/about.jpg` | 1200 × 1400 | ~6:7 (portrait) | Atmospheric interior or a signature dish. |

## 3) Gallery (10 photos — mix of interior, food, music, events)
Replace any/all. Captions (alt text) are edited in `src/data/gallery.ts`.

| File | Recommended size | Aspect | Suggested subject |
|------|------------------|--------|-------------------|
| `src/assets/images/gallery-01.jpg` | 1200 × 1600 | 3:4 tall | Interior |
| `src/assets/images/gallery-02.jpg` | 1200 × 900  | 4:3 wide | Food / plate |
| `src/assets/images/gallery-03.jpg` | 1200 × 1200 | 1:1 | Cocktail |
| `src/assets/images/gallery-04.jpg` | 1200 × 1500 | 4:5 tall | Live music |
| `src/assets/images/gallery-05.jpg` | 1200 × 900  | 4:3 wide | Hookah / kalyan |
| `src/assets/images/gallery-06.jpg` | 1200 × 1200 | 1:1 | Steak / main |
| `src/assets/images/gallery-07.jpg` | 1200 × 1500 | 4:5 tall | Party / decor |
| `src/assets/images/gallery-08.jpg` | 1200 × 900  | 4:3 wide | Exterior / entrance |
| `src/assets/images/gallery-09.jpg` | 1200 × 1200 | 1:1 | Dessert |
| `src/assets/images/gallery-10.jpg` | 1200 × 1400 | ~6:7 tall | Bar counter |

> You can add MORE photos: drop e.g. `gallery-11.jpg` into the folder, then add
> a line for it in `src/data/gallery.ts` (copy an existing line).

## 4) Event thumbnails (used by the Afisha / Events list)
The events list cycles through these 4 images. Replace with real performance/
party photos.

| File | Recommended size | Aspect |
|------|------------------|--------|
| `src/assets/images/event-01.jpg` | 1200 × 900 | 4:3 |
| `src/assets/images/event-02.jpg` | 1200 × 900 | 4:3 |
| `src/assets/images/event-03.jpg` | 1200 × 900 | 4:3 |
| `src/assets/images/event-04.jpg` | 1200 × 900 | 4:3 |

## 5) Social-share image (shown when the link is sent on WhatsApp/Instagram/etc.)
| File | Required size | Aspect | Notes |
|------|---------------|--------|-------|
| `public/images/og-image.jpg` | 1200 × 630 | 1.91:1 | Keep text readable; this is the link preview. |

## 6) Logo & favicon
| File | Notes |
|------|-------|
| `public/logo.svg` | The circular emblem (coffee cup + "BMD"). Replace with your real logo. SVG is best; if you only have a PNG, save it as `public/logo.png` and change `/logo.svg` → `/logo.png` inside `src/components/Logo.astro` (and `apple-touch-icon` in `src/layouts/BaseLayout.astro`). Square shape recommended. |
| `public/favicon.svg` | The little browser-tab icon ("TO" monogram). Optional to change. |

---

### Regenerate the placeholders (optional)
If you ever delete the placeholders and want them back, run:
```bash
npm run placeholders
```
This recreates every placeholder image listed above.
