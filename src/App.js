import Navbar from './components/Navbar';
import Header from './components/Header';
import QuoteBox from './components/QuoteBox';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
import Contact from './components/Contact';
export default function App() {
  return (
      <>
      <Navbar/> 
      <Header/>
      <Social/>
      <QuoteBox/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </>
  )
}