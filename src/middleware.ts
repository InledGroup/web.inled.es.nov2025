import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // 1. Check cookie
  let lang = context.cookies.get('preferred-lang')?.value;

  // 2. If no cookie, check browser header
  if (!lang) {
    const acceptLang = context.request.headers.get('accept-language') || '';
    // Check if English appears before Spanish or is the only one
    const enIndex = acceptLang.indexOf('en');
    const esIndex = acceptLang.indexOf('es');
    
    if (enIndex !== -1 && (esIndex === -1 || enIndex < esIndex)) {
      lang = 'en';
    } else {
      lang = 'es';
    }
  }

  // 3. Set in locals for all pages to use
  context.locals.lang = lang;

  return next();
});
