'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import ProjectModal from './ProjectModal'


const projects = [
  {
    id: 1,
    title: 'Ghani Sayani',
    category: 'Music Videos',
    description: 'Music video by MC Square featuring stunning visuals',
    largeDescription: 'Step into a mesmerizing realm with our music video, an artful fusion of CGI and handcrafted 2D magic. The screen comes alive as digital and drawn worlds intertwine, creating a symphony of visual innovation. Each frame is a canvas where reality blurs and imagination reigns, seamlessly blending technology and artistic expression. As the music unfolds, so does our narrative, as characters seamlessly transition from pixel to penstroke. Vivid landscapes morph with the beat, taking you on a journey that transcends the ordinary. With an intricate dance of CGI and 2D artwork, we\'ve redefined storytelling, offering an audiovisual feast that ignites the senses and leaves an indelible mark on the heart.',
    link: 'https://www.youtube.com/watch?v=xg2TRUBs1kU',
    image: '/public/ghanisayani.jpg',
    galleryImages: [
      '/public/ghanisayani1.jpg',
      '/public/ghanisayani2.jpg',
      '/public/ghanisayani3.jpg',
      '/public/ghanisayani4.jpg',
      '/public/ghanisayani5.jpg',
      '/public/ghanisayani6.mp4'
    ],
    size: 'large',
  },
  {
    id: 2,
    title: 'Gen Curse',
    category: 'Music Videos',
    description: 'Another music video featuring captivating visuals',
    largeDescription: 'Worked as an Associate Producer on a music video that explored the theme of alcohol as a generational curse. Oversaw budgeting, location management, logistics, and operations, ensuring smooth execution of the project. The video featured gritty yet fluid visuals that powerfully portrayed the narrative, blending raw storytelling with cinematic depth.',
    link: 'https://www.youtube.com/watch?v=CBYGvvjtu2g',
    image: '/public/gencurse.jpg',
    galleryImages: [
      '/public/gencurse1.jpg',
      '/public/gencurse2.jpg',
      '/public/gencurse3.jpg',
      '/public/gencurse4.jpg',
      '/public/gencurse5.jpg',
      '/public/gencurse6.jpg',
      '/public/gencurse7.jpg',
      '/public/gencurse8.jpg',
      '/public/gencurse9.jpg'
    ],
    size: 'medium',
  },
  {
    id: 3,
    title: 'Betaj Badshah',
    category: 'Music Videos',
    description: 'Betaaj Badshah music video showcasing a modern twist on a classic tale',
    largeDescription: 'Worked as an Associate Producer and on a musical short film for the renowned artist Bagi Munda. The project blended cinematic storytelling with rich musicality, bringing the artist’s vision to life through striking visuals and immersive performances. I was responsible for managing budgeting, logistics, and location coordination, while also ensuring smooth day-to-day operations on set. From pre-production planning to on-ground execution, I oversaw the workflow between creative and technical teams, enabling the director and crew to focus on the artistic aspects. The final short film stands as a powerful showcase of Bagi Munda’s artistry, combining narrative depth with musical energy in a polished cinematic experience.',
    link: 'https://www.instagram.com/p/CsiCd02omxI/',
    image: '/public/betaajbadhshah.jpg',
    galleryImages: [
      '/public/betaajbadhshah1.jpg',
      '/public/betaajbadhshah2.jpg',
      '/public/betaajbadhshah3.jpg',
      '/public/betaajbadhshah4.jpg',
      '/public/betaajbadhshah5.jpg',
      '/public/betaajbadhshah6.jpg'
    ],
    size: 'large',
  },
  {
    id: 4,
    title: 'Heer Ranjha',
    category: 'Music Videos',
    description: 'Heer Ranjha music video showcasing a VFX masterpiece',
    largeDescription: 'Experience a music video like no other, a symphony of seamless transitions and fluid CGI mastery. Our visual masterpiece is a testament to artful innovation, where every scene flows effortlessly into the next, creating an immersive journey. The magic lies in the intricate CGI work that connects each moment, painting a vivid tapestry of imagination. As the rhythm carries you forward, the video\'s choreography mirrors the music\'s pulse, blurring the line between virtual and reality. Witness a captivating dance of technology and storytelling, where smoothness is the key. Brace yourself for a visual odyssey that melds sound and imagery into a harmonious spectacle, leaving you awestruck by the sheer artistry of the journey.',
    link: 'https://www.youtube.com/watch?v=QhNwq_z7eI4',
    image: '/public/heer.jpg',
    galleryImages: [
      '/public/heer1.jpg',
      '/public/heer2.jpg',
      '/public/heer3.mp4',
      '/public/heer4.jpg',
      '/public/heer5.jpg',
      '/public/heer6.jpg',
      '/public/heer7.jpg',
      '/public/heer8.mp4'
    ],
    size: 'medium',
  },
  {
    id: 5,
    title: 'Qaatil', 
    category: 'Music Videos',
    description: 'Premium aesthetic with sophisticated cinematography',
    largeDescription: 'Worked as an Associate Producer, Assistant Director, and Editor on the sad romantic music video Qaatil. As Associate Producer, I managed budgeting, logistics, and production operations, ensuring smooth execution from pre-production through post. In my role as Assistant Director, I coordinated with the director and crew on set, overseeing schedules, shot planning, and performance direction to keep the production aligned with the creative vision. Additionally, I took charge of the editing process, crafting the pacing, mood, and emotional flow of the video to enhance its storytelling impact. The final piece delivered a deeply emotional narrative, blending poignant performances with cinematic visuals that resonated strongly with the song’s heartfelt theme.',
    link: 'https://www.youtube.com/watch?v=PpR1TH3ZnOE',
    image: '/public/qaatil.jpeg',
    galleryImages: [
      '/public/qaatil1.jpeg',
      '/public/qaatil2.jpeg',
      '/public/qaatil3.jpeg',
      '/public/qaatil4.jpeg',
      '/public/qaatil5.jpeg'
    ],
    size: 'small',
  },
  {
    id: 6,
    title: 'Let me drive',
    category: 'Music Videos',
    description: 'Visual storytelling with a focus on emotional impact',
    largeDescription: 'Experience the pulse-pounding synergy of music and CGI in this dynamic hip-hop music video project. I designed and executed a high-octane VFX sequence that thrusts viewers into the heart of a neon-drenched metropolis, where two high-performance cars ignite the screen in an electrifying drag race..I also worked on the Concept and Idea working as a Creative Director to match the look and feel of the video and song. With precise modeling, texturing, and lighting, every glint of neon, engine roar, and burst of speed was brought to life, immersing the audience in the adrenaline-fueled atmosphere. Advanced compositing techniques seamlessly integrated CGI cars and environments with the live-action footage, while camera animations heightened the sense of velocity and cinematic impact. In addition to my creative role, I also contributed as an Associate Producer, managing operations, logistics, budgeting, and overall execution to ensure a seamless production workflow. This blend of artistic vision and production management resulted in an unforgettable audiovisual spectacle that amplifies the song’s raw energy and captures the essence of urban street racing.',
    link: 'https://www.youtube.com/watch?v=RKvGPTmAsk8',
    image: '/public/letmedrive.PNG',
    galleryImages: [
      '/public/letmedrive1.jpeg',
      '/public/letmedrive2.jpeg',
      '/public/letmedrive3.jpeg',
      '/public/letmedrive4.jpeg',
      '/public/letmedrive5.jpeg',
      '/public/letmedrive6.PNG',
      '/public/letmedrive7.PNG',
      '/public/letmedrive8.jpg',
      '/public/letmedrive9.jpg',
      '/public/letmedrive10.jpg',
      '/public/letmedrive11.jpg',
      '/public/letmedrive12.mp4'
    ],
    size: 'medium',
  },
  {
    id: 7,
    title: 'Mulaqaat',
    category: 'Music Videos',
    description: 'The essence of connection and longing',
    largeDescription: 'In this enchanting VFX project for a romantic music video, I meticulously crafted a CGI bus adorned with an abundance of flowers and natural elements, perfectly complementing the songs romantic theme. Through detailed modeling, texturing, and lighting, the bus came to life with a sense of charm and realism. I also directed the shoot of the main character, ensuring their emotions were captured authentically.I also worked on the Concept and Idea working as a Creative Director to match the look and feel of the video and song. Using advanced compositing techniques, I seamlessly merged the characters live-action footage with the CGI renders, while software-based camera animations were employed to heighten realism and cinematic appeal. Alongside my creative contributions, I also worked as an Associate Producer, overseeing management operations, logistics, budgeting, and execution to ensure smooth coordination between the creative and production teams. This dual role allowed me to balance artistic vision with operational efficiency, resulting in a visually captivating and emotionally immersive music video that transports viewers into a world of romance and beauty.',
    link: 'https://www.youtube.com/watch?v=roOsaq8EtrA',
    image: '/public/mulaqaat.jpg',
    galleryImages: [
      '/public/mulaqaat1.jpg',
      '/public/mulaqaat2.jpg',
      '/public/mulaqaat3.jpg',
      '/public/mulaqaat4.jpg',
      '/public/mulaqaat5.jpg',
      '/public/mulaqaat6.jpg',
      '/public/mulaqaat7.png',
      '/public/mulaqaat8.jpg',
      '/public/mulaqaat9.PNG'
    ],
    size: 'medium',
  },
  {
    id: 8,
    title: 'Derma Bay',
    category: 'Ads',
    description: 'A captivating advertisement showcasing the beauty of Derma Bay',
    largeDescription: 'Worked as the Creative Director from concept to completion on a campaign for the cosmetic brand Dermabay, shaping the overall visual identity and storytelling approach. I developed the creative direction to highlight the brand’s elegance and innovation, ensuring the aesthetics resonated with its target audience. In addition, I served as the VFX Supervisor, designing and executing CGI elements and shot compositions that elevated the product presentation. From pre-visualization and design to post-production refinement, I ensured the seamless integration of CGI with live-action, creating visually stunning sequences that emphasized the brand’s premium appeal. The final delivery combined artistry and technology, presenting Dermabay as a forward-thinking cosmetic brand with a refined visual narrative.',
    link: 'https://www.youtube.com/watch?v=0lgKxJBM56A',
    image: '/public/derma.jpg',
    galleryImages: [
      '/public/derma2.jpg',
      '/public/derma1.jpg',
      '/public/derma3.jpg',
      '/public/derma4.jpg',
      '/public/derma5.jpg',
      '/public/derma6.mp4',
      '/public/derma7.mp4',
      '/public/derma8.mp4'
    ],
    size: 'medium',
  },
  {
    id: 9,
    title: 'Lot aa gaya',
    category: 'Music Videos',
    description: 'A music video featuring stunning visuals',
    largeDescription: 'Immerse yourself in the vibrant world of Punjabi music through our groundbreaking music video. A fusion of CGI wizardry and dynamic 2D artwork, this visual masterpiece captures the essence of freestyle creativity. As the beats groove, our seamless compositing transports you through kaleidoscopic realms where reality blurs with imagination. From urban landscapes to dreamy wonderlands, each scene is a canvas of innovation. The synergy between CGI and 2D art forms an electrifying narrative that mirrors the songs soul. Get ready to be awestruck as visuals and rhythm synchronize, creating an unparalleled audiovisual extravaganza. Witness the magic where Punjabi culture meets cutting-edge technology, crafting a spellbinding story that unfolds with every frame.',
    link: 'https://www.youtube.com/watch?v=l1tnJmLv4qQ',
    image: '/public/lotaagaya.jpeg',
    galleryImages: [
      '/public/lotaagaya1.jpg',
      '/public/lotaagaya2.jpg',
      '/public/lotaagaya3.jpg',
      '/public/lotaagaya4.mp4',
      '/public/lotaagaya5.mp4',
      '/public/lotaagaya6.jpeg',
      '/public/lotaagaya7.jpeg',
      '/public/lotaagaya8.jpeg',
      '/public/lotaagaya9.jpeg'
    ],
    size: 'medium',
  },
  {
    id: 10,
    title: 'Sharmana',
    category: 'Music Videos',
    description: 'A musical short film with stunning visuals',
    largeDescription: 'Dive into a mesmerizing audiovisual realm with this VFX-driven music video, where cutting-edge CGI and intricate compositing converge to craft a stunning visual journey that transcends reality. From futuristic cityscapes to enchanted forests, each CGI set stands as a testament to artistry and imagination. Through meticulous compositing, disparate elements were woven into a seamless tapestry of wonder, as the rhythm of the music took visual form in vivid landscapes that morph and meld, reflecting the soul of the song. The result is a symphony of light and pixels that dances in harmony, showcasing the boundless possibilities of VFX storytelling.',
    link: 'https://www.youtube.com/watch?v=cau-Y-BFwjE',
    image: '/public/sharmana.jpg',
    galleryImages: [
      '/public/sharmana1.jpg',
      '/public/sharmana2.jpg',
      '/public/sharmana3.jpg',
      '/public/sharmana4.jpg',
      '/public/sharmana5.jpg'
    ],
    size: 'medium',
  },
  {
    id: 11,
    title: 'Astro Dancers',
    category: 'Music Videos',
    description: 'A music video featuring stunning visuals',
    largeDescription: 'Worked as a CGI and VFX Artist on a freestyle cover video, experimenting with creative ideas to enhance the raw, unfiltered aesthetic of the project. I designed and developed unique CGI elements that complemented the music’s energy and style, integrating them seamlessly into the live-action footage through advanced compositing techniques. This experimental approach allowed for a bold visual language, merging spontaneity with polished digital artistry, resulting in a video that felt both authentic and visually dynamic.',
    link: 'https://www.youtube.com/watch?v=44Iw2-kNXc0',
    image: '/public/astrodancers.png',
    galleryImages: [
      '/public/astrodancers1.mp4'
    ],
    size: 'large',
  }

]

export default function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = projects

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="work" ref={ref} className="min-h-screen flex items-center justify-center py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter gradient-text mb-6 sm:mb-8">
            SELECTED WORK
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="accent-line rounded-full mx-auto mb-6 sm:mb-8 sm:w-[120px]"
          />
          <p className="text-base sm:text-lg md:text-xl text-white/60 mx-auto text-center leading-relaxed px-4 sm:px-8 max-w-4xl" style={{padding: '1rem', marginLeft: 'auto', marginRight: 'auto'}}>
            A curated collection of impactful visual storytelling projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* <div className="flex flex-wrap justify-center gap-3 bg-black/40 border-2 border-white/10 rounded-full p-4">
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
          </div> */}
        </motion.div>

        {/* Projects Uniform Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => openModal(project)}
              className="group cursor-pointer block"
            >
              <div className="card overflow-hidden h-full flex flex-col" style={{padding: '1rem'}}>
                {/* Project Thumbnail - Fixed Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* Project Image */}
                  <Image
                    src={project.image.replace('/public/', '/')}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  {/* <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black/80 text-white px-2 py-1 sm:px-3 sm:py-1.5 
                                rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </div> */}
                  
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
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-full 
                                flex items-center justify-center border border-white/30"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col" style={{padding: '1rem'}}>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors text-center">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm leading-relaxed flex-1 text-center">
                    {project.description}
                  </p>
                  
                  {/* <motion.div
                    className="flex items-center justify-center mt-auto"
                    whileHover={{ x: 2 }}
                  >
                    <span className="text-white/80 font-medium text-xs sm:text-sm mr-2">
                      View Project
                    </span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
                  </motion.div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        {/* <motion.div
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
        </motion.div> */}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  )
}