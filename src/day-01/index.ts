export function determineFloorFromInstructions(input: string): number {
  return input
    .split('')
    .filter(Boolean)
    .reduce((num, str) => (str === '(' ? num + 1 : num - 1), 0)
}
