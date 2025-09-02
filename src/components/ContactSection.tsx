'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Linkedin, Twitter, Youtube, Mail, MapPin } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, label: 'Instagram', handle: '@username', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', handle: '/in/username', href: '#' },
  { icon: Twitter, label: 'Twitter', handle: '@username', href: '#' },
  { icon: Youtube, label: 'YouTube', handle: '/c/username', href: '#' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="min-h-screen py-40 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter gradient-text mb-8 text-center">
            LET'S CREATE
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="accent-line rounded-full mx-auto mb-8"
          />
          <p className="text-lg text-white/60 max-w-2xl mx-auto text-center leading-relaxed">
            Ready to turn your creative vision into reality? Let's collaborate.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-12 text-center lg:text-left">Get In Touch</h3>
            </div>
            
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <div style={{padding: '2rem'}} className="card flex items-center space-x-6">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <Mail className="w-5 h-5 text-black" />
                </motion.div>
                <div className="text-center lg:text-left">
                  <h4 className="text-base font-semibold mb-1 group-hover:text-white transition-colors">
                    Email
                  </h4>
                  <p className="text-white/80 text-sm mb-1">hello@yourname.com</p>
                  <p className="text-white/50 text-xs">For project inquiries and collaborations</p>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div style={{padding: '1.5rem'}} className="card">
                <MapPin className="w-5 h-5 text-white/60 mx-auto mb-3" />
                <h4 className="text-base font-semibold mb-2">Based in</h4>
                <p className="text-white/80 text-sm mb-1">Your City, Country</p>
                <p className="text-white/50 text-xs">Available for projects worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-12 text-center lg:text-left">Connect</h3>
            </div>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group block"
                  >
                    <div style={{padding: '1rem'}} className="card flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          className="w-8 h-8 bg-white rounded-lg flex items-center justify-center"
                        >
                          <Icon className="w-4 h-4 text-black" />
                        </motion.div>
                        <div className="text-center lg:text-left">
                          <h4 className="text-sm font-semibold group-hover:text-white transition-colors">
                            {social.label}
                          </h4>
                          <p className="text-white/60 text-xs">{social.handle}</p>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="text-xl text-white/40 group-hover:text-white/80 transition-colors"
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Final CTA - Enhanced and centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center mb-32"
        >
          <div style={{padding: '3rem'}} className="card max-w-5xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-center">
              Have a project in mind?
            </h3>
            <p className="text-white/60 mb-10 text-base max-w-2xl mx-auto text-center leading-relaxed">
              Let's discuss how we can bring your creative vision to life with impactful storytelling
            </p>
            <motion.a
              href="mailto:hello@yourname.com"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium text-sm
                         hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center pt-20 border-t border-white/10"
        >
          <p className="text-white/40">
            © 2024 Creative Director & Producer. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}