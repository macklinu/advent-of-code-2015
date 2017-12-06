export function determineFloorFromInstructions(input: string): number {
  return toArray(input).reduce(
    (floor, instruction) => (instruction === '(' ? floor + 1 : floor - 1),
    0
  )
}

export function determinePositionOfEnteringBasement(input: string): number {
  let instructions = toArray(input)
  let floor = 0

  for (let index = 0; index < instructions.length; index++) {
    let instruction = instructions[index]
    floor = instruction === '(' ? floor + 1 : floor - 1
    if (floor === -1) {
      return index + 1
    }
  }
  return -1
}

function toArray(input: string): string[] {
  return input.split('').filter(Boolean)
}
