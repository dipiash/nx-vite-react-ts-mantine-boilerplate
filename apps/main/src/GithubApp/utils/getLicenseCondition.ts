export const getLicenseCondition = (license?: string) => {
  if (!license || license === ' ') {
    return ''
  }

  return `license:${license}`
}
