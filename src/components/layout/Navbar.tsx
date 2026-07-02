import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react'
import type { Theme } from '../../hooks/useDarkMode'

interface NavbarProps {
  theme: Theme
  dark: boolean
  toggleDark: () => void
}

const navLinks = [
  { label: 'Bosh Sahifa', href: '#hero' },
  { label: 'Kurslar', href: '#courses' },
  { label: 'CEFR', href: '#cefr' },
  { label: "O'qituvchilar", href: '#teachers' },
  { label: 'Aloqa', href: '#contact' },
]

export function Navbar({ theme, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = useCallback(() => setMobileOpen(false), [])

  const themeIcon = theme === 'light' ? <Moon size={18} /> : theme === 'dark' ? <Sun size={18} /> : <GraduationCap size={18} />
  const themeLabel = theme === 'light' ? 'Light mode' : theme === 'dark' ? 'Dark mode' : 'Brand mode'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 brand-nav ${
          scrolled || mobileOpen
            ? 'bg-white/70 dark:bg-[#0b1121]/70 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-800/30 shadow-lg shadow-gray-900/5 scrolled'
            : 'bg-white/40 dark:bg-[#0b1121]/40 backdrop-blur-md'
        }`}
      >
        <nav className="flex items-center justify-between px-4 sm:px-6 h-16">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <img
              src="/images/logo.png"
              alt="MultiLevel Zone Logo"
              className="h-9 w-auto dark:invert dark:brightness-90 transition-all"
            />
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              MultiLevel Zone
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary-500 to-secondary-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className={`p-2.5 rounded-xl transition-all hover:scale-105 ${
                theme === 'brand'
                  ? 'bg-amber-100 text-amber-700 hover:text-amber-800'
                  : 'bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
              }`}
              aria-label={themeLabel}
            >
              {themeIcon}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex gradient-btn px-5 py-2.5 rounded-xl text-sm"
            >
              Start Learning
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {createPortal(
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                style={{ zIndex: 9998 }}
                onClick={closeMenu}
              />
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-white dark:bg-[#0b1121] border-t border-gray-100 dark:border-gray-800/50 lg:hidden"
                style={{ zIndex: 9999 }}
              >
                <div className="px-4 py-4 space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3.5 rounded-xl text-base font-semibold text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-800/60 hover:bg-primary-50 dark:hover:bg-primary-500/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all border border-gray-100 dark:border-gray-700/50"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="block text-center gradient-btn px-4 py-3.5 rounded-xl text-base font-semibold mt-3"
                  >
                    Start Learning
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
