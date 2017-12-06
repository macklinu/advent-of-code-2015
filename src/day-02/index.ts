export function calculateTotalSquareFeet(input: string): number {
  return input
    .split('\n')
    .filter(Boolean)
    .map(str => str.split('x').map(Number))
    .reduce((total, [l, w, h]) => {
      let lw = l * w
      let wh = w * h
      let hl = h * l
      let shortestSide = Math.min.apply(Math, [lw, wh, hl])
      return total + (2 * lw + 2 * wh + 2 * hl + shortestSide)
    }, 0)
}
