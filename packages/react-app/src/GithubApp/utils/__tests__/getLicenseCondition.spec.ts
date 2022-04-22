import { describe, it } from 'vitest'

import { getLicenseCondition } from '../getLicenseCondition'

describe('getLicenseCondition', () => {
  it('getLicenseCondition without params', () => {
    expect(getLicenseCondition()).toBe('')
  })

  it('getLicenseCondition with empty param', () => {
    expect(getLicenseCondition('')).toBe('')
  })

  it('getLicenseCondition with valid param', () => {
    expect(getLicenseCondition('mit')).toBe('license:mit')
  })
})
