import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { whyChooseData } from '../../data/whyChoose'

export function WhyChoose() {
  return (
    <section id="why" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-main px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Nega Aynan Biz?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Nega{' '}
            <span className="gradient-text">MultiLevel Zone</span>
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg">
            Ingliz tilini o'rganishni boshlash uchun eng yaxshi joy. Sabablari bilan tanishing.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseData.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="glass-card rounded-2xl p-6 sm:p-8 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
