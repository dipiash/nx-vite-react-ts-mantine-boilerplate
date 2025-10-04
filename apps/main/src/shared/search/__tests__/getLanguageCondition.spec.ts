import { describe, expect, it } from 'vitest'

import { getLanguageCondition } from '../lib'

describe('getLanguageCondition', () => {
  it('returns empty string for undefined language', () => {
    expect(getLanguageCondition()).toBe('')
  })

  it('returns query fragment for provided language', () => {
    expect(getLanguageCondition('JavaScript')).toBe('language:JavaScript')
  })
})
