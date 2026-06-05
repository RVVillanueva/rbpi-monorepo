
import { useHonoContext } from '@/context/hono'
import { PageProps } from '@/types/page'
import { Fragment, type FC, type PropsWithChildren } from 'react'
import { Links, Meta, Scripts, ScrollRestoration, useMatches } from 'react-router'

type PagesLayoutProps = PropsWithChildren

export const Root: FC<PagesLayoutProps> = props => {
  const { children } = props
  const matches = useMatches()
  const page = matches.reduce((acc, m) => ({
    ...acc,
    ...((m.data as { page: PageProps })?.page ?? {}),
  }), {} as PageProps)

  const honoContext = useHonoContext()
  
  const { 
    lang: defaultLang,
  } = honoContext
  
  const { 
    title,
    titleTemplate,
    lang = defaultLang,
    dir,
    viewport = 'width=device-width, initial-scale=1.0',
    robots,
    description,
    generator,
    googlebot,
    author,
    publishedAt,
    modifiedAt,
    colorScheme,
    applicationName,
    openGraph,
    twitter,
    themeColor,
    jsonLd,
    meta,
    canonical,
    hreflang,
    icons,
    links,
    googleSiteVerification,
    msValidate,
    pinterestVerification,
    yandexVerification,
    scripts,
    injectStyles,
  } = page ?? {}

  const _title = titleTemplate ? titleTemplate.replace('%s', title ?? '') : title ?? ''
  const _viewport = typeof viewport === 'string' ? viewport : [
    `width=${viewport.width ?? 'device-width'}`,
    `initial-scale=${viewport.initialScale ?? 1}`,
    viewport.minimumScale != null && `minimum-scale=${viewport.minimumScale}`,
    viewport.maximumScale != null && `maximum-scale=${viewport.maximumScale}`,
    viewport.userScalable != null && `user-scalable=${viewport.userScalable ? 'yes' : 'no'}`,
    viewport.viewportFit != null && `viewport-fit=${viewport.viewportFit}`,
  ].filter(Boolean).join(', ')

  const _robots = Array.isArray(robots) ? robots.join(', ') : robots
  const _googlebot = Array.isArray(googlebot) ? googlebot.join(', ') : googlebot
  const _authors = Array.isArray(author) ? author : author ? [author] : []
  const _jsonlds = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []
  const _themes = Array.isArray(themeColor) ? themeColor : themeColor ? [{ color: themeColor }] : []

  return (
    <>
      <html lang={lang} dir={dir}>
      <head>
        <title>{ _title }</title>
        <meta charSet={'utf-8'} />
        <meta name='viewport' content={_viewport} />
        <Meta />
        <Links />

        { description && <meta name='description' content={description} /> }
        { _robots && <meta name='robots' content={_robots} /> }
        { googlebot && <meta name='googlebot' content={_googlebot} /> }
        { generator && <meta name='generator' content={generator} /> }
        { applicationName && <meta name='application-name' content={applicationName} /> }
        { colorScheme && <meta name='color-scheme' content={colorScheme} /> }
        { _authors.map((author, i) => <meta name='author' key={i} content={author} />) }

        { _themes.map((theme, i) => (
          <meta key={i} name='theme-color' content={theme.color} media={ 'media' in theme ? theme.media : undefined } />
        )) }

        { publishedAt && <meta name='article:published_time' content={publishedAt} /> }
        { modifiedAt && <meta name='article:modified_time' content={modifiedAt} /> }
        
        { canonical && <link rel='canonical' href={canonical} /> }
        { hreflang?.map((href, i) => (<link key={i} rel='alternate' hrefLang={href.lang} href={href.href} />)) }
        { icons?.map(({ rel, href, ...props }, i) => (<link key={i} rel={rel} href={href} {...props} />)) }
        { links?.map(({ rel, href, ...props }, i) => (<link key={i} rel={rel} href={href} {...props} />)) }

        { googleSiteVerification && <meta name='google-site-verification' content={googleSiteVerification} /> }
        { msValidate && <meta name='msvalidate.01'  content={msValidate} /> }
        { pinterestVerification && <meta name='p:domain_verify' content={pinterestVerification} /> }
        { yandexVerification && <meta name='yandex-verification' content={yandexVerification} /> }

        { openGraph && <OpenGraphTags pageProps={page} fallbackTitle={_title} /> }
        { twitter && <XTags pageProps={page} fallbackTitle={_title} /> }

        { meta?.map(({ name, httpEquiv, property, content, charset, ...props }, i) => (
          <meta key={i} name={name} http-equiv={httpEquiv} property={property} content={content} charSet={charset} {...props} />
        )) }

        { _jsonlds.map((schema, i) => (
          <script key={i} type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}>
          </script>
        )) }
        
        { scripts?.filter(script => script.to == 'head' || typeof script.to === 'undefined').map(({ type, src, innerHTML, ...props }, i) => {
          if (innerHTML) {
            return (<script key={i} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: innerHTML }}></script>)
          }

          return (
            <script key={i} type={type} src={src} {...props}></script>
          )
        }) }

        { injectStyles?.map((styles, i) => <style key={i}>{ styles }</style>) }
      </head>
      <body suppressHydrationWarning>
        { children }

        { scripts?.filter(script => script.to == 'body').map(({ type, src, innerHTML, ...props }, i) => {

          if (innerHTML) {
            return (<script key={i} dangerouslySetInnerHTML={{ __html: innerHTML }}></script>)
          }

          return (
            <script key={i} type={type} src={src} {...props}></script>
          )
        }) }

        <Scripts />
        <ScrollRestoration />
      </body>
      </html>
    </>
  )
}

const OpenGraphTags: FC<{ pageProps: PageProps, fallbackTitle: string }> = props => {
  const { openGraph, description, canonical } = props.pageProps

  if (!openGraph) {
    return (<></>)
  }

  return (
    <>
      <meta property='og:title' content={openGraph.title ?? props.fallbackTitle} />
      { (openGraph.description ?? description) && <meta property='og:description' content={openGraph.description ?? description} /> }
      { openGraph.type && <meta property='og:type' content={openGraph.type} /> } 
      { (openGraph.url ?? canonical) && <meta property='og:url' content={openGraph.url ?? canonical} /> }
      { openGraph.siteName && <meta property='og:site_name' content={openGraph.siteName} /> }
      { openGraph.locale && <meta property='og:locale' content={openGraph.locale} /> }
      { openGraph.localeAlternates?.map((alt, i) => <meta key={i} property={'og:locale:alternate'} content={alt} />) }
      { openGraph.images?.map((img, i) => (<Fragment key={i}>
        <meta property='og:image' content={img.url} />
        { img.secureUrl && <meta property='og:image:secure_url' content={img.secureUrl} /> }
        { img.type && <meta property='og:image:type' content={ img.type } /> }
        { img.width && <meta property='og:image:width' content={ String(img.width) } /> }
        { img.height && <meta property='og:image:height' content={ String(img.height) } /> }
        { img.alt && <meta property='og:image:alt' content={ img.alt } /> }
      </Fragment>)) }

      { openGraph.videos?.map((video, i) => (<Fragment key={i}>
        <meta property='og:video' content={video.url} />
        { video.secureUrl && <meta property='og:video:secure_url' content={video.secureUrl} /> }
        { video.type && <meta property='og:video:type' content={video.type} /> }
        { video.width && <meta property='og:video:width' content={String(video.width)} /> }
        { video.height && <meta property='og:video:height' content={String(video.height)} /> }
      </Fragment>)) }

      { openGraph.audios?.map((audio, i) => (<Fragment key={i}>
        <meta property='og:audio' content={audio.url} />
        { audio.secureUrl && <meta property='og:audio:secure_url' content={audio.secureUrl} />}
        { audio.type && <meta property='og:audio:type' content={audio.type} />}
      </Fragment>)) }

      { openGraph.article && (<>
        { openGraph.article.publishedTime && <meta property='article:published_time' content={openGraph.article.publishedTime} /> }
        { openGraph.article.modifiedTime && <meta property='article:modified_time' content={openGraph.article.modifiedTime} /> }
        { openGraph.article.expirationTime && <meta property='article:expiration_time' content={openGraph.article.expirationTime} /> }
        { openGraph.article.section && <meta property='article:section' content={openGraph.article.section} /> }
        { openGraph.article.authors?.map((a, i) => <meta key={i} property='article:author' content={a} />) }
        { openGraph.article.tags?.map((t, i) => <meta key={i} property='article:tag' content={t} />) }
      </>) }

      { openGraph.profile && (<>
        {openGraph.profile.firstName && <meta property='profile:first_name' content={openGraph.profile.firstName} />}
        {openGraph.profile.lastName && <meta property='profile:last_name' content={openGraph.profile.lastName} />}
        {openGraph.profile.username && <meta property='profile:username' content={openGraph.profile.username} />}
        {openGraph.profile.gender && <meta property='profile:gender' content={openGraph.profile.gender} />}
      </>) }
    </>
  )
}

const XTags: FC<{ pageProps: PageProps, fallbackTitle: string }> = props => {
  const { twitter, openGraph, description } = props.pageProps

  if (!twitter) {
    return (<></>)
  }

  return (
    <>
      <meta name='twitter:card' content={twitter.card ?? 'summary'} />
      <meta name='twitter:title' content={twitter.title ?? openGraph?.title ?? props.fallbackTitle} />

      { twitter.site && <meta name='twitter:site' content={twitter.site} /> }
      { twitter.creator && <meta name='twitter:creator' content={twitter.creator} /> }
      
      { (twitter.description ?? openGraph?.description ?? description) && (
        <meta name='twitter:description' content={twitter.description ?? openGraph?.description ?? description} />
      ) }

      { (twitter.image ?? openGraph?.images?.[0]?.url) && (
        <meta name='twitter:image' content={twitter.image ?? openGraph?.images?.[0]?.url} />
      ) }

      { (twitter.imageAlt ?? openGraph?.images?.[0]?.alt) && (
        <meta name='twitter:image:alt' content={twitter.imageAlt ?? openGraph?.images?.[0]?.alt} />
      ) }
    </>
  )
}

export function withPageProps<T>(page: PageProps, data: T) {
  return Object.assign(data ?? {}, { page }) as { page: PageProps } & T
}