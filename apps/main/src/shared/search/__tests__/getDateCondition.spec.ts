import { beforeEach, describe, expect, it } from 'vitest'

import { getDateCondition } from '../lib'

type DateVariantType = number | string | undefined

describe('getDateCondition', () => {
  let year: DateVariantType
  let month: DateVariantType
  let day: DateVariantType

  beforeEach(() => {
    const date = new Date()

    date.setDate(1)
    year = date.getFullYear()
    month = date.getMonth() + 1
    month = month > 9 ? month : `0${month}`
    day = date.getDate()
    day = day > 9 ? day : `0${day}`
  })

  it('returns default >= condition for current date', () => {
    const getDateSearchDefault = getDateCondition()

    expect(getDateSearchDefault).toBe(`created:>=${year}-${month}-${day}`)
  })

  it('supports custom comparison operator', () => {
    const getDateSearchLate = getDateCondition('<=')

    expect(getDateSearchLate).toBe(`created:<=${year}-${month}-${day}`)
  })

  it('handles dates with month < 10', () => {
    const getDateSearchLate = getDateCondition('<=', new Date('2022-06-01'))

    expect(getDateSearchLate).toBe('created:<=2022-06-01')
  })

  it('handles dates with day < 10', () => {
    const getDateSearchLate = getDateCondition('<=', new Date('2022-11-10'))

    expect(getDateSearchLate).toBe('created:<=2022-11-01')
  })

  it('handles dates with day < 10 and month < 10', () => {
    const getDateSearchLate = getDateCondition('<=', new Date('2022-06-09'))

    expect(getDateSearchLate).toBe('created:<=2022-06-01')
  })
})
