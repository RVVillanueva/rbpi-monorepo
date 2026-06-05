
// Used for injecting content into a stream, such as for modifying HTML responses on the fly.
export function injectIntoStream(stream: ReadableStream, injection: string, before: string): ReadableStream {
  const encoder = new TextEncoder()
  const decoder = new TextDecoder()
  const { readable, writable } = new TransformStream({
    transform(chunk, controller) {
      const text = decoder.decode(chunk, { stream: true })
      if (text.includes(before)) {
        controller.enqueue(encoder.encode(text.replace(before, `${injection}${before}`)))
      } else {
        controller.enqueue(chunk)
      }
    }
  })

  stream.pipeTo(writable)
  return readable
}