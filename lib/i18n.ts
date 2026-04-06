export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es';

export type Locale = typeof locales[number]; 

export function generateLocaleParams() {
  return locales.map((locale) => ({
    locale: locale,
  }));
}

export async function getDictionary(locale: any) {
  if (!locales.includes(locale)) {
    locale = defaultLocale;
  }

  try {
    const dict = await import(`@/locales/${locale}.json`);
    return dict.default;
  } catch (error) {
    const fallback = await import(`@/locales/es.json`);
    return fallback.default;
  }
}