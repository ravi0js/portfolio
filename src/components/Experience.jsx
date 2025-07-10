import { motion } from 'framer-motion'

const Experience = ({ experience }) => {
  return (
    <section className="min-h-screen py-20 bg-gray-800 bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My career journey and the valuable experiences I've gained along the way
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -ml-2 w-4 h-4 rounded-full bg-pink-500 z-10"></div>
                
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <h4 className="text-lg text-pink-400 mb-2">{exp.company}</h4>
                    <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                    
                    <ul className="mb-4 space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <svg className="w-4 h-4 mt-1 mr-2 text-pink-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-600 rounded-full text-sm text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience