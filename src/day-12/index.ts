export function findSumOfAllNumbers(input: string): number {
  let match = input.match(/-?[0-9]+/g) || []
  return match.reduce((sum, m) => sum + Number(m), 0)
}
