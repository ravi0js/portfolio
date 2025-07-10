import { motion } from 'framer-motion'

const Home = ({ profile, scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Hi, I'm {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            {profile.title}
          </h2>
         <motion.button
        type="button"
        aria-label="Scroll to Contact Section"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium shadow-lg"
        onClick={() => scrollToSection('contact')} >Contact Me
      </motion.button>
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-purple-500 opacity-20 blur-xl"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 right-20 w-24 h-24 rounded-full bg-pink-500 opacity-20 blur-xl"
      />
    </section>
  )
}

export default Home