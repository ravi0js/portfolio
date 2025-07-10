import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Projects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projectsPerPage = 3

  const totalGroups = Math.ceil(projects.length / projectsPerPage)
  const currentProjects = projects.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  )

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalGroups - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1))
  }

  return (
    <section className="min-h-screen py-20 bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <div className="container mx-auto px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Projects Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={`${currentIndex}-${project.title}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 text-sm"
                    >
                      Source Code
                    </motion.a>
                  </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-pink-500 w-6' : 'bg-gray-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects