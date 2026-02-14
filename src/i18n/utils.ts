import { ui, defaultLang } from './ui';

export function getLangFromLocals(locals: App.Locals) {
  return (locals.lang in ui ? locals.lang : defaultLang) as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// translatePath is no longer needed since we use a single URL
export function useTranslatedPath() {
  return (path: string) => path;
}
