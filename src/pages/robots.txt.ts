/**
 * Generates /robots.txt at build time, pointing crawlers to the sitemap.
 * The URL is taken from SITE_URL (src/data/business.ts) so it stays correct.
 */
import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/business';

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
