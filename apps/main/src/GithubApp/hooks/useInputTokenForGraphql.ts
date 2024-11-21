import { useCallback } from 'react'

export const useInputTokenForGraphql = () => {
  const isTokenExist = Boolean(import.meta.env.VITE_GITHUB_TOKEN || localStorage.getItem('token'))

  const handleUpdateToken = useCallback(() => {
    const token = prompt('Введите ваш personal-access-token от Github, чтобы начать взаимодействие с API')

    localStorage.setItem('token', token ?? '')
    globalThis.location.reload()
  }, [])

  if (!isTokenExist) {
    handleUpdateToken()
  }

  return { isTokenExist, handleUpdateToken }
}
