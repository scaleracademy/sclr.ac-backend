
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
const DIGIT_MAP: { [x: string]: number } = {}

ALPHABET.split('').forEach((d, i) => {
  DIGIT_MAP[d] = i
})

function radix64toInt (r64num: string): number {
  let base10num = 0
  r64num.split('').reverse().forEach((d, i) => {
    base10num += (DIGIT_MAP[d] * Math.pow(64, i))
  })
  return base10num
}

function intToRadix64 (base10num: number): string {
  const r64Chars = []
  let d = base10num
  if (d === 0) return '0'
  while (d > 0) {
    const r = d % 64
    d = Math.floor(d / 64)
    r64Chars.push(ALPHABET.charAt(r))
  }
  return r64Chars.reverse().join('')
}

export {
  radix64toInt,
  intToRadix64,
}
