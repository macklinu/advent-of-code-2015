import * as path from 'path'
import * as fs from 'fs'

import { solvePartOne, solvePartTwo } from './'

test('solves part 1', async () => {
  let exampleInput = await readFile('example-input.txt')
  expect(solvePartOne(exampleInput)).toBe(12)

  let puzzleInput = await readFile('puzzle-input.txt')
  expect(solvePartOne(puzzleInput)).toBe(1371)
})

test('solves part 2', async () => {
  let exampleInput = await readFile('example-input.txt')
  expect(solvePartTwo(exampleInput)).toBe(19)

  let puzzleInput = await readFile('puzzle-input.txt')
  expect(solvePartTwo(puzzleInput)).toBe(2117)
})

function readFile(filename: string): Promise<string> {
  return fs.promises.readFile(path.join(__dirname, filename), 'utf8')
}
