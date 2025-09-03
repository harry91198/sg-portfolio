'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter gradient-text mb-8">
            ABOUT
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="accent-line rounded-full mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
              Creative professional with extensive experience leading projects across the 
              <span className="text-white/60"> entire filmmaking pipeline</span>
            </h3>
            
            <div className="space-y-8 text-lg text-white/70 leading-relaxed">
              <p>
                From concept and pre-production to production and post-production, 
                I bring proven ability to ideate, direct, and deliver high-quality 
                content across multiple formats.
              </p>
              <p>
                Skilled in team leadership, project management, creative direction, 
                video editing, CGI, VFX, and 3D visualization. I balance creativity 
                with strategic goals to produce impactful visual storytelling.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {[
              'Creative Direction',
              'Video Production', 
              'VFX & CGI',
              'Team Leadership',
              'Project Management',
              '3D Visualization'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-between py-4 border-b border-white/10"
              >
                <span className="text-lg font-medium">{skill}</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '60px' } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="h-[1px] bg-white/40"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {[
            { number: '50+', label: 'Projects' },
            { number: '15+', label: 'Brands' },
            { number: '5+', label: 'Years' },
            { number: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-black text-white">
                {stat.number}
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}