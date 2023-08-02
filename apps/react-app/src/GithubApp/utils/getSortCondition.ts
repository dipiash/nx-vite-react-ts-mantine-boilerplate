export const getSortCondition = (field: string, sortBy: 'desc' | 'asc' = 'desc') => {
  if (!field) {
    return ''
  }

  return `sort:${field}-${sortBy}`
}
