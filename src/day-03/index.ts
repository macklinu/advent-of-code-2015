export function countHouses(input: string): number {
  let instructions: Direction[] = input.trim().split('') as Direction[]
  let housesVisitedTracker = instructions.reduce<Tracker>(
    ({ map, lastCoordinate }, instruction) => {
      let determineNextCoordinate = instructionToCoordinateMapper(instruction)
      let coordinate = determineNextCoordinate(lastCoordinate)

      return {
        map: makeNewMap(map, coordinate),
        lastCoordinate: coordinate,
      }
    },
    {
      map: { '0,0': 1 },
      lastCoordinate: { x: 0, y: 0 },
    }
  )

  return numHousesVisited(housesVisitedTracker)
}

function instructionToCoordinateMapper(
  instruction: Direction
): (coordinate: Coordinate) => Coordinate {
  switch (instruction) {
    case Direction.North:
      return ({ x, y }) => ({ x, y: y + 1 })
    case Direction.South:
      return ({ x, y }) => ({ x, y: y - 1 })
    case Direction.East:
      return ({ x, y }) => ({ x: x + 1, y })
    case Direction.West:
      return ({ x, y }) => ({ x: x - 1, y })
    default:
      throw new Error('Invalid direction')
  }
}

function makeNewMap(oldMap: CountedSet, { x, y }: Coordinate): CountedSet {
  let key = `${x},${y}`
  return Object.assign(oldMap, {
    [key]: oldMap[key] ? oldMap[key] + 1 : 1,
  })
}

function numHousesVisited(tracker: Tracker): number {
  return Object.keys(tracker.map).length
}

enum Direction {
  North = '^',
  South = 'v',
  East = '>',
  West = '<',
}

type CountedSet = { [key: string]: number }

interface Coordinate {
  x: number
  y: number
}
interface Tracker {
  map: CountedSet
  lastCoordinate: Coordinate
}
