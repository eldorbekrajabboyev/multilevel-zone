import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { BookOpen, Headphones, Mic, Pen } from 'lucide-react'

const skills = [
  { icon: BookOpen, title: 'Reading', desc: "Matnlarni o'qish va tushunish", color: 'from-blue-500 to-cyan-400' },
  { icon: Headphones, title: 'Listening', desc: 'Audio materiallarni tinglab tushunish', color: 'from-emerald-500 to-teal-400' },
  { icon: Mic, title: 'Speaking', desc: "Og'zaki nutq va talaffuz", color: 'from-violet-500 to-purple-400' },
  { icon: Pen, title: 'Writing', desc: 'Yozma ishlar va insholar', color: 'from-orange-500 to-amber-400' },
]

export function CEFRPreparation() {
  return (
    <section id="cefr" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b1121]/50 dark:to-[#0b1121] overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection>
            <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">CEFR Tayyorgarlik</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
              CEFR Sertifikatiga{' '}
              <span className="gradient-text">Ishonchli Tayyorgarlik</span>
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              CEFR (Common European Framework of Reference for Languages) - bu Yevropa standarti
              bo'lib, dunyoning 100 dan ortiq mamlakatlarida tan olingan. Bizning maxsus dasturimiz
              sizni CEFR imtihoniga to'liq tayyorlaydi.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => (
                <div key={level} className="px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 font-semibold text-sm">
                  {level}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=600&fit=crop"
                  alt="CEFR Preparation"
                  className="w-full h-full object-cover img-hover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">95% Success Rate</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">CEFR imtihonida muvaffaqiyat</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            4 Ta Asosiy{' '}
            <span className="gradient-text">Ko'nikma</span>
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{skill.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{skill.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
