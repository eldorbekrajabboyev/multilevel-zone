import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'

const certificateModules = import.meta.glob('/public/images/cer/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const certificates = Object.entries(certificateModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

const ROTATION_ANGLES = [-6, 3, -2, 5, -4, 2, -3, 6]
const OFFSET_X = [-12, 8, -6, 10, -8, 4, -10, 6]
const OFFSET_Y = [4, -3, 5, -2, 6, -4, 3, -5]

export function CertificateShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const rotateNext = useCallback(() => {
    if (isAnimating || certificates.length <= 1) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length)
      setIsAnimating(false)
    }, 600)
  }, [isAnimating])

  useEffect(() => {
    if (certificates.length <= 1) return
    const interval = setInterval(rotateNext, 4000)
    return () => clearInterval(interval)
  }, [rotateNext])

  const handleClick = () => {
    rotateNext()
  }

  if (certificates.length === 0) return null

  const visibleCount = Math.min(certificates.length, 4)

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-main px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Sertifikatlar</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Xalqaro{' '}
            <span className="gradient-text">Sertifikatlar</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            CEFR standartlariga mos xalqaro sertifikatlar bilan ta'lim oling.
          </p>
        </AnimatedSection>

        <div className="flex justify-center">
          <div
            className="relative w-full max-w-[19rem] sm:max-w-sm md:max-w-md aspect-[3/4] cursor-pointer select-none"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
            aria-label="Keyingi sertifikat"
          >
            {certificates.map((src, i) => {
              const relativeIndex = (i - currentIndex + certificates.length) % certificates.length
              if (relativeIndex >= visibleCount) return null

              const rotation = ROTATION_ANGLES[i % ROTATION_ANGLES.length]
              const offsetX = OFFSET_X[i % OFFSET_X.length]
              const offsetY = OFFSET_Y[i % OFFSET_Y.length]
              const isTop = relativeIndex === 0

              return (
                <AnimatePresence key={i}>
                  <motion.div
                    initial={isTop ? { opacity: 0, y: 40, scale: 0.95 } : false}
                    animate={{
                      opacity: isTop ? 1 : 1 - relativeIndex * 0.15,
                      y: isTop ? 0 : relativeIndex * 12,
                      x: offsetX * (1 + relativeIndex * 0.3),
                      scale: isTop ? 1 : 1 - relativeIndex * 0.03,
                      rotate: rotation * (1 + relativeIndex * 0.2),
                      zIndex: visibleCount - relativeIndex,
                    }}
                    exit={{ opacity: 0, y: -60, scale: 0.9 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="absolute inset-0"
                    style={{
                      transformOrigin: 'center bottom',
                    }}
                  >
                    <div
                      className={`relative w-full h-full rounded-2xl overflow-hidden transition-shadow duration-500 ${
                        isTop
                          ? 'shadow-2xl shadow-black/20 dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/10'
                          : 'shadow-lg shadow-black/10 dark:shadow-black/20'
                      }`}
                    >
                      <img
                        src={src}
                        alt={`CEFR Sertifikat ${(i % certificates.length) + 1}`}
                        className="w-full h-full object-cover"
                        loading={isTop ? 'eager' : 'lazy'}
                        draggable={false}
                      />
                      {isTop && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              )
            })}

            {certificates.length > 1 && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
                {certificates.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? 'bg-primary-500 w-6'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
