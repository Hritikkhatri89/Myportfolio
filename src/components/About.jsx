import { motion } from 'framer-motion'
import { User, Code2, Globe, Users, Languages, Sparkles, CheckCircle2 } from 'lucide-react'
import profileImg from '../assets/Hritik.jpeg'

const About = () => {
  const stats = [
    { label: 'Coding Practice', value: '18+ Months', icon: Code2, color: 'text-violet-400' },
    { label: 'Projects Completed', value: '3', icon: Globe, color: 'text-cyan-400' },
    { label: 'Academic Rating', value: '7.73 SGPA', icon: Users, color: 'text-emerald-400' },
  ]

  const languages = [
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Gujarati', level: 'Native' },
    { name: 'Marwadi', level: 'Native' },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Avatar Bento Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="bento-card p-4 relative group">
              <div className="aspect-4/5 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 relative">
                <img 
                  src={profileImg} 
                  alt="Khatri Hritik" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating MCA Badge */}
              <div className="absolute bottom-8 right-8 px-4 py-3 rounded-2xl bg-slate-900/90 border border-violet-500/30 backdrop-blur-xl shadow-2xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Pursuing MCA</div>
                  <div className="text-[10px] text-violet-300 font-mono">BAOU Gujarat</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Developer Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glow-badge">
              <User size={14} className="text-violet-400" />
              <span>Developer Story</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Passionate Frontend <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                Developer & BCA Graduate
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Hello! I'm <strong className="text-white font-semibold">Khatri Hritik Nareshbhai</strong>, a BCA Graduate from 
                Smt. Z.S. Patel College, Surat (VNSGU) currently advancing my studies with an MCA at BAOU Gujarat.
              </p>
              <p>
                I specialize in building user-centered web applications using 
                <span className="text-violet-300 font-semibold"> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS,</span> and REST API integrations. 
                My focus is clean code architecture, smooth interactive animations, and responsive web design.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="bento-card p-4 text-center">
                    <Icon size={20} className={`${stat.color} mx-auto mb-2`} />
                    <div className="text-base sm:text-lg font-extrabold text-white code-font">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* Languages Known */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                <Languages size={14} className="text-violet-400" /> Languages Spoken:
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, idx) => (
                  <div key={idx} className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                    <span>{lang.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">({lang.level})</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
