import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { testimonials } from '../../data/testimonials'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b1121]/50 dark:to-[#0b1121] overflow-hidden">
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-main px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Fikrlar</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Talabalarimiz{' '}
            <span className="gradient-text">Fikrlari</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto relative">
          <div className="min-h-[300px] sm:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="glass-card rounded-2xl p-5 sm:p-10 w-full max-w-[21rem] sm:max-w-none shadow-lg"
              >
                <Quote size={28} className="text-primary-500/20 mb-3 brand-stat-icon sm:w-8 sm:h-8" />

                <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400 brand-star sm:w-4 sm:h-4" />
                  ))}
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
                  </div>
                  <div className="ml-auto px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-400 text-white text-[10px] sm:text-xs font-semibold">
                    {t.achievement}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-primary-500/30 hover:text-primary-500 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-secondary-400'
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-primary-500/30 hover:text-primary-500 transition-all"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
