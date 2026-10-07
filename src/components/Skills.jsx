import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Layers, Cpu, Database, Wrench, Sparkles } from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = [
    { id: 'all', name: 'All Stack', icon: Sparkles },
    { id: 'frontend', name: 'Frontend & UI', icon: Code2 },
    { id: 'backend', name: 'Backend & DB', icon: Database },
    { id: 'languages', name: 'Languages & Tools', icon: Wrench },
  ]

  const skillsData = [
    { name: "ReactJS", category: "frontend", level: "Advanced", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png", desc: "Component Architecture, Hooks & SPA" },
    { name: "JavaScript", category: "frontend", level: "Advanced", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png", desc: "ES6+, DOM Manipulation, Async/Await" },
    { name: "HTML5", category: "frontend", level: "Expert", icon: "https://img.icons8.com/color/48/000000/html-5--v1.png", desc: "Semantic Markup, SEO & Accessibility" },
    { name: "CSS3", category: "frontend", level: "Expert", icon: "https://img.icons8.com/color/48/000000/css3.png", desc: "Flexbox, Grid, Animations, Responsive" },
    { name: "Bootstrap", category: "frontend", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/bootstrap.png", desc: "Responsive Layout Grid System" },
    { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: "https://img.icons8.com/color/48/000000/tailwindcss.png", desc: "Utility-first design & Glassmorphism" },
    { name: "NodeJS", category: "backend", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/nodejs.png", desc: "REST APIs, Express Runtime" },
    { name: "PHP", category: "backend", level: "Intermediate", icon: "https://img.icons8.com/offices/48/000000/php-logo.png", desc: "Server Scripts & Dynamic Web Apps" },
    { name: "MySQL", category: "backend", level: "Advanced", icon: "https://img.icons8.com/color/48/000000/mysql-logo.png", desc: "Relational Queries & Database Design" },
    { name: "MongoDB", category: "backend", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/mongodb.png", desc: "NoSQL Collections & Document Schema" },
    { name: "Python", category: "languages", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/python--v1.png", desc: "Scripting & Data Analysis Basics" },
    { name: "Java", category: "languages", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png", desc: "Object Oriented Programming" },
    { name: "ASP.NET", category: "languages", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", desc: ".NET Web Applications & MVC" },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="glow-badge mb-3">
            <Code2 size={14} className="text-violet-400" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Technologies and frameworks I utilize to transform designs into fast, accessible digital experiences.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-105'
                    : 'bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-violet-400'} />
                <span>{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="bento-card group hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 p-2.5 flex items-center justify-center group-hover:scale-110 group-hover:border-violet-500/40 transition-transform">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  {skill.level}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-base group-hover:text-violet-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed line-clamp-2">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
