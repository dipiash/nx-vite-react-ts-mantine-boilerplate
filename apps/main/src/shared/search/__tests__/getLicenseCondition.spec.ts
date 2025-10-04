import { describe, expect, it } from 'vitest'

import { getLicenseCondition } from '../lib'

describe('getLicenseCondition', () => {
  it('returns empty string for undefined license', () => {
    expect(getLicenseCondition()).toBe('')
  })

  it('returns empty string for blank license', () => {
    expect(getLicenseCondition(' ')).toBe('')
  })

  it('returns query fragment for provided license', () => {
    expect(getLicenseCondition('mit')).toBe('license:mit')
  })
})
