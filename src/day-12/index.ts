import is from '@sindresorhus/is'

export function findSumOfAllNumbers(input: string): number {
  let match = input.match(/-?[0-9]+/g) || []
  return match.reduce((sum, m) => sum + Number(m), 0)
}

export function findSumOfAllNumbersIgnoringRed(input: string): number {
  function traverseNode(node: any): number {
    if (is.number(node)) {
      return node
    }
    if (is.array(node)) {
      return node.reduce((sum, n) => sum + traverseNode(n), 0)
    }
    if (is.object(node)) {
      let values = Object.values(node)
      return values.includes('red') ? 0 : traverseNode(values)
    }
    return 0
  }

  let json = JSON.parse(input)
  return traverseNode(json)
}
