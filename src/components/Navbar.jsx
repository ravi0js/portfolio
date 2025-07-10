import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ activeSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'blogs', name: 'Blogs' }, 
    { id: 'certifications', name: 'Certifications' }, 
    // { id: 'visitors', name: 'Visitors' },
    { id: 'contact', name: 'Contact' },
  ]

  const handleNavClick = (section) => {
    scrollToSection(section)
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800 py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          My Portfolio
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`relative px-3 py-2 transition-all ${activeSection === section.id ? 'text-pink-400 font-medium' : 'text-gray-300 hover:text-white'}`}
              >
                {section.name}
                {activeSection === section.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 shadow-lg"
          >
            <ul className="flex flex-col space-y-2 px-6 py-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleNavClick(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeSection === section.id ? 'bg-gray-700 text-pink-400 font-medium' : 'text-gray-300 hover:bg-gray-700'}`}
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar