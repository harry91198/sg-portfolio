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
  
  const isVideo = (src: string) => {
    return src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.mov')
  }

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
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
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
            className="relative bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] flex flex-col shadow-2xl"
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
              className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-black/90 backdrop-blur-sm border border-white/30 rounded-full
                         flex items-center justify-center hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </motion.button>

            {/* Media Carousel */}
            <div className="relative aspect-video sm:aspect-video aspect-square overflow-hidden bg-black/50">
              {/* Media with enhanced loading effect */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                {isVideo(images[currentImageIndex]) ? (
                  <video
                    src={images[currentImageIndex].replace('/public/', '/')}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <Image
                    src={images[currentImageIndex].replace('/public/', '/')}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                )}
                
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
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-black/80 backdrop-blur-sm border border-white/30
                               rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300 shadow-lg"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </motion.button>
                  
                  <motion.button
                    onClick={nextImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-black/80 backdrop-blur-sm border border-white/30
                               rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300 shadow-lg"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </motion.button>
                </>
              )}

              {/* Enhanced Image Indicators */}
              {images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20"
                >
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white shadow-lg'
                          : 'bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </motion.div>
              )}
              
              {/* Media counter */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-2 py-1 sm:px-4 sm:py-2" style={{padding: '0.8rem'}}>
                <span className="text-white/90 text-sm font-medium">
                  {currentImageIndex + 1} / {images.length} {isVideo(images[currentImageIndex]) ? '📹' : '🖼️'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 md:p-10 overflow-y-auto relative">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl" />
              
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

                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Mobile Layout - Title and Button on same row */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8 gap-3 sm:hidden">
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-black text-white tracking-tight flex-1"
                      style={{ padding: '0.5rem 0' }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    {/* Mobile Action Button - on right of title */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex-shrink-0"
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-r from-white to-white/90 text-black px-4 py-3 rounded-full font-semibold text-sm
                                   hover:from-white/90 hover:to-white/80 transition-all duration-300 flex items-center gap-2 shadow-lg"
                        style={{padding: '1rem'}}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {project.link.includes('youtube.com') || project.link.includes('youtu.be') ? (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        <span>View</span>
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Desktop Layout - Original layout */}
                  <div className="hidden sm:flex sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight"
                      style={{padding: '1rem'}}
                    >
                      {project.title}
                    </motion.h3>
                    
                    {/* Desktop Action Button */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-r from-white to-white/90 text-black px-6 py-3 rounded-full font-semibold text-sm
                                   hover:from-white/90 hover:to-white/80 transition-all duration-300 flex items-center gap-2 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{padding: '1rem'}}
                      >
                        {project.link.includes('youtube.com') || project.link.includes('youtu.be') ? (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        <span>View Project</span>
                      </motion.a>
                    </motion.div>
                  </div>
                  
                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '80px' }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="h-[2px] bg-gradient-to-r from-white/60 to-transparent mb-6 sm:mb-8 sm:w-[120px]"
                  />
                </motion.div>
                
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6 sm:mb-10"
                  style={{padding: '1rem'}}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed sm:leading-loose tracking-wide">
                      {project.largeDescription}
                    </p>
                  </div>
                </motion.div>
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}