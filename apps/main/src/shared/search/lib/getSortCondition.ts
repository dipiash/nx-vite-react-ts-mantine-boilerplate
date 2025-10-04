export const getSortCondition = (field: string, sortBy: 'asc' | 'desc' = 'desc') => {
  if (!field) {
    return ''
  }

  return `sort:${field}-${sortBy}`
}
