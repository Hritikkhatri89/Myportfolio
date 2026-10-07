import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronRight, FolderGit2, Eye, Sparkles, X, Code2 } from 'lucide-react'
import { useState } from 'react'
import dreamImg from '../assets/dream.jpg'
import carRentalImg from '../assets/car_rental.png'
import shoesEcommerceImg from '../assets/shoes_ecommerce.png'
import pythonAnalysisImg from '../assets/python_data_analysis.png'
import customBoxImg from '../assets/customboxstudio.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Custom Box Studio - 3D Box Packaging Web App',
      category: 'fullstack',
      desc: 'Interactive 3D custom packaging & bespoke gift box studio allowing users to customize box styles, dimensions, color finishes, explore gift sets, and order online.',
      image: customBoxImg,
      tags: ['React', 'Three.js / 3D', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://customboxstudio.netlify.app/',
      github: 'https://github.com/Hritikkhatri89'
    },
    {
      id: 2,
      title: 'AeroStep - Shoes E-Commerce Web App',
      category: 'fullstack',
      desc: 'A modern, fully responsive footwear e-commerce application featuring interactive product catalogs, filtering, cart management, and fluid UI micro-interactions.',
      image: shoesEcommerceImg,
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://aerostep-fullstack.vercel.app/',
      github: 'https://github.com/Hritikkhatri89'
    },
    {
      id: 3,
      title: 'Task Management System',
      category: 'fullstack',
      desc: 'Full-stack productivity web app with secure JWT user authentication, task status boards, priority tagging, dynamic updating, and persistent SQLite database.',
      image: null,
      tags: ['React.js', 'Node.js', 'Express.js', 'SQLite', 'JWT'],
      link: 'https://task-management-112.netlify.app/login',
      github: 'https://gitlab.com/ritikkhatri51'
    },
    {
      id: 4,
      title: 'Dream Tour & Travel Management',
      category: 'fullstack',
      desc: 'PHP & MySQL-powered travel portal allowing users to explore tour packages, make reservations, and manage bookings through a custom admin dashboard.',
      image: dreamImg,
      tags: ['PHP', 'MySQL', 'Bootstrap', 'phpMyAdmin'],
      link: 'https://dreamtourtravel.freehosting.dev/',
      github: 'https://github.com/Hritikkhatri89'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="glow-badge mb-3">
              <FolderGit2 size={14} className="text-violet-400" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${activeFilter === f.id
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card group flex flex-col justify-between"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950/80 border border-white/10 mb-5 group">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                      <button
                        onClick={() => setSelectedImage(project.image)}
                        className="p-3 rounded-full bg-violet-600 text-white hover:scale-110 transition-transform shadow-xl"
                        title="Preview Fullscreen"
                      >
                        <Eye size={18} />
                      </button>
                      {project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-slate-900 text-white hover:scale-110 transition-transform border border-white/20 shadow-xl"
                          title="Open Live Link"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-tr from-violet-950/40 to-slate-900 text-slate-400">
                    <Code2 size={36} className="text-violet-400/80 mb-2" />
                    <span className="text-xs font-mono text-slate-400">Interactive Web Application</span>
                  </div>
                )}
              </div>

              {/* Card Details */}
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2.5 py-1 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-violet-300 transition-colors"
                  >
                    <Github size={15} /> Source Code
                  </a>

                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      Live Demo <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-white/10 rounded-3xl p-3 overflow-hidden">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white rounded-full hover:bg-violet-600 transition-colors"
              >
                <X size={20} />
              </button>
              <img src={selectedImage} alt="Project Preview" className="w-full h-full object-contain rounded-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
