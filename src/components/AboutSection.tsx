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
            style={{margin:"1rem 0"}}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left relative"
          >
            {/* Background accent */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
              >
                <span className="text-sm font-medium text-white/80">Creative Professional</span>
              </motion.div>
              
              <div className="space-y-8 text-base text-white/80 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg leading-relaxed"
                >
                  I am a creative professional with extensive experience leading projects across the 
                  <span className="text-white font-medium"> entire filmmaking pipeline</span> — from concept development and pre-production to production 
                  and post-production. Over the years, I have worked on multiple projects in diverse roles, 
                  contributing both on set during the production phase and in post-production environments.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="relative"
                >
                  With a proven ability to ideate, direct, and deliver high-quality content across multiple 
                  formats, I bring together <span className="text-white font-medium">artistry and execution</span> to craft impactful visual storytelling. 
                  My skill set spans team leadership, project management, creative direction, video editing, 
                  CGI, VFX, and 3D visualization, enabling me to balance creative innovation with strategic 
                  objectives.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-white/70 italic border-l-2 border-white/20 pl-6"
                >
                  Whether overseeing large-scale productions or designing intricate visual effects, 
                  I thrive in translating ideas into compelling narratives that resonate with audiences.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center"
          >
            {/* 3D Geometric Design */}
            <div className="relative w-80 h-80">
              {/* Floating cubes */}
              <motion.div
                animate={{ 
                  rotateX: [0, 360], 
                  rotateY: [0, 180], 
                  y: [0, -10, 0] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg"
                style={{ transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)' }}
              />
              
              <motion.div
                animate={{ 
                  rotateX: [180, 540], 
                  rotateZ: [0, 270], 
                  y: [0, -15, 0] 
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute top-32 right-12 w-12 h-12 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/30 rounded-lg"
                style={{ transform: 'perspective(1000px) rotateX(60deg) rotateY(30deg)' }}
              />

              <motion.div
                animate={{ 
                  rotateY: [0, -360], 
                  rotateX: [0, 180], 
                  y: [0, -20, 0] 
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute bottom-16 left-16 w-20 h-20 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm border border-white/15 rounded-lg"
                style={{ transform: 'perspective(1000px) rotateX(30deg) rotateY(60deg)' }}
              />

              {/* Central wireframe sphere */}
              <motion.div
                animate={{ 
                  rotateX: [0, 360], 
                  rotateY: [0, 360] 
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full"
                style={{ 
                  background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)',
                  transform: 'perspective(800px) rotateX(60deg)'
                }}
              >
                <div className="absolute inset-4 border border-white/10 rounded-full" />
                <div className="absolute inset-8 border border-white/5 rounded-full" />
              </motion.div>

              {/* Orbiting particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: [0, 360] 
                  }}
                  transition={{ 
                    duration: 6 + i * 2, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/40 rounded-full"
                  style={{
                    transformOrigin: `${60 + i * 15}px center`,
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg)`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-32 relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-3xl blur-3xl" />
          
          <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              {[
                { number: '15+', label: 'Brands', description: 'Collaborated with' },
                { number: '5+', label: 'Years', description: 'Experience in' },
                { number: '100%', label: 'Satisfaction', description: 'Client rating' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative overflow-hidden"
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-4 p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.8 + index * 0.1, type: "spring" }}
                      className="text-5xl md:text-6xl font-black gradient-text mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    
                    <div className="space-y-2">
                      <div className="text-white font-semibold text-lg uppercase tracking-wider">
                        {stat.label}
                      </div>
                      <div className="text-white/50 text-sm">
                        {stat.description}
                      </div>
                    </div>
                    
                    {/* Accent line */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '40px' } : {}}
                      transition={{ duration: 0.8, delay: 2 + index * 0.1 }}
                      className="h-[2px] bg-gradient-to-r from-white/60 to-transparent mx-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}