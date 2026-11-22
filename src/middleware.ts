import { defineMiddleware } from 'astro:middleware';

const ES_PREFIX = '/es';
const LANG_COOKIE = 'preferred-lang';

const normalizePath = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, '') : path;

function prefersSpanish(acceptLanguage: string) {
  const first = acceptLanguage.split(',')[0]?.trim().toLowerCase() ?? '';
  return first === 'es' || first.startsWith('es-');
}

export const onRequest = defineMiddleware((context, next) => {
  const { pathname, search, origin } = context.url;
  const originalPathname = context.originPathname;
  const current = normalizePath(pathname);
  const original = normalizePath(originalPathname);
  const cookie = context.cookies.get(LANG_COOKIE)?.value;
  const isSpanishPath =
    original === ES_PREFIX || original.startsWith(`${ES_PREFIX}/`);

  if (isSpanishPath) {
    context.locals.lang = 'es';
    context.locals.langPath = original.slice(ES_PREFIX.length) || '/';

    // The rewritten request re-enters this middleware with the stripped path.
    // At that point the route can render normally.
    if (current !== original) {
      return next();
    }

    context.cookies.set(LANG_COOKIE, 'es', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });

    return context.rewrite(
      new URL(`${context.locals.langPath}${search}`, origin)
    );
  }

  const lang =
    cookie === 'es' || cookie === 'en'
      ? cookie
      : prefersSpanish(context.request.headers.get('accept-language') ?? '')
        ? 'es'
        : 'en';

  context.locals.lang = lang;
  context.locals.langPath = pathname;

  // Spanish visitors (by browser language or explicit selection) are moved to
  // the /es/ tree. Root URLs stay English by default, which keeps link previews
  // and embeds in English-language chats in English.
  if (lang === 'es') {
    return context.redirect(
      `${ES_PREFIX}${pathname === '/' ? '/' : pathname}${search}`,
      302
    );
  }

  return next();
});
