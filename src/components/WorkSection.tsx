'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const categories = ['All', 'Music Videos', 'Ads', 'Digital Campaigns']

const projects = [
  {
    id: 1,
    title: 'Ghani Sayani',
    category: 'Music Videos',
    description: 'Music video by MC Square featuring stunning visuals',
    link: 'https://www.youtube.com/watch?v=xg2TRUBs1kU',
    image: '/public/ghanisayani.jpg',
    size: 'large',
  },
  {
    id: 2,
    title: 'Gen Curse',
    category: 'Music Videos',
    description: 'Another music video featuring captivating visuals',
    link: 'https://www.youtube.com/watch?v=CBYGvvjtu2g',
    image: '/public/gencurse.jpg',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Betaj Badshah',
    category: 'Music Videos',
    description: 'Betaaj Badshah music video showcasing a modern twist on a classic tale',
    link: 'https://www.instagram.com/p/CsiCd02omxI/',
    image: '/public/betaajbadhshah.jpg',
    size: 'large',
  },
  {
    id: 4,
    title: 'Heer Ranjha',
    category: 'Music Videos',
    description: 'Heer Ranjha music video showcasing a VFX masterpiece',
    link: 'https://www.youtube.com/watch?v=QhNwq_z7eI4',
    image: '/public/heer.jpg',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Qaatil', 
    category: 'Music Videos',
    description: 'Premium aesthetic with sophisticated cinematography',
    link: 'https://www.youtube.com/watch?v=PpR1TH3ZnOE',
    image: '/public/qaatil.jpeg',
    size: 'small',
  },
  {
    id: 6,
    title: 'Let me drive',
    category: 'Music Videos',
    description: 'Visual storytelling with a focus on emotional impact',
    link: 'https://www.youtube.com/watch?v=RKvGPTmAsk8',
    image: '/public/letmedrive.PNG',
    size: 'medium',
  },
  {
    id: 7,
    title: 'Mulaqaat',
    category: 'Music Videos',
    description: 'The essence of connection and longing',
    link: 'https://www.youtube.com/watch?v=roOsaq8EtrA',
    image: '/public/mulaqaat.jpg',
    size: 'medium',
  },
  {
    id: 8,
    title: 'Derma Bay',
    category: 'Ads',
    description: 'A captivating advertisement showcasing the beauty of Derma Bay',
    link: 'https://www.youtube.com/watch?v=0lgKxJBM56A',
    image: '/public/derma.jpg',
    size: 'medium',
  },
  {
    id: 9,
    title: 'Lot aa gaya',
    category: 'Music Videos',
    description: 'A music video featuring stunning visuals',
    link: 'https://www.youtube.com/watch?v=l1tnJmLv4qQ',
    image: '/public/lotaagaya.jpeg',
    size: 'medium',
  }
]

export default function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="work" ref={ref} className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter gradient-text mb-8">
            SELECTED WORK
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="accent-line rounded-full mx-auto mb-8"
          />
          <p className="text-xl text-white/60 max-w-3xl mx-auto text-center leading-relaxed">
            A curated collection of impactful visual storytelling projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-20"
        >
          <div className="flex flex-wrap justify-center gap-3 bg-black/40 border-2 border-white/10 rounded-full p-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Uniform Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group cursor-pointer block"
            >
              <div className="card overflow-hidden h-full flex flex-col">
                {/* Project Thumbnail - Fixed Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* Project Image */}
                  <Image
                    src={project.image.replace('/public', '')}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1.5 
                                rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </div>
                  
                  {/* Play Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      scale: hoveredProject === project.id ? 1 : 0.8
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full 
                                flex items-center justify-center border border-white/30"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div style={{padding: '2rem'}} className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors text-center">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-8 text-sm leading-relaxed flex-1 text-center">
                    {project.description}
                  </p>
                  
                  <motion.div
                    className="flex items-center justify-center mt-auto"
                    whileHover={{ x: 2 }}
                  >
                    <span className="text-white/80 font-medium text-sm mr-2">
                      View Project
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-24"
        >
          <motion.button
            style={{padding: '0.75rem'}}
            className="border-2 border-white/30 text-white px-12 py-5 rounded-full font-medium 
                       hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}