export const getLicenseCondition = (license?: string) => {
  if (!license) {
    return ''
  }

  return `license:${license}`
}
