import { ui, defaultLang } from './ui';

export const ES_PREFIX = '/es';

export function getLangFromLocals(locals: App.Locals) {
  return (locals.lang in ui ? locals.lang : defaultLang) as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

const isExternalOrSpecial = (path: string) =>
  /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path);

/**
 * Devuelve una ruta interna con el prefijo de idioma correspondiente.
 * Los enlaces externos, anclas y rutas ya localizadas se devuelven tal cual.
 */
export function localizePath(
  path: string,
  lang: keyof typeof ui = defaultLang,
) {
  if (lang !== 'es' || !path.startsWith('/') || isExternalOrSpecial(path)) {
    return path;
  }
  if (path === ES_PREFIX || path.startsWith(`${ES_PREFIX}/`)) {
    return path;
  }
  return path === '/' ? `${ES_PREFIX}/` : `${ES_PREFIX}${path}`;
}

export function useTranslatedPath(lang: keyof typeof ui = defaultLang) {
  return (path: string) => localizePath(path, lang);
}
