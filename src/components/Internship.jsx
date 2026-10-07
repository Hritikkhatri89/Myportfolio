import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, Clock, MapPin, CheckCircle2, X, ZoomIn, ZoomOut, RotateCcw, FileText, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import certiImg from '../assets/certi.jpeg'
import intleImg from '../assets/intle.jpeg'

const Internship = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [scale, setScale] = useState(1)

  const internships = [
    {
      role: 'API Development Intern',
      company: 'APPXWIND TECHNOLOGY, SURAT (HYBRID)',
      duration: '08 Dec 2025 - 30 Dec 2025',
      hours: '120 Hours Internship',
      location: 'Hybrid / Surat',
      certificateImg: certiImg,
      offerLetterImg: intleImg,
      description: [
        'Internship Training with Grade A in API Development and Testing.',
        'Studied and implemented REST API fundamentals and HTTP methods (GET, POST, PUT, DELETE).',
        'Handled JSON-based request and response structures for real-world client-server communication.',
        'Tested and analyzed APIs using Postman to ensure reliability and status code accuracy.',
        'Demonstrated technical proficiency and professional collaboration during real-time tasks.'
      ]
    }
  ]

  useEffect(() => {
    setScale(1)
  }, [selectedImg])

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5))
  const handleReset = () => setScale(1)

  return (
    <section id="internship" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glow-badge mb-3">
            <Briefcase size={14} className="text-violet-400" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Internship <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card p-0 overflow-hidden"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                
                {/* Content Side */}
                <div className="lg:col-span-3 p-6 sm:p-10 space-y-6">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      {intern.hours}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">{intern.role}</h3>
                    <p className="text-violet-400 font-semibold text-sm sm:text-base mt-1 flex items-center gap-2">
                      <Briefcase size={16} /> {intern.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                      <Calendar size={14} className="text-violet-400" />
                      <span>{intern.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                      <MapPin size={14} className="text-cyan-400" />
                      <span>{intern.location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-white font-bold text-sm flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400" /> Training Key Takeaways:
                    </h4>
                    <ul className="space-y-2">
                      {intern.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-white/5">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Certificate & Offer Letter Side */}
                <div className="lg:col-span-2 bg-slate-950/90 border-t lg:border-t-0 lg:border-l border-white/10 p-6 flex flex-col justify-between">
                  <div 
                    className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group cursor-pointer"
                    onClick={() => setSelectedImg(intern.certificateImg)}
                  >
                    <img 
                      src={intern.certificateImg} 
                      alt="Internship Certificate" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-violet-950/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                      <ZoomIn size={24} className="text-white" />
                      <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-violet-600">View Full Certificate</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button 
                      onClick={() => setSelectedImg(intern.certificateImg)}
                      className="btn-secondary py-2.5 px-3 text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <FileText size={14} className="text-violet-400" /> Certificate
                    </button>
                    <button 
                      onClick={() => setSelectedImg(intern.offerLetterImg)}
                      className="btn-secondary py-2.5 px-3 text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <Briefcase size={14} className="text-cyan-400" /> Offer Letter
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Zoom */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-[85vh] flex flex-col items-center gap-6"
              onClick={e => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="flex flex-wrap justify-center gap-4 p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="flex border-r border-white/10 pr-4">
                  <button 
                    onClick={() => setSelectedImg(internships[0].certificateImg)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedImg === internships[0].certificateImg ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Certificate
                  </button>
                  <button 
                    onClick={() => setSelectedImg(internships[0].offerLetterImg)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedImg === internships[0].offerLetterImg ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Offer Letter
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <button onClick={handleZoomOut} className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg" title="Zoom Out">
                    <ZoomOut size={18} />
                  </button>
                  <span className="text-xs font-mono text-violet-400 min-w-[40px] text-center">{Math.round(scale * 100)}%</span>
                  <button onClick={handleZoomIn} className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg" title="Zoom In">
                    <ZoomIn size={18} />
                  </button>
                  <button onClick={handleReset} className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg" title="Reset Zoom">
                    <RotateCcw size={18} />
                  </button>
                  <button onClick={() => setSelectedImg(null)} className="p-1.5 text-rose-400 hover:bg-rose-500/20 rounded-lg">
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Image Box */}
              <div className="relative flex-1 w-full bg-white/[0.02] rounded-3xl overflow-hidden border border-white/10 p-2 cursor-grab active:cursor-grabbing">
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ scale }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="w-full h-full flex items-center justify-center"
                    drag={scale > 1}
                    dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                  >
                    <img src={selectedImg} alt="Document" className="max-w-full max-h-full object-contain rounded-lg pointer-events-none" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Internship
