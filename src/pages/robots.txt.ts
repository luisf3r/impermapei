import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /404
Disallow: /gracias

# Control de velocidad para bots que lo soportan
User-agent: Bingbot
Crawl-Delay: 5

User-agent: Slurp
Crawl-Delay: 10

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};