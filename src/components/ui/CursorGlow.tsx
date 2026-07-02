import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-50 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary-500/10 via-secondary-400/10 to-accent-500/10 blur-3xl transition-opacity duration-300 hidden lg:block"
      aria-hidden="true"
    />
  )
}
