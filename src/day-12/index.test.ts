import puzzleInput from './puzzleInput'
import { findSumOfAllNumbers } from './index'

test('solves part 1', () => {
	expect(findSumOfAllNumbers(puzzleInput)).toBe(156366)
})
