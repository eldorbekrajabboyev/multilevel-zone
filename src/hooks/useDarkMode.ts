import { useState, useEffect, useCallback } from 'react'

export type Theme = 'light' | 'dark' | 'brand'

export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark' || saved === 'brand') return saved
    return 'brand'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'brand')
    if (theme !== 'light') {
      root.classList.add(theme)
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme(prev => {
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'brand'
      return 'light'
    })
  }, [])

  return { theme, dark: theme === 'dark', toggle }
}
