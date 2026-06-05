import { uneval } from 'devalue'
import { getCookie } from 'hono/cookie'
import { isbot } from 'isbot'
import { StrictMode } from 'react'
import { renderToReadableStream, renderToString } from 'react-dom/server'
import type { AppLoadContext, EntryContext } from 'react-router'
import { ServerRouter } from 'react-router'
import { HonoAppContext, HonoAppContextProvider } from './context/hono'
import { injectIntoStream } from './lib/utils'

export default async function handleRequest(
  req: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  _loadContext: AppLoadContext
) {
  let shellRendered = false

  const { hono } = _loadContext
  const userAgent = req.headers.get('user-agent')
  const initState: Partial<HonoAppContext> = {
    lang: getCookie(hono, 'lang') ?? 'en',
  }

  const body = await renderToReadableStream(
    <StrictMode>
      <HonoAppContextProvider initState={initState as never}>
        <ServerRouter context={routerContext} url={req.url} />
      </HonoAppContextProvider>
    </StrictMode>
  , {
    onError(error: unknown) {
      responseStatusCode = 500
      // Log streaming rendering errors from inside the shell.  Don't log
      // errors encountered during initial shell rendering since they'll
      // reject and get logged in handleDocumentRequest.
      if (shellRendered) {
        console.error(error)
      }
    },
  })

  shellRendered = true

  // Ensure requests from bots and SPA Mode renders wait for all content to load before responding
  // https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
  if ((userAgent && isbot(userAgent)) || routerContext.isSpaMode) {
    await body.allReady
  }

  const state = renderToString(
    <script dangerouslySetInnerHTML={{ __html: `window.__ = ${uneval(initState)}` }}>
    </script>
  )

  const newBody = injectIntoStream(body, state, '</head>')
  responseHeaders.set('Content-Type', 'text/html')
  return new Response(newBody, {
    headers: responseHeaders,
    status: responseStatusCode,
  })
}