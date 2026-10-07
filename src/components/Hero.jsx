import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Terminal, Code2, Sparkles, Copy, Check, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import profileImg from '../assets/Hritik.jpeg'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('developer.js')
  const [copied, setCopied] = useState(false)

  const codeSnippets = {
    'developer.js': `const developer = {
  name: "Khatri Hritik Nareshbhai",
  degree: "BCA Graduate (VNSGU)",
  pursuing: "MCA (BAOU)",
  location: "Surat, Gujarat, India",
  status: "Available for Frontend Roles",
  passion: "Building performant, high-impact web apps",
};`,
    'techStack.json': `{
  "frontend": ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  "tools": ["Git", "GitHub", "Vite", "VS Code", "Vercel"],
  "learning": ["Node.js", "Full Stack Patterns"]
}`,
    'contact.ts': `export const contactInfo = {
  email: "ritikkhatri51@gmail.com",
  github: "github.com/Hritikkhatri89",
  linkedin: "linkedin.com/in/hritik-khatri-171543379",
  availableForFreelance: true
};`
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadResume = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/resume.pdf')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Hritik_Khatri_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Hritik_Khatri_Resume.pdf'
      link.click()
    }
  }

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden">
      {/* Background Glowing Mesh Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-600/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />

      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Column: Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-violet-500/30 text-xs font-semibold text-violet-300 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Frontend Web Developer • Open to Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Hi, I'm <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              KHATRI HRITIK
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
            BCA Graduate passionate about crafting modern, interactive web applications with 
            <span className="text-violet-300 font-medium"> React</span>, 
            <span className="text-cyan-300 font-medium"> JavaScript</span>, and modern UI systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} 
              className="btn-primary"
            >
              <Sparkles size={18} /> View Projects <ArrowRight size={16} />
            </button>

            <a 
              href="/resume.pdf" 
              download="Hritik_Khatri_Resume.pdf"
              onClick={handleDownloadResume}
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={18} className="text-violet-400" /> Download Resume
            </a>
          </div>

          {/* Stats Bento Strip */}
          <div className="grid grid-cols-3 gap-3 pt-6 max-w-xl">
            <div className="bento-card p-4 text-center">
              <div className="text-2xl font-bold text-violet-400 code-font">BCA</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-1">Graduate</div>
            </div>
            <div className="bento-card p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 code-font">MCA</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-1">Pursuing</div>
            </div>
            <div className="bento-card p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400 code-font">3</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-1">Projects Built</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Connect:</span>
            <div className="flex items-center gap-2">
              <a href="https://github.com/Hritikkhatri89" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-violet-600/20 hover:text-violet-400 hover:border-violet-500/40 text-slate-300 transition-all">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/hritik-khatri-171543379" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-600/20 hover:text-cyan-400 hover:border-cyan-500/40 text-slate-300 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:ritikkhatri51@gmail.com" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-rose-600/20 hover:text-rose-400 hover:border-rose-500/40 text-slate-300 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Developer Studio Code Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Card Wrapper */}
          <div className="relative rounded-3xl bg-slate-950/90 border border-white/15 shadow-2xl shadow-violet-950/50 backdrop-blur-2xl overflow-hidden">
            
            {/* Top Mac Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-white/5">
                {Object.keys(codeSnippets).map((tabName) => (
                  <button
                    key={tabName}
                    onClick={() => setActiveTab(tabName)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === tabName 
                        ? 'bg-violet-600/80 text-white font-semibold shadow' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tabName}
                  </button>
                ))}
              </div>

              <button 
                onClick={handleCopyCode}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                title="Copy Snippet"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Profile Avatar Card + Code Display */}
            <div className="p-6 space-y-5">
              {/* Profile Badge */}
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-violet-500/30 flex-shrink-0">
                  <img src={profileImg} alt="Hritik Khatri" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Hritik Khatri</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <Code2 size={13} className="text-violet-400" /> Frontend Developer
                  </p>
                </div>
              </div>

              {/* Code Window */}
              <div className="p-4 rounded-2xl bg-[#04060d] border border-white/5 overflow-x-auto min-h-[190px]">
                <pre className="code-font text-xs leading-relaxed text-slate-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
                <span className="flex items-center gap-1">
                  <Terminal size={14} className="text-emerald-400" /> Node v20.x Ready
                </span>
                <span className="text-violet-400 font-mono">Surat, Gujarat</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
