import { expect, test } from 'vitest'
import { somma } from './somma'

test('2 + 3 fa 5', () => {
  expect(somma(2, 3)).toBe(5)
})
