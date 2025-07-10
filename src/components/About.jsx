import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const About = ({ about }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'cv.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen py-20 flex items-center bg-gray-800 bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </h2>
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-6">
                {paragraph}
              </p>
            ))}
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white"
              >
                Download CV
              </motion.button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">My Skills</h3>
            <div className="space-y-4">
              {about.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-2"
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal with PDF preview and download */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 text-white rounded-xl p-6 shadow-2xl w-[95%] max-w-4xl h-[85vh] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold text-pink-400">CV Preview</h4>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition text-2xl leading-none"
                >
                  &times;
                </button>
              </div>
              <div className="flex-grow overflow-hidden rounded bg-gray-800 mb-4">
                <iframe
                  src="/cv.pdf"
                  className="w-full h-full"
                  frameBorder="0"
                  title="CV Preview"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition"
                >
                  Close
                </button>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                >
                  Download PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default About
