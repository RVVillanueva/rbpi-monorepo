export function getRandomIntWebCrypto(n: number, m: number) {
  const range = m - n + 1;
  const array = new Uint32Array(1);
  
  crypto.getRandomValues(array);
  
  return n + (array[0] % range);
}