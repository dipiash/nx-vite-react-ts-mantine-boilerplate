import { describe, it } from 'vitest'

import { getLanguageCondition } from '../getLanguageCondition'

describe('getLanguageCondition', () => {
  it('getLanguageCondition without params', () => {
    expect(getLanguageCondition()).toBe('')
  })

  it('getLanguageCondition with empty param', () => {
    expect(getLanguageCondition('')).toBe('')
  })

  it('getLanguageCondition with field param and default sortBy', () => {
    expect(getLanguageCondition('JavaScript')).toBe('language:JavaScript')
  })
})
