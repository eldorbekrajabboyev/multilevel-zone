import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
}

export function FloatingElement({ children, className = '', delay = 0, duration = 6, distance = 20 }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
