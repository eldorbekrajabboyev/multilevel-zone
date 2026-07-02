import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop', alt: 'English class' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop', alt: 'Student studying' },
  { src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop', alt: 'Writing exam' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop', alt: 'Students group' },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop', alt: 'Classroom' },
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop', alt: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop', alt: 'Group study' },
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop', alt: 'Student presentation' },
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextMobile = useCallback(() => {
    setDirection(1)
    setMobileIndex((prev) => (prev + 1) % images.length)
  }, [])

  const prevMobile = useCallback(() => {
    setDirection(-1)
    setMobileIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    if (selected !== null) return
    const interval = setInterval(nextMobile, 3500)
    return () => clearInterval(interval)
  }, [nextMobile, selected])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Gallery</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Markazimizdan{' '}
            <span className="gradient-text">Lavhalar</span>
          </h2>
        </AnimatedSection>

        {/* Desktop: masonry grid */}
        <div className="hidden sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelected(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(i) } }}
              aria-label={`${img.alt} - ${i + 1} / ${images.length}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">{i + 1} / {images.length}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked card carousel */}
        <div className="sm:hidden">
          <div className="relative w-full max-w-[21rem] aspect-[4/3] mx-auto">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={mobileIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelected(mobileIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(mobileIndex) } }}
                aria-label={`${images[mobileIndex].alt} - ${mobileIndex + 1} / ${images.length}`}
              >
                <img
                  src={images[mobileIndex].src}
                  alt={images[mobileIndex].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Mobile navigation */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <button
                onClick={prevMobile}
                className="w-8 h-8 rounded-full bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-md"
                aria-label="Oldingi"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {mobileIndex + 1} / {images.length}
              </span>
              <button
                onClick={nextMobile}
                className="w-8 h-8 rounded-full bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-md"
                aria-label="Keyingi"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
              onClick={() => setSelected(null)}
              aria-label="Yopish"
            >
              <X size={20} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); setSelected((prev) => (prev! - 1 + images.length) % images.length) }}
              aria-label="Oldingi rasm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
              onClick={(e) => { e.stopPropagation(); setSelected((prev) => (prev! + 1) % images.length) }}
              aria-label="Keyingi rasm"
            >
              <ChevronRight size={20} />
            </button>
            <motion.img
              key={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selected + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
