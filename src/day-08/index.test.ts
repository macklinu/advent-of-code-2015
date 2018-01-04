import * as path from 'path'
import * as fs from 'fs'
import * as util from 'util'

import { solvePuzzle } from './'

test('solves part 1', async () => {
  let exampleInput = await readFile('example-input.txt')
  expect(solvePuzzle(exampleInput)).toBe(12)

  let puzzleInput = await readFile('puzzle-input.txt')
  expect(solvePuzzle(puzzleInput)).toBe(1371)
})

async function readFile(filename: string): Promise<string> {
  let read = util.promisify(fs.readFile)
  return await read(path.join(__dirname, filename), 'utf8')
}
