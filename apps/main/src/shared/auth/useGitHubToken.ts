import { useCallback } from 'react'

export const useGitHubToken = () => {
  const isTokenExist = Boolean(import.meta.env.VITE_GITHUB_TOKEN || localStorage.getItem('token'))

  const handleUpdateToken = useCallback(() => {
    const token = prompt('Enter your Github personal access token to begin interacting with the API')

    localStorage.setItem('token', token ?? '')
    globalThis.location.reload()
  }, [])

  // Immediately ask for a token if none exists.  This mirrors the behavior
  // of the original useInputTokenForGraphql hook.
  if (!isTokenExist) {
    handleUpdateToken()
  }

  return { handleUpdateToken, isTokenExist }
}
