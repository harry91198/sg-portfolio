'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Linkedin, Twitter, Youtube, Mail, Download } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{margin:"1rem 0"}}>
            Let&apos;s Work Together
          </h2>
          <p className="text-white/60 text-sm mb-16 mt-8" style={{margin:"1rem 0"}}>
            Ready to bring your vision to life? Get in touch.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-32"
          style={{margin:"1rem 0"}}
        >
          <motion.a
            href="mailto:sarthak.grover24@gmail.com"
            style={{padding: '0.75rem'}}
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium text-sm
                       hover:bg-white/90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4 inline mr-2" />
            sarthak.grover24@gmail.com
          </motion.a>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-32"
          style={{margin:"1rem 0"}}
        >
          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{padding: '0.75rem'}}
            className="border border-white/30 text-white px-6 py-2 rounded-full font-medium text-sm
                       hover:border-white/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
          
          <span className="text-white/40 text-xs">•</span>
          
          <span className="text-white/50 text-sm">+91 8299641226</span>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-24"
          style={{margin:"1rem 0"}}
        >
          <div className="flex items-center justify-center gap-10">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center
                             hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-white/60 hover:text-white" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="pt-12 border-t border-white/10"
        >
          <p className="text-white/30 text-xs">
            © 2025 Sarthak Grover • Chandigarh, India
          </p>
        </motion.div>
      </div>
    </section>
  )
}