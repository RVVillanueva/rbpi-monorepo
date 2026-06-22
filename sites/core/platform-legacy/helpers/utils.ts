export function getRandomIntWebCrypto(n: number, m: number) {
  const range = m - n + 1;
  const array = new Uint32Array(1);
  
  crypto.getRandomValues(array);
  
  return n + (array[0] % range);
}

export const getBase64FileMeta = (base64: string): { contentType: string; ext: string } => {
  if (base64.startsWith('/9j/')) return { contentType: 'image/jpeg', ext: 'jpg' }
  if (base64.startsWith('iVBOR')) return { contentType: 'image/png', ext: 'png' }
  if (base64.startsWith('R0lGO')) return { contentType: 'image/gif', ext: 'gif' }
  if (base64.startsWith('UklGR')) return { contentType: 'image/webp', ext: 'webp' }
  if (base64.startsWith('Qk0')) return { contentType: 'image/bmp', ext: 'bmp' }
  return { contentType: 'application/octet-stream', ext: 'bin' }
}
