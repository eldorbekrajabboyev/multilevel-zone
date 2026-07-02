import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Monitor, Wifi, Clock, Gift } from 'lucide-react'

const benefits = [
  { icon: Monitor, title: 'Zamonaviy Platforma', desc: 'Zoom va Google Meet orqali jonli darslar', color: 'from-blue-500 to-cyan-400' },
  { icon: Wifi, title: '24/7 Kirish Imkoniyati', desc: "Yozib olingan darslarni istalgan vaqtda ko'ring", color: 'from-emerald-500 to-teal-400' },
  { icon: Clock, title: 'Moslashuvchan Jadval', desc: "O'z vaqtingizni o'zingiz belgilang", color: 'from-violet-500 to-purple-400' },
  { icon: Gift, title: 'Bepul Bonus Materiallar', desc: "Qo'shimcha video, test va kitoblar", color: 'from-orange-500 to-amber-400' },
]

export function OnlineLearning() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Online Ta'lim</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
              Uydan Chiqmay{' '}
              <span className="gradient-text">O'rganing</span>
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              MultiLevel Zone online platformasi orqali istalgan joyda, istalgan vaqtda ingliz tilini
              o'rganing. Jonli darslar, interaktiv materiallar va shaxsiy o'qituvchi bilan.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {benefits.map(({ icon: Icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-800/30"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">{title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=750&fit=crop"
                  alt="Online Learning"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-5 shadow-xl">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">500+ Online Talabalar</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">24/7 qulay vaqtda</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
