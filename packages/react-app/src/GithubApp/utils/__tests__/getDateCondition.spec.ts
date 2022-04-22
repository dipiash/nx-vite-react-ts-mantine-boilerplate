import { describe, it } from 'vitest'

import { getDateCondition } from '../getDateCondition'

describe('getDateCondition', () => {
  let year: number | string | undefined
  let month: number | string | undefined
  let day: number | string | undefined

  beforeEach(() => {
    const date = new Date()

    date.setDate(1)

    year = date.getFullYear()

    month = date.getMonth() + 1
    month = month > 9 ? month : `0${month}`

    day = date.getDate()
    day = day > 9 ? day : `0${day}`
  })

  it('getDateCondition =>', () => {
    const getDateSearchDefault = getDateCondition()

    expect(getDateSearchDefault).toBe(`created:>=${year}-${month}-${day}`)
  })

  it('getDateCondition <=', () => {
    const getDateSearchLate = getDateCondition('<=')

    expect(getDateSearchLate).toBe(`created:<=${year}-${month}-${day}`)
  })

  it('getDateCondition <= and date exists with month < 10', () => {
    const getDateSearchLate = getDateCondition('<=', new Date('2022-06-01'))

    expect(getDateSearchLate).toBe(`created:<=2022-06-01`)
  })

  it('getDateCondition <= and date exists with day < 10', () => {
    const getDateSearchLate = getDateCondition('<=', new Date('2022-11-10'))

    expect(getDateSearchLate).toBe(`created:<=2022-11-01`)
  })

  it('getDateCondition <= and date exists with day < 10 and month < 10', () => {
    const getDateSearchLate = getDateCondition('<=', new Date('2022-06-09'))

    expect(getDateSearchLate).toBe(`created:<=2022-06-01`)
  })
})
