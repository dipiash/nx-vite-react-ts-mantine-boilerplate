export const getRepositoryNameCondition = (repositoryName?: string) => (repositoryName ? `${repositoryName} in:name` : '')
