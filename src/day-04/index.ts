import * as md5 from 'md5'

export function lowestNumberForSecretKey(
  secretKey: string,
  predicate: (value: string) => boolean
): number {
  let i = 0
  while (!predicate(md5(secretKey + ++i)));
  return i
}
