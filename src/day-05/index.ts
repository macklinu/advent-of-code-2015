export function isNice(input: string): boolean {
  return (
    containsAtLeastThreeVowels(input) &&
    hasDoubleLetters(input) &&
    !containsDisallowedSubstring(input)
  )
}

function containsAtLeastThreeVowels(input: string): boolean {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let occurrences = input
    .split('')
    .reduce((total, char) => (vowels.includes(char) ? total + 1 : total), 0)
  return occurrences >= 3
}

function hasDoubleLetters(input: string): boolean {
  let chars = input.split('')
  for (let index = 0; index < chars.length; index++) {
    let curr = chars[index]
    let next = chars[index + 1]
    if (curr === next) {
      return true
    }
  }

  return false
}

function containsDisallowedSubstring(input: string): boolean {
  let disallowedSubstrings = ['ab', 'cd', 'pq', 'xy']
  return disallowedSubstrings.some(substring => input.includes(substring))
}
