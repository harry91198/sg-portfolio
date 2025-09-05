'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with mobile gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      
      {/* Mobile-optimized background pattern */}
      <div className="absolute inset-0 opacity-30 sm:opacity-50">
        <div className="absolute top-20 left-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-32 right-6 w-48 h-48 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-8 w-24 h-24 bg-gradient-to-br from-white/3 to-transparent rounded-full blur-xl" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      >
        <motion.h1
          className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black tracking-tighter mb-4 sm:mb-6 md:mb-8 leading-none"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
        >
          <motion.span
            className="block gradient-text drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            SARTHAK
          </motion.span>
          <motion.span
            className="block text-white drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            GROVER
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 md:mb-12 lg:mb-16 mx-auto max-w-2xl sm:max-w-3xl font-light leading-relaxed text-center px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            style={{padding: '0.3rem', textAlign: 'center', lineHeight: '1.6', marginLeft: 'auto', marginRight: 'auto'}}

        >
          <span className="hidden sm:inline">Leading projects across the entire filmmaking pipeline — <br />from concept to delivery. Creating impactful visual storytelling.</span>
          <span className="sm:hidden">Creating impactful visual storytelling<br />from concept to delivery</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut", staggerChildren: 0.1 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="group bg-white text-black px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-medium text-sm sm:text-base
                       hover:bg-white/90 transition-all duration-300 flex items-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl w-full sm:w-auto max-w-xs sm:max-w-none"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            style={{padding: '0.3rem'}}
          >
            About
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            onClick={scrollToProjects}
            className="border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-medium text-sm sm:text-base
                       hover:border-white/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto max-w-xs sm:max-w-none"
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.6)' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            style={{padding: '0.3rem'}}

          >
            Projects
          </motion.button>
          
          <motion.button
            onClick={scrollToContact}
            className="border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-medium text-sm sm:text-base
                       hover:border-white/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto max-w-xs sm:max-w-none"
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.6)' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            style={{padding: '0.3rem'}}

          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Mobile Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 sm:space-y-3 group"
        >
          <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-white/40 to-white/10" />
          <motion.div 
            className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-colors"
            animate={{ 
              boxShadow: ['0 0 0 0 rgba(255,255,255,0.1)', '0 0 0 8px rgba(255,255,255,0)', '0 0 0 0 rgba(255,255,255,0)'] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:text-white/80" />
          </motion.div>
          <span className="text-xs text-white/40 font-light hidden sm:block">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}