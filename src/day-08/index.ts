export function solvePartOne(input: string): number {
  return parseInput(input).reduce((sum, str) => {
    return sum + (str.length - eval(str).length)
  }, 0)
}

export function solvePartTwo(input: string): number {
  return parseInput(input).reduce((sum, str) => {
    return sum + (JSON.stringify(str).length - str.length)
  }, 0)
}

let parseInput = (input: string): string[] => input.split('\n').filter(Boolean)
