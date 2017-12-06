export function createCalculator(
  reducer: (total: number, dimensions: number[]) => number
) {
  return function(input: string): number {
    return input
      .split('\n')
      .filter(Boolean)
      .map(str => str.split('x').map(Number))
      .reduce(reducer, 0)
  }
}
