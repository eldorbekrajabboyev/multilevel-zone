import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { branches } from '../../data/branches'
import { MapPin, Clock, Phone } from 'lucide-react'

export function Branches() {
  return (
    <section id="branches" className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b1121]/50 dark:to-[#0b1121] overflow-hidden">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Filiallar</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Bizning{' '}
            <span className="gradient-text">Filiallarimiz</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
            Toshkent shahridagi 3 ta filialimizdan biriga tashrif buyuring.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{branch.name}</h3>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin size={15} className="text-primary-500 mt-0.5 flex-shrink-0" />
                    {branch.address}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <Clock size={15} className="text-primary-500 flex-shrink-0" />
                    {branch.workingHours}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <Phone size={15} className="text-primary-500 flex-shrink-0" />
                    {branch.phone}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
