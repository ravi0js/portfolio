import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Certifications = ({ certifications }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextCert = () => {
    setCurrentIndex(prev => (prev === certifications.length - 1 ? 0 : prev + 1))
  }

  const prevCert = () => {
    setCurrentIndex(prev => (prev === 0 ? certifications.length - 1 : prev - 1))
  }

  return (
    <section className="min-h-screen py-20 bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications I've earned to validate my skills
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto p-4 relative h-96">
          {/* Navigation Arrows */}
          <button
            onClick={prevCert}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <button
            onClick={nextCert}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Certifications Slider */}
          <div className="overflow-hidden h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl p-8 h-full shadow-xl flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-48 h-48 rounded-lg overflow-hidden shadow-lg"
                  >
                    <img 
                      src={certifications[currentIndex].image} 
                      alt={certifications[currentIndex].issuer}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-2">
                    {certifications[currentIndex].title}
                  </h3>
                  <p className="text-lg text-pink-400 mb-4">
                    {certifications[currentIndex].issuer}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-400 text-sm">Issued:</p>
                      <p className="text-gray-300">{certifications[currentIndex].date}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Credential ID:</p>
                      <p className="text-gray-300 font-mono">{certifications[currentIndex].credentialId}</p>
                    </div>
                  </div>

                  <motion.a
                    href={certifications[currentIndex].url}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white"
                  >
                    View Credential
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-pink-500 w-6' : 'bg-gray-600'}`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications