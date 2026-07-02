import { motion } from 'framer-motion'
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

const floatingImages = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=120&h=120&fit=crop',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=80&h=80&fit=crop',
  'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=90&h=90&fit=crop',
]

export function Hero() {
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
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-400/10 to-accent-500/20 rounded-full blur-3xl animate-pulse-soft" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/15">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop"
                  alt="Students learning English"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
              </div>

              {floatingImages.map((src, i) => (
                <FloatingElement
                  key={i}
                  className="absolute shadow-xl rounded-2xl overflow-hidden border-2 border-white dark:border-gray-800"
                  delay={i * 0.5}
                  duration={5 + i}
                  distance={12 + i * 3}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                    loading="lazy"
                  />
                </FloatingElement>
              ))}

              <FloatingElement className="absolute -top-6 -right-6" delay={0.3} distance={10}>
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
        </div>
      </div>
    </section>
  )
}
