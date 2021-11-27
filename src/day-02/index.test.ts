import * as fs from 'fs'
import * as path from 'path'

import { createCalculator } from './'

test('solves part 1', async () => {
  let calculateTotalSquareFeet = createCalculator((total, [l, w, h]) => {
    let lw = l * w
    let wh = w * h
    let hl = h * l
    let shortestSide = Math.min.apply(Math, [lw, wh, hl])
    return total + (2 * lw + 2 * wh + 2 * hl + shortestSide)
  })
  expect(calculateTotalSquareFeet('2x3x4')).toBe(58)
  expect(calculateTotalSquareFeet('1x1x10')).toBe(43)

  let puzzleInput = await getPuzzleInput()
  expect(calculateTotalSquareFeet(puzzleInput)).toBe(1598415)
})

test('solves part 2', async () => {
  let calculateTotalRibbon = createCalculator((total, dimensions) => {
    // sort dimensions from least to greatest
    dimensions.sort((a, b) => a - b)

    let perimeter = 2 * (dimensions[0] + dimensions[1])
    let volume = dimensions.reduce((acc, next) => acc * next)

    return total + (perimeter + volume)
  })

  expect(calculateTotalRibbon('2x3x4')).toBe(34)
  expect(calculateTotalRibbon('1x1x10')).toBe(14)

  let puzzleInput = await getPuzzleInput()
  expect(calculateTotalRibbon(puzzleInput)).toBe(3812909)
})

function getPuzzleInput(): Promise<string> {
  let pathToFile = path.join(__dirname, 'puzzle-input.txt')
  return fs.promises.readFile(pathToFile, 'utf8')
}
