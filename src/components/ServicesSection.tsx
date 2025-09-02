'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Video, Megaphone, Palette, Clapperboard, Zap, Users } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'Music Video Direction',
    description: 'Creative concept development, storyboarding, and full production management.',
    number: '01',
  },
  {
    icon: Megaphone,
    title: 'Commercial Production',
    description: 'End-to-end commercial production that aligns brand messaging with visual storytelling.',
    number: '02',
  },
  {
    icon: Palette,
    title: 'Creative Direction',
    description: 'Strategic creative leadership ensuring cohesive visual identity and impact.',
    number: '03',
  },
  {
    icon: Clapperboard,
    title: 'Film Production',
    description: 'Complete film production pipeline from pre-production to final delivery.',
    number: '04',
  },
  {
    icon: Zap,
    title: 'VFX & Animation',
    description: 'Advanced visual effects, CGI, and 3D animation that push creative boundaries.',
    number: '05',
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Expert project management and coordination for smooth workflow delivery.',
    number: '06',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" ref={ref} className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter gradient-text mb-6">
            SERVICES
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="accent-line rounded-full mx-auto mb-6"
          />
          <p className="text-base text-white/60 max-w-2xl mx-auto text-center">
            Comprehensive creative services that bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div style={{padding: '1.5rem'}} className="card h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-5 h-5 text-black" />
                    </motion.div>
                    
                    <div className="text-right flex-1">
                      <div className="text-xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                        {service.number}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section - Enhanced with proper spacing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center"
        >
          <div style={{padding: '2rem'}} className="card max-w-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Ready to bring your <span className="gradient-text">vision</span> to life?
            </h3>
            <p className="text-white/60 mb-8 text-base max-w-xl mx-auto leading-relaxed">
              Let's collaborate on your next creative project. From initial concept 
              to final delivery, I'll ensure your story is told with impact.
            </p>
            <motion.button
              onClick={scrollToContact}
              className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm
                         hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}