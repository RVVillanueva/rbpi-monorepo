import i18next, { InitOptions, TOptions } from 'i18next'

const modules = import.meta.glob('./lang/*.yaml', { eager: true })

function loadRes() {
  const out: Record<string, { translation: object }> = {}

  for (const [path, mod] of Object.entries(modules)) {
    const locale = path.replace('./lang/', '').replace('.yaml', '')
    out[locale] = { translation: (mod as any).default }
  }

  return out
}

const options: InitOptions = {
  fallbackLng: 'en',
  resources: loadRes(),
  interpolation: {
    escapeValue: true,
  },
}

const instance = i18next.createInstance()

instance.init({ ...options })

export type TFunction = (key: string, defaultValue: string, options?: TOptions) => string

const tCache = new Map<string, TFunction>()

// getT is a translation function that takes a key, a default value, and options. 
// It returns the translated string for the given key, or the default value if the 
// key is not found. The options can include interpolation values and other i18next 
// options.
export function getT(locale?: string) {
  const lang = locale ?? 'en'

  if (tCache.has(lang)) return tCache.get(lang)!

  const t = instance.getFixedT(locale ?? 'en')
  const fn = (key: string, defaultValue: string, options?: (TOptions)  ) => {
    return t(key, { defaultValue, ...(options ?? {}) })
  }

  tCache.set(lang, fn)
  return fn
}