export const getLanguageCondition = (lang?: string) => {
  if (!lang) {
    return ''
  }

  return `language:${lang}`
}
