import puzzleInput from './puzzleInput'
import { findSumOfAllNumbers, findSumOfAllNumbersIgnoringRed } from './index'

test('solves part 1', () => {
  expect(findSumOfAllNumbers(puzzleInput)).toBe(156366)
})

test('solves part 2', () => {
  expect(findSumOfAllNumbersIgnoringRed(puzzleInput)).toBe(96852)
})
