export const getDateCondition = (condition = '>=', date = new Date()) => {
  date.setDate(1)

  const year = date.getFullYear()

  let month: number | string = date.getMonth() + 1

  month = month > 9 ? month : `0${month}`

  let day: number | string = date.getDate()

  day = day > 9 ? day : `0${day}`

  return `created:${condition}${year}-${month}-${day}`
}
