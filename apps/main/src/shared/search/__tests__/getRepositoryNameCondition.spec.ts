import { describe, expect, it } from 'vitest'

import { getRepositoryNameCondition } from '../lib'

describe('getRepositoryNameCondition', () => {
  it('returns empty string when repository name is undefined', () => {
    expect(getRepositoryNameCondition()).toBe('')
  })

  it('returns query fragment when repository name is provided', () => {
    expect(getRepositoryNameCondition('react')).toBe('react in:name')
  })
})
