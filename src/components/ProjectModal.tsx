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
  link: string
  image: string
  size: string
  gallery?: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  if (!project) return null

  const placeholderImages = [
    project.image,
    project.image,
    project.image,
    project.image
  ]
  
  const images = project.gallery || placeholderImages

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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-black/90 border border-white/20 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 border border-white/20 rounded-full
                         flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Image Carousel */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={images[currentImageIndex].replace('/public', '')}
                alt={project.title}
                fill
                className="object-cover"
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20
                               rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 border border-white/20
                               rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? 'bg-white'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-white/70 text-base leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{padding: '0.75rem'}}
                  className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm
                             hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </motion.a>
                
                <div className="text-white/40 text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}