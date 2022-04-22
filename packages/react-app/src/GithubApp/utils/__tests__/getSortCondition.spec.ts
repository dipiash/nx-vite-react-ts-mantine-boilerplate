import { describe, it } from 'vitest'

import { getSortCondition } from '../getSortCondition'

describe('getSortCondition', () => {
  it('getSortCondition with empty param', () => {
    expect(getSortCondition('')).toBe('')
  })

  it('getSortCondition with field param and default sortBy', () => {
    expect(getSortCondition('stars')).toBe('sort:stars-desc')
  })

  it('getSortCondition with field param and sort by asc', () => {
    expect(getSortCondition('stars', 'asc')).toBe('sort:stars-asc')
  })
})
