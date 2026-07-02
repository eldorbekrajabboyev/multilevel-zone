import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Star, ArrowRight, Zap, BookOpen, Award } from 'lucide-react'
import { courses } from '../../data/courses'

const courseIcons: Record<string, typeof BookOpen> = {
  elementary: Zap,
  intermediate: BookOpen,
  'cefr-preparation': Award,
}

export function Courses() {
  const popularCourse = courses.find((c) => c.popular)
  const otherCourses = courses.filter((c) => !c.popular || c.id !== popularCourse?.id)
  const all = popularCourse ? [popularCourse, ...otherCourses] : otherCourses

  return (
    <section id="courses" className="relative py-10 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container-main px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Kurslar</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Barcha Darajalar Uchun{' '}
            <span className="gradient-text">Kurslar</span>
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            A1 dan C1 gacha CEFR tayyorgarlik. Sizga mos kursni toping.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 items-stretch">
          {all.map((course, i) => {
            const Icon = courseIcons[course.id] || BookOpen
            const isPopular = course.popular
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="group relative rounded-xl overflow-hidden flex flex-col"
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative bg-white dark:bg-[#111827] group-hover:bg-transparent rounded-xl p-7 sm:p-10 flex flex-col h-full border border-gray-100 dark:border-gray-800/50 group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {isPopular ? <Star size={18} className="text-white fill-white" /> : <Icon size={18} className="text-white" />}
                    </div>
                    {isPopular ? (
                      <span className="px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10 group-hover:bg-white/10 text-primary-600 dark:text-primary-400 group-hover:text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-colors duration-300">
                        Popular
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-white/15 text-gray-600 dark:text-gray-400 group-hover:text-white text-[9px] sm:text-[10px] font-bold transition-colors duration-300">
                        {course.level}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300 leading-tight mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 group-hover:text-white/60 transition-colors duration-300 mb-4">
                    {course.duration}
                  </p>

                  <div className="mt-auto">
                    <div className="text-sm sm:text-base font-black text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300 mb-4">
                      {course.price}
                    </div>
                    <a
                      href={course.link || '#contact'}
                      target={course.link ? '_blank' : undefined}
                      rel={course.link ? 'noopener noreferrer' : undefined}
                      className={`${isPopular ? 'gradient-btn' : 'border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white group-hover:bg-white group-hover:text-primary-600 group-hover:border-transparent'} w-full px-3 py-2.5 sm:py-3 rounded-lg text-[10px] sm:text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all duration-300`}
                    >
                      {isPopular || i === 1 ? 'Ro\'yxatdan O\'tish' : 'Batafsil'}
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
