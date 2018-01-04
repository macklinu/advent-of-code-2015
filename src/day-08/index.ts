export function solvePuzzle(input: string): number {
  let strings = input.split('\n').filter(Boolean)
  return strings.reduce((sum, str) => {
    return sum + (str.length - eval(str).length)
  }, 0)
}
