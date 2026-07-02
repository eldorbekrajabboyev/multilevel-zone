import { AnimatedSection } from '../ui/AnimatedSection'

export function About() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b1121]/50 dark:to-[#0b1121]">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection>
            <span className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-widest">Biz Haqimizda</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
              Ingliz Tilini{' '}
              <span className="gradient-text">O'rganish</span>{' '}
              Yangi Darajasi
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              MultiLevel Zone - bu ingliz tilini o'rganish uchun yaratilgan zamonaviy ta'lim markazi.
              Biz har bir talabaning individual ehtiyojlariga moslashgan holda, eng samarali va
              interaktiv usullarda dars beramiz.
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Maqsadimiz - talabalarimizni xalqaro standartlarga mos CEFR sertifikatiga ega
              bo'lishlariga yordam berish va ularning kelajakdagi kareralari uchun mustahkam poydevor yaratish.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=450&fit=crop"
                  alt="About MultiLevel Zone"
                  className="w-full h-full object-cover img-hover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 shadow-xl max-w-[200px]">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Yillik tajriba</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
