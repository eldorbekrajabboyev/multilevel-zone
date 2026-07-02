import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Play, BookOpen, Award, Users, Globe } from 'lucide-react'
import { TypingEffect } from '../ui/TypingEffect'
import { FloatingElement } from '../ui/FloatingElement'
import { AnimatedCounter } from '../ui/AnimatedCounter'

const stats = [
  { icon: Users, label: 'Talabalar', end: 1000, suffix: '+' },
  { icon: Award, label: 'Muvaffaqiyat', end: 95, suffix: '%' },
  { icon: BookOpen, label: "O'qituvchilar", end: 25, suffix: '+' },
  { icon: Globe, label: 'Filiallar', end: 3, suffix: '' },
]

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 150, damping: 20 })
  const glareX = useSpring(useTransform(mouseX, [-150, 150], [0, 100]), { stiffness: 150, damping: 20 })
  const glareY = useSpring(useTransform(mouseY, [-150, 150], [0, 100]), { stiffness: 150, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white dark:from-[#0b1121] dark:via-[#0f172a] dark:to-[#0b1121]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-[600px] h-[600px] bg-primary-500 -top-48 -left-48" />
        <div className="blob w-[400px] h-[400px] bg-secondary-400 top-1/2 -right-24" />
        <div className="blob w-[300px] h-[300px] bg-accent-500 bottom-0 left-1/3" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22grid%22 width=%2260%22 height=%2260%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 60 0 L 0 0 0 60%22 fill=%22none%22 stroke=%22rgba(37,99,235,0.03)%22 stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-50" />
      </div>

      <div className="container-main px-4 sm:px-6 lg:px-8 py-28 sm:py-32 lg:py-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-500/10 brand-hero-badge border border-primary-200 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              Chegirma 2026
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
              <span className="text-gray-900 dark:text-white">Ingliz Tilini</span>
              <br />
              <span className="gradient-text">Zamonaviy Usulda</span>
              <br />
              <span className="text-gray-900 dark:text-white">O'rganing</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-4 leading-relaxed">
              <TypingEffect
                texts={[
                  'CEFR sertifikatiga eng tez yo\'l',
                  "95% muvaffaqiyat ko'rsatkichi",
                  "Online va offline ta'lim",
                ]}
                speed={60}
                deleteSpeed={30}
                pauseTime={2500}
              />
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="#courses"
                className="gradient-btn px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-2.5 group"
              >
                Boshlash
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="https://t.me/Multilevel_zone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold text-base hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
              >
                <Play size={18} className="text-primary-500" />
                Bepul Sinov Darsi
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-14 pt-8 border-t border-gray-200 dark:border-gray-700/50">
              {stats.map(({ icon: Icon, label, end, suffix }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon size={16} className="text-primary-500 brand-stat-icon" />
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      <AnimatedCounter end={end} suffix={suffix} />
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-400/10 to-accent-500/20 rounded-full blur-3xl animate-pulse-soft" />

              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformPerspective: 800 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative cursor-pointer"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/20 border border-white/30 dark:border-white/10">
                  <img
                    src="/images/creater.jpg"
                    alt="Otabek Saidakhmadovich — Founder of MultiLevel Zone"
                    className="w-full aspect-[4/5] object-cover object-top"
                    loading="eager"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: useTransform(
                        [glareX, glareY],
                        ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
                      ),
                    }}
                  />

                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 dark:ring-white/5" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/90 text-[10px] sm:text-xs font-semibold mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                      Founder
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1">
                      Otabek Saidakhmadovich
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium">
                      Founder of MultiLevel Zone
                    </p>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mt-3" />
                  </div>
                </div>

                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 blur-xl opacity-60 -z-10" />

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-primary-500/15 blur-2xl rounded-full" />
              </motion.div>

              <FloatingElement className="absolute -top-5 -right-5" delay={0.3} distance={10}>
                <div className="glass brand-float-glow rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">24/7 Support</span>
                </div>
              </FloatingElement>

              <FloatingElement className="absolute -bottom-4 -left-8" delay={0.8} distance={12}>
                <div className="glass brand-float-glow rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl">
                  <Award size={16} className="text-primary-500 brand-stat-icon" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">CEFR Certified</span>
                </div>
              </FloatingElement>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:hidden flex justify-center -mt-4"
          >
            <div className="relative w-48 sm:w-56">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/15 via-secondary-400/10 to-accent-500/15 rounded-full blur-2xl" />
              <div className="relative rounded-2xl overflow-xl shadow-xl shadow-primary-500/15 border border-white/30 dark:border-white/10">
                <img
                  src="/images/creater.jpg"
                  alt="Otabek Saidakhmadovich — Founder of MultiLevel Zone"
                  className="w-full aspect-square object-cover object-top rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 dark:ring-white/5" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl">
                  <p className="text-white text-xs font-bold text-center">Otabek Saidakhmadovich</p>
                  <p className="text-white/60 text-[9px] text-center">Founder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
