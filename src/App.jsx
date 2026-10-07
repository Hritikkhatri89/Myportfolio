import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EducationPage from './pages/EducationPage'
import InternshipPage from './pages/InternshipPage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'

const ScrollToHash = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return null
}

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#070a14] text-slate-100 selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden">
        <ScrollToHash />
        
        {/* Subtle Background Mesh Orbs */}
        <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <Navbar />
        
        <main className="pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/results" element={<EducationPage />} />
            <Route path="/internship" element={<InternshipPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
