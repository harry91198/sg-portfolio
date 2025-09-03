'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  category: string
  description: string
  largeDescription: string
  link: string
  image: string
  size: string
  galleryImages: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  if (!project) return null

  const images = project.galleryImages

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-black/95 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[95vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/90 backdrop-blur-sm border border-white/30 rounded-full
                         flex items-center justify-center hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>

            {/* Image Carousel */}
            <div className="relative aspect-video overflow-hidden bg-black/50">
              {/* Image with enhanced loading effect */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[currentImageIndex].replace('/public', '')}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
              
              {/* Enhanced Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button
                    onClick={prevImage}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/80 backdrop-blur-sm border border-white/30
                               rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300 shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </motion.button>
                  
                  <motion.button
                    onClick={nextImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/80 backdrop-blur-sm border border-white/30
                               rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300 shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </motion.button>
                </>
              )}

              {/* Enhanced Image Indicators */}
              {images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white shadow-lg'
                          : 'bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </motion.div>
              )}
              
              {/* Image counter */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-white/90 text-sm font-medium">
                  {currentImageIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 overflow-y-auto relative">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl" />
              
              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2"
                    >
                      <span className="text-sm font-semibold text-white tracking-wide uppercase">
                        {project.category}
                      </span>
                    </motion.div>
                  </div>
                  
                  <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
                  >
                    {project.title}
                  </motion.h3>
                  
                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '120px' }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="h-[2px] bg-gradient-to-r from-white/60 to-transparent mb-8"
                  />
                </motion.div>
                
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-10"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <p className="text-white/80 text-base leading-loose tracking-wide">
                      {project.largeDescription}
                    </p>
                  </div>
                </motion.div>
                
                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex justify-center"
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{padding: '0.75rem'}}
                    className="group bg-gradient-to-r from-white to-white/90 text-black px-8 py-4 rounded-full font-semibold text-sm
                               hover:from-white/90 hover:to-white/80 transition-all duration-300 flex items-center gap-3 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Project</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 bg-black/30 rounded-full"
                    />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}