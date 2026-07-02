import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
