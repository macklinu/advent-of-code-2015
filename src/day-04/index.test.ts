import { lowestNumberForSecretKey } from './'

let puzzleInput = 'yzbqklnj'

// Test takes a while to run. Uncomment to verify answer.
test.skip('solves part 1', () => {
  expect(
    lowestNumberForSecretKey(puzzleInput, (str) => str.startsWith('00000'))
  ).toBe(282749)
})

// Test takes a while to run. Uncomment to verify answer.
test.skip('solves part 2', () => {
  expect(
    lowestNumberForSecretKey(puzzleInput, (str) => str.startsWith('000000'))
  ).toBe(9962624)
})
