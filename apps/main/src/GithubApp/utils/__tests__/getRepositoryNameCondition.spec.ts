import { describe, it } from 'vitest'

import { getRepositoryNameCondition } from '../getRepositoryNameCondition'

describe('getRepositoryNameCondition', () => {
  it('getRepositoryNameCondition without params', () => {
    expect(getRepositoryNameCondition()).toBe('')
  })

  it('getRepositoryNameCondition with empty param', () => {
    expect(getRepositoryNameCondition('')).toBe('')
  })

  it('getRepositoryNameCondition with valid param', () => {
    expect(getRepositoryNameCondition('react')).toBe('react in:name')
  })
})
