import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Vercel define esta variable en su entorno de compilación, así que el mismo
// repositorio puede desplegarse en Vercel (funciones serverless) o en
// Cloudflare Pages sin tocar el código.
const isVercel = Boolean(process.env.VERCEL);

// https://astro.build/config
export default defineConfig({
  site: 'https://inled.es',
  output: 'server',
  adapter: isVercel ? vercel() : cloudflare(),
  redirects: {
    '/geminissh': { status: 302, destination: 'https://inled.es/apps/geminissh' },
    '/appinstall': { status: 302, destination: 'https://inled.es/apps/appinstall' },
    '/warp': { status: 302, destination: 'https://inled.es/apps/warp-vpn/' },
    '/startomnibox': { status: 302, destination: 'https://inled.es/apps/startomnibox/' },
    '/startntp': { status: 302, destination: 'https://inled.es/apps/startntp/' },
    '/winerror': { status: 302, destination: 'https://inled.es/apps/winerror/' },
    '/winbsod': { status: 302, destination: 'https://inled.es/apps/winbsod/' },
    '/tabstacker': { status: 302, destination: 'https://inled.es/apps/tabstacker/' },
    '/cleany': { status: 302, destination: 'https://inled.es/apps/cleany/' },
    '/archive.is': { status: 302, destination: 'https://inled.es/apps/archive.is/' },
    '/startchat': { status: 302, destination: 'https://inled.es/apps/startchat/' },
    '/inshare': { status: 302, destination: 'https://inled.es/apps/inshare/' },
    '/about-start': { status: 302, destination: 'https://start.inled.es/' },
    '/mdpdf': { status: 302, destination: 'https://mdpdf.inled.es/' },
    '/inlinked': { status: 302, destination: 'https://inlinked.inled.es/' },
    '/inmd': { status: 302, destination: 'https://inmd.inled.es/' },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/brand-strategy'),
    }),
  ],
});
