export function createNiceChecker(predicate: (string: string) => boolean) {
  return function (input: string): boolean {
    return predicate(input)
  }
}
