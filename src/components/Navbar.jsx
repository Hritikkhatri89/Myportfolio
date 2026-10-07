import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowLeft, Home, User, GraduationCap, Briefcase, FolderGit2, Code2, Mail, Sparkles } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Education', path: '/results', icon: GraduationCap },
    { name: 'Internship', path: '/internship', icon: Briefcase },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Skills', path: '/skills', icon: Code2 },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  return (
    <>
      {/* Top Header Bar */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#070a14]/80 backdrop-blur-xl border-b border-white/10 py-3.5' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <AnimatePresence>
              {location.pathname !== '/' && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => navigate(-1)}
                  className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-violet-400 border border-white/10 transition-all"
                  title="Go Back"
                >
                  <ArrowLeft size={18} />
                </motion.button>
              )}
            </AnimatePresence>

            <Link to="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white flex items-center gap-1.5 text-base">
                  HRITIK<span className="text-violet-400 font-mono text-xs px-1.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">DEV</span>
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Portfolio
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Top Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for projects
            </div>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary py-2.5 px-5 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <Sparkles size={14} /> Hire Me
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Center Dock Navigation (Desktop) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-1 p-2 rounded-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-violet-950/40"
        >
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = location.pathname === link.path
            return (
              <Link key={link.name} to={link.path} className="relative group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive 
                      ? 'text-white bg-violet-600/90 shadow-lg shadow-violet-600/30' 
                      : 'text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-violet-400'} />
                  <span>{link.name}</span>
                </motion.div>
              </Link>
            )
          })}
        </motion.div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden p-4"
          >
            <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  const isActive = location.pathname === link.path
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-2xl text-sm font-medium transition-all ${
                        isActive 
                          ? 'bg-violet-600 text-white font-bold' 
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <Icon size={18} className={isActive ? 'text-white' : 'text-violet-400'} />
                      {link.name}
                    </Link>
                  )
                })}
              </div>
              
              <div className="pt-2 border-t border-white/10">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="btn-primary w-full py-3.5 text-sm">
                    <Sparkles size={16} /> Hire Me
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
