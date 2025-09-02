'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Home, User, Briefcase, Settings, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'work', icon: Briefcase, label: 'Work' },
  { id: 'services', icon: Settings, label: 'Services' },
  { id: 'contact', icon: Mail, label: 'Contact' },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 100], [20, 0])
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      style={{ y, opacity }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-black/80 border-2 border-white/10 rounded-full px-10 py-5 backdrop-blur-sm"
      >
        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon 
                  size={18} 
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                  }`}
                />
                
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </motion.nav>
  )
}