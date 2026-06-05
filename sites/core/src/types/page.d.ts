export type LanguageTag = (string & {})
export type UrlString = (string & {})
export type ISODateString = (string & {})

export type RobotsDirective =
  | 'index' | 'noindex'
  | 'follow' | 'nofollow'
  | 'noarchive' | 'nosnippet'
  | 'noimageindex' | 'none' | 'all'
  | (string & {})

export interface HreflangEntry {
  lang: LanguageTag | 'x-default'
  href: UrlString
}

export type OGType =
  | 'website' | 'article' | 'book' | 'profile'
  | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station'
  | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other'
  | (string & {})

export interface OGImage {
  url: UrlString
  secureUrl?: UrlString
  type?: string
  width?: number
  height?: number
  alt?: string
}

export interface OGVideo {
  url: UrlString
  secureUrl?: UrlString
  type?: string
  width?: number
  height?: number
}

export interface OGAudio {
  url: UrlString
  secureUrl?: UrlString
  type?: string
}

export interface OGArticle {
  publishedTime?: ISODateString
  modifiedTime?: ISODateString
  expirationTime?: ISODateString
  authors?: UrlString[]
  section?: string
  tags?: string[]
}

export interface OGProfile {
  firstName?: string
  lastName?: string
  username?: string
  gender?: 'male' | 'female' | (string & {})
}

export interface OpenGraphMeta {
  title?: string
  description?: string
  type?: OGType
  url?: UrlString
  siteName?: string
  locale?: string
  localeAlternates?: string[]
  images?: OGImage[]
  videos?: OGVideo[]
  audios?: OGAudio[]
  article?: OGArticle
  profile?: OGProfile
}

export type TwitterCardType = 'summary' | 'summary_large_image' | 'app' | 'player'

export interface TwitterMeta {
  card?: TwitterCardType
  site?: string
  creator?: string
  title?: string
  description?: string
  image?: UrlString
  imageAlt?: string
}

export type JsonLd = Record<string, unknown> & {
  '@context': string
  '@type': string
}

export interface LinkTag {
  rel: string
  href: UrlString
  type?: string
  sizes?: string
  color?: string
  crossOrigin?: 'anonymous' | 'use-credentials'
  media?: string
  hreflang?: LanguageTag
  as?: string
  fetchPriority?: 'high' | 'low' | 'auto'
  [attr: string]: string | undefined
}

export interface MetaTag {
  name?: string
  httpEquiv?: string
  property?: string
  content: string
  charset?: string
  [attr: string]: string | undefined
}

export interface ScriptTag {
  src?: UrlString
  innerHTML?: string
  type?: string
  async?: boolean
  defer?: boolean
  crossOrigin?: 'anonymous' | 'use-credentials'
  nonce?: string
  to?: 'head' | 'body'
  [attr: string]: string | boolean | undefined
}

export interface PageProps {
  title?: string
  titleTemplate?: string
  description?: string
  keywords?: string | string[]
  canonical?: UrlString
  lang?: LanguageTag
  dir?: 'ltr' | 'rtl' | 'auto'
  hreflang?: HreflangEntry[]
  robots?: RobotsDirective | RobotsDirective[]
  googlebot?: RobotsDirective | RobotsDirective[]
  author?: string | string[]
  publishedAt?: ISODateString
  modifiedAt?: ISODateString
  themeColor?: string | { media: string; color: string }[]
  colorScheme?: 'light' | 'dark' | 'light dark' | 'only light' | (string & {})
  applicationName?: string
  generator?: string
  icons?: LinkTag[]
  openGraph?: OpenGraphMeta
  twitter?: TwitterMeta
  jsonLd?: JsonLd | JsonLd[]
  googleSiteVerification?: string
  msValidate?: string
  pinterestVerification?: string
  yandexVerification?: string
  viewport?: string | {
    width?: 'device-width' | number
    initialScale?: number
    minimumScale?: number
    maximumScale?: number
    userScalable?: boolean
    viewportFit?: 'auto' | 'contain' | 'cover'
  }
  meta?: MetaTag[]
  links?: LinkTag[]
  scripts?: ScriptTag[]
  injectStyles?: string[]
}