import * as fs from 'fs'
import * as path from 'path'
import * as util from 'util'

import { calculateTotalSquareFeet } from './'

test('solves part 1', async () => {
  expect(calculateTotalSquareFeet('2x3x4')).toBe(58)
  expect(calculateTotalSquareFeet('1x1x10')).toBe(43)

  let puzzleInput = await getPuzzleInput()
  expect(calculateTotalSquareFeet(puzzleInput)).toBe(1598415)
})

async function getPuzzleInput(): Promise<string> {
  let readFile = util.promisify(fs.readFile)
  let pathToFile = path.join(__dirname, 'puzzle-input.txt')
  return await readFile(pathToFile, 'utf8')
}
