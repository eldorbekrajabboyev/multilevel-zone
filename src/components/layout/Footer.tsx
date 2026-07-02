import { Mail, Phone, MapPin, Send, Globe, Video } from 'lucide-react'

const footerLinks = {
  courses: [
    { label: 'Elementary (A2)', href: '#courses' },
    { label: 'Intermediate (B1)', href: '#courses' },
    { label: 'CEFR Preparation', href: '#cefr' },
  ],
  company: [
    { label: 'Bosh Sahifa', href: '#hero' },
    { label: "O'qituvchilar", href: '#teachers' },
    { label: 'Filiallar', href: '#branches' },
    { label: 'Aloqa', href: '#contact' },
  ],
  contact: [
    { label: '+998 71 200 45 45', href: 'tel:+998712004545', icon: Phone },
    { label: 'info@multilevelzone.uz', href: 'mailto:info@multilevelzone.uz', icon: Mail },
    { label: 'Chilonzor 9-kvartal, 12-uy', href: '#', icon: MapPin },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-[#0b1121]/50 border-t border-gray-100 dark:border-gray-800/30 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      {/* Mobile: compact | Desktop: full */}
      <div className="container-main px-4 py-4 sm:px-6 md:py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-10 lg:gap-6">
          {/* Logo + Description + Socials */}
          <div className="lg:col-span-4">
            <a href="#hero" className="flex items-center gap-2 mb-2 md:mb-4">
              <img
                src="/images/logo.png"
                alt="MultiLevel Zone Logo"
                className="h-6 w-auto md:h-10 dark:invert dark:brightness-90 transition-all"
              />
              <span className="font-bold text-sm md:text-xl text-gray-900 dark:text-white">
                MultiLevel Zone
              </span>
            </a>
            <p className="hidden md:block text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
              Bizning maqsadimiz - har bir talabaga sifatli ingliz tili ta'limini berish va
              ularning CEFR sertifikatini olishiga yordam berish.
            </p>
            <div className="flex gap-1.5 md:gap-3">
              {[
                { icon: Send, href: '#', label: 'Telegram' },
                { icon: Globe, href: '#', label: 'Website' },
                { icon: Video, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10 transition-all"
                  aria-label={label}
                >
                  <Icon size={14} className="md:w-[18px] md:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Kurslar */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-xs md:text-base text-gray-900 dark:text-white mb-1.5 md:mb-4">Kurslar</h4>
            <ul className="flex flex-wrap gap-x-3 gap-y-0.5 md:grid md:gap-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs md:text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sahifalar */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-xs md:text-base text-gray-900 dark:text-white mb-1.5 md:mb-4">Sahifalar</h4>
            <ul className="flex flex-wrap gap-x-3 gap-y-0.5 md:grid md:gap-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs md:text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Aloqa */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-xs md:text-base text-gray-900 dark:text-white mb-1.5 md:mb-4">Aloqa</h4>
            <ul className="space-y-1 md:space-y-4">
              {footerLinks.contact.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-1.5 md:gap-3 text-[11px] md:text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group">
                    <span className="w-5 h-5 md:w-8 md:h-8 rounded-md md:rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-primary-500/30 group-hover:shadow-lg group-hover:shadow-primary-500/10 transition-all">
                      <Icon size={10} />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 md:mt-6 pt-3 md:pt-5 border-t border-gray-200 dark:border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-1.5 md:gap-4">
          <p className="text-[10px] md:text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} MultiLevel Zone
          </p>
          <div className="flex gap-3 md:gap-6 text-[10px] md:text-sm text-gray-400 dark:text-gray-500">
            <a href="#" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Maxfiylik</a>
            <a href="#" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Shartlar</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
