import { describe, expect, it } from 'vitest'

import { getSortCondition } from '../lib'

describe('getSortCondition', () => {
  it('returns empty string when field is not provided', () => {
    expect(getSortCondition('')).toBe('')
  })

  it('returns descending sort by default', () => {
    expect(getSortCondition('stars')).toBe('sort:stars-desc')
  })

  it('returns ascending sort when specified', () => {
    expect(getSortCondition('stars', 'asc')).toBe('sort:stars-asc')
  })
})
