import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Visitors from './components/Visitors'
import Experience from './components/Experience'
import Blogs from './components/Blogs'
import Certifications from './components/Certifications'
import portfolioData from './data/portfolioData.json'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const blogsRef = useRef(null) 
  const projectsRef = useRef(null)
  const certificationsRef = useRef(null)
  // const visitorsRef = useRef(null)
  const contactRef = useRef(null)


  const scrollToSection = (section) => {
    setActiveSection(section)
    const refs = {
      'home': homeRef,
      'about': aboutRef,
      'experience': experienceRef, 
      'projects': projectsRef,
      'certifications':certificationsRef,
      'blogs': blogsRef, 
      // 'visitors': visitorsRef,
      'contact': contactRef,
    }
    refs[section].current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <div ref={homeRef} className="section">
        <Home profile={portfolioData.profile} scrollToSection={scrollToSection} />
      </div>
      
      <div ref={aboutRef} className="section">
        <About about={portfolioData.about} />
      </div>

      <div ref={experienceRef} className="section">
        <Experience experience={portfolioData.experience} />
      </div>
      
      <div ref={projectsRef} className="section">
        <Projects projects={portfolioData.projects} />
      </div>

      <div ref={blogsRef} className="section">
        <Blogs blogs={portfolioData.blogs} />
      </div>

      <div ref={certificationsRef} className="section">
        <Certifications certifications={portfolioData.certifications} />
      </div>
      
      {/* <div ref={visitorsRef} className="section">
        <Visitors stats={portfolioData.visitorStats} />
      </div> */}

      <div ref={contactRef} className="section">
        <Contact profile={portfolioData.profile} />
      </div>

      
    </div>
  )
}

export default App