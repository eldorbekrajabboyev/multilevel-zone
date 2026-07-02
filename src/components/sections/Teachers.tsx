import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { teachers } from '../../data/teachers'
import { Send, Globe, Briefcase } from 'lucide-react'

const socialIcons: Record<string, typeof Send> = {
  telegram: Send,
  instagram: Globe,
  linkedin: Briefcase,
}

export function Teachers() {
  const [selectedId, setSelectedId] = useState(teachers[0].id)
  const selectedTeacher = teachers.find((t) => t.id === selectedId) || teachers[0]

  return (
    <section id="teachers" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b1121]/50 dark:to-[#0b1121] overflow-hidden">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Jamoamiz</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Tajribali{' '}
            <span className="gradient-text">O'qituvchilar</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
            Har bir o'qituvchimiz o'z sohasining mutaxassisi va xalqaro sertifikatlarga ega.
          </p>
        </AnimatedSection>

        {/* Desktop: 4 teacher cards in grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="group relative rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="aspect-[3/4]">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="px-2.5 py-0.5 rounded-full bg-primary-500 text-white text-xs font-bold mb-2 inline-block">
                  CEFR C1
                </span>
                <h3 className="text-lg font-bold text-white mb-0.5">{teacher.name}</h3>
                <p className="text-primary-300 text-sm font-medium">{teacher.role}</p>
                <div className="flex gap-2 mt-3">
                  {teacher.socials.map((s) => {
                    const Icon = socialIcons[s.name] || Send
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                        aria-label={s.name}
                      >
                        <Icon size={14} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: compact avatar selector + single card */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-5">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-4">
              {teachers.map((teacher, i) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <button
                    onClick={() => setSelectedId(teacher.id)}
                    className={`relative w-14 h-14 rounded-full overflow-hidden border-[3px] transition-all duration-300 shadow-md ${
                      selectedId === teacher.id
                        ? 'border-primary-500 dark:border-primary-400 scale-110 shadow-lg shadow-primary-500/25'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            key={selectedTeacher.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto"
          >
            <div className="aspect-[3/4]">
              <img
                src={selectedTeacher.image}
                alt={selectedTeacher.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="px-2.5 py-0.5 rounded-full bg-primary-500 text-white text-xs font-bold mb-2 inline-block">
                CEFR C1
              </span>
              <h3 className="text-lg font-bold text-white mb-0.5">{selectedTeacher.name}</h3>
              <p className="text-primary-300 text-sm font-medium">{selectedTeacher.role}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
