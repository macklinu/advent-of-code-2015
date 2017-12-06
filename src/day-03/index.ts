export function countHouses(input: string): number {
  let instructions: Direction[] = input.trim().split('') as Direction[]
  let housesVisitedTracker = instructions.reduce<Tracker>(
    ({ map, lastSantaCoordinate }, instruction) => {
      let determineNextCoordinate = instructionToCoordinateMapper(instruction)
      let coordinate = determineNextCoordinate(lastSantaCoordinate)

      return {
        map: makeNewMap(map, coordinate),
        lastSantaCoordinate: coordinate,
      }
    },
    {
      map: { '0,0': 1 },
      lastSantaCoordinate: { x: 0, y: 0 },
    }
  )

  return numHousesVisited(housesVisitedTracker)
}

export function countHousesWithRoboSanta(input: string): number {
  let instructions: Direction[] = input.trim().split('') as Direction[]
  let housesVisitedTracker = instructions.reduce<TrackerWithRoboSanta>(
    (
      { map, lastSantaCoordinate, lastRoboSantaCoordinate },
      instruction,
      index
    ) => {
      let isNormalSanta = index % 2 === 0
      let determineNextCoordinate = instructionToCoordinateMapper(instruction)
      let coordinate = determineNextCoordinate(
        isNormalSanta ? lastSantaCoordinate : lastRoboSantaCoordinate
      )

      return {
        map: makeNewMap(map, coordinate),
        lastSantaCoordinate: isNormalSanta ? coordinate : lastSantaCoordinate,
        lastRoboSantaCoordinate: isNormalSanta
          ? lastRoboSantaCoordinate
          : coordinate,
      }
    },
    {
      map: { '0,0': 2 },
      lastSantaCoordinate: { x: 0, y: 0 },
      lastRoboSantaCoordinate: { x: 0, y: 0 },
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
  lastSantaCoordinate: Coordinate
}

type TrackerWithRoboSanta = Tracker & { lastRoboSantaCoordinate: Coordinate }
