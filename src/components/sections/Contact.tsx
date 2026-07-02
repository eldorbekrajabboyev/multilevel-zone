import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Send, Phone, Mail, MessageSquare, Check } from 'lucide-react'

interface FormData {
  name: string
  phone: string
  email: string
  course: string
  message: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  course: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm(initialForm)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactInfo = [
    { icon: Phone, label: 'Telefon', value: '+998 71 200 45 45', href: 'tel:+998712004545' },
    { icon: Mail, label: 'Email', value: 'info@multilevelzone.uz', href: 'mailto:info@multilevelzone.uz' },

    { icon: MessageSquare, label: 'Telegram', value: '@multilevelzone', href: '#' },
  ]

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-main px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Aloqa</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Biz Bilan{' '}
            <span className="gradient-text">Bog'laning</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
            Savollaringiz bormi? Biz bilan bog'laning va bepul konsultatsiya oling.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Ismingiz
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50 transition-all text-sm brand-input"
                    placeholder="Ismingizni kiriting"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50 transition-all text-sm brand-input"
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50 transition-all text-sm brand-input"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Kurs
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50 transition-all text-sm brand-input"
                  >
                    <option value="">Kursni tanlang</option>
                    <option value="elementary">Elementary (A2)</option>
                    <option value="intermediate">Intermediate (B1)</option>
                    <option value="cefr">CEFR Preparation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Xabar
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50 transition-all text-sm resize-none brand-input"
                  placeholder="Xabaringizni yozing..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-accent-500 text-white'
                    : 'gradient-btn text-white'
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={18} />
                    Xabar yuborildi!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Xabar Yuborish
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:translate-x-1 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-400 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
