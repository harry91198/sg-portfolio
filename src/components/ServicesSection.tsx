'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Eye, Palette, Play, Users, Scissors, Zap } from 'lucide-react'

const services = [
  {
    icon: Eye,
    title: 'VFX Supervision',
    description: 'Overseeing visual effects workflows and ensuring seamless integration of CGI elements.',
    number: '01',
  },
  {
    icon: Palette,
    title: 'Creative Director',
    description: 'Strategic creative leadership ensuring cohesive visual identity and storytelling impact.',
    number: '02',
  },
  {
    icon: Play,
    title: 'Post Producer',
    description: 'Managing post-production workflows from editing through final delivery.',
    number: '03',
  },
  {
    icon: Users,
    title: 'Associate or Executive Producer',
    description: 'End-to-end project management and coordination across all production phases.',
    number: '04',
  },
  {
    icon: Scissors,
    title: 'Editor',
    description: 'Crafting compelling narratives through precise editing and storytelling techniques.',
    number: '05',
  },
  {
    icon: Zap,
    title: 'CGI and Animation',
    description: 'Creating stunning computer-generated imagery and 3D animations that bring visions to life.',
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
    <section id="services" ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6">
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
          <p className="text-base text-white/60 mx-auto text-center" style={{padding: '1rem'}}>
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

      </div>
    </section>
  )
}