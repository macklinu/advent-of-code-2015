import * as path from 'path'
import * as fs from 'fs'
import * as util from 'util'

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

async function readFile(filename: string): Promise<string> {
  let read = util.promisify(fs.readFile)
  return await read(path.join(__dirname, filename), 'utf8')
}
